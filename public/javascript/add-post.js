async function newFormHandler(event) {
    event.preventDefault();
  
    const blogTitle = document.querySelector('input[name="blog-title-form"]').value;
    const blogBody = document.querySelector('textarea[name="blog-body-form"]').value;
  
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({
        title: blogTitle,
        body: blogBody,
        user_id: localStorage.getItem("userId")
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);