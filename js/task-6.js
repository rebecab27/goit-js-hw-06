function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const expectedLength = parseInt(input.getAttribute("data-length"));
  const currentLength = input.value.length;

  if (currentLength === expectedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
