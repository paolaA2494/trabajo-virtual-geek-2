const color = document.querySelector('.color');

document.addEventListener('keypress',  function cambiarColor(){
     
    if (this.Val() == 'r'){
        color.classList.add('red');
        color.classList.remove('purple');
    }


    else if (this.Val() == 'm') {
        color.classList.add('purple');
        color.classList.remove('red');
    }
});