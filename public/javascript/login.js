// log-in form
async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    //const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    // if (email && password) {
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          //email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      

      const userData = await response.json()
      console.log(userData.user.id)
  
      if (response.ok) {
        localStorage.setItem("userId",userData.user.id)
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
document.querySelector('.login-btn').addEventListener('click', loginFormHandler);