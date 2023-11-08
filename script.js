var nyFarge = document.getElementById("ny_farge");
 nyFarge.addEventListener("click", rgbTilTall)
 var colorBox = document.querySelectorAll('div[name="colorbox"]');
 
 function changeColor() {
   for (let i = 0; i < colorBox.length; i++) {
     var randomColor = "rgb(" + 
       Math.floor(Math.random() * 256) + "," + 
       Math.floor(Math.random() * 256) + "," + 
       Math.floor(Math.random() * 256) + ")";
     colorBox[i].style.backgroundColor = randomColor;
     colorBox[i].dataset.color = randomColor; 
   }
 }
     //del 2
 
 
 function rgbTilTall() {
   changeColor();
   var correctIndex = Math.floor(Math.random() * colorBox.length);
   var correctBox = colorBox[correctIndex];
   var correctColor = correctBox.dataset.color;
 
   var rgbValues = correctColor.replace(/[^\d,]/g, '').split(',');
   
   document.getElementById("red").innerText = rgbValues[0];
   document.getElementById("green").innerText = rgbValues[1];
   document.getElementById("blue").innerText = rgbValues[2];
   
   var coretktAnswer = document.querySelector("body")
   var wrongAnswer = document.getElementById("Wrong")
   var screenColor = document.getElementById("screen_color")
   
   for (let i = 0; i < colorBox.length; i++) {
     colorBox[i].onclick = function() {
       if (this.dataset.color === correctColor) {
         coretktAnswer.style.backgroundColor = correctColor;
         nyFarge.innerHTML= "Play again" 
         wrongAnswer.style.color = "MediumSpringGreen"
         wrongAnswer.innerHTML = "Correkt answer"
         
       } else {
         
         coretktAnswer.style.backgroundColor = "red";
         wrongAnswer.style.color = "OrangeRed"
         wrongAnswer.innerHTML = "Wrong Answer"
         screenColor.style.backgroundColor = "blue"
           }
     };
   }
 }
 rgbTilTall();