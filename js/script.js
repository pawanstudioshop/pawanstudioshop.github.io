/* ==================== PAWAN STUDIO - JAVASCRIPT ==================== */

// ========== INITIALIZE AOS (Animate On Scroll) ==========
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-out-cubic'
});

// ========== PRELOADER ==========
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('preloader').classList.add('hidden');
    
    // Counter animation start after preloader
    setTimeout(startCounters, 500);
  }, 1500);
});

// ========== COUNTER ANIMATION ==========
function startCounters() {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    let count = 0;
    const increment = target / 100;
    
    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        counter.textContent = target + '+';
        clearInterval(timer);
      } else {
        counter.textContent = Math.ceil(count);
      }
    }, 20);
  });
}

// ========== MOBILE MENU TOGGLE ==========
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle) {
  mobileToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('active');
    mobileToggle.classList.remove('active');
  });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ========== PORTFOLIO FILTER ==========
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      // Filter portfolio items
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// ========== LIGHTBOX ==========
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

// Open lightbox on portfolio item click
if (portfolioItems.length > 0) {
  portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      lightboxImg.src = imgSrc;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}

// Close lightbox
if (lightboxClose) {
  lightboxClose.addEventListener('click', function() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
}

// Close lightbox on background click
if (lightbox) {
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}

// Close lightbox on ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// ========== VIDEO GALLERY FILTER ==========
const videoFilterBtns = document.querySelectorAll('.video-filter-btn');
const videoItems = document.querySelectorAll('.video-item');

if (videoFilterBtns.length > 0) {
  videoFilterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class
      videoFilterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-video-filter');

      // Filter video items
      videoItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-video-category') === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// ========== TESTIMONIALS SWIPER ==========
if (document.querySelector('.testimonials-swiper')) {
  const swiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });
}

// ========== INSTAGRAM POSTS CLICK ==========
const instaPosts = document.querySelectorAll('.insta-post');

if (instaPosts.length > 0) {
  instaPosts.forEach(post => {
    post.addEventListener('click', () => {
      window.open('https://www.instagram.com/pawanstudiobelwai', '_blank');
    });
  });
}

// ========== FAQ ACCORDION ==========
const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length > 0) {
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all FAQ items
      faqItems.forEach(faq => faq.classList.remove('active'));
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ========== CONTACT FORM SUBMISSION ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');

    // Create WhatsApp message
    let whatsappMessage = `*New Booking Inquiry from Website*%0A%0A`;
    whatsappMessage += `*Name:* ${name}%0A`;
    whatsappMessage += `*Phone:* ${phone}%0A`;
    if (email) {
      whatsappMessage += `*Email:* ${email}%0A`;
    }
    whatsappMessage += `*Service:* ${service}%0A`;
    if (message) {
      whatsappMessage += `*Message:* ${message}`;
    }
    
    // Open WhatsApp
    window.open(`https://wa.me/918382905455?text=${whatsappMessage}`, '_blank');
    
    // Show success message
    alert('Thank you! Redirecting to WhatsApp...');
    
    // Reset form
    contactForm.reset();
  });
}

// ========== BACK TO TOP BUTTON ==========
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  // Scroll to top on click
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ========== FORM VALIDATION ==========
// Add input validation styling
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

if (formInputs.length > 0) {
  formInputs.forEach(input => {
    // Add focus effect
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });

    // Remove focus effect
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
      
      // Validate on blur
      if (this.hasAttribute('required') && this.value.trim() === '') {
        this.style.borderColor = '#E63946';
      } else {
        this.style.borderColor = 'rgba(255, 215, 0, 0.2)';
      }
    });

    // Real-time validation
    input.addEventListener('input', function() {
      if (this.hasAttribute('required') && this.value.trim() !== '') {
        this.style.borderColor = '#25D366';
      }
    });
  });
}

// ========== PHONE NUMBER VALIDATION ==========
const phoneInput = document.getElementById('phone');

if (phoneInput) {
  phoneInput.addEventListener('input', function(e) {
    // Only allow numbers and + symbol
    let value = this.value.replace(/[^0-9+]/g, '');
    
    // Limit to 13 characters (+91 XXXXXXXXXX)
    if (value.length > 13) {
      value = value.substring(0, 13);
    }
    
    this.value = value;
  });
}

// ========== EMAIL VALIDATION ==========
const emailInput = document.getElementById('email');

if (emailInput) {
  emailInput.addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (this.value && !emailRegex.test(this.value)) {
      this.style.borderColor = '#E63946';
      this.setCustomValidity('Please enter a valid email address');
    } else {
      this.style.borderColor = 'rgba(255, 215, 0, 0.2)';
      this.setCustomValidity('');
    }
  });
}

// ========== LAZY LOADING IMAGES ==========
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  // Observe all images with data-src attribute
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ========== PERFORMANCE OPTIMIZATION ==========
// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimize scroll events
const optimizedScroll = debounce(() => {
  // Add any scroll-based optimizations here
}, 100);

window.addEventListener('scroll', optimizedScroll);

// ========== SERVICE WORKER (Optional - for PWA) ==========
// Uncomment if you want to add PWA functionality
/*
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registered:', registration);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed:', error);
      });
  });
}
*/

// ========== ANALYTICS TRACKING (Optional) ==========
// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const btnText = this.textContent.trim();
    console.log('Button clicked:', btnText);
    
    // Add Google Analytics or other tracking here
    // Example: gtag('event', 'click', { 'button_name': btnText });
  });
});

// Track form submissions
if (contactForm) {
  contactForm.addEventListener('submit', function() {
    console.log('Form submitted');
    // Add tracking code here
  });
}

// ========== CONSOLE MESSAGES ==========
console.log('%c📸 Pawan Studio - Premium Photography Website', 'color: #FFD700; font-size: 22px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
console.log('%c✨ 30+ Years of Excellence in Sultanpur', 'color: #E63946; font-size: 16px; font-weight: bold;');
console.log('%c🚀 Website Developed with Advanced Features', 'color: #25D366; font-size: 14px;');
console.log('%c📞 Contact: +91 8382905455', 'color: #FFD700; font-size: 14px;');
console.log('%c🌐 Location: Belwai Kadipur, Sultanpur', 'color: #fff; font-size: 14px;');

// ========== PREVENT RIGHT CLICK ON IMAGES (Optional) ==========
// Uncomment if you want to protect images
/*
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Image protection is enabled!');
  });
});
*/

// ========== DYNAMIC YEAR IN FOOTER ==========
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(element => {
  element.textContent = currentYear;
});

// ========== LOADING STATE FOR BUTTONS ==========
document.querySelectorAll('.btn-primary, .submit-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Add loading state
    const originalText = this.innerHTML;
    
    // Don't add loading for anchor tags with href
    if (this.tagName === 'BUTTON' || (this.tagName === 'A' && this.getAttribute('type') === 'submit')) {
      this.innerHTML = '<span>⏳ Loading...</span>';
      this.disabled = true;
      
      // Reset after 2 seconds (for demo)
      setTimeout(() => {
        this.innerHTML = originalText;
        this.disabled = false;
      }, 2000);
    }
  });
});

// ========== ANIMATION ON SCROLL (Alternative to AOS) ==========
// Custom scroll animations if AOS is not loaded
if (typeof AOS === 'undefined') {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('aos-animate');
      }
    });
  };
  
  window.addEventListener('scroll', debounce(animateOnScroll, 100));
  animateOnScroll(); // Initial check
}

// ========== ACCESSIBILITY IMPROVEMENTS ==========
// Add keyboard navigation for portfolio items
if (portfolioItems.length > 0) {
  portfolioItems.forEach(item => {
    item.setAttribute('tabindex', '0');
    
    item.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}

// Add keyboard navigation for filter buttons
if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}

// ========== MOBILE TOUCH OPTIMIZATIONS ==========
// Improve touch responsiveness on mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', function(e) {
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  // Swipe up to close mobile menu
  if (touchStartY - touchEndY > 50 && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    mobileToggle.classList.remove('active');
  }
}

// ========== WEBSITE PERFORMANCE METRICS ==========
// Log website load time
window.addEventListener('load', () => {
  const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
  console.log(`%c⚡ Page loaded in ${loadTime}ms`, 'color: #25D366; font-size: 14px; font-weight: bold;');
});

// ========== ERROR HANDLING ==========
// Global error handler
window.addEventListener('error', function(e) {
  console.error('Error occurred:', e.message);
  // You can send this to an error tracking service
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
  console.error('Unhandled promise rejection:', e.reason);
});

// ========== NETWORK STATUS DETECTION ==========
window.addEventListener('online', function() {
  console.log('🌐 Back online!');
  // You can show a notification here
});

window.addEventListener('offline', function() {
  console.log('📵 No internet connection');
  // You can show a notification here
});

// ========== COPY PROTECTION (Optional) ==========
// Uncomment if you want to prevent text selection
/*
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

document.addEventListener('copy', function(e) {
  e.preventDefault();
  alert('Content is protected!');
});
*/

// ========== INITIALIZATION COMPLETE ==========
console.log('%c✅ All JavaScript initialized successfully!', 'color: #25D366; font-size: 16px; font-weight: bold;');

// ========== EXPOSE GLOBAL FUNCTIONS (Optional) ==========
// Make some functions globally accessible if needed
window.pawanStudio = {
  openLightbox: (imageSrc) => {
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  },
  closeLightbox: () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  },
  scrollToTop: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  openWhatsApp: (message = '') => {
    const defaultMessage = message || 'Hello, I want to book a photography session!';
    window.open(`https://wa.me/918382905455?text=${encodeURIComponent(defaultMessage)}`, '_blank');
  }
};

// ========== END OF SCRIPT ==========