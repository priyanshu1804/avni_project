# Voting Application

A secure and simple voting system where users can cast votes, and administrators can manage candidates and view voting results.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
  - [Authentication](#authentication)
  - [Admin Routes](#admin-routes)
  - [User Routes](#user-routes)
  - [Public Routes](#public-routes)
  - [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT (JSON Web Token)
- **Testing/Client**: Postman (for API testing)

## Overview
This Voting Application allows users to:
- View a list of candidates.
- Vote for a candidate (one-time voting per user).
- View vote counts.

Admins can:
- Add, update, and delete candidates.
- View all votes and candidates in real-time.

The application is built using Node.js, Express.js, and MongoDB, with JWT authentication ensuring secure access control.

## Features
- **User sign up and login**: Users can sign up and log in using their Aadhar Card Number and password.
- **View candidates**: Users can view a list of candidates.
- **Voting System**: Users can vote for a candidate (only once).
- **Admin Management**: Admins can manage candidates by adding, updating, and deleting them.
- **Voting Restrictions**: Admins cannot vote.
- **JWT Authentication**: Secured login for users and admins.
- **Role-Based Access Control**: Admins can manage candidates, users can vote.
- **Real-Time Vote Count**: View the current vote tally.

## Installation

### Prerequisites
- Node.js installed.
- MongoDB installed and running locally or on a cloud instance (e.g., MongoDB Atlas).

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/avnisinngh/Voting_Application.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Voting_Application
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables: Create a `.env` file in the root directory and add the following:
    ```bash
    PORT=3006
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

5. Run the application:
    ```bash
    npm start
    ```

## Environment Variables
The following environment variables need to be set in a `.env` file for the application to run correctly:

| Variable Name  | Description                          |
|----------------|--------------------------------------|
| PORT           | Port number for the server          |
| MONGODB_URI    | MongoDB connection string            |
| JWT_SECRET     | Secret key for JWT authentication    |

## API Documentation

### Authentication
- **POST /signup**: Sign up a user.
- **POST /login**: Login a user.

### Candidates
- **GET /candidates**: Get the list of candidates.
- **POST /candidates**: Add a new candidate (Admin only).
- **PUT /candidates/:id**: Update a candidate by ID (Admin only).
- **DELETE /candidates/:id**: Delete a candidate by ID (Admin only).

### Voting
- **GET /candidates/vote/count**: Get the count of votes for each candidate.
- **POST /candidates/vote/:id**: Vote for a candidate (User only).

### User Profile
- **GET /users/profile**: Get user profile information.
- **PUT /users/profile/password**: Change user password.

### Admin Routes (JWT Required)
- **POST /candidate**: Add a new candidate (admin only).
- **PUT /candidate/**: Update candidate details (admin only).
- **DELETE /candidate/**: Delete a candidate (admin only).

### User Routes (JWT Required)
- **POST /vote/**: Vote for a candidate (users only, one vote per user).
- **GET /vote/count**: Get a real-time vote count of all candidates.

### Public Routes
- **GET /candidate**: Fetch a list of all candidates.
