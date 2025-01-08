document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll Animation
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Form Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Active Navigation on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });
});


// modal


function openLogin(){
    document.querySelector('.login-container').style.visibility = 'visible';
    document.querySelector('.signup-container').style.visibility = 'hidden';
    
  }
  function openSignup(){
    document.querySelector('.signup-container').style.visibility = 'visible';
    document.querySelector('.login-container').style.visibility = 'hidden';
    
  }
  function close() {
    document.querySelector('.login-container').style.visibility = 'hidden';
    document.querySelector('.signup-container').style.visibility = 'hidden';
    
  }
  
  // Adding the event listener to call the close function when #close-btn is clicked
  document.querySelector('#close-btn').addEventListener('click', close);
  document.querySelector('#close-btn1').addEventListener('click', close);

  // Adding the event listener to custom-signup-btn to open function openSignup()
  document.querySelector('.custom-signup-btn').addEventListener('click', openSignup);

  
// Adding the event listener to custom-signup-btn to open function openSignup()


document.getElementById('signin').addEventListener('click', function(event) {
  event.preventDefault();  
  openLogin();
});

document.getElementById('signup').addEventListener('click', function(event) {
  event.preventDefault();  
  openSignup();
});
