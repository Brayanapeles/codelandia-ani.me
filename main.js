'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('menu>ul');
  const main = document.querySelector('body>main');

  async function getTela(pagina) {
    try {
      const response = await fetch(`./paginas/${pagina ?? '404'}.html`);
      const section = await response.text();
      main.textContent = '';
      main.innerHTML = section;
    } catch (err) {
      console.log(`Pagina não encontrada\r\n ${err}`);
    }
  }

  // menu de navegação
  document.querySelectorAll('menu>ul>li').forEach(li => {
    li.addEventListener('click', function () {
      this.parentElement.querySelector('.ativo').classList.remove('ativo');
      this.classList.add('ativo');
      getTela(this.dataset.pagina);
      if (menu.classList.contains('ativo')) menu.classList.remove('ativo');
    });
  });

  // menu mobile
  document.getElementById('menuMobile').addEventListener('click', function () {
    menu.classList.toggle('ativo');
    this.innerText == 'menu' ? (this.innerText = 'close') : (this.innerText = 'menu');
  });

  document.querySelector('li[data-pagina="inicio"]').click();
});
