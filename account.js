const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            currentLanguage: 'en',
            translations: {
                en: {
                    nav: {
                        home: 'Home',
                        services: 'Services',
                        about: 'About',
                        contact: 'Contact'
                    },
                    account: {
                        title: 'Account Features',
                        message: 'NOT AVAILABLE FOR NOW',
                        backToHome: 'Back to Home'
                    }
                },
                fr: {
                    nav: {
                        home: 'Accueil',
                        services: 'Services',
                        about: 'À propos',
                        contact: 'Contact'
                    },
                    account: {
                        title: 'Fonctionnalités du Compte',
                        message: 'PAS DISPONIBLE POUR LE MOMENT',
                        backToHome: 'Retour à l\'Accueil'
                    }
                },
                ar: {
                    nav: {
                        home: 'الرئيسية',
                        services: 'الخدمات',
                        about: 'عن الشركة',
                        contact: 'اتصل بنا'
                    },
                    account: {
                        title: 'ميزات الحساب',
                        message: 'غير متوفر حاليا',
                        backToHome: 'العودة إلى الصفحة الرئيسية'
                    }
                }
            }
        }
    },
    methods: {
        changeLanguage(lang) {
            this.currentLanguage = lang;
            document.documentElement.setAttribute('lang', lang);
            if (lang === 'ar') {
                document.documentElement.setAttribute('dir', 'rtl');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
            }
        }
    }
});

app.mount('#app');
