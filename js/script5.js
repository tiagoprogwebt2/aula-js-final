/* Funções de seleção no DOM

-getElementById('parâmetro')
Seleciona UM ELEMENTO através do ID.

-querySelector('parâmetro')
Seleciona UM ELEMENTO através de um seletor.

-querySelectorAll('parâmetro')
Seleciona VÁRIOS ELEMENTOS através de seletores. */

/* Exemplos: acessando/manipulando o DOM */

// Acessando e selecionando
const subtitulo = document.getElementById("subtitulo-dom");
const titulo = document.querySelector("h1");
const variosElementos = document.querySelectorAll("h3", "a", "hr");

console.log(subtitulo);
console.log(titulo);
console.log(variosElementos);





