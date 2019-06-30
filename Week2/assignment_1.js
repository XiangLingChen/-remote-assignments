function max(...numbers) {
  return numbers.reduce((previousValue,currentValue) => {
      if(previousValue <= currentValue){
        return currentValue;
      }else{
        return previousValue;
      }
    });
}
max(1, 2, 4, 5);
document.write(max(1, 2, 4, 5));

max(5, 2, 7, 1, 6);
document.write(max(5, 2, 7, 1, 6));


