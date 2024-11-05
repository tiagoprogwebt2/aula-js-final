//revisão sobre tipos de dados e variaveis

var nome = 'gustavo';
let idade = 12;
const vivo = true;

//arrays
var nomesArray = ['gustavo','Juliana','Amanda'];

//objetos
var dadosUsuario = {
    nome: 'Gustavo',
    idade: 12,
    vivo: true
}

//introdução a condicionais

/* Operadores de comparação

== -> Igual
!= -> Diferente 
=== -> Exatamente igual
!== -> Exatamente diferente
> -> Maior
< -> Menor 
>= -> Maior ou igual
<= -> Menor ou igual
! -> Negação 

Operadores lógicos

|| -> OU (or) 
&& -> E (and)
*/

//operador ternário
document.write( idade >= 18? 'Você é um adulto' : 'Você é menor de idade' );

//if e else 

if( idade >= 18 ){
    document.write('Você é um adulto') 
}else{
    document.write('Você é menor de idade')
}

//if, else if e else

if( idade >= 18 ){
    document.write('Você é um adulto') 
}else if(idade > 16){
    document.write('Você é quase adulto')
}else{
    document.write('Você é menor de idade')
}
