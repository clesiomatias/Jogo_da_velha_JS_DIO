var jogador, vencedor =null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudaJog('X');

function escolheuQuadrado(id){

    if(vencedor!==null){
        return;
    }
    var quadrado = document.getElementById(id);
    quadrado.innerHTML=jogador;
    quadrado.style.color = '#000';
    if (jogador ==='X'){
        jogador = 'O';
    }else{
        jogador='X';
    }
    mudaJog(jogador);
    checaVencedor();
}
function mudaJog(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML=jogador;
}

function checaVencedor(){
    var quadrado1 = document.getElementById('1');
    var quadrado2 = document.getElementById('2');
    var quadrado3 = document.getElementById('3');
    var quadrado4 = document.getElementById('4');
    var quadrado5 = document.getElementById('5');
    var quadrado6 = document.getElementById('6');
    var quadrado7 = document.getElementById('7');
    var quadrado8 = document.getElementById('8');
    var quadrado9 = document.getElementById('9');
    if(checaSequencia(quadrado1,quadrado2,quadrado3)){
        mudaCorQuad(quadrado1,quadrado2,quadrado3);
        mudaVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado4,quadrado5,quadrado6)){
        mudaCorQuad(quadrado4,quadrado5,quadrado6);
        mudaVencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado7,quadrado8,quadrado9)){
        mudaCorQuad(quadrado7,quadrado8,quadrado9);
        mudaVencedor(quadrado7);
        return;
    }
    if(checaSequencia(quadrado1,quadrado4,quadrado7)){
        mudaCorQuad(quadrado1,quadrado4,quadrado7);
        mudaVencedor(quadrado7);
        return;
    }
    if(checaSequencia(quadrado2,quadrado5,quadrado8)){
        mudaCorQuad(quadrado2,quadrado5,quadrado8);
        mudaVencedor(quadrado8);
        return;
    }
    if(checaSequencia(quadrado3,quadrado6,quadrado9)){
        mudaCorQuad(quadrado3,quadrado6,quadrado9);
        mudaVencedor(quadrado9);
        return;
    }
    if(checaSequencia(quadrado7,quadrado5,quadrado3)){
        mudaCorQuad(quadrado7,quadrado5,quadrado3);
        mudaVencedor(quadrado7);
        return;
    }
    if(checaSequencia(quadrado1,quadrado5,quadrado9)){
        mudaCorQuad(quadrado1,quadrado5,quadrado9);
        mudaVencedor(quadrado1);
        return;
    }
}
function checaSequencia(q1,q2,q3){
    var eIgual = false;
    if(q1.innerHTML!= '-' && q1.innerHTML===q2.innerHTML && q2.innerHTML === q3.innerHTML ){
        eIgual=true;
    }
    return eIgual;
}
function mudaCorQuad(q1,q2,q3){
    q1.style.color='#f00';
    q2.style.color='#f00';
    q3.style.color='#f00';
    q1.style.background='#0f0';
    q2.style.background='#0f0';
    q3.style.background='#0f0';
}

function mudaVencedor(q){
    vencedor = q.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}
function reiniciar(){
    vencedor=null;
    vencedorSelecionado.innerHTML = '';
    for (var i=1;i<=9;i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background='#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML='-';
        mudaJog('X');
    } 
}