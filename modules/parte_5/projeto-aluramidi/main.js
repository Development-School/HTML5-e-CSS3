
// function tocaSom(idElementoAudio) {
//   document.querySelector(idElementoAudio).play();
// }

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  /*if(elemento === null) {
    // alert('Elemento não encontrado!');
    console.log('Elemento não encontrado!');
  }
  if (elemento != null) {
    if (elemento.localName === 'audio'){
      elemento.play();
    }
  }*/
  if (elemento && elemento.localName === 'audio') {
    elemento.play()
  }
  else {
    console.log('Elemento não encontrado ou seletor inválido');
  }  
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//Para isso...
for (contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  
  const idAudio = `#som_${instrumento}`; //template string
  // console.log(idAudio);

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  // tecla.onkeydown = function () {
  //   tecla.classList.add('ativa');
  // }

  tecla.onkeydown = function (evento) {
    // console.log(evento);
    // console.log(evento.code);
    console.log(evento.code === 'Enter' || evento.code === 'Space');

    if (evento.code === 'Enter' || evento.code === 'Space') {
      tecla.classList.add('ativa');
    }    
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}
