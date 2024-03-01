/* doc tocaSom()
1. busque o elemento e dê play;
2. verifice se o elemento está nulo. Caso true: apresentando um problema para o usuário, caso nulo seja o seu retorno ou se o seletor for invlálido;
3. atribua a uma variável elemento <document.querySelector(seletorAudio)> a seleção que vem como parâmetro;
4. elemento.localName === 'audio') é uma propriedade chamada .localName do objeto <elemento>
onde esse elemento guarda a info do objeto <elemento>;
*/
function tocaSom(seletorAudio) { // parametro = seletor no codigo html
    const elemento = document.querySelector(seletorAudio);
    if(elemento != null && elemento.localName === 'audio') {
        elemento.play;
    }
    else {
        elemento.play;
        console.log('Elemento não encontrado ou seletor inválido'); // ou use alert('Elemento não encontrado)
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    // template string
    const idAudio = `#som_${instrumento}`; // // ''#som_{instrumento}

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
    // 3x === compara o valor e o tipo da info. enquanto o == compara apenas o valor
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');    
        }
            
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}

// convenção para utilizar main.js como nome do arquivo javascript
// utilize <script src="main.js"></script> no .html para ligar-lo ao .js

// utilize sempre o nome da classe ou elemento no .js para fazer referência para um comportamento
