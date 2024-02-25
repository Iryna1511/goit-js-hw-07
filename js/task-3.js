const inputEl = document.getElementById("name-input");
const resultEl = document.getElementById("name-output");

inputEl.addEventListener("input", handleInput);

function handleInput(event) {
    resultEl.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value.trim() === "") {
       resultEl.textContent = "Anonymous"; 
    }
}