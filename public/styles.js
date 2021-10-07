
let cursor = true;
  let speed = 400;        
  setInterval(() => {
    if(cursor) {
      document.getElementById("cursor").style.opacity = 0;
      document.getElementById("cursor2").style.opacity = 0;
      document.getElementById("cursor3").style.opacity = 0;
      document.getElementById("cursor4").style.opacity = 0;
      cursor = false;
    }else {
      document.getElementById("cursor").style.opacity = 1;
      document.getElementById("cursor2").style.opacity = 1;
      document.getElementById("cursor3").style.opacity = 1;
      document.getElementById("cursor4").style.opacity = 1;
      cursor = true;
    }
  }, speed);
  console.log(setInterval);

  function mDown(obj) {
    obj.style.backgroundColor = "#ffffff";
    obj.innerHTML = "Submit";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }

  


var i = 0;
var flash=50;
var txt = "Welcome, You have reached the portfolio of Nolan Trgovac. Skills have ranged from art, code, photography and cooking and the love of media from all cultures. Bellow are all the links to my experience and information of professional experience on HTML, JS, Bootstrap, and CSS. Please contact me day or night for further information or questions and thank you for your consideration.";

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, flash);
  }
};
typeWriter();
console.log(typeWriter)