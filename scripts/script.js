document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu')
  const menuToggle = document.querySelector('.menu-toggle')
  function clickMenu() {
      menu.classList.toggle('show')
    }

  window.addEventListener('resize', () => {
      if (window.innerWidth > 992) {
          menu.classList.remove('show')
      }
  });

  document.addEventListener('click', function(event) {
    
      // Se o menu estiver aberto e o clique NÃO for no menu nem no botão...
      if (menu.classList.contains('show') && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('show');
      }
    });

  menuToggle.addEventListener('click', clickMenu);
  menuToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      clickMenu();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      document.body.classList.add('user-is-tabbing');
    }
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('user-is-tabbing');
  });
  
});