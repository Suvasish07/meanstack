const express = require('express');
const http = require('http');
const path = require('path');


const app = express();


app.use(express.static(__dirname+ '/dist/Frontend'));

app.get('/*',(req,res)=>res.sendFile(path.join(__dirname)));


const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5600;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
})