document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const regName = document.getElementById('regName').value;
      const regEmail = document.getElementById('regEmail').value;
      const regPassword = document.getElementById('regPassword').value;

      // Recupera os usuários do localStorage ou inicia um array vazio se não houver nenhum
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some(user => user.email === regEmail);

      if (userExists) {
        alert('Este email já está registrado. Por favor, faça o login.');
        return;
      }

      // Cria um novo usuário e o adiciona à lista de usuários
      const newUser = { name: regName, email: regEmail, password: regPassword };
      users.push(newUser);

      // Salva a lista atualizada de usuários no localStorage
      localStorage.setItem('users', JSON.stringify(users));

      alert('Usuário registrado com sucesso! Por favor, faça o login para continuar.');
      registerForm.reset();
    });
  } else {
    console.error('Formulário de registro não encontrado.');
  }
});
