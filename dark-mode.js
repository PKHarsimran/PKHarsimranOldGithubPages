// Define a function named toggleDarkMode
function toggleDarkMode() {
  // Get the element with the ID 'themeToggle' and assign it to the variable themeToggle
  var themeToggle = document.getElementById('themeToggle');
  
  // Toggle the 'dark-mode' class on the body element.
  // If it's there, remove it. If it's not there, add it.
  document.body.classList.toggle('dark-mode');

  // Check if the body has the class 'dark-mode'
  if (document.body.classList.contains('dark-mode')) {
    // If 'dark-mode' is present, change the innerHTML of themeToggle to '☀️'
    themeToggle.innerHTML = '☀️';
    // Set the 'data-theme' attribute of themeToggle to 'dark'
    themeToggle.setAttribute('data-theme', 'dark');
  } else {
    // If 'dark-mode' is not present, change the innerHTML of themeToggle to '🌙'
    themeToggle.innerHTML = '🌙';
    // Set the 'data-theme' attribute of themeToggle to 'light'
    themeToggle.setAttribute('data-theme', 'light');
  }

  // Save the current dark mode state to localStorage. 
  // It stores whether the body has the 'dark-mode' class.
  localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
}

// This function runs when the window has finished loading
window.onload = function () {
  // Get the element with the ID 'themeToggle' and assign it to the variable themeToggle
  var themeToggle = document.getElementById('themeToggle');

  // Retrieve the 'dark-mode' value from localStorage. 
  // If it is 'true', add 'dark-mode' class to the body and adjust themeToggle accordingly
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '☀️';
    themeToggle.setAttribute('data-theme', 'dark');
  } else {
    // If the 'dark-mode' value is not 'true', remove 'dark-mode' class from the body
    // and set the themeToggle to its light mode state
    document.body.classList.remove('dark-mode');
    themeToggle.innerHTML = '🌙';
    themeToggle.setAttribute('data-theme', 'light');
  }
};
