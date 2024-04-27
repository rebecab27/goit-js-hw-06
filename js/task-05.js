function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim();
  nameOutput.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
