const inputEl = document.getElementById("name-input");
const resultEl = document.getElementById("name-output");

inputEl.addEventListener("input", handleInput);

function handleInput(event) {
    const normalizedText = event.currentTarget.value.trim();
    resultEl.textContent = normalizedText;
    if (normalizedText === "") {
      resultEl.textContent = "Anonymous";
    }
}