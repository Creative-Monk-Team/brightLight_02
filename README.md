# Bright Light Immigration

Developed by **Creative-Monk**, Bright Light Immigration is a dynamic web application built with the MERN stack (MongoDB, Express, React, Node.js) and hosted on Render for scalable backend services. This platform allows seamless immigration data management, where all backend changes are instantly reflected on the frontend.

## Features

- **Dynamic Data Management**: Backend updates are automatically synced with the frontend, keeping all information current.
- **Admin Dashboard**: A robust GUI for backend management, allowing for easy content management without database-level access.
  - **Meta Tag Management**: Modify meta tags (such as title, description, and keywords) for SEO directly from the admin dashboard.
  - **Blog and News Management**: Easily add, update, or delete blog and news posts, ensuring your content remains fresh and relevant.
- **Secure Authentication**: User authentication via JWT ensures only authorised access to the backend dashboard.
- **Responsive Design**: Accessible across desktop, tablet, and mobile, delivering a seamless experience on all devices.
- **MERN Stack**: Built with MongoDB, Express, React, and Node.js, ensuring a modern and efficient application.


## Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express, Render
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Other Libraries**: React Acync Helmet, Mongoose (for MongoDB)

## Getting Started Guide

To get started with the Bright Light Immigration application, follow these steps:

1. **Admin Access**: Use the admin login page to access the backend GUI. Credentials can be configured through environment variables or initial setup.
2. **Dashboard Overview**: Once logged in, navigate the admin dashboard to view and manage all available data entries. Use the intuitive interface to add, edit, or delete records as needed.
3. **Frontend Interaction**: The frontend is designed to be entirely user-driven. Any updates made in the backend are automatically reflected, ensuring that users are always presented with the latest information.

## Getting Started Guide

To get started with Bright Light Immigration, follow these steps:

1. **Admin Access**: Use the admin login page to access the backend GUI. Credentials can be configured through environment variables or initial setup.
2. **Dashboard Overview**: Once logged in, navigate through the admin dashboard to access the following:
   - **Meta Tags**: Update page meta tags, including title, description, and keywords, directly through the dashboard to improve SEO dynamically.
   - **Blog and News Management**: Create, edit, or remove blog posts and news articles, making it easy to maintain an up-to-date content stream.
3. **Frontend Interaction**: Any updates made in the backend are automatically reflected on the frontend, providing users with the latest content and information.


## APIs Overview

The backend exposes several RESTful APIs that power the dynamic nature of the platform. Below is a high-level overview of key endpoints:

- **User Authentication**
  - `POST /api/auth/login`: Authenticate user and obtain JWT token.
  
- **Data Management**
  - `GET /api/data`: Retrieve all data entries for display on the frontend.
  - `POST /api/data`: Create a new data entry (admin access only).
  - `PUT /api/data/:id`: Update an existing data entry (admin access only).
  - `DELETE /api/data/:id`: Delete a data entry (admin access only).

These endpoints are protected, ensuring only authorised users can access them.

## Credits

This project was developed by **Creative-Monk** in 2024 with contributions from team members UttamVerma and SakshamVerma.


