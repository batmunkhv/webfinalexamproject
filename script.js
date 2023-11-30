let users = []; 

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    document.getElementById('error-message').innerText = 'Login successful!';
  } else {
    document.getElementById('error-message').innerText = 'Invalid username or password';
  }
}

function signup() {
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;


  const isUsernameTaken = users.some(u => u.username === newUsername);

  if (isUsernameTaken) {
    document.getElementById('signup-message').innerText = 'Username is already taken. Please choose another.';
  } else {
    users.push({ username: newUsername, password: newPassword });
    document.getElementById('signup-message').innerText = 'Sign up successful! You can now log in.';
  }
}
