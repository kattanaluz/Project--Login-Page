const button = document.querySelector("button");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
button.addEventListener("click", getUser);

function getUser(event) {
  event.preventDefault();
  console.log(username.value);
  console.log(password.value);
}
