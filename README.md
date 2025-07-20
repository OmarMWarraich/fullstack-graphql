# Fullstack GraphQL Pet API

A simple GraphQL API built with Apollo Server that manages a collection of pets (cats and dogs).

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/OmarMWarraich/fullstack-graphql.git
cd fullstack-graphql-
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Build the project (for production):

```bash
yarn build
```

5. Start the production server:

```bash
yarn start
```

The server will start at `http://localhost:4000` and you can access the GraphQL Playground at the same URL.

## 📋 API Schema

### Types

```graphql
enum PetType {
  CAT
  DOG
}

type Pet {
  id: ID!
  name: String!
  type: PetType!
}

type Query {
  hello: String
  pets: [Pet]!
  pet(id: ID!): Pet
}
```

## 🔍 Sample GraphQL Queries

Copy and paste these queries into the GraphQL Playground to test the API:

### 1. Get a Simple Hello Message

```graphql
query {
  hello
}
```

**Expected Response:**

```json
{
  "data": {
    "hello": "Hello from GraphQL"
  }
}
```

### 2. Get All Pets

```graphql
query {
  pets {
    id
    name
    type
  }
}
```

**Expected Response:**

```json
{
  "data": {
    "pets": [
      {
        "id": "1",
        "name": "Buddy",
        "type": "DOG"
      },
      {
        "id": "2",
        "name": "Whiskers",
        "type": "CAT"
      },
      {
        "id": "3",
        "name": "Max",
        "type": "DOG"
      }
    ]
  }
}
```

### 3. Get a Specific Pet by ID

```graphql
query {
  pet(id: "1") {
    id
    name
    type
  }
}
```

**Expected Response:**

```json
{
  "data": {
    "pet": {
      "id": "1",
      "name": "Buddy",
      "type": "DOG"
    }
  }
}
```

### 4. Get Only Pet Names

```graphql
query {
  pets {
    name
  }
}
```

**Expected Response:**

```json
{
  "data": {
    "pets": [
      {
        "name": "Buddy"
      },
      {
        "name": "Whiskers"
      },
      {
        "name": "Max"
      }
    ]
  }
}
```

### 5. Query with Variables

```graphql
query GetPetById($petId: ID!) {
  pet(id: $petId) {
    id
    name
    type
  }
}
```

**Query Variables (add in the Variables section of GraphQL Playground):**

```json
{
  "petId": "2"
}
```

**Expected Response:**

```json
{
  "data": {
    "pet": {
      "id": "2",
      "name": "Whiskers",
      "type": "CAT"
    }
  }
}
```

### 6. Query Non-existent Pet

```graphql
query {
  pet(id: "999") {
    id
    name
    type
  }
}
```

**Expected Response:**

```json
{
  "data": {
    "pet": null
  }
}
```

## 🏗️ Project Structure

```
fullstack-graphql-/
├── api/
│   └── src/
│       ├── index.ts       # Main server entry point (TypeScript)
│       ├── server.ts      # Apollo Server setup (TypeScript)
│       ├── schema.ts      # GraphQL schema definition (TypeScript)
│       └── resolvers.ts   # Query resolvers (TypeScript)
├── dist/                  # TypeScript build output
├── package.json           # Project configuration with ES modules
├── tsconfig.json          # TypeScript configuration
└── README.md
```

## 📦 Dependencies

- **@apollo/server**: Modern GraphQL server implementation (v5)
- **graphql**: GraphQL JavaScript reference implementation
- **tsx**: TypeScript execution environment for development
- **typescript**: TypeScript compiler

## 🔧 Available Scripts

- `yarn dev` - Start the development server with TypeScript hot-reload
- `yarn build` - Compile TypeScript to JavaScript in the `dist/` folder
- `yarn start` - Start the production server from compiled JavaScript

## 🛠️ Technical Details

- **TypeScript**: Full TypeScript support with ES modules
- **ES Modules**: Modern import/export syntax throughout the project
- **Apollo Server v5**: Latest Apollo Server with standalone server setup
- **Hot Reload**: Development server automatically restarts on file changes

## 🎯 Next Steps

This is a basic setup that you can extend with:

- Mutations (create, update, delete pets)
- Database integration
- Authentication
- Subscriptions for real-time updates
- Input validation
- Error handling
- Testing

## 📚 Learning Resources

- [GraphQL Official Documentation](https://graphql.org/)
- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
- [GraphQL Playground Documentation](https://github.com/graphql/graphql-playground)
