# Database Design

### 1. Overview

Signalist uses **MongoDB** as its primary database to manage application data. The application connects to MongoDB through its database configuration and data model layer.

The database supports user authentication, personalized watchlists, and other application-related operations.

### 2. Database Technology

| Component           | Technology             | Purpose                           |
| ------------------- | ---------------------- | --------------------------------- |
| Database            | MongoDB                | Store application data            |
| Database Hosting    | MongoDB Atlas          | Cloud database hosting            |
| Data Modeling       | MongoDB data models    | Organize application data         |
| Authentication      | Better Auth            | Manage user accounts and sessions |
| Backend Integration | Next.js Server Actions | Perform database operations       |

### 3. Database Architecture

The database layer works between the backend application and MongoDB.

Main responsibilities:

* Establish a database connection.
* Store and retrieve application data.
* Manage user-related information.
* Support watchlist operations.
* Provide database access to server-side application logic.

### 4. Logical Data Organization

Signalist works with the following categories of data:

#### 4.1 User Data

User-related information is managed through Better Auth.

Examples of information include:

* User account details.
* Email address.
* Authentication information.
* User session information.

#### 4.2 Watchlist Data

Watchlist functionality allows users to save and manage their preferred stock symbols.

Typical information involved includes:

* User identifier.
* Stock symbol.
* Company name.
* Watchlist association.

The watchlist operations are handled by the application's server-side logic.

#### 4.3 Stock Market Data

Stock information is retrieved through the Finnhub API.

Examples include:

* Stock prices.
* Company information.
* Financial metrics.
* Market news.

This information is used by the application to display stock-related insights. Do not assume that every retrieved market-data response is permanently stored in MongoDB.

#### 4.4 Notification and Workflow Data

The application uses Inngest and Nodemailer to support automated workflows and email notifications.

These services coordinate background processing and email delivery alongside the application's database operations.

### 5. Database Connection

The application uses the `MONGODB_URI` environment variable to connect to the MongoDB database.

Example configuration:

```
MONGODB_URI=your_mongodb_connection_string
```

The connection configuration is maintained in the `database/` directory.

### 6. Database Operations

The application performs database operations through its backend logic.

Common operations include:

| Operation | Description                  |
| --------- | ---------------------------- |
| Create    | Save new application records |
| Read      | Retrieve stored information  |
| Update    | Modify existing records      |
| Delete    | Remove records when required |

These operations support features such as user management and watchlist management.

### 7. Data Flow

The general database interaction flow is:

1. A user performs an action in the Signalist interface.
2. The frontend communicates with the backend.
3. The backend processes the request.
4. The appropriate database operation is performed.
5. MongoDB returns the requested result.
6. The application updates the interface with the response.

### 8. Database Security

The following practices help protect application data:

* Keep the MongoDB connection string private.
* Store database credentials in environment variables.
* Perform database operations through trusted server-side code.
* Restrict access to authenticated user data.
* Validate incoming data before database operations.
* Avoid exposing database credentials in frontend code or public repositories.

### 9. Conclusion

MongoDB provides the data storage foundation for Signalist. Together with Better Auth and Next.js Server Actions, it supports user management and personalized application functionality.

The database layer helps maintain organized application data while allowing the frontend and backend to work together efficiently.
