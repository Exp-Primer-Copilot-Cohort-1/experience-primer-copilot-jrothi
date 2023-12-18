// Create web server

// Import express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create a new express application
const app = express();

// Configure the application
app.use(bodyParser.json());
app.use(cors());

// Create array to store comments
const comments = [];

// Create a route handler for the /comments GET request
app.get('/comments', (req, res) => {
    // Send back the comments array
    res.send(comments);
});

// Create a route handler for the /comments POST request
app.post('/comments', (req, res) => {
    // Extract the comment from the request body
    const comment = req.body.comment;

    // Add the comment to the array
    comments.push(comment);

    // Send back the comment
    res.send(comment);
});

// Start the web server on port 3000
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});