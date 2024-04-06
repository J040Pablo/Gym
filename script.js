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

// Seletor para o botão do bíceps esquerdo
var leftBicepsButton = document.getElementById("left-biceps");

// Adiciona um ouvinte de evento de clique para o botão do bíceps esquerdo
leftBicepsButton.addEventListener("click", redirectToLeftBicepsPage);

// Função para redirecionar para o site do bíceps
function redirectToBicepsSite() {
    window.location.href = "biceps.html";
}

// Função para redirecionar para o site do quadriceps
function redirectToQuadricepsSite() {
    window.location.href = "quadriceps.html";
}

// Função para redirecionar para o site do trapezius
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

// Função para redirecionar para o site do foream workout
function redirectToForearmWorkoutSite() {
    window.location.href = "ForeamWorkout.html";
}

// Função para redirecionar para o site da panturrilha
function redirectToPanturrilhaSite() {
    window.location.href = "calf.html";
}

// Função para redirecionar para o site da panturrilha esquerda
function redirectToLeftPanturrilhaSite() {
    window.location.href = "calf.html";
}

// Seleciona o botão da panturrilha e o botão da panturrilha esquerda
var panturrilhaButton = document.querySelector(".muscle.panturrilha");
var leftPanturrilhaButton = document.querySelector(".muscle.left-calf");

// Adiciona ouvintes de evento de clique para cada botão de panturrilha
panturrilhaButton.addEventListener("click", redirectToPanturrilhaSite);
leftPanturrilhaButton.addEventListener("click", redirectToLeftPanturrilhaSite);

// Função para redirecionar para o site do antebraço
function redirectToAntebraçoSite() {
    window.location.href = "ForeamWorkout.html";
}

// Função para redirecionar para o site do antebraço esquerdo
function redirectToLeftForearmSite() {
    window.location.href = "file:///C:/Users/jo%C3%A3o%20pablo/OneDrive/Documentos/GitHub/Gym/ForeamWorkout.html";
}

// Seletor para o botão do antebraço esquerdo
var leftForearmButton = document.querySelector(".muscle.left-forearm");

// Adiciona um ouvinte de evento de clique para o botão do antebraço esquerdo
leftForearmButton.addEventListener("click", redirectToLeftForearmSite);

// Função para redirecionar para o site do trapézio
function redirectToTrapeziusSite() {
    window.location.href = "trapezius.html";
}

// Seleciona os botões dos músculos
var chestButton = document.querySelector(".muscle.chest");
var deltoidsButtons = document.querySelectorAll(".muscle.right-shoulder, .muscle.left-shoulder");
var abdomenButton = document.querySelector(".muscle.abdomen");
var bicepsButton = document.querySelector(".muscle.biceps");
var quadricepsButton = document.querySelector(".muscle.quadriceps");
var trapeziusButton = document.querySelector(".muscle.trapezius");
var upperBackButton = document.querySelector(".muscle.upperBack");
var tricepsButton = document.querySelector(".muscle.triceps");
var latissimusDorsiButton = document.querySelector(".muscle.latissimusdorsi");
var glutesButton = document.querySelector(".muscle.glutes");
var hamstringsButton = document.querySelector(".muscle.hamstrings");
var calfButton = document.querySelector(".muscle.calf");
var foreamWorkoutButton = document.querySelector(".muscle.ForeamWorkout");
var panturrilhaButton = document.querySelector(".muscle.panturrilha");
var antebraçoButton = document.querySelector(".muscle.antebraco");
var leftBicepsButton = document.querySelector(".muscle.leftBiceps");
var leftForearmButton = document.querySelector(".muscle.left-forearm");

// Adiciona ouvintes de evento de clique para cada botão de músculo
chestButton.addEventListener("click", redirectToChestSite);
deltoidsButtons.forEach(function(button) {
    button.addEventListener("click", redirectToDeltoidsSite);
});
abdomenButton.addEventListener("click", redirectToAbdomenSite);
bicepsButton.addEventListener("click", redirectToBicepsSite);
quadricepsButton.addEventListener("click", redirectToQuadricepsSite);
trapeziusButton.addEventListener("click", redirectToTrapeziusSite);
upperBackButton.addEventListener("click", redirectToUpperBackSite);
tricepsButton.addEventListener("click", redirectToTricepsSite);
latissimusDorsiButton.addEventListener("click", redirectToLatissimusDorsiSite);
glutesButton.addEventListener("click", redirectToGlutesSite);
hamstringsButton.addEventListener("click", redirectToHamstringsSite);
calfButton.addEventListener("click", redirectToCalfSite);
foreamWorkoutButton.addEventListener("click", redirectToForearmWorkoutSite);
panturrilhaButton.addEventListener("click", redirectToPanturrilhaSite);
antebracoButton.addEventListener("click", redirectToAntebraçoSite);
leftBicepsButton.addEventListener("click", redirectToLeftBicepsSite);
leftForearmButton.addEventListener("click", redirectToLeftForearmSite);
