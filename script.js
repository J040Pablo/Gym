//leva para o perfil; ao fazer o login

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;

    if (email && password) {
      window.location.href = 'perfil.html';
    } else {
      alert('Email ou senha inválidos');
    }
  });
  
//botões para acessar a pagina para cada musculo

// Função para redirecionar para o site do peito
function redirectToChestSite() {
    window.location.href = "chest.html";
}

// Função para redirecionar para o site do deltoids (deltoide)
function redirectToDeltoidsSite() {
    window.location.href = "deltoids.html";
}

// Função para redirecionar para o site do abdomen
function redirectToAbdomenSite() {
    window.location.href = "abdomen.html";
}

// Função para redirecionar para a página do bíceps esquerdo
function redirectToLeftBicepsPage() {
    window.location.href = "biceps.html";
}

// Função para redirecionar para o site do bíceps
function redirectToBicepsSite() {
    window.location.href = "biceps.html";
}

// Função para redirecionar para o site do quadriceps
function redirectToQuadricepsSite() {
    window.location.href = "quadriceps.html";
}

// Função para redirecionar para o site do quadriceps esquerdo
function redirectToQuadricepsEsqSite() {
    window.location.href = "quadriceps.html";
}

// Função para redirecionar para o site do trapézio
function redirectToTrapeziusSite() {
    window.location.href = "trapezius.html";
}

// Função para redirecionar para o site do upper back
function redirectToUpperBackSite() {
    window.location.href = "upperBack.html";
}

// Função para redirecionar para o site do triceps
function redirectToTricepsSite() {
    window.location.href = "triceps.html";
}

// Função para redirecionar para o site do latissimus dorsi
function redirectToLatissimusDorsiSite() {
    window.location.href = "latissimusdorsi.html";
}

// Função para redirecionar para o site do glutes
function redirectToGlutesSite() {
    window.location.href = "glutes.html";
}

// Função para redirecionar para o site do hamstrings
function redirectToHamstringsSite() {
    window.location.href = "hamstrings.html";
}

// Função para redirecionar para o site do calf
function redirectToCalfSite() {
    window.location.href = "calf.html";
}

// Função para redirecionar para o site da panturrilha
function redirectToPanturrilhaSite() {
    window.location.href = "calf.html";
}

// Função para redirecionar para o site da panturrilha esquerda
function redirectToPanturrilhaEsquerdaSite() {
    window.location.href = "calf.html";
}

// Função para redirecionar para a página do antebraço esquerdo
function redirectToLeftForearmSite() {
    window.location.href = "ForeamWorkout.html";
}

// Função para redirecionar para a página ForearmWorkout.html
function redirectToForearmWorkoutPage() {
    window.location.href = "ForeamWorkout.html";
}

// Função para redirecionar para a página ForearmWorkout2.html
function redirectToForearmWorkout2Page() {
    window.location.href = "ForeamWorkout.html";
}

// Função para redirecionar para a página ForearmWorkoutesq2.html
function redirectToForearmWorkoutesq2Page() {
    window.location.href = "ForeamWorkout.html";
}

// Função para redirecionar para o site do triceps esquerdo
function redirectToTricepsEsqSite() {
    window.location.href = "triceps.html";
}

// Função para redirecionar para o site da panturrilha esquerda
function leftCalfRedirect() {
    window.location.href = "calf.html";
}

// Seleciona os botões dos músculos
var chestButton = document.querySelector(".muscle.chest");
var deltoidsButtons = document.querySelectorAll(".muscle.right-shoulder, .muscle.left-shoulder");
var abdomenButton = document.querySelector(".muscle.abdomen");
var bicepsButton = document.querySelector(".muscle.biceps");
var quadricepsButton = document.querySelector(".muscle.quadriceps");
var quadricepsEsqButton = document.querySelector(".muscle.quadricepsEsq");
var trapeziusButton = document.querySelector(".muscle.trapezius");
var upperBackButton = document.querySelector(".muscle.upperBack");
var tricepsButton = document.querySelector(".muscle.triceps");
var latissimusDorsiButton = document.querySelector(".muscle.latissimusdorsi");
var glutesButton = document.querySelector(".muscle.glutes");
var hamstringsButton = document.querySelector(".muscle.hamstrings");
var calfButton = document.querySelector(".muscle.calf");
var panturrilhaButton = document.querySelector(".muscle.panturrilha");
if (panturrilhaButton) {
    panturrilhaButton.addEventListener("click", redirectToPanturrilhaSite);
}
var panturrilhaEsquerdaButton = document.querySelector(".panturrilha_Esquerda");
if (panturrilhaEsquerdaButton) {
    panturrilhaEsquerdaButton.addEventListener("click", redirectToPanturrilhaEsquerdaSite);
} else {
    console.error("Elemento .panturrilha_Esquerda não encontrado no DOM.");
}
var leftForearmButton = document.querySelector(".muscle.left-forearm"); // Corrigido
var ForearmWorkoutButton = document.querySelector(".muscle.ForeamWorkout");
var ForearmWorkout2Button = document.querySelector(".muscle.ForeamWorkout2");
var ForearmWorkoutesq2Button = document.querySelector(".muscle.ForeamWorkoutesq2");
var leftBicepsButton = document.querySelector(".muscle.left-biceps");
var tricepsEsqButton = document.querySelector(".muscle.tricepsesq");
var leftCalfButton = document.querySelector(".left-calf");

// Adiciona ouvintes de evento de clique para cada botão de músculo
chestButton.addEventListener("click", redirectToChestSite);
deltoidsButtons.forEach(function(button) {
    button.addEventListener("click", redirectToDeltoidsSite);
});
abdomenButton.addEventListener("click", redirectToAbdomenSite);
bicepsButton.addEventListener("click", redirectToBicepsSite);
quadricepsButton.addEventListener("click", redirectToQuadricepsSite);
quadricepsEsqButton.addEventListener("click", redirectToQuadricepsEsqSite);
panturrilhaEsquerdaButton.addEventListener("click", redirectToPanturrilhaEsquerdaSite);
leftForearmButton.addEventListener("click", redirectToForearmWorkoutPage);
ForearmWorkoutButton.addEventListener("click", redirectToForearmWorkoutPage);
ForearmWorkout2Button.addEventListener("click", redirectToForearmWorkout2Page);
ForearmWorkoutesq2Button.addEventListener("click", redirectToForearmWorkoutesq2Page);
trapeziusButton.addEventListener("click", redirectToTrapeziusSite);
upperBackButton.addEventListener("click", redirectToUpperBackSite);
tricepsButton.addEventListener("click", redirectToTricepsSite);
latissimusDorsiButton.addEventListener("click", redirectToLatissimusDorsiSite);
glutesButton.addEventListener("click", redirectToGlutesSite);
hamstringsButton.addEventListener("click", redirectToHamstringsSite);
calfButton.addEventListener("click", redirectToCalfSite);
panturrilhaButton.addEventListener("click", redirectToPanturrilhaSite);
leftBicepsButton.addEventListener("click", redirectToLeftBicepsPage);
tricepsEsqButton.addEventListener("click", redirectToTricepsEsqSite);
leftCalfButton.addEventListener("click", leftCalfRedirect);