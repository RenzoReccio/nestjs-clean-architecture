## Description

This repository demonstrates a clean architecture approach using the NestJS framework with CQRS. It provides a scalable and maintainable structure for building server-side applications.

## Features

- **Clean Architecture**: Separation of concerns with clear boundaries between layers.
- **CQRS**: Implements the Command Query Responsibility Segregation pattern for better separation of read and write operations.
- **TypeScript**: Fully written in TypeScript for type safety and modern JavaScript features.
- **Testing**: Includes unit and e2e tests for robust application development.
- **Scalability**: Designed to handle growing application complexity.

## Installation

```bash
$ npm install
```

## Running the Application

```bash
# Development mode
$ npm run start

# Watch mode
$ npm run start:dev

# Production mode
$ npm run start:prod
```

## Testing

```bash
# Unit tests
$ npm run test

# End-to-end tests
$ npm run test:e2e

# Test coverage
$ npm run test:cov
```
## Docker

You can run the application using Docker for a consistent and isolated environment.

### Build the Docker Image

```bash
$ docker build -t nestjs-clean-architecture .
```

### Run the Docker Container

```bash
$ docker run -p 3000:3000 nestjs-clean-architecture
```

### Stop the Docker Container

To stop the running container, find its container ID and stop it:

```bash
$ docker ps
$ docker stop <container_id>
```
## Author

- **Renzo Reccio**

## Stay Connected

Stay updated with the latest developments and news related to this project.