var isBlue = false; // isBlue is a boolean variable
var blue = document.getElementById('mavi'); // blue is a variable that holds the element with id mavi

setInterval(function() { // setInterval is a function that runs a function every x seconds
 if (isBlue) { // if isBlue is true
   blue.style.backgroundColor = 'green'; // change the background color of the element with id mavi to green
 }else{ // if isBlue is false
   blue.style.backgroundColor = 'blue';  // change the background color of the element with id mavi to blue
 }
 isBlue=!isBlue; // change the value of isBlue to the opposite of its current value
},1000); // the function runs every 1 second