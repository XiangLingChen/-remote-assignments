const express = require('express');
const app = express();

//setting middleware



app.get('/', (request, response) =>{
    response.send('<h1>Hello World.</h1>');
} );

/*
app.get('/getData', (request, response) =>{
    response.send('<h1>Lack of Parameter.</h1>');
} );
*/
app.get('/getData', (request, response) =>{
    if(!request.query.number){
        response.send('<h1>Lack of Parameter.</h1>');
    }
    var number = parseInt(request.query.number);
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
   
app.listen(3000, () =>{
    console.log('The application is running on localhost:3000!');
});