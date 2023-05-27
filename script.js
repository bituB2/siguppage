
// Get the signup form and add an event listener to it
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting normally
  
  // Get the values of the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  // Check if the password and confirm password fields match
  if (password !== confirmPassword) {
    alert("Passwords don't match!");
    return;
  }
  
  // Generate a random access token (16-byte string)
  const accessToken = [...crypto.getRandomValues(new Uint8Array(16))]
    .map(b => b.toString(16).padStart(2, '0')).join('');
  
  // Save the user's details and access token to local storage
  const user = { name, email, password, accessToken };
  localStorage.setItem('user', JSON.stringify(user));
  
  // Redirect the user to the profile page
  window.location.href = 'profile.html';
});





