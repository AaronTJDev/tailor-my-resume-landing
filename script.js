document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  
  hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
  });

  // Fade-in animation on scroll
  const fadeInElements = document.querySelectorAll('.feature, .step');
  
  const fadeIn = (element) => {
      let distInView = element.getBoundingClientRect().top - window.innerHeight + 20;
      if (distInView < 0) {
          element.classList.add('fade-in');
      } else {
          element.classList.remove('fade-in');
      }
  };

  fadeInElements.forEach(element => {
      fadeIn(element);
  });

  window.addEventListener('scroll', () => {
      fadeInElements.forEach(element => {
          fadeIn(element);
      });
  });
});