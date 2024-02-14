const password = document.querySelector(".input-wrapper input");
const copyPassword = document.querySelector(".input-wrapper .button-copy");
const copyIcon = document.querySelector(".input-wrapper .button-copy i");
const generatePassword = document.querySelector(".generator-button");
const alertMessage = document.querySelector("#alert-message");

let characters =
  "çÇaAbBcCdDeEfFgGhHiIkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789^!$%&/\\|[](){}:;.,*#@<>~´`";

const passwordGeneration = () => {
  let passwordLength = 16;
  let newPassword = "";
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumbers = Math.floor(Math.random() * characters.length);
    newPassword += characters.substring(randomNumbers, randomNumbers + 1);
  }
  password.value = newPassword;
};

const copy = () => {
  navigator.clipboard.writeText(password.value);
  iconReplace();
  alertMessage.classList.remove("disabled");
  setTimeout(() => {
    alertMessage.classList.add("disabled");
    iconReplace();
  }, 1500);
};

const iconReplace = () => {
  if (copyIcon.classList.contains("fa-clipboard")) {
    copyIcon.classList.remove("fa-regular", "fa-clipboard");
    copyIcon.classList.add("fas", "fa-clipboard-check");
  } else {
    copyIcon.classList.remove("fas", "fa-clipboard-check");
    copyIcon.classList.add("fa-regular", "fa-clipboard");
  }
};

copyPassword.addEventListener("click", () => {
  password.value != "" ? copy() : alert("There's no password!");
});

generatePassword.addEventListener("click", passwordGeneration);
