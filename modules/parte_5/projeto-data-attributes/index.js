
//Default ???
// (() => {

// })()

//Default ???
(() => {
  const abas = document.querySelectorAll('[data-aba]');
  
  esconderConteudos = () => {
    const conteudos = document.querySelectorAll('[data-conteudo]');
    conteudos.forEach(conteudos => conteudos.classList.add('hide'));
  }

  inativarAbas = () => {
    abas.forEach(temp => temp.classList.remove('ativa'));
  }

  ativarConteudo = (valor) => {
    const conteudo = document.querySelector(`[data-conteudo="${valor}"]`);
    conteudo.classList.remove('hide');
  }

  ativarAba = (aba) => {
    aba.classList.add('ativa');
  }

  abas.forEach(temp => temp.addEventListener('click', () => {
    const valor = temp.dataset.aba;
    esconderConteudos();
    inativarAbas();
    ativarConteudo(valor);
    ativarAba(temp);
  }))
})()