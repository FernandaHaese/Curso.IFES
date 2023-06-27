//algumas ações que podemos fazer com o js

// escrever:
//document.write("Olá Mundo!");
//document.write(Date());
//document.write(document.title);
//document.write(document.characterSet);

//selecionar:
var corpo = document.body;
var h1_brasil = document.getElementById("pais_brasil");
var array_h2 = document.getElementsByTagName("h2");
var array_cidade = document.getElementsByName("cidade");
var array_cidade_mg = document.getElementsByClassName("cidade-mg");
var pais = document.querySelector("#pais_brasil"); // # para selecionar id
var cidade_es_0 = document.querySelector(".cidade-es"); // . para selecionar classe


//criar algo:
document.title = "Novo título"; //criando um novo título
//document.write("<p> innerText: " + h1_brasil.innerText);
//document.write("<p> innerText: " + h1_brasil.innerHTML);
//alert(h1_brasil.innerHTML); // criando um alerta
var h2_es = array_h2[0]; //criando uma variável
var h2_mg = array_h2[1]; // idem
var cidade_0 = array_cidade[0] //idem
var cidade_mg_1 = array_cidade_mg[1]; //idem
var cidade_es_0 = document.querySelector(".cidade-es"); //idem

//manipular algum elemento:
//corpo.style.background = "lightgray"; 
//h1_brasil.style.background = "yellow";
h2_es.style.color = "pink";
h2_mg.style.color = "darkred";
cidade_0.style.borderLeftColor = "black";
cidade_mg_1.style.borderLeftColor = "white";
pais.style.border = "2px solid black";
pais.style.textAlign = "center";
cidade_es_0.style.color = "blue";

