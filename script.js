const hambuger = document.getElementById('menu-icon');
const links = document.querySelector('.nav-links');

hambuger.addEventListener('click', () => {
  links.classList.toggle('nav-active');
  links.style.display = 'flex';
  links.style.flexDirection = 'column';
  

});

