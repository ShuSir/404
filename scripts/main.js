//comment 
/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Churn Model';
let model = 'churn';
if(model === 'churn') {
  alert('This is about churn model!');    
} else {
  alert('This is not about churn model!');    
}
*/

//let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

// function to change image upon click 
/*
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/tree.png') {
      myImage.setAttribute ('src','images/tree2.jpg');
    } else {
      myImage.setAttribute ('src','images/tree.png');
    }
}
*/

// funtion to change h2 
if(!localStorage.getItem('name')) {
    setUserName();
    } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName;
    }

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName;
  }

myButton.onclick = function() {
setUserName();
}



  