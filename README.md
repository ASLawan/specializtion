# ALXSE BACKEND SPECIALIZATION PROJECT

## MERN Stack E-commerce Web Application - LuXury Beads

## Table of Contents

Project Overview
Features
Tech Stack
Setup and Installation
Folder Structure
Environment Variables
API Endpoints
Frontend Features
Admin Functionality
Lessons Learned
Future Enhancements
License

## Project Overview

This project is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express, React, Node.js).
It provides a user-friendly platform where customers can browse products, manage a shopping cart, and place orders. Admin users have access to a dedicated dashboard for managing products and orders.

## Features

### User Features

- User authentication (login/signup)
- Browse products with pagination
- Add products to the shopping cart
- Place orders and view order history

### Admin Features

- Admin-only dashboard with secure access
- Product management (create, update, delete products with images)
- Order management and tracking
- Users management

## Tech Stack

- **Frontend:** React, Redux, Bootstrap
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas
- **File Upload:** Multer (for storing images in MongoDB)
- **Authentication:** JWT (JSON Web Token)

## Setup and Installation

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB (Atlas or local instance)
- NPM or Yarn

### Installation Steps

- Clone the Repository
  - git clone https://github.com/ASLawan/specializtion.git
  - cd specialization

### Backend Setup

- Navigate to the backend folder:
  - cd backend
- Install dependencies:
- npm install
- Set up environment variables (see the Environment Variables section).
- Start the backend server:
- npm run server

### Frontend Setup

- Navigate to the frontend folder:
- cd frontend
- Install dependencies:
- npm install
- Start the frontend development server:
- npm run dev

The application should now be running on:

- http://localhost:3000 for the frontend and
- http://localhost:5000 for the backend.

## Folder Structure

specialization/
├── backend/
│ ├── requests/ # Backend logic RESTClient test routes
│ ├── models/ # MongoDB data models
│ ├── routes/ # API route definitions
│ ├── middleware/ # Authentication and error-handling middleware
│ ├── uploads/ # Product images stored locally
│ ├── server.js # Entry point for the Express server
│ └── .env # Environment variables
├── frontend/
│ ├── public/ # Static files
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Application pages
│ │ ├── redux/ # Redux setup and slices
│ │ ├── App.jsx # Main application component
│ │ └── index.html # Entry point for React
└── README.md # Project documentation

## Environment Variables

Create a .env file in the backend folder with the following:

- MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your-db
- JWT_SECRET=your_jwt_secret
- PORT=5000
  Ensure that your MongoDB URI and JWT Secret are correct.

## API Endpoints

### Auth Routes

**POST /api/auth/register:** Register a new user
**POST /api/auth/login:** Login a user and retrieve a JWT token

### Product Routes

**GET /api/products:** Fetch all products
**GET /api/products/:id:** Fetch a single product
**POST /api/products:** Add a new product (admin only)
**PUT /api/products/:id:** Update product details (admin only)
**DELETE /api/products/:id:** Delete a product (admin only)

### Order Routes

**POST /api/orders:** Create a new order
**GET /api/orders:** Get all orders (admin only)
**GET /api/orders/user:** Get orders for a specific user

## Frontend Features

### User Authentication

- Login and register pages with JWT-based session management.
- Conditional routing to display relevant options based on login status.

### Product Display

- Products are fetched from the backend and displayed with images and details.

### Shopping Cart

- Add products to the cart, update quantities, and view the total cost.
- Checkout option that links to order creation.

### Admin Functionality

- Admin users can access a protected dashboard after logging in.
  **Product Management:** Admins can add, update, and delete products. Images are uploaded using Multer and stored in MongoDB Atlas.
  **Order Management:** Admins can view all orders and manage order statuses.

### Lessons Learned

**Backend-Frontend Integration:** Establishing a consistent data flow between frontend and backend via RESTful APIs.
**Image Uploads and Path Normalization:** Managing file paths correctly across different environments to ensure consistent image display.
**Role-Based Access Control:** Implementing secure, conditional routing based on user roles.
**User Experience:** Designing intuitive and responsive layouts with Bootstrap for a seamless experience across devices.

## Future Enhancements

**Payment Gateway Integration:** Enable secure online payment for orders.
**Customer Reviews:** Allow users to leave reviews for products.
**Advanced Search and Filtering:** Enhance the search functionality to include filters by price, rating, and availability.
**Order Tracking:** Provide real-time tracking for orders.

## License

This project is open-source and free to use for educational purposes. Feel free to contribute to its development or adapt it to your own requirements.
