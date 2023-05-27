


// Get the user's details from local storage
const userJson = localStorage.getItem('user');
if (!userJson) {
  // If there is no user data, redirect the user to the signup page
  window.location.href = '/signup';
} else {
  // Parse the user's details from the JSON string
  const user = JSON.parse(userJson);
  
  // Display the user's name and email on the page
  const nameSpan = document.getElementById('name');
  const emailSpan = document.getElementById('email');
  nameSpan.textContent = user.name;
  emailSpan.textContent = user.email;
  
  // Add an event listener to the logout button that clears the user's data from local storage
  const logoutButton = document.getElementById('logout-button');
  logoutButton.addEventListener('click', function() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
  });
}