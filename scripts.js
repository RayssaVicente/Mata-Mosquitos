var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var nivel = window.location.search
nivel = nivel.replace('?', '') 
var crirMosquitoTempo = 1500



function iniciarJogo (){
    var nivel = document.getElementById('nivel').value

    if(nivel  === ''){
        alert('Selecione um nível para iniciar o jogo')
        return false
    }

    window.location.href ='jogo.html?' + nivel
}

if(nivel === 'normal'){
    //1500
    crirMosquitoTempo = 1500
}else if(nivel === 'medio'){
    //1000
     crirMosquitoTempo = 1000
}else if(nivel === 'dificil'){
    //750
    crirMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth


}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)//para o cronometro
        clearInterval(criarMosca)//parar a execução da função criar moscas
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo//adicionando o tempo na tela
    }
 

}, 1000)

function posicaoRandomica(){

    // remover mosquito anterior (caso exista)
    
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

       
        if(vidas > 3){
            window.location.href = 'fim_jogo.html'
        }else{
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
        }

        vidas++
    }

    
   

    //criando posição aleatoria
    var posicaox = Math.floor(Math.random() * largura) - 90
    var posicaoy = Math.floor(Math.random() * altura) - 90

    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy


    //criar o elemento html img com a mosquito 
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    document.body.appendChild(mosquito)
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    //mudando a posição do mosquito
    mosquito.style.left = posicaox + 'px'
    mosquito.style.top = posicaoy + 'px'
    mosquito.style.position = 'absolute'

    
    
    
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function ladoAleatorio(){
    var lado = Math.floor(Math.random() * 2)

    switch(lado){
        case 0:
            return 'ladoA'
        case 1:
             return 'ladoB'
    }

}



