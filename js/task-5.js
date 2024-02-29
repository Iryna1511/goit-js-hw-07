function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorbBtn = document.querySelector(".change-color");
const colorDisplaySpan = document.querySelector(".color");
changeColorbBtn.addEventListener("click", changeColor);

function changeColor(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorDisplaySpan.textContent = color;
}
