function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesDiv = document.getElementById("boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.value;
  let boxesHTML = "";
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}; margin-bottom: 10px;"></div>`;
    size += 10;
  }

  boxesDiv.innerHTML = boxesHTML;
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
