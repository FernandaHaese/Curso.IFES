const txtSenha = document.getElementById("txtSenha");
const txtConfSenha = document.getElementById("txtConfSenha");
// Fazem referência aos campos senha e confirmação de senha

txtSenha.addEventListener("input", validarSenhas);
txtConfSenha.addEventListener("input", validarSenhas);
// Adiciona uma manipulador de eventos para validar as senhas

function validarSenhas() {
  if (txtSenha.value != txtConfSenha.value) {
    txtConfSenha.setCustomValidity("As senhas não conferem!");
    txtConfSenha.reportValidity();
  } else {
    txtConfSenha.setCustomValidity("");
  }
}
// Especifica a função que vai ser disparada pelo manipulador de eventos para validar senhas
