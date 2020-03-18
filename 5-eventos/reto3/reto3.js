'use strict';

const prrElement = document.querySelector('.change');

prrElement .addEventListener('mouseover', function addtext () {
   const prrElementAdd = document.querySelector('h1');
   prrElementAdd.innerHTML = "<p>Lorem ipsum</p>";
   
});