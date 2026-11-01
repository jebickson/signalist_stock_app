# API Reference

### 1. Overview

Signalist integrates external services and internal server-side operations to provide stock market data, authentication, watchlist management, AI-powered summaries, and automated email notifications.

The application uses Next.js Server Actions for server-side application logic and an API route to handle Inngest background workflows.

### 2. API Architecture

The application communicates with the following services:

| Service       | Purpose                                    |
| ------------- | ------------------------------------------ |
| Finnhub API   | Stock market data and financial news       |
| MongoDB       | Stores application data                    |
| Better Auth   | User authentication and session management |
| Google Gemini | AI-powered news summaries                  |
| Inngest       | Background jobs and scheduled workflows    |
| Nodemailer    | Email notifications                        |

### 3. Finnhub API

**Purpose:** Retrieve stock market information and financial news.

Finnhub is integrated into the application to support stock-related functionality.

Main use cases:

* Search stocks by symbol or company name.
* Retrieve stock prices and market information.
* Display company financial insights.
* Retrieve company-related and market news.

**Base URL:**

```
https://finnhub.io/api/v1
```

**Environment variables:**

```
NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1
```

### 4. MongoDB Integration

**Purpose:** Persist application data.

MongoDB is used as the database for storing application information, including user-related data, watchlists, and price alert information.

**Environment variable:**

```
MONGODB_URI=
```

The application connects to MongoDB through its database connection and data model layer.

### 5. Better Auth Integration

**Purpose:** Manage user authentication.

Better Auth provides authentication functionality, including:

* User registration.
* User sign-in.
* Session management.
* Authentication-protected application access.

**Environment variables:**

```
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
```

### 6. Google Gemini API

**Purpose:** Generate AI-powered content.

Google Gemini is integrated into Signalist to support AI-generated market news summaries and personalized information.

**Environment variable:**

```
GEMINI_API_KEY=
```

The API key should remain server-side and must not be exposed in frontend code.

### 7. Inngest API Route

**Purpose:** Handle background workflows and scheduled tasks.

Signalist uses Inngest to coordinate background processing, including automated notifications and email-related workflows.

**API route:**

```
/api/inngest
```

**Supported HTTP methods:**

| Method | Purpose                             |
| ------ | ----------------------------------- |
| GET    | Inngest handler                     |
| POST   | Inngest event and workflow handling |
| PUT    | Inngest handler                     |

The route connects the Next.js application with the Inngest workflow system.

For local development, run:

```
npx inngest-cli@latest dev
```

Local Inngest dashboard:

```
http://localhost:8288
```

### 8. Nodemailer Integration

**Purpose:** Send application emails.

Nodemailer is used to deliver email notifications through an SMTP-supported email account.

Main use cases include:

* Welcome emails.
* Automated notification emails.
* AI-generated news summary emails.

**Environment variables:**

```
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=
```

Use an app-specific email password rather than your primary account password.

### 9. Internal Server-Side Operations

Signalist uses Next.js Server Actions to handle application operations.

These operations connect the user interface with the database and external services.

Examples of application responsibilities include:

* Stock search and information retrieval.
* Watchlist management.
* User-related operations.
* Price alert processing.
* Background workflow execution.

The exact Server Action names and input/output schemas should be documented alongside their corresponding source files in `lib/`.

### 10. API Security

The following security practices should be followed:

* Store API keys and credentials in environment variables.
* Never commit `.env` files to GitHub.
* Keep database credentials and authentication secrets server-side.
* Avoid exposing private API keys through client-side code.
* Validate user input before processing operations.
* Protect authenticated operations using the application's authentication system.

**Important:** Variables beginning with `NEXT_PUBLIC_` are exposed to browser code. Review the Finnhub key configuration before using a key that must remain private.

### 11. API Configuration Summary

| Integration | Configuration                                     |
| ----------- | ------------------------------------------------- |
| Finnhub     | `NEXT_PUBLIC_FINNHUB_API_KEY`, `FINNHUB_BASE_URL` |
| MongoDB     | `MONGODB_URI`                                     |
| Better Auth | `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`           |
| Gemini      | `GEMINI_API_KEY`                                  |
| Nodemailer  | `NODEMAILER_EMAIL`, `NODEMAILER_PASSWORD`         |
| Inngest     | `/api/inngest`                                    |

### 12. Conclusion

The API integration layer connects Signalist with external market data, database storage, authentication, AI services, and background processing.

Together, these integrations support the application's stock tracking, watchlist, alert, and automated email functionality.
