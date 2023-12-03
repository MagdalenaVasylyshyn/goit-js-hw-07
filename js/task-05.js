const changeColorButton = document.querySelector(".change-color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = () => {
  const spanNameColor = document.querySelector(".color");
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomHexColor();
  spanNameColor.textContent = getRandomHexColor();
};

changeColorButton.addEventListener("click", changeColor);