function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const output = document.querySelector(".color");
btn.addEventListener("click", changeColor);

function changeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  output.textContent = document.body.style.backgroundColor;
}
