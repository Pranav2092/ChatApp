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

#Client

The client folder consists of the UI of our app. It comprises assets, components, context, hooks, pages and utils folder. The assets folder contains static data like the logo, icons, etc.

#Server

In our server app, we have created our application's controllers, routes, and models. The model describes how our users, chats and messages will be stored in our database. The controllers define the API endpoints for our app. The routes describe the routes to be taken by the request call from the client to the server.

#Socket

The socket file consists of the program to connect our client to our server to provide a real-time chatting experience to the users. We have used the Socketio library to create this functionality.
