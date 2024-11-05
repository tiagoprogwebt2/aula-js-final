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


/* Manipulação de Eventos */
const pagina = document.querySelector("body");
const exemplo1 = document.querySelector("#exemplo1");
const mensagem = document.querySelector("#mensagem");

/* Ouvinte de Evento
Usamos o Event Listener para monitorar a ocorrência
de algum evento (no caso, click) e, a partir da ocorrência,
executar ações na função callback. */
exemplo1.addEventListener("click", function(){
    pagina.style.fontFamily = "Verdana";
    mensagem.innerHTML = "<i>Fonte alterada com sucesso!</i> 😜";
    titulo.setAttribute("hidden", true);
});

/* Ouvinte de evento para teclado */
document.addEventListener("keydown", function(event){
    // Verificando se uma determinada tecla foi pressionada
    if(event.code === "KeyR"){
        pagina.style.fontFamily = "Times";
        mensagem.innerHTML = "";   
        titulo.removeAttribute("hidden");
    }
});


/* Exemplo 2: modo noturno */
const botao = document.querySelector("#exemplo2");
botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");

    /* Programe AQUI uma condicional
    que verifique se a classe "modo-noturno" está
    aplicada à página, e se estiver, o texto do
    botão deverá mudar para "Desativar". Caso contrário,
    deverá mostrar "Ativar". */
});


