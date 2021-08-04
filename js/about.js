const menu = document.querySelector('.open');
menu.addEventListener('click', () => {document.getElementById('mobile-menu').classList.add('active') })
const close = document.querySelector('.close');
close.addEventListener('click', () => {document.getElementById('mobile-menu').classList.remove('active')})
const ulClose = document.querySelector('.ul-close');
ulClose.addEventListener('click', () => {document.getElementById('mobile-menu').classList.remove('active')})