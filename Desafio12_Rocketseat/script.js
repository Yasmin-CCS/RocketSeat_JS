const biscScreen1 = document.querySelector(".biscScreen1");
const btnScreen2 = document.querySelector(".btnScreen2");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");


function trocarTela (event) {
  event.preventDefault()
  toggle()
  
}

function toggle () {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

biscScreen1.addEventListener('click', trocarTela)
btnScreen2.addEventListener('click', trocarTela)