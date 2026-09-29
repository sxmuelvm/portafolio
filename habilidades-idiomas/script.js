
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu
  var burger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  var mobileClose = document.querySelector('.mobile-close');
  function closeMenu(){
    if(!mobileMenu) return;
    mobileMenu.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);
  document.querySelectorAll('.mobile-links a, .mobile-lang a').forEach(function(a){
    a.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 860 && mobileMenu && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Language dropdown
  var langDd = document.querySelector('.lang-dd');
  if (langDd) {
    var langBtn = langDd.querySelector('.lang-btn');
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      langDd.classList.toggle('open');
    });
    document.addEventListener('click', function () {
      langDd.classList.remove('open');
    });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Lightbox (gallery pages)
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    var lbClose = lightbox.querySelector('.lightbox-close');
    document.querySelectorAll('.gallery figure').forEach(function (fig) {
      fig.addEventListener('click', function () {
        var src = fig.querySelector('img').getAttribute('src');
        var alt = fig.querySelector('img').getAttribute('alt');
        lbImg.setAttribute('src', src);
        lbImg.setAttribute('alt', alt);
        lightbox.classList.add('open');
      });
    });
    function closeLb(){ lightbox.classList.remove('open'); }
    lbClose.addEventListener('click', closeLb);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLb();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLb();
    });
  }
});
