const express = require('express'),
    cors = require('cors'),
    port = process.env.PORT || 3000,
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser');
    
// ----------------------------------------------
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/browser')));

// ------------------------------------



// -------------------------------------------------------
app.use(function (err, req, res, next) {
    console.error(err.message); // Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});

app.get('/*', (req, res, next) => {
    res.header('Content-type', 'text/html');
    res.sendFile(path.join(__dirname, "/browser/index.html"));
});

app.get('*', function (req, res) {
    res.status(404).type('text/html');
    res.send("<h1> Not found 404</h1>");
})

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));



