## Blog Application using the MERN Stack

## Table of Contents

1. Introduction
2. Features
3. Technologies Used
4. Getting Started

# Prerequisites

# Installation

5. Running the Application
6. Project Structure
7. API Documentation
8. Testing
9. Docker (Optional)
10. Contributing
11. License

12. Introduction This project is a blog application built using the MERN stack (MongoDB, Express, React, Node.js). It includes advanced features such as user authentication and authorization, CRUD operations for blog posts and comments, search and filtering, and unit testing.

13. Features User Authentication and Authorization -> User registration, login, and logout -> JWT-based authentication -> Role-based access control (Admin, Author, Reader)

14. Blog Posts Schema for blog posts CRUD operations Pagination

15. Comments Schema for comments Moderation system for comments

16. Search and Filtering Search by title or content Filter by author and status

17. Advanced MongoDB Queries Fetch top 5 most commented posts Fetch the number of posts each author has written

18. REST API CRUD operations for blog posts and comments Authentication for the API using JWT

19. Unit Testing Tests for models, API endpoints, and React components using Jest and Mocha/Chai

20. Docker (Optional) Dockerfile and docker-compose.yml for setting up the development environment
21. Technologies Used

## Frontend: React, Redux/Context API, Axios/Fetch API

## Backend: Node.js, Express, JWT, Mongoose

## Database: MongoDB

## Testing: Jest, Mocha, Chai

## Deployment: Docker, Heroku/AWS

## Getting Started

## Prerequisites

## Node.js

## npm or yarn

## MongoDB (or any SQL database)

## Docker (optional)

## Installation

## Clone the repository:

bash Copy code git clone https://github.com/avinash-18-art/blog-application.git

cd mern-blog-app Install dependencies:

bash Copy code

# Install backend dependencies

cd backend npm install

# Install frontend dependencies

cd ../frontend npm install Running the Application Start the backend server:

bash Copy code cd backend npm start Start the frontend server:

bash Copy code cd frontend npm start Open your browser and navigate to:

arduino Copy code http://localhost:3000 Project Structure arduino Copy code mern-blog-app/ ├── backend/ │ ├── config/ │ ├── controllers/ │ ├── middlewares/ │ ├── models/ │ ├── routes/ │ ├── tests/ │ └── app.js ├── frontend/ │ ├── public/ │ ├── src/ │ ├── components/ │ ├── pages/ │ ├── services/ │ └── App.js ├── Dockerfile ├── docker-compose.yml ├── README.md └── package.json API Documentation User Authentication

POST /api/auth/register - Register a new user POST /api/auth/login - Login a user POST /api/auth/logout - Logout a user Blog Posts

GET /api/posts - Get all blog posts GET /api/posts/:id - Get a single blog post by ID POST /api/posts - Create a new blog post PUT /api/posts/:id - Update a blog post DELETE /api/posts/:id - Delete a blog post Comments

GET /api/comments - Get all comments POST /api/comments - Add a new comment PUT /api/comments/:id - Approve a comment DELETE /api/comments/:id - Delete a comment Testing Run backend tests:

bash Copy code cd backend npm test Run frontend tests:

bash Copy code cd frontend npm test Docker (Optional) Build and run the containers:

bash Copy code docker-compose up --build Open your browser and navigate to:

arduino Copy code http://localhost:3000 Contributing Contributions are welcome! Please read the contributing guidelines for more information.

License This project is licensed under the MIT License. See the LICENSE file for details.
