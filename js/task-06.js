function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input")
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");




create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);


function createBoxes () {
  const elem = parseInt(input.value);
  
  if (!elem || elem < 1 || elem > 100) {
    return;
  }

  boxes.innerHTML = "";

  let size = 30;
  let boxString = ''

  for(let i=0; i < elem; i += 1) {
    const color = getRandomHexColor();
    boxString += `<div style="height:${size}px; width:${size}px; background-color:${color}"> </div>`;
    size += 10;
  }

  boxes.innerHTML = boxString;


  input.value = '';
}


function destroyBoxes () {
  boxes.innerHTML = "";
}


