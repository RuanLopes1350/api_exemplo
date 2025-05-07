# typescript-layered-api/README.md

# TypeScript Layered API

This project is a TypeScript-based API that follows a layered architecture pattern. It is designed to provide a clear separation of concerns, making it easier to maintain and scale.

## Project Structure

```
typescript-layered-api
├── src
│   ├── controllers        # Contains all controller files
│   ├── repositories       # Contains all repository files
│   ├── services           # Contains all service files
│   ├── dtos               # Contains all Data Transfer Object files
│   ├── models             # Contains all model files
│   ├── middlewares        # Contains all middleware files
│   ├── config             # Contains configuration settings
│   ├── utils              # Contains utility functions
│   ├── app.ts             # Main application file
│   └── server.ts          # Server startup file
├── tests                  # Contains test files for controllers, services, and repositories
├── .env.example           # Example environment variables
├── .gitignore             # Git ignore file
├── package.json           # NPM configuration file
└── tsconfig.json          # TypeScript configuration file
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd typescript-layered-api
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file based on the `.env.example` file and configure your environment variables.

5. Start the server:
   ```
   npm run start
   ```

server => app => routes => model => DTOs => Repository => Service => Controller
