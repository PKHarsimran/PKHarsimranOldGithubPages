function toggleDarkMode() {
  var themeToggle = document.getElementById('themeToggle');
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '☀️';
    themeToggle.setAttribute('data-theme', 'dark');
  } else {
    themeToggle.innerHTML = '🌙';
    themeToggle.setAttribute('data-theme', 'light');
  }

  localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
}

window.onload = function () {
  var themeToggle = document.getElementById('themeToggle');

  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '☀️';
    themeToggle.setAttribute('data-theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    themeToggle.innerHTML = '🌙';
    themeToggle.setAttribute('data-theme', 'light');
  }
};
