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

function redirectToForearmWorkoutPage() {
  window.location.href = "ForeamWorkout.html";
}

function redirectToPage(page) {
  window.location.href = `${page}.html`;
}

document.addEventListener('DOMContentLoaded', () => {
  const muscleSections = document.querySelectorAll('.muscle');
  
  muscleSections.forEach(section => {
      section.addEventListener('click', () => {
          switch(section.className.split(' ')[1]) {
              case 'trapezius':
                  redirectToTrapeziusSite();
                  break;
              case 'upperBack':
                  redirectToUpperBackSite();
                  break;
              case 'triceps':
              case 'triceps2':
              case 'tricepsesq':
                  redirectToTricepsSite();
                  break;
              case 'latissimusdorsi':
                  redirectToLatissimusDorsiSite();
                  break;
              case 'glutes':
                  redirectToGlutesSite();
                  break;
              case 'hamstrings':
                  redirectToHamstringsSite();
                  break;
              case 'calf':
              case 'panturrilha':
              case 'panturrilha_Esquerda':
              case 'left-calf':
                  redirectToCalfSite();
                  break;
              case 'deltoids2':
                  redirectToDeltoidsSite();
                  break;
              case 'quadriceps2':
              case 'quadriceps':
              case 'quadricepsEsq':
                  redirectToQuadricepsSite();
                  break;
              case 'biceps2':
              case 'biceps':
              case 'left-biceps':
                  redirectToBicepsSite();
                  break;
              case 'left-shoulder':
              case 'right-shoulder':
                  redirectToDeltoidsSite();
                  break;
              case 'antebraço':
              case 'left-forearm':
              case 'ForeamWorkout':
              case 'ForeamWorkout2':
              case 'ForeamWorkoutesq2':
                  redirectToForearmWorkoutPage();
                  break;
              case 'chest':
                  redirectToChestSite();
                  break;
              case 'abdomen':
                  redirectToAbdomenSite();
                  break;
              case 'cabeca':
              case 'cabecaAtras':
                  // Adicione a função de redirecionamento correspondente aqui
                  break;
              case 'pe':
              case 'peAtras':
                  // Adicione a função de redirecionamento correspondente aqui
                  break;
              default:
                  console.error('Classe de músculo não reconhecida:', section.className);
          }
      });
  });


  //==================================Login do Usuario=========================================================
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
        alert('Login falhou. Por favor, verifique suas credenciais.');
      }
    });
  } else {
    console.error('Formulário de login não encontrado.');
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
        alert('Este email já está registrado. Por favor, faça login.');
        return;
      }

      const newUser = { name: regName, email: regEmail, password: regPassword };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registro bem-sucedido. Agora você pode fazer login.');
    });
  } else {
    console.error('Formulário de registro não encontrado.');
  }
});
