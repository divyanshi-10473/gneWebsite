

        
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Change hamburger icon to X when active
        if (navLinks.classList.contains('active')) {
            hamburger.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Sticky header
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > headerHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
    
//hightlighhts slider

const slides = document.querySelectorAll('.highlight-slide');
let current = 0;

function showNextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(showNextSlide, 3000);
 


    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // News ticker animation
    const newsContainer = document.querySelector('.news-container');
    if (newsContainer) {
        let scrollAmount = 0;
        const scrollSpeed = 1;
        const newsItems = newsContainer.children;
        const itemWidth = newsItems[0].offsetWidth + 20; // including margin
        
        function animateNews() {
            scrollAmount += scrollSpeed;
            
            if (scrollAmount >= itemWidth) {
                scrollAmount = 0;
                newsContainer.appendChild(newsItems[0]);
            }
            
            newsContainer.style.transform = `translateX(-${scrollAmount}px)`;
            requestAnimationFrame(animateNews);
        }
        
        // Start animation if there are multiple news items
        if (newsItems.length > 1) {
            animateNews();
        }
    }
});

    