function myFunction() {
    document.getElementById("myHeading").innerHTML = "Have a Good Time !";
  }


/*document.getElementById("btn").addEventListener('click', function onButtonClick(){
  
   if(document.getElementById("hiddenBoxes").className ="hide"){
    document.getElementById("hiddenBoxes").className ="show";
   } else {
    document.getElementById("hiddenBoxes").className ="hide";
   }
})
*/


function onButtonClick() {
  
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btnText.innerHTML = "Show Less !"; 
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "Show More !"; 
  }
}
