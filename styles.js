
let cursor = true;
  let speed = 400;        
  setInterval(() => {
    if(cursor) {
      document.getElementById("cursor").style.opacity = 0;
      document.getElementById("cursor2").style.opacity = 0;
      cursor = false;
    }else {
      document.getElementById("cursor").style.opacity = 1;
      document.getElementById("cursor2").style.opacity = 1;
      cursor = true;
    }
  }, speed);
  console.log(setInterval);
  


var i = 0;
var flash=50;
var txt = "Welcome, You have reached the portfolio of Nolan Trgovac. Above are all the links to my experience and information of professional experience on HTML, JS, and CSS. Please contact me day or night for further information or questions and thank you for your consideration.";

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, flash);
  }
};
typeWriter();
console.log(typeWriter)