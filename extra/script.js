/* ═══════════════════════════════════════════════════════════════
   FOURYOU - VANILLA JAVASCRIPT
   All interactive features without frameworks
   ═══════════════════════════════════════════════════════════════ */

// ───────────────────────────────────────────────────────────────
// 1. STICKY NAVBAR
// ───────────────────────────────────────────────────────────────

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ───────────────────────────────────────────────────────────────
// 2. MOBILE MENU TOGGLE
// ───────────────────────────────────────────────────────────────

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-wrapper')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// ───────────────────────────────────────────────────────────────
// 3. SMOOTH SCROLL FOR NAV LINKS
// ───────────────────────────────────────────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Offset for fixed navbar
                window.scrollBy(0, -80);
            }
        }
    });
});

// ───────────────────────────────────────────────────────────────
// 4. SCROLL ANIMATIONS - INTERSECTION OBSERVER
// ───────────────────────────────────────────────────────────────

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-up class
document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});

// ───────────────────────────────────────────────────────────────
// 5. FAQ ACCORDION
// ───────────────────────────────────────────────────────────────

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// ───────────────────────────────────────────────────────────────
// 6. ACTIVE NAV LINK HIGHLIGHTING
// ───────────────────────────────────────────────────────────────

const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
});

// ───────────────────────────────────────────────────────────────
// 7. LAZY LOADING ENHANCEMENT (for images if added later)
// ───────────────────────────────────────────────────────────────

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ───────────────────────────────────────────────────────────────
// 8. SMOOTH LOADING ANIMATION
// ───────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});

// ───────────────────────────────────────────────────────────────
// 9. BUTTON RIPPLE EFFECT (Optional Enhancement)
// ───────────────────────────────────────────────────────────────

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
    });
});

// ───────────────────────────────────────────────────────────────
// 10. FORM VALIDATION & SUBMISSION (if forms are added)
// ───────────────────────────────────────────────────────────────

const handleFormSubmit = (form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send data to a backend
        console.log('Form submitted');
    });
};

// ───────────────────────────────────────────────────────────────
// 11. TOUCH EVENTS FOR MOBILE OPTIMIZATION
// ───────────────────────────────────────────────────────────────

let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchEndY < touchStartY - 50) {
        // Swiped up - could trigger navbar hide
    }
    if (touchEndY > touchStartY + 50) {
        // Swiped down - could show navbar
    }
}

// ───────────────────────────────────────────────────────────────
// 12. PERFORMANCE: DEBOUNCE SCROLL EVENTS
// ───────────────────────────────────────────────────────────────

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

// Apply debounce to scroll-heavy operations if needed
const debouncedScrollHandler = debounce(() => {
    // Expensive scroll operations here
}, 250);

// ───────────────────────────────────────────────────────────────
// 13. ANALYTICS & EVENT TRACKING (Optional)
// ───────────────────────────────────────────────────────────────

const trackEvent = (eventName, eventData = {}) => {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
    console.log(`Event tracked: ${eventName}`, eventData);
};

// Track button clicks
document.querySelectorAll('a[href*="wa.me"], a[href*="mailto"]').forEach(link => {
    link.addEventListener('click', () => {
        const href = link.getAttribute('href');
        trackEvent('contact_click', { method: href.includes('wa.me') ? 'whatsapp' : 'email' });
    });
});

// ───────────────────────────────────────────────────────────────
// 14. ACCESSIBILITY ENHANCEMENTS
// ───────────────────────────────────────────────────────────────

// Keyboard navigation for buttons
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            element.click();
        }
    });
});

// ───────────────────────────────────────────────────────────────
// 15. PREFERS-REDUCED-MOTION RESPECT
// ───────────────────────────────────────────────────────────────

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
    document.querySelectorAll('[style*="transition"]').forEach(el => {
        el.style.transition = 'none';
    });
}

console.log('FourYou website loaded successfully! 🚀');
