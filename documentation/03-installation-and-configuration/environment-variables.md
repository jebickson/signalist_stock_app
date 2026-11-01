# Environment Variables

### 1. Overview

Environment variables are used to configure the Signalist application without hardcoding sensitive credentials or configuration values into the source code.

Signalist uses environment variables to connect external services, configure authentication, access the database, and manage application settings.

### 2. Environment Configuration File

Create a file named `.env` in the root directory of the project.

```
signalist_stock_app/
│
├── app/
├── components/
├── database/
├── hooks/
├── lib/
├── public/
├── types/
│
├── .env
├── package.json
└── README.md
```

### 3. Complete Environment Variables

The following configuration is based on the project's setup instructions.

```
NODE_ENV=development
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Finnhub
NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# MongoDB
MONGODB_URI=

# Better Auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# Google Gemini
GEMINI_API_KEY=

# Nodemailer
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=
```

### 4. Environment Variable Explanation

#### 4.1 Application Configuration

| Variable               | Description                 | Example                 |
| ---------------------- | --------------------------- | ----------------------- |
| `NODE_ENV`             | Application environment     | `development`           |
| `NEXT_PUBLIC_BASE_URL` | Base URL of the application | `http://localhost:3000` |

#### 4.2 Finnhub API Configuration

Finnhub provides stock market information and financial data.

| Variable                      | Description                             | Example                     |
| ----------------------------- | --------------------------------------- | --------------------------- |
| `NEXT_PUBLIC_FINNHUB_API_KEY` | Finnhub API key used by the application | Your Finnhub API key        |
| `FINNHUB_BASE_URL`            | Finnhub API endpoint                    | `https://finnhub.io/api/v1` |

#### 4.3 MongoDB Configuration

MongoDB is used for application data storage.

| Variable      | Description                        | Example                     |
| ------------- | ---------------------------------- | --------------------------- |
| `MONGODB_URI` | MongoDB database connection string | Your MongoDB connection URI |

#### 4.4 Better Auth Configuration

Better Auth handles user authentication and session management.

| Variable             | Description                    | Example                 |
| -------------------- | ------------------------------ | ----------------------- |
| `BETTER_AUTH_SECRET` | Authentication secret          | A long random secret    |
| `BETTER_AUTH_URL`    | Authentication application URL | `http://localhost:3000` |

#### 4.5 Google Gemini Configuration

Google Gemini provides AI-powered functionality.

| Variable         | Description           | Example             |
| ---------------- | --------------------- | ------------------- |
| `GEMINI_API_KEY` | Google Gemini API key | Your Gemini API key |

#### 4.6 Nodemailer Configuration

Nodemailer handles application email delivery.

| Variable              | Description                  | Example                    |
| --------------------- | ---------------------------- | -------------------------- |
| `NODEMAILER_EMAIL`    | Sender email address         | Your email address         |
| `NODEMAILER_PASSWORD` | SMTP authentication password | Your app-specific password |

### 5. How to Obtain API Credentials

#### Finnhub API Key

1. Visit [https://finnhub.io/](https://finnhub.io/)
2. Create an account.
3. Open your dashboard.
4. Find your API key.
5. Add it to the `.env` file.

#### MongoDB Connection String

1. Visit [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a MongoDB Atlas account.
3. Create a database deployment.
4. Configure database access.
5. Obtain the connection string.
6. Add it to `MONGODB_URI`.

#### Better Auth Secret

Generate a secure random secret using:

```
npx auth secret
```

Verify that the generated secret is appropriate for your Better Auth configuration.

#### Google Gemini API Key

1. Visit [https://aistudio.google.com/](https://aistudio.google.com/)
2. Sign in with your Google account.
3. Create an API key.
4. Add it to `GEMINI_API_KEY`.

#### Nodemailer Credentials

1. Configure an email account that supports SMTP.
2. Generate an app-specific password if required.
3. Add the sender email to `NODEMAILER_EMAIL`.
4. Add the SMTP password to `NODEMAILER_PASSWORD`.

### 6. Development Environment

For local development, use:

```
NODE_ENV=development
NEXT_PUBLIC_BASE_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
```

Run the application:

```
npm run dev
```

Open:

```
http://localhost:3000
```

### 7. Production Environment

For production deployment, configure the environment variables in Vercel Project Settings.

Update the application URLs:

```
NEXT_PUBLIC_BASE_URL=https://your-production-domain.com
BETTER_AUTH_URL=https://your-production-domain.com
```

Replace the example domain with your actual deployed application URL.

Configure the remaining credentials using the production service values.

After updating environment variables, redeploy the application.

### 8. Security Best Practices

Follow these practices when managing environment variables:

* Never upload `.env` files to GitHub.
* Never share API keys publicly.
* Never expose MongoDB connection strings.
* Keep `BETTER_AUTH_SECRET` private.
* Keep Gemini and SMTP credentials server-side.
* Use separate credentials for development and production.
* Add `.env` to `.gitignore`.
* Rotate credentials if they are accidentally exposed.

**Important:** Variables prefixed with `NEXT_PUBLIC_` are exposed to browser-side code. The current repository configuration uses `NEXT_PUBLIC_FINNHUB_API_KEY`; review its usage and move to a server-only variable if the key must remain private.

### 9. Conclusion

Environment variables provide a centralized configuration system for Signalist.

They allow the application to connect with MongoDB, Finnhub, Better Auth, Google Gemini, and Nodemailer while keeping configuration separate from the source code.
