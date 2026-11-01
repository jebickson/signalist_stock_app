# Authentication & Authorization

### 1. Overview

Signalist uses **Better Auth** to manage user authentication and session handling.

Authentication helps verify user identities and provides a foundation for protecting application functionality and user-specific information.

The authentication system is integrated with the Next.js application and MongoDB.

### 2. Authentication Technology

| Component              | Technology             | Purpose                                |
| ---------------------- | ---------------------- | -------------------------------------- |
| Authentication Library | Better Auth            | Authentication management              |
| Frontend Framework     | Next.js                | User interface and application routing |
| Database               | MongoDB                | Persistent application data            |
| Backend Logic          | Next.js Server Actions | Server-side operations                 |

### 3. Authentication Architecture

The authentication process connects the frontend, Better Auth, and the database.

General architecture:

```
User
  |
  v
Next.js Application
  |
  v
Better Auth
  |
  v
MongoDB
  |
  v
Authentication Result
  |
  v
Application Access
```

Better Auth handles the authentication-related operations and session management.

### 4. User Registration

User registration allows a new user to create an account.

General registration flow:

1. The user opens the registration interface.
2. The user provides the requested account information.
3. The application submits the registration request.
4. Better Auth processes the authentication operation.
5. Account information is handled through the configured database integration.
6. The application responds with the registration result.

### 5. User Login

Login allows registered users to authenticate and access the application.

General login flow:

1. The user opens the login interface.
2. The user enters their login credentials.
3. The application sends the authentication request.
4. Better Auth validates the credentials.
5. The authentication result is returned.
6. The application provides access according to the user's authentication state.

### 6. Session Management

Better Auth manages authentication sessions.

Session management helps the application identify authenticated users across application interactions.

Its responsibilities include:

* Managing authenticated user sessions.
* Maintaining authentication state.
* Supporting session validation.
* Providing user authentication information to the application.

### 7. Authorization

Authorization determines which application resources and operations a user can access.

Signalist should ensure that user-specific operations are performed only for the appropriate authenticated user.

Examples include:

* Accessing personal watchlists.
* Managing user-specific information.
* Performing protected account operations.

Authentication verifies identity, while authorization controls access.

### 8. Environment Configuration

Better Auth uses the following environment variables:

```
BETTER_AUTH_SECRET=your_secure_random_secret
BETTER_AUTH_URL=http://localhost:3000
```

| Variable             | Purpose                     |
| -------------------- | --------------------------- |
| `BETTER_AUTH_SECRET` | Secret used by Better Auth  |
| `BETTER_AUTH_URL`    | Base URL of the application |

For production deployment, configure the application URL correctly in the deployment environment.

Never expose the authentication secret in frontend code or public repositories.

### 9. Security Considerations

The following practices are important for authentication security:

* Keep authentication secrets private.
* Validate authentication state before protected operations.
* Restrict access to user-specific information.
* Avoid exposing sensitive account information.
* Use secure production configuration.
* Do not commit environment files containing credentials.

### 10. Conclusion

Better Auth provides the authentication foundation for Signalist.

By integrating Better Auth with Next.js and MongoDB, the application can manage user authentication and sessions while supporting protected, user-specific functionality.
