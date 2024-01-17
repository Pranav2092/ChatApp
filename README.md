# ChatApp
 This is a simple web chat application. This application allows private chatting between two logged-in users. The technologies, software, database and libraries used to create this app are:
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

## Screenshots of the app
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

This app is created in three parts:
 1. Client
 2. Server
 3. Socket

## Client
The client folder consists of the UI of our app. It comprises assets, components, context, hooks, pages and utils folder. 

 ### Assets
 The assets folder contains static data like the logo, icons, etc.

 ### Components
 The components made in this app are the navigation bar, user chats, potential chats, chat box, and notifications.
 The navigation bar contains the app name, which, on click, directs the user to the chat page of the currently logged-in user. The user chats component displays all the chats of the user, with the recent message and the other user's name. The potential chats component displays all the registered users. The chat box component displays all the user's messages with the selected recipient user and allows the user to send new messages. The notification component in the navigation bar displays the total number of unread messages. Clicking the notification icon shows who has sent the message.
 
 ### Context
 The two contexts made here are AuthContext and ChatContext.
 AuthContext is used to store the register info and login info by sending the data to the server. It keeps the data of the currently logged-in user in the local storage. Also, it passes the details of the users wherever it is required without passing all the details implicitly to every node in the application's tree. 
 ChatContext is used to create new chats, get all the registered users and all chats of the currently logged-in user, send and receive messages and notifications, and mark notifications as read. It also sends the message to the socketIo server when a new user has logged in, a message is sent, and a user disconnects/logs out. Like AuthContext, it provides all the mentioned details wherever required  explicitly in the applications tree node for processing any data.
 
 ### Hooks
 Here, we have created two hooks, useFecthRecipient and useFetchLatestMessage. The useFetchRecipient hook takes the current chat and the sender ID as the input and returns the recipient user of the chat. The useFetchLatestMessage hook takes the current chat as the input and returns the latest message sent in the chat.
 
 ### Pages
 This folder contains three files defining our app's UI: the register page, the login page and the chat page. These are created using the components from the react-bootstrap library.
 
 ### Utils
This folder contains two files that provide some basic functionalities: services and unreadNotifications. The services file contains the postRequest and getRequest functions to help communicate with the server. The unreaddNotifications file filters the notifications and finds whether any notification is read.
## Server
In our server app, we have created our application's controllers, routes, and models. The model describes how our users, chats and messages will be stored in our database. The controllers define the API endpoints for our app. The routes describe the routes to be taken by the request call from the client to the server.

 ### Controllers
 This is where the APIs of our app are defined. The three controllers made are userController, chatController and messageController.In the user controller, the APIs defined are for registering users, logging in users, finding users and getting users from the database. In the chat controller, the APIs defined are for creating new chats, finding all the chats of the user and finding a particular conversation with the selected recipient user. In the message controller, the APIs defined are for creating a new message and getting all the messages.
 ### Routes
 We made three route files in this app: user, chat, and message. These tell which route to go for a particular request.
 
 ### Models
 In this app, we have defined three models for storing user details, chat details and messages. The database used is MongoDB.The user's details stored are user ID, name, email, password(in hashed form) and timestamps. The details of the chat stored are chat members and timestamps. The message details stored are sender ID, message, chat ID, and timestamps. The IDs are created using JSON Web Token. The password is hashed using the bycrpyt library.

## Socket
The socket file consists of the program to connect our client to our server to provide a real-time chatting experience to the users. We have used the Socketio library to create this functionality.

## How to run the app
Download the complete code of the project from Git Hub. Then, in the terminal, to run the server, go to the server folder and run the command `npm start`.To run the socket server, go to the socket folder and run the `npm start` command in the terminal. To run the client, go to the client folder and run the command `npm run dev`.The website will run at http://localhost:5173.

## More features to add
1. Group chat
2. End-to-end encryption of messages

## Problems while scaling the app
Here, we have used web sockets to provide a real-time chat experience. Because of this, our app is stateful, and our server has to save the state of the user connected to it. This restricts us from scaling our app vertically, i.e., to improve the server's hardware. However, due to technical limitations, we can scale our server to a specific limit; after that, the performance starts degrading. To overcome this problem, we can provide a load balancer that checks the backend servers' health and distributes the load accordingly. To store the state of the users, we can use the Reddis array to save them so that we can use it as a buffer. By using the buffer, we can scale our app horizontally as well.
