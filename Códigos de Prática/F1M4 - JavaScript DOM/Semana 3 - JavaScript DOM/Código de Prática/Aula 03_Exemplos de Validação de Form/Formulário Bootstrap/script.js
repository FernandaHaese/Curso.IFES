(function () {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");
  // seleciona todos os elementos da página

  prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
// O trecho acima é um script de validação copiado do próprio site do bootstrap, encontrado nos seus documentos na opção validation. Diz respeito ao botão submit e checa se houve algum problema com o preenchimento dos campos do formulário. 


// O trecho abaixo é similar ao utilizado no arquivo do formulário js para a validação e confirmação de senha;
// Tem como diferença apenas as funções que alteram a mensagem padrão da classe bootstrap para campos preenchidos incorretamente. 
const txtSenha = document.getElementById("txtSenha");
const txtConfSenha = document.getElementById("txtConfSenha");

txtSenha.addEventListener("input", () => validarSenhas());
txtConfSenha.addEventListener("input", () => validarSenhas());

function validarSenhas() {
  if (txtSenha.value != txtConfSenha.value) {
    txtConfSenha.classList.remove("is-valid");
    txtConfSenha.classList.add("is-invalid");
    txtConfSenha.setCustomValidity("As senhas não conferem!");
  } else {
    txtConfSenha.classList.remove("is-invalid");
    txtConfSenha.classList.add("is-valid");
    txtConfSenha.setCustomValidity("");
  }
}
