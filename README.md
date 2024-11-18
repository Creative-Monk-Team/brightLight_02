# Bright Light Immigration 

Developed by **Creative-Monk**, Bright Light Immigration is a dynamic web application built with the MERN stack (MongoDB, Express, React, Node.js) and hosted on Render for scalable backend services. This platform allows seamless immigration data management, where all backend changes are instantly reflected on the frontend.

## Features

- **Dynamic Data Management**: Backend updates are automatically synced with the frontend, keeping all information current.
- **Admin Dashboard**: A robust GUI for backend management, allowing for easy content management without database-level access.
  - **Meta Tag Management**: Modify meta tags (such as title, description, and keywords) for SEO directly from the admin dashboard.
  - **Blog and News Management**: Easily add, update, or delete blog and news posts, ensuring your content remains fresh and relevant.
- **Responsive Design**: Accessible across desktop, tablet, and mobile, delivering a seamless experience on all devices.
- **MERN Stack**: Built with MongoDB, Express, React, and Node.js, ensuring a modern and efficient application.


## Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express, Render
- **Database**: MongoDB
- **Other Libraries**: React Acync Helmet, Mongoose (for MongoDB)


## Getting Started Guide

To get started with Bright Light Immigration, follow these steps:


(Admin Access) ![image](https://github.com/user-attachments/assets/fd57c9c0-caaf-4344-8c34-56c26bd7291b)


1. **Admin Access**: Use the admin login page to access the backend GUI. Credentials can be configured through environment variables or initial setup.


(Dashboard Overview) ![image](https://github.com/user-attachments/assets/77237771-96c2-4fc2-a9a8-555167445478)




2. **Dashboard Overview**: Once logged in, navigate through the admin dashboard to access the following:


(Meta Tags) ![image](https://github.com/user-attachments/assets/147325f4-49af-444d-9ff9-86713a78f7b5)

   - **Meta Tags**: Update page meta tags, including title, description, and keywords, directly through the dashboard to improve SEO dynamically.

(Blog and News Management)![image](https://github.com/user-attachments/assets/c4faa0a2-4b10-4164-b821-ed9a500b3ab0)


   - **Blog and News Management**: Create, edit, or remove blog posts and news articles, making it easy to maintain an up-to-date content stream.


3. **Frontend Interaction**: Any updates made in the backend are automatically reflected on the frontend, providing users with the latest content and information.


## APIs Overview

The backend exposes several RESTful APIs that power the dynamic nature of the platform. Below is a high-level overview of key endpoints:

- **Data Management**
  - `GET /api/data`: Retrieve all data entries for display on the frontend.
  - `POST /api/data`: Create a new data entry (admin access only).
  - `PUT /api/data/:id`: Update an existing data entry (admin access only).
  - `DELETE /api/data/:id`: Delete a data entry (admin access only).

These endpoints are protected, ensuring only authorised users can access them. _Please note, this is an example structure and does not represent real endpoints to maintain security measures._

## Installation

Use these Instructions to Run Website on "[localhost](http://localhost/3000)" _OR_ to run in on your 'System'.

```bash
npm i
```
```bash
npm run start
```


## Credits


This project was developed by **Creative-Monk** in **2024**, with all work carried out by _UttamVerma_ and _SakshamVerma_.


