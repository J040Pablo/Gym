document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
  
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const regName = document.getElementById('regName').value;
      const regEmail = document.getElementById('regEmail').value;
      const regPassword = document.getElementById('regPassword').value;
  
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some(user => user.email === regEmail);
  
      if (userExists) {
        alert('This email is already registered. Please log in.');
        return;
      }
  
      const newUser = { name: regName, email: regEmail, password: regPassword };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('User registered successfully! Please log in to continue.');
      registerForm.reset();
    });
  });
  