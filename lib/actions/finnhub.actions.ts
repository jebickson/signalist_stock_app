
'use server';

import {
  getDateRange,
  validateArticle,
  formatArticle,
} from '@/lib/utils';
import { POPULAR_STOCK_SYMBOLS } from '@/lib/constants';
import { cache } from 'react';

const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';

const FINNHUB_API_KEY =
  process.env.FINNHUB_API_KEY ??
  process.env.NEXT_PUBLIC_FINNHUB_API_KEY ??
  '';

async function fetchJSON<T>(
  url: string,
  revalidateSeconds?: number
): Promise<T> {
  const options: RequestInit & {
    next?: { revalidate?: number };
  } = revalidateSeconds
    ? {
        cache: 'force-cache',
        next: { revalidate: revalidateSeconds },
      }
    : { cache: 'no-store' };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  return (await res.json()) as T;
}

export { fetchJSON };

export async function getNews(
  symbols?: string[]
): Promise<MarketNewsArticle[]> {
  // Finnhub is optional. No API key means no news results.
  if (!FINNHUB_API_KEY) {
    return [];
  }

  try {
    const range = getDateRange(5);

    const cleanSymbols = (symbols || [])
      .map((symbol) => symbol?.trim().toUpperCase())
      .filter((symbol): symbol is string => Boolean(symbol));

    const maxArticles = 6;

    if (cleanSymbols.length > 0) {
      const perSymbolArticles: Record<string, RawNewsArticle[]> = {};

      await Promise.all(
        cleanSymbols.map(async (symbol) => {
          try {
            const url =
              `${FINNHUB_BASE_URL}/company-news` +
              `?symbol=${encodeURIComponent(symbol)}` +
              `&from=${range.from}` +
              `&to=${range.to}` +
              `&token=${FINNHUB_API_KEY}`;

            const articles =
              await fetchJSON<RawNewsArticle[]>(url, 300);

            perSymbolArticles[symbol] = (articles || []).filter(
              validateArticle
            );
          } catch {
            perSymbolArticles[symbol] = [];
          }
        })
      );

      const collected: MarketNewsArticle[] = [];

      for (let round = 0; round < maxArticles; round++) {
        for (const symbol of cleanSymbols) {
          const list = perSymbolArticles[symbol] || [];
          const article = list.shift();

          if (!article || !validateArticle(article)) {
            continue;
          }

          collected.push(
            formatArticle(article, true, symbol, round)
          );

          if (collected.length >= maxArticles) break;
        }

        if (collected.length >= maxArticles) break;
      }

      if (collected.length > 0) {
        collected.sort(
          (a, b) => (b.datetime || 0) - (a.datetime || 0)
        );

        return collected.slice(0, maxArticles);
      }
    }

    const generalUrl =
      `${FINNHUB_BASE_URL}/news` +
      `?category=general&token=${FINNHUB_API_KEY}`;

    const general =
      await fetchJSON<RawNewsArticle[]>(generalUrl, 300);

    const seen = new Set<string>();
    const unique: RawNewsArticle[] = [];

    for (const article of general || []) {
      if (!validateArticle(article)) continue;

      const key =
        `${article.id}-${article.url}-${article.headline}`;

      if (seen.has(key)) continue;

      seen.add(key);
      unique.push(article);

      if (unique.length >= 20) break;
    }

    return unique
      .slice(0, maxArticles)
      .map((article, index) =>
        formatArticle(article, false, undefined, index)
      );
  } catch (error) {
    console.error(
      'Unable to fetch market news:',
      error instanceof Error ? error.message : 'Unknown error'
    );

    return [];
  }
}

export const searchStocks = cache(
  async (
    query?: string
  ): Promise<StockWithWatchlistStatus[]> => {
    // Finnhub is optional. No API key means no search results.
    if (!FINNHUB_API_KEY) {
      return [];
    }

    try {
      const trimmed =
        typeof query === 'string' ? query.trim() : '';

      let results: FinnhubSearchResult[] = [];

      if (!trimmed) {
        const symbols = POPULAR_STOCK_SYMBOLS.slice(0, 10);

        const profiles = await Promise.all(
          symbols.map(async (symbol) => {
            try {
              const url =
                `${FINNHUB_BASE_URL}/stock/profile2` +
                `?symbol=${encodeURIComponent(symbol)}` +
                `&token=${FINNHUB_API_KEY}`;

              const profile = await fetchJSON<any>(url, 3600);

              return { symbol, profile };
            } catch {
              return { symbol, profile: null };
            }
          })
        );

        results = profiles
          .map(({ symbol, profile }) => {
            const name = profile?.name || profile?.ticker;

            if (!name) return undefined;

            const result: FinnhubSearchResult = {
              symbol: symbol.toUpperCase(),
              description: name,
              displaySymbol: symbol.toUpperCase(),
              type: 'Common Stock',
            };

            (result as any).__exchange =
              profile?.exchange || undefined;

            return result;
          })
          .filter(
            (item): item is FinnhubSearchResult =>
              Boolean(item)
          );
      } else {
        const url =
          `${FINNHUB_BASE_URL}/search` +
          `?q=${encodeURIComponent(trimmed)}` +
          `&token=${FINNHUB_API_KEY}`;

        const data =
          await fetchJSON<FinnhubSearchResponse>(url, 1800);

        results = Array.isArray(data?.result)
          ? data.result
          : [];
      }

      return results.slice(0, 15).map((result) => {
        const symbol = (result.symbol || '').toUpperCase();

        return {
          symbol,
          name: result.description || symbol,
          exchange:
            (result as any).__exchange ||
            result.displaySymbol ||
            'US',
          type: result.type || 'Stock',
          isInWatchlist: false,
        };
      });
    } catch (error) {
      console.error(
        'Stock search failed:',
        error instanceof Error ? error.message : 'Unknown error'
      );

      return [];
    }
  }
);
