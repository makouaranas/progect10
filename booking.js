// Debug log
console.log('Vue:', Vue);

const { createApp, ref, computed } = Vue;

const app = createApp({
    data() {
        return {
            services: {
                'fishing': {
                    title: 'Deep Sea Fishing Adventure',
                    description: 'Experience the thrill of deep sea fishing with our expert guides.',
                    duration: '6 hours',
                    capacity: 'Up to 6 people',
                    basePrice: 149,
                    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3',
                    timeSlots: ['09:00', '11:00', '14:00', '16:00'],
                    equipment: [
                        { id: 'rod-premium', name: 'Premium Fishing Rod', price: 30, image: 'images/fishing-rod.jpg', description: 'Professional-grade fishing rod for serious anglers' },
                        { id: 'tackle-box', name: 'Tackle Box Set', price: 25, image: 'images/tackle-box.jpg', description: 'Complete set of lures, hooks, and fishing accessories' }
                    ],
                    extras: [
                        { id: 'lunch-pack', name: 'Gourmet Lunch Pack', price: 20, image: 'images/lunch.jpg', description: 'Fresh seafood lunch with drinks and snacks' },
                        { id: 'photo-service', name: 'Photography Service', price: 40, image: 'images/camera.jpg', description: 'Professional photographer to capture your adventure' },
                        { id: 'fish-cleaning', name: 'Fish Cleaning Service', price: 15, image: 'images/cleaning.jpg', description: 'Expert cleaning and packaging of your catch' }
                    ],
                    insurance: [
                        { id: 'basic-insurance', name: 'Basic Insurance', price: 10, required: true, description: 'Standard coverage for the trip' },
                        { id: 'premium-insurance', name: 'Premium Insurance', price: 25, description: 'Extended coverage including personal belongings' }
                    ]
                },
                'diving': {
                    title: 'Scuba Diving Experience',
                    description: 'Explore the underwater world with our certified instructors.',
                    duration: '4 hours',
                    capacity: 'Up to 4 people',
                    basePrice: 199,
                    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3',
                    timeSlots: ['08:00', '10:00', '13:00', '15:00'],
                    equipment: [
                        { id: 'premium-gear', name: 'Premium Diving Gear', price: 45, image: 'images/diving-gear.jpg', description: 'High-end diving equipment for better comfort' },
                        { id: 'wetsuit-pro', name: 'Professional Wetsuit', price: 30, image: 'images/wetsuit.jpg', description: 'Premium wetsuit for optimal temperature control' }
                    ],
                    extras: [
                        { id: 'underwater-camera', name: 'Underwater Camera', price: 35, image: 'images/underwater-camera.jpg', description: 'GoPro Hero camera with underwater housing' },
                        { id: 'video-package', name: 'Video Package', price: 50, image: 'images/video.jpg', description: 'Professional underwater videography service' }
                    ],
                    insurance: [
                        { id: 'diving-basic', name: 'Basic Diving Insurance', price: 20, required: true, description: 'Required diving insurance coverage' },
                        { id: 'diving-premium', name: 'Premium Diving Insurance', price: 40, description: 'Comprehensive diving insurance with equipment coverage' }
                    ]
                },
                'cruise': {
                    title: 'Sunset Cruise Adventure',
                    description: 'Enjoy a luxurious evening cruise with dinner and drinks.',
                    duration: '3 hours',
                    capacity: 'Up to 12 people',
                    basePrice: 299,
                    image: 'https://images.unsplash.com/photo-1599174898893-6f675919d029?ixlib=rb-4.0.3',
                    timeSlots: ['16:00', '17:00', '18:00'],
                    equipment: [
                        { id: 'vip-seating', name: 'VIP Seating', price: 50, image: 'images/vip-seating.jpg', description: 'Premium deck location' },
                        { id: 'champagne', name: 'Champagne Package', price: 45, image: 'images/champagne.jpg', description: 'Bottle of premium champagne' }
                    ],
                    extras: [
                        { id: 'private-server', name: 'Private Server', price: 60, image: 'images/private-server.jpg', description: 'Dedicated service staff' },
                        { id: 'photo-session', name: 'Sunset Photo Session', price: 35, image: 'images/photo-session.jpg', description: 'Professional photography' }
                    ],
                    insurance: [
                        { id: 'cruise-insurance', name: 'Cruise Insurance', price: 20, required: true, description: 'Standard coverage for the trip' }
                    ]
                },
                'jetski': {
                    title: 'Jet Ski Adventure',
                    description: 'Experience the thrill of riding waves on our powerful jet skis.',
                    duration: '2 hours',
                    capacity: 'Up to 2 people',
                    basePrice: 129,
                    image: 'https://images.unsplash.com/photo-1622651783098-0bc0035d3dfa?ixlib=rb-4.0.3',
                    timeSlots: ['09:00', '11:00', '13:00', '15:00', '17:00'],
                    equipment: [
                        { id: 'gopro-rental', name: 'GoPro Rental', price: 25, image: 'images/gopro.jpg', description: 'Record your adventure' },
                        { id: 'instructor', name: 'Private Instructor', price: 40, image: 'images/instructor.jpg', description: 'One-on-one guidance' }
                    ],
                    extras: [
                        { id: 'wetsuit', name: 'Premium Wetsuit', price: 20, image: 'images/wetsuit.jpg', description: 'High-quality wetsuit rental' },
                        { id: 'speed-upgrade', name: 'Speed Upgrade', price: 30, image: 'images/speed-upgrade.jpg', description: 'Access to faster jet skis' }
                    ],
                    insurance: [
                        { id: 'jetski-insurance', name: 'Jet Ski Insurance', price: 20, required: true, description: 'Standard coverage for the trip' }
                    ]
                },
                'sailing': {
                    title: 'Sailing Experience',
                    description: 'Learn sailing basics or enjoy a relaxing day on the water.',
                    duration: '5 hours',
                    capacity: 'Up to 8 people',
                    basePrice: 179,
                    image: 'https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?ixlib=rb-4.0.3',
                    timeSlots: ['08:00', '10:00', '14:00', '16:00'],
                    equipment: [
                        { id: 'sailing-lesson', name: 'Private Lesson', price: 45, image: 'images/sailing-lesson.jpg', description: 'One-on-one sailing instruction' },
                        { id: 'gourmet-lunch', name: 'Gourmet Lunch', price: 35, image: 'images/gourmet-lunch.jpg', description: 'Premium lunch package' }
                    ],
                    extras: [
                        { id: 'wine-package', name: 'Wine Package', price: 40, image: 'images/wine-package.jpg', description: 'Selection of fine wines' },
                        { id: 'extended-time', name: 'Extended Time', price: 50, image: 'images/extended-time.jpg', description: '+2 hours of sailing' }
                    ],
                    insurance: [
                        { id: 'sailing-insurance', name: 'Sailing Insurance', price: 20, required: true, description: 'Standard coverage for the trip' }
                    ]
                },
                'whale': {
                    title: 'Whale Watching Tour',
                    description: 'Witness majestic whales in their natural habitat.',
                    duration: '4 hours',
                    capacity: 'Up to 20 people',
                    basePrice: 159,
                    image: 'https://images.unsplash.com/photo-1511314814214-81dc6551aee5?ixlib=rb-4.0.3',
                    timeSlots: ['07:00', '11:00', '15:00'],
                    equipment: [
                        { id: 'binoculars', name: 'Premium Binoculars', price: 15, image: 'images/binoculars.jpg', description: 'High-quality viewing equipment' },
                        { id: 'guide-book', name: 'Marine Life Guide', price: 10, image: 'images/guide-book.jpg', description: 'Illustrated whale guide book' }
                    ],
                    extras: [
                        { id: 'comfort-seat', name: 'Comfort Seating', price: 25, image: 'images/comfort-seat.jpg', description: 'Padded seats with better view' },
                        { id: 'photo-guide', name: 'Photo Guide Service', price: 35, image: 'images/photo-guide.jpg', description: 'Professional photo assistance' }
                    ],
                    insurance: [
                        { id: 'whale-insurance', name: 'Whale Watching Insurance', price: 20, required: true, description: 'Standard coverage for the trip' }
                    ]
                }
            },
            booking: {
                service: '',
                fullName: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                guests: 1,
                cart: {
                    equipment: [],
                    extras: [],
                    insurance: []
                }
            },
            errors: {},
            isSubmitting: false,
            showSuccessMessage: false,
            minDate: new Date().toISOString().split('T')[0],
            cartTotal: 0
        }
    },
    computed: {
        currentService() {
            const urlParams = new URLSearchParams(window.location.search);
            const serviceType = urlParams.get('service') || 'fishing';
            return this.services[serviceType];
        },
        maxGuests() {
            return parseInt(this.currentService.capacity.match(/\d+/)[0]);
        },
        calculateBasePrice() {
            return this.currentService.basePrice * this.booking.guests;
        },
        calculateTotal() {
            // Base price calculation
            let total = this.calculateBasePrice;
            
            // Add selected add-ons
            total += this.booking.cart.equipment.reduce((sum, item) => {
                return sum + (item.price * (item.quantity || 1));
            }, 0);

            total += this.booking.cart.extras.reduce((sum, item) => {
                return sum + (item.price * (item.quantity || 1));
            }, 0);

            total += this.booking.cart.insurance.reduce((sum, item) => {
                return sum + item.price;
            }, 0);
            
            // Weekend surcharge (10%)
            if (this.booking.date) {
                const bookingDate = new Date(this.booking.date);
                if (bookingDate.getDay() === 0 || bookingDate.getDay() === 6) {
                    total *= 1.1;
                }
            }
            
            return Math.round(total);
        },
        isFormValid() {
            return this.booking.fullName &&
                   this.booking.email &&
                   this.booking.phone &&
                   this.booking.date &&
                   this.booking.time &&
                   Object.keys(this.errors).length === 0;
        }
    },
    methods: {
        formatTime(time) {
            const [hours, minutes] = time.split(':');
            const hour = parseInt(hours);
            return `${hour > 12 ? hour - 12 : hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
        },
        selectTime(time) {
            this.booking.time = time;
            this.validateField('time');
        },
        toggleAddon(addonId) {
            if (this.isSubmitting) return;
            
            const index = this.booking.selectedAddons.indexOf(addonId);
            if (index === -1) {
                this.booking.selectedAddons.push(addonId);
            } else {
                this.booking.selectedAddons.splice(index, 1);
            }
        },
        validateField(field) {
            this.errors = { ...this.errors };
            delete this.errors[field];

            switch (field) {
                case 'fullName':
                    if (this.booking.fullName.length < 3) {
                        this.errors[field] = 'Name must be at least 3 characters long';
                    }
                    break;
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(this.booking.email)) {
                        this.errors[field] = 'Please enter a valid email address';
                    }
                    break;
                case 'phone':
                    const phoneRegex = /^\+?[\d\s-]{10,}$/;
                    if (!phoneRegex.test(this.booking.phone)) {
                        this.errors[field] = 'Please enter a valid phone number';
                    }
                    break;
                case 'date':
                    const selectedDate = new Date(this.booking.date);
                    const today = new Date();
                    if (selectedDate < today) {
                        this.errors[field] = 'Please select a future date';
                    }
                    break;
                case 'time':
                    if (!this.booking.time) {
                        this.errors[field] = 'Please select a time slot';
                    }
                    break;
            }
        },
        async submitBooking() {
            // Validate all fields before submission
            ['fullName', 'email', 'phone', 'date', 'time'].forEach(field => {
                this.validateField(field);
            });

            if (!this.isFormValid) {
                return;
            }

            this.isSubmitting = true;

            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                console.log('Booking submitted:', {
                    ...this.booking,
                    totalPrice: this.calculateTotal
                });

                this.showSuccessMessage = true;
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    this.booking = {
                        service: this.booking.service,
                        fullName: '',
                        email: '',
                        phone: '',
                        date: '',
                        time: '',
                        guests: 1,
                        cart: {
                            equipment: [],
                            extras: [],
                            insurance: []
                        }
                    };
                    this.showSuccessMessage = false;
                }, 3000);
                
            } catch (error) {
                console.error('Booking failed:', error);
                alert('Sorry, there was an error processing your booking. Please try again.');
            } finally {
                this.isSubmitting = false;
            }
        },
        addToCart(type, item) {
            if (this.isSubmitting) return;

            const cartSection = this.booking.cart[type];
            const existingItem = cartSection.find(i => i.id === item.id);

            if (existingItem) {
                // If item exists and it's not insurance (which should be unique)
                if (type !== 'insurance') {
                    existingItem.quantity = (existingItem.quantity || 1) + 1;
                }
            } else {
                cartSection.push({
                    ...item,
                    quantity: 1
                });
            }

            this.updateCartTotal();
        },

        removeFromCart(type, itemId) {
            const cartSection = this.booking.cart[type];
            const index = cartSection.findIndex(i => i.id === itemId);
            
            if (index > -1) {
                cartSection.splice(index, 1);
            }

            this.updateCartTotal();
        },

        updateQuantity(type, itemId, change) {
            const item = this.booking.cart[type].find(i => i.id === itemId);
            if (item) {
                const newQuantity = (item.quantity || 1) + change;
                if (newQuantity > 0) {
                    item.quantity = newQuantity;
                } else {
                    this.removeFromCart(type, itemId);
                }
            }
            this.updateCartTotal();
        },

        updateCartTotal() {
            let total = this.calculateBasePrice;

            // Calculate equipment total
            total += this.booking.cart.equipment.reduce((sum, item) => {
                return sum + (item.price * (item.quantity || 1));
            }, 0);

            // Calculate extras total
            total += this.booking.cart.extras.reduce((sum, item) => {
                return sum + (item.price * (item.quantity || 1));
            }, 0);

            // Calculate insurance total
            total += this.booking.cart.insurance.reduce((sum, item) => {
                return sum + item.price;
            }, 0);

            // Apply weekend surcharge if applicable
            if (this.booking.date) {
                const bookingDate = new Date(this.booking.date);
                if (bookingDate.getDay() === 0 || bookingDate.getDay() === 6) {
                    total *= 1.1;
                }
            }

            this.cartTotal = Math.round(total);
        }
    },
    mounted() {
        // Set initial service from URL
        const urlParams = new URLSearchParams(window.location.search);
        this.booking.service = urlParams.get('service') || 'fishing';

        // Set minimum date to today
        this.booking.date = this.minDate;
    }
});

app.mount('#bookingApp');
