function clickMenu() {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('show')
  }

window.addEventListener('resize', () => {
    const menu = document.querySelector('.menu')
    if (window.innerWidth > 992) {
        menu.classList.remove('show')
    }
});

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
  
    // Se o menu estiver aberto e o clique NÃO for no menu nem no botão...
    if (menu.classList.contains('show') && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove('show');
    }
  });
  