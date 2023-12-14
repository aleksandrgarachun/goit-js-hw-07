function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const page = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", () => {

  document.body.style.backgroundColor = getRandomHexColor();
  page.textContent = getRandomHexColor();
  
});




