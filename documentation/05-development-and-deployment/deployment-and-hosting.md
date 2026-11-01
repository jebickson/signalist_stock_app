# Deployment & Hosting

### 1. Overview

Signalist is built using Next.js and can be deployed using **Vercel**, a cloud platform that supports Next.js applications.

The deployment process involves preparing the production environment, configuring environment variables, connecting external services, and publishing the application.

### 2. Deployment Technologies

| Technology    | Purpose                            |
| ------------- | ---------------------------------- |
| Next.js       | Application framework              |
| Vercel        | Application hosting and deployment |
| MongoDB Atlas | Cloud database                     |
| Finnhub       | Stock market data                  |
| Google Gemini | AI-powered functionality           |
| Inngest       | Background workflow execution      |
| Nodemailer    | Email delivery                     |

### 3. Deployment Architecture

```
         User
           |
           v
     Vercel Hosting
           |
           v
    Next.js Application
           |
     +-----+------+
     |            |
     v            v
  MongoDB      External APIs
  Atlas        |
               +-- Finnhub
               +-- Gemini
               +-- Inngest
               +-- SMTP Email
```

### 4. Prerequisites

Before deploying, make sure you have:

* A working Signalist project.
* A GitHub repository.
* A Vercel account.
* A MongoDB database.
* A Finnhub API key.
* A Google Gemini API key.
* Better Auth configuration.
* SMTP email credentials.
* An Inngest account and production configuration.

### 5. Prepare the Project

Install project dependencies:

```
npm install
```

Run the application locally:

```
npm run dev
```

Check that the application works correctly before deployment.

Build the production version locally:

```
npm run build
```

Resolve any build errors before proceeding.

### 6. Deploy Using Vercel

#### Step 1: Open Vercel

Visit:

[https://vercel.com/](https://vercel.com/)

Sign in using your GitHub account.

#### Step 2: Import the Repository

1. Select **Add New Project**.
2. Connect your GitHub account if necessary.
3. Select the `signalist_stock_app` repository.
4. Import the project.

#### Step 3: Configure Project Settings

Confirm the following settings:

| Setting          | Value           |
| ---------------- | --------------- |
| Framework Preset | Next.js         |
| Root Directory   | `./`            |
| Build Command    | `npm run build` |
| Install Command  | `npm install`   |

Use the project's default Next.js configuration unless changes are required.

#### Step 4: Configure Environment Variables

Add the environment variables from your local `.env` file to the Vercel project settings.

Important variables include:

```
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://your-production-domain.com

NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

MONGODB_URI=

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=https://your-production-domain.com

GEMINI_API_KEY=

NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=
```

Replace the example production URL with your actual Vercel domain or custom domain.

Keep private credentials secure. Remember that variables beginning with `NEXT_PUBLIC_` are exposed to browser code.

#### Step 5: Deploy

Click **Deploy**.

Vercel will install dependencies, build the Next.js application, and deploy the project.

After successful deployment, Vercel provides a production URL.

### 7. Production Configuration

After deployment, verify the following:

* The production application URL is configured correctly.
* Better Auth uses the production application URL.
* MongoDB accepts connections from the deployed application.
* External API credentials are valid.
* Inngest is connected to the production application.
* SMTP email delivery works correctly.

Redeploy after changing environment variables so the updated configuration takes effect.

### 8. Inngest Production Integration

Signalist uses an Inngest API route:

```
/api/inngest
```

Connect the deployed application to Inngest Cloud and configure the production environment.

Verify that the Inngest integration can communicate with the deployed application and execute its registered functions.

### 9. Deployment Verification

After deployment, test the following areas:

| Test                 | Expected Result                       |
| -------------------- | ------------------------------------- |
| Application URL      | Application loads successfully        |
| Registration         | User registration works               |
| Login                | Authentication works                  |
| Database             | MongoDB connection works              |
| Stock information    | Stock data loads correctly            |
| Watchlist            | Watchlist functionality works         |
| AI functionality     | Gemini integration responds correctly |
| Background workflows | Inngest functions execute             |
| Email notifications  | Emails are delivered                  |

Only mark a test as successful after verifying it in the deployed application.

### 10. Common Deployment Issues

| Issue                       | Recommended Check                                |
| --------------------------- | ------------------------------------------------ |
| Build failure               | Review Vercel build logs                         |
| Database connection error   | Verify `MONGODB_URI` and database network access |
| Authentication error        | Check Better Auth URL and secret                 |
| Stock API failure           | Verify Finnhub API configuration                 |
| AI functionality failure    | Check Gemini API key                             |
| Email delivery failure      | Verify SMTP credentials                          |
| Background workflow failure | Check Inngest production configuration           |

### 11. Conclusion

Vercel provides the hosting platform for the Signalist Next.js application.

By configuring the production environment and connecting the required external services, Signalist can be deployed as a cloud-hosted stock market application.
