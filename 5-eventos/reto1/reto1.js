'use strict';

const button = document.querySelector('.change');

button.addEventListener('click', function showtext () {

   const parrafo = document.querySelector('p');
   const content = "Mi primer click, ¡ole yo y la mujer que me parió!";
   parrafo.innerHTML = content;
   
});