var express = require('express');
var app = express();
 
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
 
app.get('/sum.html', function (req, res) {
    res.sendFile(__dirname+'/sum.html');  //回應靜態文件
});
 
app.post('/getData', (request, response) =>{
    if(!request.body.number){
        response.send('<h1>Lack of Parameter.</h1>');
    }
    var number = parseInt(request.body.number);
    if(isNaN(number)){
        response.send('<h1>Wrong Parameter.</h1>');
    }else{
        //create array of number
        var arr = [...Array(number+1).keys()];
        
        //Sum 
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        var sum = arr.reduce(reducer);
        
        //Send response of sum
        response.send('<h1>' + sum.toString() + '</h1>');
    } 
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
