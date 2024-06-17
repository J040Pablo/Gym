// Funções de redirecionamento para as páginas específicas de cada músculo
function redirectToChestSite() {
    window.location.href = "chest.html";
}

function redirectToDeltoidsSite() {
    window.location.href = "deltoids.html";
}

function redirectToAbdomenSite() {
    window.location.href = "abdomen.html";
}

function redirectToBicepsSite() {
    window.location.href = "biceps.html";
}

function redirectToQuadricepsSite() {
    window.location.href = "quadriceps.html";
}

function redirectToQuadricepsEsqSite() {
    window.location.href = "quadriceps.html";
}

function redirectToTrapeziusSite() {
    window.location.href = "trapezius.html";
}

function redirectToUpperBackSite() {
    window.location.href = "upperBack.html";
}

function redirectToTricepsSite() {
    window.location.href = "triceps.html";
}

function redirectToLatissimusDorsiSite() {
    window.location.href = "latissimusdorsi.html";
}

function redirectToGlutesSite() {
    window.location.href = "glutes.html";
}

function redirectToHamstringsSite() {
    window.location.href = "hamstrings.html";
}

function redirectToCalfSite() {
    window.location.href = "calf.html";
}

function redirectToPanturrilhaSite() {
    window.location.href = "calf.html";
}

function redirectToPanturrilhaEsquerdaSite() {
    window.location.href = "calf.html";
}

function redirectToLeftForearmSite() {
    window.location.href = "ForearmWorkout.html";
}

function redirectToForearmWorkoutPage() {
    window.location.href = "ForearmWorkout.html";
}

function redirectToForearmWorkout2Page() {
    window.location.href = "ForearmWorkout2.html";
}

function redirectToForearmWorkoutesq2Page() {
    window.location.href = "ForearmWorkoutesq2.html";
}

function redirectToTricepsEsqSite() {
    window.location.href = "triceps.html";
}

function leftCalfRedirect() {
    window.location.href = "calf.html";
}

function redirectToPage(page) {
    window.location.href = `${page}.html`;
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const profilePage = window.location.pathname.includes('profile.html');
  
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        // Simulação de recuperação de usuários do localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUser = users.find(user => user.email === email && user.password === password);
  
        if (currentUser) {
          // Se o login for bem-sucedido, salva o usuário atual no localStorage
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          // Redireciona para a página de perfil
          window.location.href = 'profile.html';
        } else {
          // Se as credenciais estiverem incorretas, exibe uma mensagem de erro (pode ser ajustado conforme necessário)
          alert('Login failed. Please check your credentials.');
        }
      });
    } else {
      console.error('Login form not found.');
    }
  
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
  
    if (profilePage) {
      const loginLink = document.getElementById('loginLink');
      const profileLink = document.getElementById('profileLink');
      const usernameSpan = document.getElementById('username');
      const emailSpan = document.getElementById('email');
      const logoutButton = document.getElementById('logoutButton');
  
      // Verifica se há um usuário logado no localStorage
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
      if (currentUser) {
        // Se houver um usuário logado, mostra o nome de usuário e email
        usernameSpan.textContent = currentUser.name;
        emailSpan.textContent = currentUser.email;
        loginLink.style.display = 'none'; // Esconde o link de login
        profileLink.style.display = 'inline'; // Mostra o link de perfil
      } else {
        // Se não houver usuário logado, redireciona para a página de login apenas se não estiver nela
        if (!window.location.href.includes('login.html')) {
          window.location.href = 'login.html';
        }
        return;
      }
  
      // Adiciona evento de logout ao botão
      logoutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser'); // Remove o usuário logado do localStorage
        window.location.href = 'login.html'; // Redireciona para a página de login
      });
    }
  });
  