'use strict';
let menu;

document.addEventListener('DOMContentLoaded', function(){

  // menu de navegação
  document.querySelectorAll('menu>ul>li').forEach(li => {
    li.addEventListener('click', function(){
      this.parentElement.querySelector('.ativo').classList.remove('ativo');
      this.classList.add('ativo');
    });
  });
  
  // menu mobile
  menu = document.querySelector('menu>ul');
  document.getElementById('menuMobile').addEventListener('click', function(){
    menu.classList.toggle('ativo');
    this.innerText == 'menu' ? this.innerText = 'close' : this.innerText = 'menu';
  });
});