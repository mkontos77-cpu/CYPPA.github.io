// Header scroll + mobile menu
(function () {
  const header = document.querySelector('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 20);
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const toggle = document.querySelector('.menu-toggle');
  const mobile = document.querySelector('.mobile-nav');

  if (toggle && mobile) {

    toggle.addEventListener('click', function () {

      if (mobile.style.display === 'block') {
        mobile.style.display = 'none';
      } else {
        mobile.style.display = 'block';
      }

    });

    mobile.querySelectorAll('a').forEach(link => {

      link.addEventListener('click', function () {

        mobile.style.display = 'none';

      });

    });

  }

  // Mark active link based on pathname
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
})();
document.addEventListener('click', function (e) {

  const mobile = document.querySelector('.mobile-nav');
  const toggle = document.querySelector('.menu-toggle');

  if (!mobile || !toggle) return;

  if (
    !mobile.contains(e.target) &&
    !toggle.contains(e.target)
  ) {
    mobile.style.display = 'none';
  }

});
