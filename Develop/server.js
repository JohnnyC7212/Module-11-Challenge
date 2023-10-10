const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Creates the port 
const app = express();
const PORT = 3001;

//Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware to serve up static assets from the public folder
app.use(express.static('public'));

// Send all the requests that begin with /api to the index.js in the routes folder
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//This view route is a GET route for the homepage
app.use('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// This view route is a GET route for the notes.html
app.use('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () => 
    console.log(`App listenting at http://localhost:${PORT}`)
);