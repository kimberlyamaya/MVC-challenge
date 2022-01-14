//const res = require("express/lib/response");

// log-in form
async function loginFormHandler(event) {
    event.preventDefault();
  
    // const username = document.querySelector('#user-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    // if (username && password) {
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          //username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);