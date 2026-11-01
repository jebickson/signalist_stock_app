# User Guide

### 1. Introduction

The Signalist User Guide provides instructions for navigating and using the stock market web application.

Signalist brings stock market information, watchlists, price alerts, and AI-powered insights together in one application.

### 2. Accessing Signalist

Open the deployed Signalist application using its website URL.

**Application:** [https://signalist-stock-app.vercel.app/](https://signalist-stock-app.vercel.app/)

If this URL is not your current deployment URL, replace it with the correct production URL.

### 3. Getting Started

To begin using Signalist:

1. Open the application.
2. Explore the available application pages.
3. Register an account if registration is enabled.
4. Sign in using your account credentials.
5. Navigate through the available stock market features.

### 4. User Authentication

Signalist uses Better Auth for authentication.

Depending on the configured application functionality, users can:

* Create an account.
* Sign in.
* Maintain an authenticated session.
* Access available user-specific functionality.

Keep your login credentials private.

### 5. Exploring Stock Information

Signalist integrates with the Finnhub API to retrieve stock market information.

Users can explore available stock information, including:

* Stock symbols.
* Company information.
* Stock prices.
* Financial information.
* Market news.

The information displayed depends on API availability and the application's implementation.

### 6. Managing Watchlists

The watchlist feature helps users organize stocks they want to monitor.

General workflow:

1. Navigate to the watchlist section.
2. Find the stock you want to monitor.
3. Add the stock to your watchlist.
4. Review your saved stocks.
5. Remove stocks when they are no longer needed.

### 7. Price Alerts

Price alerts help users monitor selected stock price conditions.

Where supported by the application:

1. Open the price alert functionality.
2. Select the relevant stock.
3. Configure the available alert condition.
4. Save the alert.
5. Review notifications when the configured condition is triggered.

Actual alert configuration options depend on the implemented functionality.

### 8. AI-Powered Insights

Signalist integrates Google Gemini to support AI-powered functionality.

Users can explore available AI-generated summaries and information within the application.

AI-generated information should be treated as informational content, not as guaranteed financial advice.

### 9. Email Notifications

Signalist uses Nodemailer for email delivery.

Where configured, users may receive application-related emails and notifications.

Ensure that the registered email address is correct and accessible.

### 10. Frequently Asked Questions

#### Can I use Signalist without creating an account?

This depends on which application features are publicly accessible and which require authentication.

#### Where does stock market information come from?

The application integrates with the Finnhub API.

#### Does Signalist provide AI-generated insights?

Yes. The project integrates Google Gemini for AI-powered functionality.

#### Can I save stocks?

The application includes watchlist functionality for organizing selected stocks.

#### Are stock prices guaranteed to be real-time?

Data availability and update frequency depend on the external data provider, API plan, and application implementation.

### 11. Important Disclaimer

Signalist is a software project intended for stock market information and analysis.

Information displayed by the application may be delayed, incomplete, or inaccurate. AI-generated summaries may also contain errors.

Users should independently verify financial information before making investment decisions.

Signalist should not be treated as a substitute for professional financial advice.

### 12. Conclusion

This guide introduces the main user-facing capabilities of Signalist and explains how users can navigate its available features.

For technical implementation details, refer to the Installation & Setup, API Reference, Database Design, and Developer Guide sections.
