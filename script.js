window.onload = () => {
  // Variables
  getStartedButton = document.querySelector(".submit");
  emailField = document.querySelector(".email");

  // Functions
  function checkEmail() {
    const re = console.log(re.test(emailField.textContent));
  }

  // Event Listeners
  getStartedButton.addEventListener("click", checkEmail);
};
