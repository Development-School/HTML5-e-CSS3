
// Função teste de link <script>:
// alert('Olá mundo!');

// function tocaSomPom() {
//   document.querySelector('#som_tecla_pom').play();
// }

function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

/*function tocaSomClap() {
  document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;*/

// document.querySelectorAll('.tecla')

const listaDeTeclas = document.querySelectorAll('.tecla');

// listaDeTeclas[0].onclick = tocaSomPom;

//let contador = 0;

//Enquanto isso...
/*while (contador < listaDeTeclas.length) {
  // listaDeTeclas[contador].onclick = tocaSomPom;
  // listaDeTeclas[contador].onclick = tocaSom;
  // listaDeTeclas[contador].onclick = function () { //função anônima (uma função sem nome temporária)
  //   tocaSom('#som_tecla_pom');
  // }

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  // console.log(instrumento);
  
  //template string
  const idAudio = `#som_${instrumento}`; //utilização da craze " ` "
  // console.log(idAudio);

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  // contador += 1;
  contador++;
  // console.log(contador);
}*/

//Para isso...
for (contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  
  const idAudio = `#som_${instrumento}`; //template string
  // console.log(idAudio);

  tecla.onclick = function () {
    tocaSom(idAudio);
  }
}