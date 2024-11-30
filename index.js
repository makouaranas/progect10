const app = Vue.createApp({
    data() {
        return {
            currentLanguage: 'en',
            currentSlide: 0,
            totalSlides: 3,
            slideTimer: null,
            currentScroll: 0,
            translations: {
                en: {
                    nav: {
                        home: 'Home',
                        services: 'Services',
                        about: 'About',
                        contact: 'Contact'
                    },
                    hero: {
                        title: 'Discover Maritime Adventures',
                        subtitle: "Experience the beauty of Morocco's coastline",
                        title2: 'Unforgettable Sea Experiences',
                        subtitle2: 'From diving to luxury cruises',
                        title3: 'Your Journey Begins Here',
                        subtitle3: 'Professional guides and top-tier equipment',
                        scrollText: 'Scroll to explore'
                    },
                    services: {
                        title: 'Our Services',
                        subtitle: 'Discover our premium maritime experiences',
                        fishing: {
                            title: 'Deep Sea Fishing',
                            description: 'Experience the thrill of deep sea fishing with our expert guides.'
                        },
                        diving: {
                            title: 'Scuba Diving',
                            description: 'Explore the vibrant underwater world with our certified instructors.'
                        },
                        cruising: {
                            title: 'Luxury Cruising',
                            description: 'Indulge in a luxurious cruise experience with stunning coastal views.'
                        },
                        whale: {
                            title: 'Whale Watching',
                            description: 'Witness majestic whales in their natural habitat.'
                        },
                        bookNow: 'Book Now'
                    },
                    about: {
                        title: 'About Us',
                        description: 'Your trusted partner in maritime adventures.'
                    },
                    contact: {
                        title: 'Contact Us',
                        address: 'Marina Bay, Tangier, Morocco',
                        phone: '+212 123 456 789',
                        email: 'info@maritimeadventures.ma',
                        formTitle: 'Send us a Message',
                        formSubtitle: "We'll get back to you soon",
                        send: 'Send Message'
                    }
                },
                fr: {
                    nav: {
                        home: 'Accueil',
                        services: 'Services',
                        about: 'À Propos',
                        contact: 'Contact'
                    },
                    hero: {
                        title: 'Découvrez les Aventures Maritimes',
                        subtitle: 'Découvrez la beauté du littoral marocain',
                        title2: 'Expériences Marines Inoubliables',
                        subtitle2: 'De la plongée aux croisières de luxe',
                        title3: 'Votre Voyage Commence Ici',
                        subtitle3: 'Guides professionnels et équipement haut de gamme',
                        scrollText: 'Défiler pour explorer'
                    },
                    services: {
                        title: 'Nos Services',
                        subtitle: 'Découvrez nos expériences maritimes premium',
                        fishing: {
                            title: 'Pêche en Haute Mer',
                            description: 'Vivez le frisson de la pêche en haute mer avec nos guides experts.'
                        },
                        diving: {
                            title: 'Plongée Sous-Marine',
                            description: 'Explorez le monde sous-marin vibrant avec nos instructeurs certifiés.'
                        },
                        cruising: {
                            title: 'Croisière de Luxe',
                            description: 'Profitez d\'une expérience de croisière luxueuse avec des vues côtières.'
                        },
                        whale: {
                            title: 'Observation des Baleines',
                            description: 'Observez les baleines majestueuses dans leur habitat naturel.'
                        },
                        bookNow: 'Réserver'
                    },
                    about: {
                        title: 'À Propos de Nous',
                        description: 'Votre partenaire de confiance pour les aventures maritimes.'
                    },
                    contact: {
                        title: 'Contactez-Nous',
                        address: 'Marina Bay, Tanger, Maroc',
                        phone: '+212 123 456 789',
                        email: 'info@maritimeadventures.ma',
                        formTitle: 'Envoyez-nous un Message',
                        formSubtitle: 'Nous vous répondrons bientôt',
                        send: 'Envoyer'
                    }
                },
                ar: {
                    nav: {
                        home: 'الرئيسية',
                        services: 'الخدمات',
                        about: 'عن الشركة',
                        contact: 'اتصل بنا'
                    },
                    hero: {
                        title: 'اكتشف المغامرات البحرية',
                        subtitle: 'اختبر جمال الساحل المغربي',
                        title2: 'تجارب بحرية لا تنسى',
                        subtitle2: 'من الغوص إلى الرحلات الفاخرة',
                        title3: 'رحلتك تبدأ هنا',
                        subtitle3: 'مرشدون محترفون ومعدات عالية الجودة',
                        scrollText: 'مرر للاستكشاف'
                    },
                    services: {
                        title: 'خدماتنا',
                        subtitle: 'اكتشف تجاربنا البحرية المميزة',
                        fishing: {
                            title: 'صيد الأسماك في أعماق البحار',
                            description: 'عش إثارة الصيد في أعماق البحار مع مرشدينا الخبراء.'
                        },
                        diving: {
                            title: 'الغوص',
                            description: 'استكشف العالم البحري النابض بالحياة مع مدربينا المعتمدين.'
                        },
                        cruising: {
                            title: 'رحلات بحرية فاخرة',
                            description: 'استمتع بتجربة رحلة بحرية فاخرة مع إطلالات ساحلية خلابة.'
                        },
                        whale: {
                            title: 'مشاهدة الحيتان',
                            description: 'شاهد الحيتان المهيبة في موطنها الطبيعي.'
                        },
                        bookNow: 'احجز الآن'
                    },
                    about: {
                        title: 'معلومات عنا',
                        description: 'شريكك الموثوق في المغامرات البحرية.'
                    },
                    contact: {
                        title: 'اتصل بنا',
                        address: 'مارينا باي، طنجة، المغرب',
                        phone: '+212 123 456 789',
                        email: 'info@maritimeadventures.ma',
                        formTitle: 'أرسل لنا رسالة',
                        formSubtitle: 'سنرد عليك قريباً',
                        send: 'إرسال'
                    }
                }
            }
        }
    },
    methods: {
        changeLanguage(lang) {
            this.currentLanguage = lang;
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
            this.resetSlideTimer();
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
            this.resetSlideTimer();
        },
        setSlide(index) {
            this.currentSlide = index;
            this.resetSlideTimer();
        },
        resetSlideTimer() {
            if (this.slideTimer) {
                clearInterval(this.slideTimer);
            }
            this.slideTimer = setInterval(() => {
                this.nextSlide();
            }, 5000);
        },
        scrollServices(direction) {
            const container = document.querySelector('.services-grid');
            const cardWidth = 320; // card width + gap
            const scrollAmount = cardWidth * 2; // Scroll 2 cards at a time
            
            if (direction === 'left') {
                container.style.transform = `translateX(${Math.min(0, this.currentScroll + scrollAmount)}px)`;
                this.currentScroll = Math.min(0, this.currentScroll + scrollAmount);
            } else {
                const maxScroll = -(container.scrollWidth - container.parentElement.clientWidth);
                container.style.transform = `translateX(${Math.max(maxScroll, this.currentScroll - scrollAmount)}px)`;
                this.currentScroll = Math.max(maxScroll, this.currentScroll - scrollAmount);
            }
        },
        handleScroll() {
            const navbar = document.querySelector('.navbar');
            const scrollPosition = window.scrollY;
            const heroSection = document.querySelector('.hero');
            
            if (heroSection) {
                const heroHeight = heroSection.offsetHeight;
                const startTransition = heroHeight * 0.6; // Start transition at 60% of hero height
                const endTransition = heroHeight * 0.8; // Complete transition at 80% of hero height
                
                if (scrollPosition > startTransition) {
                    const scrollProgress = Math.min((scrollPosition - startTransition) / (endTransition - startTransition), 1);
                    navbar.style.setProperty('--scroll-progress', scrollProgress);
                    navbar.classList.add('scrolled');
                } else {
                    navbar.style.setProperty('--scroll-progress', 0);
                    navbar.classList.remove('scrolled');
                }
            }
        }
    },
    mounted() {
        this.resetSlideTimer();
        
        // Add scroll event listener for navbar
        window.addEventListener('scroll', this.handleScroll);
    }
});

// Wait for the DOM to be fully loaded before mounting
document.addEventListener('DOMContentLoaded', () => {
    app.mount('#app');
});
