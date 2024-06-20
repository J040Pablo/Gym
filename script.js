document.addEventListener('DOMContentLoaded', () => {
  // Funções de redirecionamento para as páginas específicas de cada músculo
  function redirectToPage(page) {
    if (['left-forearm', 'ForeamWorkout', 'ForeamWorkout2', 'ForeamWorkoutesq2'].includes(page)) {
      window.location.href = 'file:///C:/Users/jo%C3%A3o%20pablo/OneDrive/Documentos/GitHub/Gym/ForeamWorkout.html';
    } else {
      window.location.href = `${page}.html`;
    }
  }

  // Adiciona event listeners para cada seção de músculo
  const muscleRedirects = {
    'chest': 'chest',
    'deltoids2': 'deltoids',
    'abdomen': 'abdomen',
    'biceps': 'biceps',
    'quadriceps': 'quadriceps',
    'quadricepsEsq': 'quadriceps',
    'trapezius': 'trapezius',
    'upperBack': 'upperBack',
    'triceps': 'triceps',
    'latissimusdorsi': 'latissimusdorsi',
    'glutes': 'glutes',
    'hamstrings': 'hamstrings',
    'calf': 'calf',
    'panturrilha': 'calf',
    'panturrilha_Esquerda': 'calf',
    'left-forearm': 'ForeamWorkout',
    'ForeamWorkout': 'ForeamWorkout',
    'ForeamWorkout2': 'ForeamWorkout',
    'ForeamWorkoutesq2': 'ForeamWorkout',
    'tricepsesq': 'triceps',
    'left-calf': 'calf'
  };

  Object.keys(muscleRedirects).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('click', () => redirectToPage(muscleRedirects[id]));
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
        alert('Login failed. Please check your credentials.');
      }
    });
  } else {
    console.error('Login form not found.');
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
        alert('This email is already registered. Please log in.');
        return;
      }

      const newUser = { name: regName, email: regEmail, password: regPassword };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('User registered successfully! Please log in to continue.');
      registerForm.reset();
    });
  } else {
    console.error('Register form not found.');
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

  // Verify if the user is logged in to show the profile and hide the login link
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

  // Function to add a new workout with a custom name
  function addWorkout() {
    const workoutName = prompt('Digite o nome do novo treino:');
    if (!workoutName) return;

    const workoutDiv = document.createElement('div');
    workoutDiv.classList.add('workout');

    workoutDiv.innerHTML = `
      <div class="workout-header">
        <h3>${workoutName}</h3>
        <button class="remove-workout-btn">Remover Treino</button>
      </div>
      <div class="exercise-list"></div>
      <form class="add-exercise-form">
        <input type="text" placeholder="Nome do Exercício" required>
        <input type="number" placeholder="Séries" min="1" required>
        <input type="number" placeholder="Repetições" min="1" required>
        <button type="submit">Adicionar Exercício</button>
      </form>
    `;

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

      const removeExerciseBtn = exerciseItem.querySelector('.remove-exercise-btn');
      removeExerciseBtn.addEventListener('click', () => {
        exerciseItem.remove();
      });

      addExerciseForm.reset();
    });

    const removeWorkoutBtn = workoutDiv.querySelector('.remove-workout-btn');
    removeWorkoutBtn.addEventListener('click', () => {
      workoutDiv.remove();
    });

    document.getElementById('workoutList').appendChild(workoutDiv);
  }

  const addWorkoutBtn = document.getElementById('addWorkoutBtn');
  addWorkoutBtn.addEventListener('click', addWorkout);

  const changePictureBtn = document.getElementById('change-picture-btn');
  const fileInput = document.getElementById('file-input');
  const profileImg = document.getElementById('profile-img');

  changePictureBtn.addEventListener('click', () => {
    fileInput.click();
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
});
