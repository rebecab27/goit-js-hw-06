const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formElements = loginForm.elements;

  let isFormValid = true;
  for (let i = 0; i < formElements.length - 1; i++) {
    if (formElements[i].value.trim() === "") {
      isFormValid = false;
      break;
    }
  }

  if (!isFormValid) {
    alert("Please fill in all fields.");
  } else {
    const formData = {};
    for (let i = 0; i < formElements.length - 1; i++) {
      formData[formElements[i].name] = formElements[i].value;
    }

    console.log(formData);

    loginForm.reset();
  }
});
