# ChatApp
 This is a simple web chat application. This application allows private chatting between two logged-in users.
 The technologies, software, database and libraries used to create this app are:
  1. NodeJS
  2. React
  3. Socketio
  4. MongoDB
  5. Express
  6. Bcrypt
  7. Validator
  8. cors
  9. React-router-dom
  10. React-bootstrap
  11. Moment
  12. react-input-emoji
  13. JWT
  14. dotenv

This app is created in three parts:
 1. Client
 2. Server
 3. Socket

# Screenshots of the app
Registration Page
![Screenshot (572)](https://github.com/Pranav2092/ChatApp/assets/130064033/fc6b894a-ccc0-4979-9093-1f22fad489c8)
Login Page
![Screenshot (573)](https://github.com/Pranav2092/ChatApp/assets/130064033/a01d066b-3e4e-4434-8f18-489e83bd813f)
Home Page
![Screenshot (574)](https://github.com/Pranav2092/ChatApp/assets/130064033/e5947496-65aa-4b82-a13f-6d3df357c9a9)
Chat Page
![Screenshot (575)](https://github.com/Pranav2092/ChatApp/assets/130064033/0841fdd5-4b66-468e-b699-d3c665effb1c)
Notifications
![Screenshot (576)](https://github.com/Pranav2092/ChatApp/assets/130064033/0effe1a0-1e7c-4ae8-9476-7387b1ada1a2)
![Screenshot (577)](https://github.com/Pranav2092/ChatApp/assets/130064033/a6333e8e-da9a-4f67-8235-9a3bb7bd3d35)
![Screenshot (578)](https://github.com/Pranav2092/ChatApp/assets/130064033/be8592da-faa5-4a74-8cc7-f39d4148cc33)

# Client

The client folder consists of the UI of our app. It comprises assets, components, context, hooks, pages and utils folder. 

 # Assets

 The assets folder contains static data like the logo, icons, etc.

 # Components
 
 # Context
 
 # Hooks
 
 # Pages
 
 # Utils

# Server

In our server app, we have created our application's controllers, routes, and models. The model describes how our users, chats and messages will be stored in our database. The controllers define the API endpoints for our app. The routes describe the routes to be taken by the request call from the client to the server.

 # Controllers
 
 # Routes
 
 # Models

# Socket

The socket file consists of the program to connect our client to our server to provide a real-time chatting experience to the users. We have used the Socketio library to create this functionality.
