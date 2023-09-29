const showLoginBtn = document.getElementById("showLoginBtn");
const showCadastroBtn = document.getElementById("showCadastroBtn");
const loginForm = document.getElementById("loginForm");
const cadastroForm = document.getElementById("cadastroForm");

showLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("oculto");
  cadastroForm.classList.add("oculto");
});

showCadastroBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cadastroForm.classList.remove("oculto");
  loginForm.classList.add("oculto");
});
