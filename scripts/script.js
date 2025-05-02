document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const menuToggle = document.querySelector('.menu-toggle');

  function clickMenu() {
    const isOpen = menu.classList.contains('show');

    if (isOpen) {
      // Fechar menu
      menu.style.maxHeight = null;
      menu.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    } else {
      // Abrir menu
      menu.classList.add('show');
      menu.style.maxHeight = menu.scrollHeight + 'px';
      menuToggle.setAttribute('aria-expanded', 'true');
    }
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
      menu.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
      menu.style.maxHeight = null;
    }
  });

  document.addEventListener('click', function(event) {
    if (
      menu.classList.contains('show') &&
      !menu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      menu.classList.remove('show');
      menu.style.maxHeight = null;
      menuToggle.setAttribute('aria-expanded', 'false');
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