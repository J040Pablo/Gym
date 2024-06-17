document.addEventListener('DOMContentLoaded', () => {
  const usernameDisplay = document.getElementById('username-display');
  const emailSpan = document.getElementById('email');
  const logoutButton = document.getElementById('logoutButton');
  const loginLink = document.getElementById('loginLink');
  const profileLink = document.getElementById('profileLink');
  const changePictureBtn = document.getElementById('change-picture-btn');
  const fileInput = document.getElementById('file-input');
  const profileImg = document.getElementById('profile-img');
  const addWorkoutBtn = document.getElementById('addWorkoutBtn');
  const workoutList = document.getElementById('workoutList');

  // Verifica se o usuário está logado para mostrar o perfil e ocultar o link de login
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
    // Mostra o perfil do usuário
    profileLink.style.display = 'inline-block';
    loginLink.style.display = 'none';
    usernameDisplay.textContent = currentUser.name; // Atualiza o nome de usuário no perfil
    emailSpan.textContent = currentUser.email;
  }

  // Função para adicionar um novo treino com nome personalizado
  function addWorkout() {
    const workoutName = prompt('Digite o nome do novo treino:');
    if (!workoutName) return; // Se o usuário cancelar ou não inserir um nome, não faz nada

    const workoutDiv = document.createElement('div');
    workoutDiv.classList.add('workout');

    workoutDiv.innerHTML = `
      <div class="workout-header">
        <h3>${workoutName}</h3>
        <button class="remove-workout-btn">Remover Treino</button>
      </div>
      <div class="exercise-list">
        <!-- Exercícios serão adicionados dinamicamente aqui -->
      </div>
      <form class="add-exercise-form">
        <input type="text" placeholder="Nome do Exercício" required>
        <input type="number" placeholder="Séries" min="1" required>
        <input type="number" placeholder="Repetições" min="1" required>
        <button type="submit">Adicionar Exercício</button>
      </form>
    `;

    // Adiciona evento para submissão do formulário de adicionar exercício
    const addExerciseForm = workoutDiv.querySelector('.add-exercise-form');
    addExerciseForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const exerciseName = addExerciseForm.querySelector('input[type="text"]').value;
      const sets = addExerciseForm.querySelector('input[type="number"][placeholder="Séries"]').value;
      const reps = addExerciseForm.querySelector('input[type="number"][placeholder="Repetições"]').value;

      if (!exerciseName || !sets || !reps) {
        alert('Por favor, preencha todos os campos do exercício.');
        return;
      }

      const exerciseItem = document.createElement('div');
      exerciseItem.classList.add('exercise-item');
      exerciseItem.innerHTML = `
        <div class="exercise-info">
          <div class="exercise-name">${exerciseName}</div>
          <div class="exercise-details">Séries: <span class="sets">${sets}</span> x Repetições: <span class="reps">${reps}</span></div>
        </div>
        <button class="remove-exercise-btn">Remover</button>
      `;
      workoutDiv.querySelector('.exercise-list').appendChild(exerciseItem);

      // Adiciona evento para remover exercício
      const removeExerciseBtn = exerciseItem.querySelector('.remove-exercise-btn');
      removeExerciseBtn.addEventListener('click', () => {
        exerciseItem.remove();
      });

      // Limpa o formulário
      addExerciseForm.reset();
    });

    // Adiciona evento para remover o treino
    const removeWorkoutBtn = workoutDiv.querySelector('.remove-workout-btn');
    removeWorkoutBtn.addEventListener('click', () => {
      workoutDiv.remove();
    });

    workoutList.appendChild(workoutDiv);
  }

  // Adiciona evento para adicionar novo treino quando clicar no botão "+ Novo Treino"
  addWorkoutBtn.addEventListener('click', addWorkout);

  // Evento para alterar a foto de perfil
  changePictureBtn.addEventListener('click', () => {
    fileInput.click(); // Simula o clique no input type file para selecionar uma imagem
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function() {
        profileImg.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // Logout do usuário
  logoutButton.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html'; // Redireciona para a página de login
  });

  // Manipula o formulário de registro
  const registerForm = document.getElementById('registerForm');

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita o comportamento padrão de envio do formulário

      const regName = document.getElementById('regName').value;
      const regEmail = document.getElementById('regEmail').value;
      const regPassword = document.getElementById('regPassword').value;

      // Recupera usuários armazenados no localStorage ou inicializa um array vazio
      const users = JSON.parse(localStorage.getItem('users')) || [];
      // Verifica se o email já está registrado
      const userExists = users.some(user => user.email === regEmail);

      if (userExists) {
        alert('Este email já está registrado. Por favor, faça login.');
        return;
      }

      // Cria um novo usuário e o adiciona ao array de usuários
      const newUser = { name: regName, email: regEmail, password: regPassword };
      users.push(newUser);
      // Armazena o array atualizado de usuários no localStorage
      localStorage.setItem('users', JSON.stringify(users));
      alert('Usuário registrado com sucesso! Por favor, faça login para continuar.');
      registerForm.reset();
    });
  }
});
