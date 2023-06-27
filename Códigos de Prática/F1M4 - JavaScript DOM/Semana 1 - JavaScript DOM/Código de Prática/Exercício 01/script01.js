var elementos = document.getElementsByTagName("*"); //selecionar todos elementos da página
document.write("Quantidade de elementos: " + elementos.length);

var todosElementos = "";

for (let e of elementos) {
  //document.write("<p>" + e.tagName); // é uma solução que acaba por criar um loop infinito, e por isso precisamos determinar uma var
  todosElementos = todosElementos + "<br>" + e.tagName;
}

document.write(todosElementos);

