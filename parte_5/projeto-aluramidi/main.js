
// Função teste de link <script>:
// alert('Olá mundo!');

function tocaSomPom() {
  document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;