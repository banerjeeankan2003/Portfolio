document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle.querySelector('i');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Swap icon based on mode
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  });
  
    // GSAP Animations

    
  gsap.from(".hero-text h1", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero-text p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  gsap.from(".profile-container", { opacity: 0, x: 100, duration: 1, delay: 0.7 });
  
  const animatedElements = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {   
        const el =entry.target;

        if (el.classList.contains('animate-fadeInUp')) {
          el.classList.add('animate__animated', 'animate__fadeInUp');
        }
        else if (el.classList.contains('animate-zoomIn')) {
          el.classList.add('animate__animated', 'animate__zoomIn');
        }
        else if (el.classList.contains('animate-slideInLeft')) {
          el.classList.add('animate__animated', 'animate__slideInLeft');
        }
        else if (el.classList.contains('animate-slideInRight')) {
          el.classList.add('animate__animated', 'animate__slideInRight');
        }
        else if (el.classList.contains('animate-flipInY')) {
          el.classList.add('animate__animated', 'animate__flipInY');
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });                 
  animatedElements.forEach(el => observer.observe(el)); 

});
  

  
 