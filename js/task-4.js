const formEl = document.querySelector(".login-form");
const user = {};

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  user.email = formEl.elements.email.value.trim();
  user.password = formEl.elements.password.value.trim();
  if (user.email === "" || user.password === "") {
    alert("All form fields must be filled in");
  } else {
    console.log(user);
    formEl.reset();
  }
}
