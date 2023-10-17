const passresult = document.querySelector("#result");
const passinput = document.querySelector("#PasswordId");
const labeel = document.querySelector('label[for="LabelasswordId"]');
const gerar = document.querySelector("#gerar");

const letrasMin = document.querySelector("#letrasMin");
const letrasMai = document.querySelector("#letrasMai");
const Texnumber = document.querySelector("#Texnumber");
const Textsim = document.querySelector("#Textsim");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

labeel.innerHTML = passinput.value;

passinput.addEventListener("change", () => {
  labeel.innerHTML = passinput.value;
});

gerar.addEventListener("click", () => {
  generatePassword(
    letrasMin.checked,
    letrasMai.checked,
    Texnumber.checked,
    Textsim.checked,
    passinput.value
  );
});

const generatePassword = (
  hasNumbers,
  hasSymbols,
  hasLowercase,
  hasUppercase,
  lenght
) => {
  const newArray = [
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(hasLowercase ? LowercaseCaracters : []),
    ...(hasUppercase ? UppercaseCaracters : []),
  ];

  if (newArray.length === 0) return;

  let password = "";

  for (let i = 0; i < lenght; i++) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    password += newArray[randomIndex];
  }

  passresult.value = password;
};
