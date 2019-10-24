# MERN Library Application.

This is a proof of concept.
This application uses a Mongo database hosted on the server side, and a Create-React-App front-end on the client side.

## To run this app you need:
- MongoDB installed.
- A terminal.

## To get the server started:

Open a terminal in the client folder, and in your type: `npm install`. <br />
Next, type: `mongod` to make sure Mongo is running.<br />
Then: `mongo bookAPI < booksJson.js` to add the booksJson.js file contents to a new 'bookAPI' database.<br />
Lastly: `npm start` and it will host the database on port 4000.<br />
<br />
Check to see if it is running by running a GET at "http://localhost:4000/api/books/" on your choice of API development clients.<br />

## To get the server started:

Navigate to the client folder,<br />
<br />
In your terminal type: `npm install` or `yarn add`,<br />
All you have left is to `npm start` and navigate to "http://localhost:3000"