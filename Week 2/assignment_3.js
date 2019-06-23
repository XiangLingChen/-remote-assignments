function sum(arr){
    let s = 0;
    arr.forEach(function(element){
        s += element.price;
    });
    return s;
}





function avg(data){
   
return sum(data.products) / data.size;
    
}

avg({ size:3, products:[{name:"Product 1", price:100}, 
{name:"Product 2", price:700}, 
{name:"Product 3", price:250}]
}); 

document.write(avg({ size:3, products:[{name:"Product 1", price:100}, 
{name:"Product 2", price:700}, 
{name:"Product 3", price:250}]
}));