// Debug log
console.log('Vue:', Vue);

const { createApp, ref, computed } = Vue;

const app = createApp({
    data() {
        return {
            services: {
                'fishing': {
                    title: 'Deep Sea Fishing Adventure',
                    description: 'Exciting fishing experience for all skill levels',
                    capacity: 'Up to 6 people',
                    basePrice: 149,
                    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3',
                    timeSlots: ['09:00', '11:00', '14:00', '16:00'],
                    addOns: [
                        { 
                            id: 'premium-rod', 
                            name: 'Premium Fishing Rod', 
                            description: 'Professional-grade fishing rod for serious anglers',
                            price: 30,
                            image: 'images/fishing-rod.jpg',
                            quantity: 0,
                            maxQuantity: 2
                        },
                        { 
                            id: 'tackle-box', 
                            name: 'Tackle Box Set', 
                            description: 'Complete set of lures, hooks, and fishing accessories',
                            price: 25,
                            image: 'images/tackle-box.jpg',
                            quantity: 0
                        },
                        { 
                            id: 'fishing-guide', 
                            name: 'Professional Fishing Guide', 
                            description: 'Expert guide to improve your fishing skills',
                            price: 50,
                            image: 'images/fishing-guide.jpg',
                            quantity: 0
                        }
                    ]
                },
                'diving': {
                    title: 'Scuba Diving Experience',
                    description: 'Explore underwater wonders with professional equipment',
                    capacity: 'Up to 4 people',
                    basePrice: 199,
                    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3',
                    timeSlots: ['08:00', '10:00', '13:00', '15:00'],
                    addOns: [
                        { 
                            id: 'premium-gear', 
                            name: 'Premium Diving Gear', 
                            description: 'High-end diving equipment for better comfort',
                            price: 45,
                            image: 'images/diving-gear.jpg',
                            quantity: 0
                        },
                        { 
                            id: 'underwater-camera', 
                            name: 'Underwater Camera', 
                            description: 'GoPro Hero camera with underwater housing',
                            price: 35,
                            image: 'images/underwater-camera.jpg',
                            quantity: 0
                        },
                        { 
                            id: 'diving-insurance', 
                            name: 'Diving Insurance', 
                            description: 'Comprehensive insurance for diving activities',
                            price: 25,
                            image: 'images/diving-insurance.jpg',
                            quantity: 0
                        }
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
                    addOns: [
                        { 
                            id: 'private-cabin', 
                            name: 'Private Cabin', 
                            description: 'Private cabin with luxurious amenities',
                            price: 100,
                            image: 'images/private-cabin.jpg',
                            quantity: 0
                        },
                        { 
                            id: 'gourmet-dinner', 
                            name: 'Gourmet Dinner', 
                            description: 'Fine dining experience with gourmet cuisine',
                            price: 75,
                            image: 'images/gourmet-dinner.jpg',
                            quantity: 0
                        },
                        { 
                            id: 'champagne-toast', 
                            name: 'Champagne Toast', 
                            description: 'Complimentary champagne toast for special occasions',
                            price: 50,
                            image: 'images/champagne-toast.jpg',
                            quantity: 0
                        }
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
                    addOns: [
                        { 
                            id: 'jet-ski-lesson', 
                            name: 'Jet Ski Lesson', 
                            description: 'Professional instruction for beginners',
                            price: 40,
                            image: 'images/jet-ski-lesson.jpg',
                            quantity: 0
                        },
                        { 
                            id: 'life-jacket', 
                            name: 'Life Jacket', 
                            description: 'High-quality life jacket for added safety',
                            price: 20,
                            image: 'images/life-jacket.jpg',
                            quantity: 0
                        },
                        { 
                            id: 'waterproof-phone-case', 
                            name: 'Waterproof Phone Case', 
                            description: 'Protect your phone from water damage',
                            price: 30,
                            image: 'images/waterproof-phone-case.jpg',
                            quantity: 0
                        }
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
                    addOns: [
                        { 
                            id: 'sailing-lesson', 
                            name: 'Sailing Lesson', 
                            description: 'Professional instruction for beginners',
                            price: 60,
                            image: 'images/sailing-lesson.jpg',
                            quantity: 0
                        },
                        { 
                            id: 'snorkeling-gear', 
                            name: 'Snorkeling Gear', 
                            description: 'High-quality snorkeling equipment for exploring the underwater world',
                            price: 40,
                            image: 'images/snorkeling-gear.jpg',
                            quantity: 0
                        },
                        { 
                            id: 'beach-lunch', 
                            name: 'Beach Lunch', 
                            description: 'Delicious lunch on a secluded beach',
                            price: 50,
                            image: 'images/beach-lunch.jpg',
                            quantity: 0
                        }
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
                    addOns: [
                        { 
                            id: 'whale-watching-guide', 
                            name: 'Whale Watching Guide', 
                            description: 'Expert guide for spotting whales and learning about their habitat',
                            price: 30,
                            image: 'images/whale-watching-guide.jpg',
                            quantity: 0
                        },
                        { 
                            id: 'binoculars', 
                            name: 'Binoculars', 
                            description: 'High-quality binoculars for getting a closer look at whales',
                            price: 20,
                            image: 'images/binoculars.jpg',
                            quantity: 0
                        },
                        { 
                            id: 'marine-life-book', 
                            name: 'Marine Life Book', 
                            description: 'Comprehensive guide to marine life and whales',
                            price: 25,
                            image: 'images/marine-life-book.jpg',
                            quantity: 0
                        }
                    ]
                },
            },
            booking: {
                service: 'fishing',
                fullName: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                guests: 1,
                selectedAddOns: []
            },
            errors: {},
            minDate: new Date().toISOString().split('T')[0],
            step: 1,
            totalSteps: 4,
            currentAnimation: ''
        }
    },
    computed: {
        currentService() {
            return this.services[this.booking.service];
        },
        maxGuests() {
            return parseInt(this.currentService.capacity.match(/\d+/)[0]);
        },
        calculateBasePrice() {
            return this.currentService.basePrice * this.booking.guests;
        },
        calculateAddOnsTotal() {
            return this.currentService.addOns
                .reduce((total, addOn) => total + (addOn.price * addOn.quantity), 0);
        },
        calculateTotalPrice() {
            return this.calculateBasePrice + this.calculateAddOnsTotal;
        },
        selectedAddOns() {
            return this.currentService.addOns.filter(addOn => addOn.quantity > 0);
        },
        availableAddOns() {
            return this.currentService.addOns.filter(addOn => this.isAddOnAvailable(addOn));
        },
        isFormValid() {
            return Object.keys(this.errors).length === 0 &&
                   this.booking.fullName &&
                   this.booking.email &&
                   this.booking.phone &&
                   this.booking.date &&
                   this.booking.time;
        },
        progress() {
            return (this.step / this.totalSteps) * 100;
        }
    },
    methods: {
        formatTime(time) {
            const [hours, minutes] = time.split(':');
            const hour = parseInt(hours);
            return `${hour > 12 ? hour - 12 : hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
        },
        validateField(field) {
            this.errors = { ...this.errors };
            delete this.errors[field];

            switch (field) {
                case 'fullName':
                    if (this.booking.fullName.length < 3) {
                        this.errors.fullName = 'Name must be at least 3 characters long';
                    }
                    break;
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(this.booking.email)) {
                        this.errors.email = 'Please enter a valid email address';
                    }
                    break;
                case 'phone':
                    const phoneRegex = /^\+?[\d\s-]{10,}$/;
                    if (!phoneRegex.test(this.booking.phone)) {
                        this.errors.phone = 'Please enter a valid phone number';
                    }
                    break;
                case 'date':
                    const selectedDate = new Date(this.booking.date);
                    const today = new Date();
                    if (selectedDate < today) {
                        this.errors.date = 'Please select a future date';
                    }
                    break;
                case 'time':
                    if (!this.booking.time) {
                        this.errors.time = 'Please select a time slot';
                    }
                    break;
            }
        },
        selectTime(time) {
            this.booking.time = time;
            this.validateField('time');
        },
        incrementGuests() {
            if (this.booking.guests < this.maxGuests) {
                this.booking.guests++;
            }
        },
        decrementGuests() {
            if (this.booking.guests > 1) {
                this.booking.guests--;
            }
        },
        isAddOnAvailable(addOn) {
            // Implement smart add-on availability logic
            const serviceSpecificAddOns = {
                'fishing': ['premium-rod', 'tackle-box', 'fishing-guide'],
                'diving': ['premium-gear', 'underwater-camera', 'diving-insurance'],
                'cruise': ['private-cabin', 'gourmet-dinner', 'champagne-toast'],
                'jetski': ['jet-ski-lesson', 'life-jacket', 'waterproof-phone-case'],
                'sailing': ['sailing-lesson', 'snorkeling-gear', 'beach-lunch'],
                'whale': ['whale-watching-guide', 'binoculars', 'marine-life-book']
            };

            return serviceSpecificAddOns[this.booking.service]?.includes(addOn.id) || false;
        },
        incrementAddOn(addOn) {
            // Implement smarter add-on increment with context-aware limits
            const maxAddOns = this.getMaxAddOnsForService();
            
            // Check if the add-on is available for the current service
            if (!this.isAddOnAvailable(addOn)) {
                this.showNotification(`This add-on is not available for ${this.currentService.title}`, 'error');
                return;
            }

            // Check total add-ons limit
            const currentTotalAddOns = this.currentService.addOns.reduce((total, a) => total + a.quantity, 0);
            if (currentTotalAddOns >= maxAddOns) {
                this.showNotification(`Maximum of ${maxAddOns} add-ons allowed`, 'error');
                return;
            }

            // Check individual add-on limit (if specified)
            const maxQuantity = addOn.maxQuantity || 3;
            if (addOn.quantity < maxQuantity) {
                addOn.quantity++;
                this.showNotification(`Added ${addOn.name}`, 'success');
            } else {
                this.showNotification(`Maximum quantity reached for ${addOn.name}`, 'error');
            }
        },
        decrementAddOn(addOn) {
            if (addOn.quantity > 0) {
                addOn.quantity--;
                this.showNotification(`Removed ${addOn.name}`, 'info');
            }
        },
        getMaxAddOnsForService() {
            // Define max add-ons based on service type
            const serviceAddOnLimits = {
                'fishing': 4,
                'diving': 3,
                'cruise': 3,
                'jetski': 3,
                'sailing': 4,
                'whale': 3
            };
            return serviceAddOnLimits[this.booking.service] || 3;
        },
        calculateAddOnSubtotal(addOn) {
            return addOn.price * addOn.quantity;
        },
        showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerText = message;
            document.body.appendChild(notification);
            setTimeout(() => {
                notification.remove();
            }, 3000);
        },
        nextStep() {
            if (this.step < this.totalSteps) {
                this.currentAnimation = 'slide-left';
                this.step++;
                this.showNotification('Step completed!', 'success');
            }
        },
        previousStep() {
            if (this.step > 1) {
                this.currentAnimation = 'slide-right';
                this.step--;
                this.showNotification('Step reverted!', 'info');
            }
        },
        submitBooking() {
            // Validate all fields
            ['fullName', 'email', 'phone', 'date', 'time'].forEach(field => {
                this.validateField(field);
            });

            if (this.isFormValid) {
                const bookingDetails = {
                    ...this.booking,
                    basePrice: this.calculateBasePrice,
                    addOnsTotal: this.calculateAddOnsTotal,
                    totalPrice: this.calculateTotalPrice,
                    selectedAddOns: this.currentService.addOns.filter(addOn => addOn.quantity > 0)
                };

                console.log('Booking submitted:', bookingDetails);
                
                // Simulate booking submission
                alert(`Booking submitted successfully!\nTotal Price: $${bookingDetails.totalPrice}`);
                
                // Reset form
                this.booking = {
                    service: this.booking.service,
                    fullName: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    guests: 1
                };
                
                // Reset add-on quantities
                this.currentService.addOns.forEach(addOn => addOn.quantity = 0);
                
                this.errors = {};
                this.step = 1;
            } else {
                alert('Please correct the errors in the form.');
            }
        }
    },
    mounted() {
        // Set initial service from URL
        const urlParams = new URLSearchParams(window.location.search);
        this.booking.service = urlParams.get('service') || 'fishing';
    }
});

app.mount('#bookingApp');
