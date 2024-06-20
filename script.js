document.addEventListener('DOMContentLoaded', () => {
  // Função de redirecionamento para as páginas específicas de cada músculo
  function redirectToPage(page) {
    const pageMappings = {
      'left-forearm': 'ForeamWorkout.html',
      'ForeamWorkout': 'ForeamWorkout.html',
      'ForeamWorkout2': 'ForeamWorkout.html',
      'ForeamWorkoutesq2': 'ForeamWorkout.html',
      'left-shoulder': 'deltoids.html',
      'right-shoulder': 'deltoids.html',
      'chest': 'chest.html',
      'abdomen': 'abdomen.html',
      'biceps': 'biceps.html',
      'quadriceps': 'quadriceps.html',
      'quadricepsEsq': 'quadriceps.html',
      'trapezius': 'trapezius.html',
      'upperBack': 'upperBack.html',
      'triceps': 'triceps.html',
      'latissimusdorsi': 'latissimusdorsi.html',
      'glutes': 'glutes.html',
      'hamstrings': 'hamstrings.html',
      'calf': 'calf.html',
      'panturrilha': 'calf.html',
      'panturrilha_Esquerda': 'calf.html',
      'tricepsesq': 'triceps.html',
      'left-calf': 'calf.html'
    };

    const url = pageMappings[page];
    if (url) {
      window.location.href = url;
    } else {
      console.error(`URL não definida para o músculo "${page}".`);
    }
  }

  // Adiciona event listener para cada músculo
  const muscles = ['left-forearm', 'ForeamWorkout', 'ForeamWorkout2', 'ForeamWorkoutesq2', 'left-shoulder', 'right-shoulder', 'chest', 'abdomen', 'biceps', 'quadriceps', 'quadricepsEsq', 'trapezius', 'upperBack', 'triceps', 'latissimusdorsi', 'glutes', 'hamstrings', 'calf', 'panturrilha', 'panturrilha_Esquerda', 'tricepsesq', 'left-calf'];

  muscles.forEach(muscle => {
    const element = document.getElementById(muscle);
    if (element) {
      element.addEventListener('click', () => {
        redirectToPage(muscle);
      });
    } else {
      console.error(`Elemento "${muscle}" não encontrado.`);
    }
  });

  // Login functionality
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const currentUser = users.find(user => user.email === email && user.password === password);

      if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        window.location.href = 'profile.html';
      } else {
        alert('Login falhou. Por favor, verifique suas credenciais.');
      }
    });
  } else {
    console.error('Formulário de login não encontrado.');
  }

  // Register functionality
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const regName = document.getElementById('regName').value;
      const regEmail = document.getElementById('regEmail').value;
      const regPassword = document.getElementById('regPassword').value;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some(user => user.email === regEmail);

      if (userExists) {
        alert('Este email já está registrado. Por favor, faça login.');
        return;
      }

      const newUser = { name: regName, email: regEmail, password: regPassword };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Usuário registrado com sucesso! Por favor, faça login para continuar.');
      registerForm.reset();
    });
  } else {
    console.error('Formulário de registro não encontrado.');
  }

  // Profile page functionality
  const profilePage = window.location.pathname.includes('profile.html');
  if (profilePage) {
    const loginLink = document.getElementById('loginLink');
    const profileLink = document.getElementById('profileLink');
    const usernameSpan = document.getElementById('username');
    const emailSpan = document.getElementById('email');
    const logoutButton = document.getElementById('logoutButton');

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
      usernameSpan.textContent = currentUser.name;
      emailSpan.textContent = currentUser.email;
      loginLink.style.display = 'none';
      profileLink.style.display = 'inline';
    } else {
      if (!window.location.href.includes('login.html')) {
        window.location.href = 'login.html';
      }
      return;
    }

    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      window.location.href = 'login.html';
    });
  }

  // Verificar se o usuário está logado para mostrar o perfil e ocultar o link de login
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) {
    const profileLink = document.getElementById('profileLink');
    const loginLink = document.getElementById('loginLink');
    const usernameDisplay = document.getElementById('username-display');
    const emailSpan = document.getElementById('email');
    profileLink.style.display = 'inline-block';
    loginLink.style.display = 'none';
    usernameDisplay.textContent = currentUser.name;
    emailSpan.textContent = currentUser.email;
  }

  // Função para adicionar um novo treino com nome personalizado
  function addWorkout() {
    const workoutName = prompt('Digite o nome do novo treino:');
    if (!workoutName) return; // Se o usuário cancelar ou não inserir um nome, retorna sem fazer nada

    // Cria um novo elemento <div> para representar o treino
    const workoutDiv = document.createElement('div');
    workoutDiv.classList.add('workout'); // Adiciona a classe 'workout' ao elemento

    // Define o HTML interno do elemento com o nome do treino e um formulário para adicionar exercícios
    workoutDiv.innerHTML = `
      <div class="workout-header">
        <h3>${workoutName}</h3>
        <button class="remove-workout-btn">Remover Treino</button>
      </div>
      <div class="exercise-list"></div>
      <form class="add-exercise-form">
        <div class="exercise-inputs">
          <input type="text" placeholder="Nome do Exercício" required>
          <input type="number" placeholder="Séries" min="1" required>
          <input type="number" placeholder="Repetições" min="1" required>
          <button type="submit">Adicionar Exercício</button>
        </div>
      </form>
    `;

    // Seleciona o formulário de adicionar exercício dentro do novo treino criado
    const addExerciseForm = workoutDiv.querySelector('.add-exercise-form');

    // Adiciona um evento de escuta para quando o formulário de adicionar exercício for submetido
    addExerciseForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Previne o comportamento padrão de recarregar a página

      // Obtém os valores dos campos do formulário
      const exerciseName = addExerciseForm.querySelector('input[type="text"]').value;
      const sets = addExerciseForm.querySelector('input[type="number"][placeholder="Séries"]').value;
      const reps = addExerciseForm.querySelector('input[type="number"][placeholder="Repetições"]').value;

      // Verifica se todos os campos estão preenchidos
      if (!exerciseName || !sets || !reps) {
        alert('Por favor, preencha todos os campos do exercício.');
        return;
      }

      // Cria um novo elemento <div> para representar o exercício adicionado
      const exerciseItem = document.createElement('div');
      exerciseItem.classList.add('exercise-item'); // Adiciona a classe 'exercise-item' ao elemento
      exerciseItem.innerHTML = `
        <div class="exercise-info">
          <div class="exercise-name">${exerciseName}</div>
          <div class="exercise-details">Séries: <span class="sets">${sets}</span> x Repetições: <span class="reps">${reps}</span></div>
        </div>
        <button class="remove-exercise-btn">Remover</button>
      `;

      // Adiciona o novo exercício à lista de exercícios dentro do treino
      workoutDiv.querySelector('.exercise-list').appendChild(exerciseItem);

      // Seleciona o botão de remover exercício dentro do novo exercício adicionado
      const removeExerciseBtn = exerciseItem.querySelector('.remove-exercise-btn');
      // Adiciona um evento de escuta para quando o botão de remover exercício for clicado
      removeExerciseBtn.addEventListener('click', () => {
        exerciseItem.remove(); // Remove o exercício da lista de exercícios dentro do treino
      });

      // Limpa os campos do formulário de adicionar exercício após adicionar um novo exercício
      addExerciseForm.reset();
    });

    // Seleciona o botão de remover treino dentro do novo treino criado
    const removeWorkoutBtn = workoutDiv.querySelector('.remove-workout-btn');
    // Adiciona um evento de escuta para quando o botão de remover treino for clicado
    removeWorkoutBtn.addEventListener('click', () => {
      workoutDiv.remove(); // Remove o treino da lista de treinos
    });

    // Seleciona a lista de treinos dentro da página de treinos
    const workoutsList = document.querySelector('.workouts-list');
    // Adiciona o novo treino à lista de treinos dentro da página de treinos
    workoutsList.appendChild(workoutDiv);
  }

  // Seleciona o botão de adicionar treino dentro da página de treinos
  const addWorkoutBtn = document.querySelector('.add-workout-btn');
  // Adiciona um evento de escuta para quando o botão de adicionar treino for clicado
  addWorkoutBtn.addEventListener('click', addWorkout);
});
