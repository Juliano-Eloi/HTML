var express = require('express');
var app = express();

//routes
app.get('/', function(request, response){
    response.send('Hello World');
});

app.get('/comments', function(request, response){
    console.log('GET request received at /comments');
});

app.post('/comments', function(request, response){
    console.log('POST request received at /comments');
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
