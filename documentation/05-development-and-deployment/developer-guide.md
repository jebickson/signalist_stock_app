# Developer Guide

## 19. Developer Guide

### 1. Overview

The Developer Guide provides technical guidance for developers who want to understand, maintain, or extend the Signalist application.

It covers the development environment, project organization, coding practices, debugging, and contribution workflow.

### 2. Development Environment

Before starting development, install the following:

* Node.js
* npm
* Git
* Visual Studio Code or another code editor
* MongoDB database
* Required external API credentials

### 3. Clone the Repository

Clone the project from GitHub:

```
git clone https://github.com/jebickson/signalist_stock_app.git
```

Navigate into the project:

```
cd signalist_stock_app
```

Install dependencies:

```
npm install
```

### 4. Environment Configuration

Create a `.env` file in the project root.

Configure the required environment variables using the Installation & Setup and Environment Variables documentation.

Never commit real API keys, passwords, or database credentials.

### 5. Run the Development Environment

Start the Next.js development server:

```
npm run dev
```

Start the Inngest development server in a separate terminal:

```
npx inngest-cli@latest dev
```

Open the application:

```
http://localhost:3000
```

Open the Inngest dashboard:

```
http://localhost:8288
```

### 6. Project Structure

The main project directories include:

| Directory        | Responsibility                              |
| ---------------- | ------------------------------------------- |
| `app/`           | Application routes, layouts, and pages      |
| `components/`    | Reusable UI components                      |
| `database/`      | Database connections and data models        |
| `hooks/`         | Custom React hooks                          |
| `lib/`           | Server actions, integrations, and utilities |
| `scripts/`       | Helper scripts                              |
| `types/`         | Shared TypeScript types                     |
| `public/assets/` | Static assets                               |

Refer to the Project Structure documentation for more details.

### 7. Development Guidelines

Follow these guidelines when modifying the application:

* Use TypeScript for consistent application development.
* Create reusable components where appropriate.
* Keep database operations in the appropriate backend layer.
* Keep sensitive credentials on the server.
* Follow the existing project conventions.
* Validate user inputs.
* Handle API and database errors.
* Test changes before committing them.

### 8. Debugging

When troubleshooting development issues:

1. Review the terminal output.
2. Inspect browser console errors.
3. Check network requests in browser developer tools.
4. Review MongoDB connection errors.
5. Verify external API responses.
6. Inspect Inngest execution logs.
7. Check Vercel deployment logs when debugging production issues.

### 9. Build and Production Verification

Run the production build:

```
npm run build
```

If the build succeeds, start the application using the production start script if configured:

```
npm run start
```

Check the project's `package.json` for the available scripts before executing them.

### 10. Git Workflow

Use Git to track development changes.

Check the current status:

```
git status
```

Create a feature branch:

```
git checkout -b feature/your-feature-name
```

Stage changes:

```
git add .
```

Commit changes:

```
git commit -m "Add your feature description"
```

Push the branch:

```
git push origin feature/your-feature-name
```

Review changes before merging them into the main branch.

### 11. Contribution Guidelines

Developers contributing to Signalist should:

* Understand the existing architecture.
* Follow the project's coding conventions.
* Avoid committing secrets.
* Test new functionality.
* Document significant changes.
* Provide clear commit messages.
* Review changes before merging.

### 12. Conclusion

This guide provides the foundation for working with the Signalist source code.

Following consistent development practices helps maintain the application's structure, reliability, and long-term maintainability.
