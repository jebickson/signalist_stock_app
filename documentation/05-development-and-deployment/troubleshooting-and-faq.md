# Troubleshooting & FAQ

### 1. Overview

This section provides solutions to common problems developers may encounter while installing, configuring, running, and deploying Signalist.

It also answers frequently asked questions about the application's technologies and integrations.

### 2. Installation Issues

#### Issue: npm install fails

**Possible causes:**

* Node.js or npm is not installed correctly.
* Network connectivity problems.
* Dependency conflicts.
* Incorrect project directory.

**Solutions:**

Check Node.js:

```
node -v
```

Check npm:

```
npm -v
```

Navigate to the project directory and install dependencies:

```
npm install
```

If the issue continues, review the npm error output before changing or deleting dependency files.

#### Issue: package.json not found

**Cause:** The terminal is running outside the project directory.

**Solution:**

```
cd signalist_stock_app
```

Confirm that `package.json` exists in the current directory.

### 3. Application Runtime Issues

#### Issue: Application does not start

**Possible causes:**

* Missing dependencies.
* Incorrect environment variables.
* Port 3000 is already in use.
* Application configuration errors.

**Solutions:**

```
npm install
npm run dev
```

Review the terminal output for the exact error.

#### Issue: Environment variables are not working

**Possible causes:**

* `.env` file is missing.
* Variable names are incorrect.
* Values are missing.
* Development server was not restarted.

**Solutions:**

1. Confirm that `.env` is in the project root.
2. Check the variable names.
3. Verify that the required values are configured.
4. Restart the development server.

### 4. Database Issues

#### Issue: MongoDB connection fails

**Possible causes:**

* Incorrect MongoDB connection string.
* Invalid database credentials.
* Network access restrictions.
* Database service unavailable.

**Solutions:**

* Verify `MONGODB_URI`.
* Check MongoDB Atlas network access settings.
* Verify database username and password.
* Confirm that the database is available.

### 5. External API Issues

#### Issue: Finnhub API does not return data

**Possible causes:**

* Invalid API key.
* API request errors.
* Rate limits.
* Incorrect request configuration.

**Solutions:**

* Verify `NEXT_PUBLIC_FINNHUB_API_KEY`.
* Check `FINNHUB_BASE_URL`.
* Review API response errors.
* Verify API access and usage limits.

#### Issue: Gemini AI functionality fails

**Possible causes:**

* Missing Gemini API key.
* Invalid API credentials.
* API quota or availability issues.

**Solutions:**

* Verify `GEMINI_API_KEY`.
* Check the Google Gemini API configuration.
* Review server-side error messages.

### 6. Authentication Issues

#### Issue: Login or registration fails

**Possible causes:**

* Incorrect Better Auth configuration.
* Invalid authentication secret.
* Incorrect application URL.
* Database connection problems.

**Solutions:**

Verify the following variables:

```
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
```

Check the authentication configuration and server logs.

### 7. Inngest Issues

#### Issue: Background workflows are not executing

**Possible causes:**

* Inngest development server is not running.
* Incorrect Inngest API route configuration.
* Workflow registration problems.
* Production connection issues.

**Solutions:**

Start the local Inngest development server:

```
npx inngest-cli@latest dev
```

Open the dashboard:

```
http://localhost:8288
```

Review the registered functions and execution logs.

### 8. Email Notification Issues

#### Issue: Emails are not being delivered

**Possible causes:**

* Incorrect SMTP credentials.
* Invalid sender email.
* SMTP authentication failure.
* Email provider restrictions.

**Solutions:**

Verify the following variables:

```
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=
```

Use the correct SMTP configuration and an app-specific password where required.

### 9. Deployment Issues

#### Issue: Vercel deployment fails

**Possible causes:**

* Build errors.
* Missing environment variables.
* Dependency problems.
* Incorrect project configuration.

**Solutions:**

Run a local production build:

```
npm run build
```

Review the Vercel deployment logs and resolve the reported errors.

#### Issue: Application works locally but not in production

**Possible causes:**

* Incorrect production URLs.
* Missing production environment variables.
* Database access restrictions.
* External service configuration differences.

**Solutions:**

* Verify all production environment variables.
* Update `NEXT_PUBLIC_BASE_URL`.
* Update `BETTER_AUTH_URL`.
* Check database network access.
* Verify Inngest production configuration.
* Redeploy after configuration changes.

### 10. Frequently Asked Questions

#### Q1. What is Signalist?

Signalist is a stock market web application that provides stock information, watchlists, price alerts, and AI-powered insights.

#### Q2. Which framework is used?

Signalist is developed using Next.js, React, and TypeScript.

#### Q3. Which database is used?

MongoDB is used for application data storage.

#### Q4. Which service provides stock market information?

Finnhub is integrated to retrieve stock market information.

#### Q5. Which AI service is integrated?

Google Gemini is used for AI-powered functionality.

#### Q6. How are background workflows handled?

Inngest is used to coordinate background workflows.

#### Q7. How are emails sent?

Nodemailer is used for email delivery through an SMTP-supported account.

#### Q8. Where is the application deployed?

The application is configured for deployment using Vercel.

#### Q9. Can the application run locally?

Yes. Developers can install the dependencies, configure the environment variables, and start the Next.js development server.

#### Q10. Where can developers find the source code?

The source code is available on GitHub:

[https://github.com/jebickson/signalist\_stock\_app](https://github.com/jebickson/signalist_stock_app)

### 11. Support and Resources

* **GitHub Repository:** [https://github.com/jebickson/signalist\_stock\_app](https://github.com/jebickson/signalist_stock_app)
* **Next.js Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)
* **MongoDB Documentation:** [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)
* **Better Auth Documentation:** [https://www.better-auth.com/docs](https://www.better-auth.com/docs)
* **Inngest Documentation:** [https://www.inngest.com/docs](https://www.inngest.com/docs)
* **Vercel Documentation:** [https://vercel.com/docs](https://vercel.com/docs)

### 12. Conclusion

This troubleshooting guide helps developers identify and resolve common Signalist setup, runtime, integration, and deployment issues.

For problems not covered here, review the relevant application source code, terminal output, and service logs.
