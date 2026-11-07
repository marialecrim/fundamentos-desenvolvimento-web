/*JS - Funcionalidades do site (É responsável pelas interações e comportamentos.)*/

//Cria uma variável chamada botao e procura no HTML o elemento que possui o ID "inscrever"
const botao = document.querySelector("#inscrever");
//Adiciona um evento de clique ao botão
botao.addEventListener("click", function () {
//Exibe uma mensagem de aviso na tela quando o botão é clicado
  alert("Você testou o botão de inscreva-se!");
});
//Cria uma variável e procura no HTML o botão com o ID "saibamais"
const saibaMais = document.querySelector("#saibamais");
//Adiciona um evento de clique ao botão
saibaMais.addEventListener("click", function () {
//Exibe uma mensagem quando o botão é clicado
  alert("Você testou o botão de saiba mais!");

});