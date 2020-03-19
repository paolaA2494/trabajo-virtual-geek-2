const buttonList = document.querySelector('.select');

buttonList.addEventListener('click', function showtext () {

   const buttonList  = document.querySelector('ul');
   const content = '<li id="One" onclick="first()">Inception</li><li onclick="second()">The butterfly effect</li><li onclick="third()">Eternal sunshine of the spotless mind</li><li onclick="forthd()">Blue velvet</li><li onclick="fiveth()">Split</li>';
   buttonList.innerHTML = content;
   
});

   function first() {
       document.getElementById('pelicula').innerHTML = "Inception";
       console.log("Inception");
   }
   
   function second() {
       document.getElementById('pelicula').innerHTML = "The butterfly effect";
       console.log("The butterfly effect");
   }
   
   function third() {
       document.getElementById('pelicula').innerHTML = "Eternal sunshine of the spotless mind";
       console.log("Eternal sunshine of the spotless mind");
   }
   
   function forthd() {
       document.getElementById('pelicula').innerHTML = "Blue velvet";
       console.log("Blue velvet");
   }
   
   function fiveth() {
       document.getElementById('pelicula').innerHTML = "Split";
       console.log("Split");
   }
   
 
