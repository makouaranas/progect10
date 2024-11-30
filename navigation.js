// Shared navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    let lastScrollPosition = 0;
    
    // Handle scroll events
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const heroSection = document.querySelector('.hero');
        const headerSection = document.querySelector('.service-header');
        const targetSection = heroSection || headerSection;
        
        if (targetSection) {
            const sectionHeight = targetSection.offsetHeight;
            const startTransition = sectionHeight * 0.6;
            const endTransition = sectionHeight * 0.8;
            
            if (scrollPosition > startTransition) {
                const scrollProgress = Math.min((scrollPosition - startTransition) / (endTransition - startTransition), 1);
                navbar.style.setProperty('--scroll-progress', scrollProgress);
                navbar.classList.add('scrolled');
            } else {
                navbar.style.setProperty('--scroll-progress', 0);
                navbar.classList.remove('scrolled');
            }
        } else {
            // If no hero/header section, keep navbar in scrolled state
            navbar.style.setProperty('--scroll-progress', 1);
            navbar.classList.add('scrolled');
        }
        
        lastScrollPosition = scrollPosition;
    }
    
    // Initialize scroll handler
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set correct state
    handleScroll();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();

    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Language selector functionality
    const languageSelector = document.querySelector('.language-selector');
    const currentLang = document.querySelector('.current-lang');
    const languageDropdown = document.querySelector('.language-dropdown');

    if (languageSelector && currentLang && languageDropdown) {
        // Get stored language or default to 'en'
        const storedLang = localStorage.getItem('selectedLanguage') || 'en';
        updateLanguageDisplay(storedLang);

        // Language selection handling
        languageDropdown.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => {
                const lang = li.getAttribute('data-lang');
                updateLanguageDisplay(lang);
                localStorage.setItem('selectedLanguage', lang);
                
                // Update text content based on selected language
                updatePageContent(lang);
            });
        });
    }

    // Function to update language display
    function updateLanguageDisplay(lang) {
        const langText = document.querySelector('.lang-text');
        if (langText) {
            switch (lang) {
                case 'fr':
                    langText.textContent = 'Français';
                    document.dir = 'ltr';
                    break;
                case 'ar':
                    langText.textContent = 'العربية';
                    document.dir = 'rtl';
                    break;
                default:
                    langText.textContent = 'English';
                    document.dir = 'ltr';
            }
        }
    }

    // Function to update page content based on language
    function updatePageContent(lang) {
        const translations = {
            en: {
                'nav.home': 'Home',
                'nav.services': 'Services',
                'nav.about': 'About',
                'nav.contact': 'Contact',
                // Add more translations as needed
            },
            fr: {
                'nav.home': 'Accueil',
                'nav.services': 'Services',
                'nav.about': 'À propos',
                'nav.contact': 'Contact',
                // Add more translations as needed
            },
            ar: {
                'nav.home': 'الرئيسية',
                'nav.services': 'الخدمات',
                'nav.about': 'حول',
                'nav.contact': 'اتصل بنا',
                // Add more translations as needed
            }
        };

        // Update navigation items
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Initialize with stored language
    const initialLang = localStorage.getItem('selectedLanguage') || 'en';
    updateLanguageDisplay(initialLang);
    updatePageContent(initialLang);
});
