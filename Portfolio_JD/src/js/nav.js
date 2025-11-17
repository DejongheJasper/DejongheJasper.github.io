const listenToHamburgerToggle = function () {
  const hamburger = document.querySelector('.c-nav__hamburger');
  const mobileMenu = document.querySelector('.c-nav__mobile-menu');
  const backdrop = document.querySelector('.c-nav__backdrop');
  const navLinks = mobileMenu.querySelectorAll('a');

  const toggleMenu = function () {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    backdrop.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  };

  hamburger.addEventListener('click', toggleMenu);

  backdrop.addEventListener('click', toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', toggleMenu);
  });
};

const observeSections = function () {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.c-nav__item');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const navItem = document.querySelector(
          `.c-nav__item a[href="#${id}"]`
        )?.parentElement;

        if (entry.isIntersecting) {
          navItems.forEach((item) => item.classList.remove('active'));
          if (navItem) navItem.classList.add('active');
          console.log(`Section ${id} is active`);
        }
      });
    },
    {
      root: null,
      threshold: 1,
    }
  );

  sections.forEach((section) => observer.observe(section));
  
};

const navScroll = function () {
  const nav = document.querySelector('.js-nav');
  const navHeight = nav.clientHeight;
  const logo = document.querySelector('.js-logo');
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  const handleScroll = () => {
    if (!mediaQuery.matches) return;

    const scrollPosition = window.scrollY;
    if (scrollPosition > navHeight) {
      nav.classList.add('c-nav__wrapper--small');
      logo.classList.add('c-nav__link-logo--small');
    } else {
      nav.classList.remove('c-nav__wrapper--small');
      logo.classList.remove('c-nav__link-logo--small');
    }
  };

  window.addEventListener('scroll', handleScroll);

  //screen resize
  mediaQuery.addEventListener("change", () => {
   
    if (!mediaQuery.matches) {
      nav.classList.remove('c-nav__wrapper--small');
      logo.classList.remove('c-nav__link-logo--small');
    }
  });
};

navScroll();


const init = function () {
  listenToHamburgerToggle();
  observeSections();
  navScroll();
};

document.addEventListener('DOMContentLoaded', init);
