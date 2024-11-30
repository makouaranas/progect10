// Language translations
const translations = {
    en: {
        home: "Home",
        services: "Services",
        locations: "Locations",
        about: "About",
        contact: "Contact",
        bookNow: "Book Now",
        hero: {
            title: "Discover Maritime Adventures in Morocco",
            subtitle: "Experience unforgettable fishing trips and sea excursions along Morocco's beautiful northern coast",
            cta: "Explore Services"
        },
        services: {
            title: "Our Services",
            fishing: {
                title: "EXECUTION Fishing and Leisure",
                description: "Experience the thrill of fishing in the rich waters of northern Morocco"
            },
            pleasure: {
                title: "EXECUTION MARITIME PLEASURE",
                description: "Enjoy luxurious maritime experiences along the coast"
            },
            diving: {
                title: "SEA EXCURSION + DIVING",
                description: "Discover the underwater wonders of Morocco"
            },
            learnMore: "Learn More"
        },
        about: {
            title: "About Us",
            description: "We provide premium maritime experiences in northern Morocco, combining traditional knowledge with modern comfort and safety.",
            links: {
                message: "Director's Message",
                missions: "Missions & Responsibilities",
                safety: "Safety",
                insurance: "Insurance",
                legal: "Legal Texts"
            }
        },
        contact: {
            title: "Contact Us",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message"
        }
    },
    fr: {
        home: "Accueil",
        services: "Services",
        locations: "Emplacements",
        about: "À propos",
        contact: "Contact",
        bookNow: "Réserver",
        hero: {
            title: "Découvrez les Aventures Maritimes au Maroc",
            subtitle: "Vivez des excursions de pêche et des excursions en mer inoubliables le long de la belle côte nord du Maroc",
            cta: "Explorer les Services"
        },
        services: {
            title: "Nos Services",
            fishing: {
                title: "EXECUTION Pêche et Loisirs",
                description: "Découvrez le frisson de la pêche dans les eaux riches du nord du Maroc"
            },
            pleasure: {
                title: "EXECUTION PLAISANCE MARITIME",
                description: "Profitez d'expériences maritimes luxueuses le long de la côte"
            },
            diving: {
                title: "EXCURSION EN MER + PLONGÉE",
                description: "Découvrez les merveilles sous-marines du Maroc"
            },
            learnMore: "En savoir plus"
        },
        about: {
            title: "À Propos",
            description: "Nous offrons des expériences maritimes premium au nord du Maroc, alliant connaissances traditionnelles, confort moderne et sécurité.",
            links: {
                message: "Message du Directeur",
                missions: "Missions et Responsabilités",
                safety: "Sécurité",
                insurance: "Assurance",
                legal: "Textes Légaux"
            }
        },
        contact: {
            title: "Contactez-nous",
            name: "Nom",
            email: "Email",
            message: "Message",
            send: "Envoyer le Message"
        }
    },
    ar: {
        home: "الرئيسية",
        services: "الخدمات",
        locations: "المواقع",
        about: "عن الشركة",
        contact: "اتصل بنا",
        bookNow: "احجز الآن",
        hero: {
            title: "اكتشف المغامرات البحرية في المغرب",
            subtitle: "استمتع برحلات صيد ورحلات بحرية لا تُنسى على طول الساحل الشمالي الجميل للمغرب",
            cta: "استكشف الخدمات"
        },
        services: {
            title: "خدماتنا",
            fishing: {
                title: "تنفيذ الصيد والترفيه",
                description: "اختبر إثارة الصيد في المياه الغنية شمال المغرب"
            },
            pleasure: {
                title: "تنفيذ المتعة البحرية",
                description: "استمتع بتجارب بحرية فاخرة على طول الساحل"
            },
            diving: {
                title: "رحلة بحرية + غوص",
                description: "اكتشف عجائب المغرب تحت الماء"
            },
            learnMore: "اعرف المزيد"
        },
        about: {
            title: "عن الشركة",
            description: "نقدم تجارب بحرية متميزة في شمال المغرب، نجمع بين المعرفة التقليدية والراحة والأمان الحديث.",
            links: {
                message: "رسالة المدير",
                missions: "المهام والمسؤوليات",
                safety: "السلامة",
                insurance: "التأمين",
                legal: "النصوص القانونية"
            }
        },
        contact: {
            title: "اتصل بنا",
            name: "الاسم",
            email: "البريد الإلكتروني",
            message: "الرسالة",
            send: "إرسال الرسالة"
        }
    }
    // Add more languages as needed (Italian, German)
};

// Function to update page content based on selected language
function updateLanguage(lang) {
    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);

    // Update text content for all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const keys = key.split('.');
        let translation = translations[lang];
        
        // Navigate through the nested object
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }

        if (translation && typeof translation === 'string') {
            element.textContent = translation;
        }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const keys = key.split('.');
        let translation = translations[lang];
        
        // Navigate through the nested object
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }

        if (translation && typeof translation === 'string') {
            element.placeholder = translation;
        }
    });

    // Handle RTL for Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.textAlign = lang === 'ar' ? 'right' : 'left';
}

// Helper function to get nested translations
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((p, c) => p && p[c], obj);
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize navbar scroll effect
    initializeNavbarScroll();
    
    // Initialize hero slider
    initializeHeroSlider();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize weather widget
    initializeWeatherWidget();
});

function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class when page is scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

function initializeHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;

    function goToSlide(index) {
        // Remove active class from current slide and dot
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Update current slide index
        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        // Add active class to new slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Add click events to navigation buttons
    if (prevButton) prevButton.addEventListener('click', prevSlide);
    if (nextButton) nextButton.addEventListener('click', nextSlide);

    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Start automatic slideshow
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    // Pause slideshow on hover
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopSlideshow);
        heroSection.addEventListener('mouseleave', startSlideshow);
    }

    // Start the slideshow
    startSlideshow();
}

function initializeAnimations() {
    // Scroll animations
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('visible');
            }
        });
    });
}

function initializeWeatherWidget() {
    // Weather widget functionality (placeholder)
    const weatherWidget = document.querySelector('.weather-widget');
    if (weatherWidget) {
        // Add actual weather API implementation here
        weatherWidget.innerHTML = `
            <div class="weather-info">
                <i class="fas fa-sun"></i>
                <span class="temperature">25°C</span>
                <span class="conditions">Sunny</span>
            </div>
        `;
    }
}

// Add any additional functionality specific to the main page here
