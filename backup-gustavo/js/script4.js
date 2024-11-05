//introdução a loopings e introdução a DOM e Eventos 

//for 

for(let i = 1; i<=10; i++){
    document.write(2*i);
}

//while 

let j = 1;
while(j<=10){
    document.write(2*j);
    j++;
}

//do while

let k = 1;

do{
    document.write(2*k);
    i++;
}while(k<=10)

//exercicios

//Faça um programa que receba um valor do usuário e apresente a tabuada até 10.
//Faça um programa que receba um valor e calcule 12 parcelas com juros acrescentado em cada parcela e apresenta as parcelas para o usuário. 
//Faça um programa que o usuário responde se é bonito e só sai dele se responder que não

//DOM e Eventos introdução (é só uma degustação)

const botao = document.querySelector('#botao');
const body = document.querySelector('body');

botao.addEventListener('click', ()=> body.style.backgroundColor='black');

