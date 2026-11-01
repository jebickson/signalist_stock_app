# Installation & Setup

### 1. Introduction

This section explains how to configure and run the Signalist application in a local development environment.

Signalist uses Next.js, TypeScript, MongoDB, Better Auth, Finnhub, Google Gemini, Inngest, and Nodemailer.

Follow the installation instructions to configure the development environment and launch the application.

### 2. System Requirements

Before installing Signalist, ensure that the following tools and services are available.

| Requirement           | Purpose                               |
| --------------------- | ------------------------------------- |
| Node.js               | JavaScript runtime                    |
| npm                   | Package management                    |
| Git                   | Version control                       |
| MongoDB               | Database storage                      |
| Finnhub API Key       | Financial market data                 |
| Google Gemini API Key | AI-powered summaries                  |
| SMTP Email Account    | Email delivery                        |
| Inngest CLI           | Local background workflow development |

### 3. Clone the Repository

Open a terminal or command prompt.

Execute the following command:

```
git clone https://github.com/jebickson/signalist_stock_app.git
```

Navigate into the project directory:

```
cd signalist_stock_app
```

### 4. Install Dependencies

Install the required project dependencies using npm.

```
npm install
```

This command reads the package.json file and installs the dependencies required by the application.

### 5. Environment Configuration

Signalist requires environment variables to connect external services and configure application functionality.

Create a file named `.env` in the root directory of the project.

Add the following configuration:

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

Replace the empty values with the appropriate credentials from the respective service providers.

### 6. Configure External Services

#### 6.1 MongoDB Configuration

1. Create a MongoDB Atlas account or configure an existing MongoDB instance.
2. Create a database deployment.
3. Configure database network access.
4. Create a database user.
5. Copy the MongoDB connection string.
6. Add the connection string to `MONGODB_URI`.

#### 6.2 Finnhub API Configuration

1. Visit the Finnhub website.
2. Create an account.
3. Generate an API key.
4. Add the API key to `NEXT_PUBLIC_FINNHUB_API_KEY`.

The application uses Finnhub to retrieve financial market information.

#### 6.3 Google Gemini Configuration

1. Open Google AI Studio.
2. Generate a Gemini API key.
3. Copy the generated API key.
4. Add it to `GEMINI_API_KEY`.

This integration supports AI-generated market summaries.

#### 6.4 Better Auth Configuration

Configure the authentication environment variables.

* `BETTER_AUTH_SECRET`: A strong, randomly generated secret.
* `BETTER_AUTH_URL`: The base URL of the application.

For local development, use:

```
BETTER_AUTH_URL=http://localhost:3000
```

#### 6.5 Nodemailer Configuration

Configure the email sender account.

* `NODEMAILER_EMAIL`: Sender email address.
* `NODEMAILER_PASSWORD`: Email account app password.

Use an app-specific password where supported instead of your regular email account password.

### 7. Start the Development Server

Start the Next.js application:

```
npm run dev
```

The application will run locally at:

```
http://localhost:3000
```

Open this address in your browser to access Signalist.

### 8. Start the Inngest Development Server

Signalist uses Inngest for background workflows and scheduled operations.

Open a second terminal in the project directory.

Execute:

```
npx inngest-cli@latest dev
```

The Inngest development dashboard will be available at:

```
http://localhost:8288
```

This dashboard allows developers to inspect and trigger local workflows.

### 9. Verify the Installation

After starting both development servers, verify the following:

1. The Next.js development server starts successfully.
2. The application loads at `localhost:3000`.
3. MongoDB connects successfully.
4. Authentication functionality works with the configured credentials.
5. Finnhub integration retrieves the expected market information.
6. Gemini integration works when an AI summary is requested.
7. Inngest workflows appear in the local development dashboard.
8. Email functionality works with the configured SMTP credentials.

### 10. Troubleshooting

#### Dependency Installation Errors

If dependency installation fails, execute:

```
npm install
```

Check that Node.js and npm are installed correctly.

#### MongoDB Connection Errors

Check:

* MongoDB connection string.
* Database username and password.
* Network access configuration.
* Database availability.

#### Missing Environment Variables

Verify that:

* `.env` exists in the project root.
* Variable names match the application configuration.
* Required credentials are correctly configured.
* Development servers are restarted after environment changes.

#### Inngest Connection Errors

Check:

* The Inngest CLI is running.
* The application is configured with the appropriate Inngest integration.
* The local development server is accessible.

#### Email Delivery Errors

Check:

* Sender email address.
* SMTP configuration.
* App-specific password.
* Email account security settings.

### 11. Security Considerations

* Never upload `.env` files containing credentials to GitHub.
* Never expose database connection strings.
* Use strong authentication secrets.
* Use app-specific email passwords.
* Restrict API credentials according to provider capabilities.
* Remember that variables prefixed with `NEXT_PUBLIC_` are exposed to browser-side code. Do not place private credentials in these variables.

### 12. Conclusion

The installation process prepares the Signalist development environment by configuring project dependencies, database connectivity, authentication, external API integrations, and background workflow services.

Once the required services are configured and both development servers are running, developers can explore and modify the application locally.

***

**End of Installation & Setup**
