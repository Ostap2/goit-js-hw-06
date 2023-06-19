

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Please fill in all fields');
  } else {
    const loginData = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log(loginData);
    loginForm.reset();
  }
});
