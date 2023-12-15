function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input")
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");




create.addEventListener("click", createCube);
destroy.addEventListener("click", destroyCube);

function createCube () {
  const elem = parseInt(input.value);
  
  if (!elem || elem < 1 || elem > 100) {
    return;
  }

  boxes.innerHTML = "";

  let size = 30;

  for(let i=0; i < elem; i += 1) {
    const cube = document.createElement("div");
    cube.style.height = `${size}px`;
    cube.style.width = `${size}px`;
    cube.style.backgroundColor = getRandomHexColor();
    boxes.append(cube); 
    size += 10;
  }





  input.value = '';
}


function destroyCube () {
  boxes.innerHTML = "";
}






