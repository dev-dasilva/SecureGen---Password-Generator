const password = document.querySelector(".input-wrapper input");
const copyPassword = document.querySelector(".input-wrapper .button-copy");
const copyIcon = document.querySelector(".input-wrapper .button-copy i");
const generatePassword = document.querySelector(".generator-button");
const alertMessage = document.querySelector("#alert-message");
const lengthPass = document.querySelector("#select__options");
const isUppercase = document.querySelector("#check__1");
const isLowercase = document.querySelector("#check__2");
const isNumbers = document.querySelector("#check__3");
const isSpecial = document.querySelector("#check__4");

let passwordLength = 0;

lengthPass.addEventListener("change", (event) => {
  passwordLength = event.target.value;
});

const passwordGeneration = () => {
  let newPassword = "";

  const characters =
    (isUppercase.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "") +
    (isLowercase.checked ? "abcdefghijklmnopqrstuvwxyz" : "") +
    (isNumbers.checked ? "0123456789" : "") +
    (isSpecial.checked ? "!@#$%^()_" : "");

  for (let i = 0; i <= passwordLength; i++) {
    newPassword += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
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
