const express = require('express');
const app = express();
const port = 8000;


app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    console.log('Yup!!Server is running at the port :' + port);
});