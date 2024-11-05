//revisão sobre condicionais if e else 

var idade = prompt('Digite sua idade:: ')

if( idade >= 18 ){
    document.write('Você da turma adulta') 
}else if(idade > 14){
    document.write('Você é da turma juvenil')
}else{
    document.write('Você é da turma infantil')
}

//introdução a funções 

function blocoDeTexto(){
    document.write('<br><br>Nome do usuário <br>');
    document.write('data da publicação<br>');
    document.write('-----Imagem------<br>');
}


document.write('Simulação de postagens')
blocoDeTexto();
blocoDeTexto();
blocoDeTexto();

//função com paramêtros
function blocoDeTexto(nome, data){
    document.write(`<br><br> ${nome} <br>`);
    document.write(`${data} <br>`);
    document.write('-----Imagem------<br>');
}

document.write('Simulação de postagens 2')
blocoDeTexto('Gustavo','14/11');
blocoDeTexto('Fernanda','12/11');
blocoDeTexto('Gabriel','11/10');
