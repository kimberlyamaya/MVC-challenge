// sign-up form
async function signupFormHandler(event) {
  
    event.preventDefault()
  
    const username = document.querySelector('#username-signup').value.trim()
    const email = document.querySelector('#email-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()

  
    if (email && username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      console.log(response);

      const userData = await response.json()
      console.log(userData)
  
      if (response.ok) {
        // localStorage.setItem("userId", userData.user.id)
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
document.querySelector('.signup-btn').addEventListener('click', signupFormHandler)