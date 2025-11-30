document.addEventListener('DOMContentLoaded', function () {
  // Detectar iOS para desativar parallax (background-attachment fixo não funciona bem no iOS)
  var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isIOS) {
    document.querySelectorAll('.banners').forEach(function (el) {
      el.classList.remove('parallax');
      el.classList.add('not-parallax');
    });
  }

  // Fechar menu colapsável ao clicar em um item de navegação (modo mobile)
  var navLinks = document.querySelectorAll('#navbarCollapse .nav-link');
  var navCollapse = document.getElementById('navbarCollapse');
  var navToggler = document.querySelector('.navbar-toggler');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navCollapse.classList.contains('show')) {
        navCollapse.classList.remove('show');
        if (navToggler) {
          navToggler.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Atualizar aria-expanded do botão de menu
  if (navToggler) {
    navToggler.addEventListener('click', function () {
      var expanded = navToggler.getAttribute('aria-expanded') === 'true';
      navToggler.setAttribute('aria-expanded', String(!expanded));
    });
  }
});
