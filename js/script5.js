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
const variosElementos = document.querySelectorAll("h3, a, hr");
const descricaoDom = document.querySelector(".descricao-dom");

console.log(subtitulo);
console.log(titulo);
console.log(variosElementos[3]); 

// Modificando elementos

// Alteração de conteúdo textual e/ou tags
titulo.innerHTML = "<i>Olá JavaScript!</i>";

// CSS inline (CSS in JS)
// subtitulo.style.backgroundColor = "pink";
subtitulo.style.backgroundColor = "rgba(202, 0, 0, 0.5)";

// CSS através de classes via JS
descricaoDom.classList.add("destaque");





