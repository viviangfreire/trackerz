const showLoginBtn = document.getElementById("showLoginBtn");
const showCadastroBtn = document.getElementById("showCadastroBtn");
const loginForm = document.getElementById("loginForm");
const cadastroForm = document.getElementById("cadastroForm");

showLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("oculto");
  loginForm.classList.remove("oculto");
});

showCadastroBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cadastroForm.classList.add("oculto");
  cadastroForm.classList.remove("oculto");
});

document.addEventListener('DOMContentLoaded', function() {
  const openMenuButton = document.getElementById('openMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  openMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
  });
});
