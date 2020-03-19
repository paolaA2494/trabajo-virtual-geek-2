'use strict';
const buttonList = document.querySelector('.select');

buttonList.addEventListener('click', function showtext () {

   const buttonList  = document.querySelector('ul');
   const content = '<li id="first">Inception</li><li>The butterfly effect</li><li>Eternal sunshine of the spotless mind</li><li>Blue velvet</li><li>Split</li>';
   buttonList.innerHTML = content;
   
});

const liElement = document.querySelector('ul');
  liElement.addEventListener('click', function show (){
      liElement.innerHTML ='Mi pelicula favorita es: Inception';
      console.log('Mi pelicula favorita es: Inception');
  })

/*const theButterFlyEffect = document.querySelector('li');
const eternalSunshineOfTheSM = document.querySelector('li');
const blueVelvet = document.querySelector('li');
const split = document.querySelector('li');*/