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
                    timeSlots: ['09:00', '11:00', '14:00', '16:00']
                },
                'diving': {
                    title: 'Scuba Diving Experience',
                    description: 'Explore the underwater world with our certified instructors.',
                    duration: '4 hours',
                    capacity: 'Up to 4 people',
                    basePrice: 199,
                    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3',
                    timeSlots: ['08:00', '10:00', '13:00', '15:00']
                },
                'cruise': {
                    title: 'Sunset Cruise Adventure',
                    description: 'Enjoy a luxurious evening cruise with dinner and drinks.',
                    duration: '3 hours',
                    capacity: 'Up to 12 people',
                    basePrice: 299,
                    image: 'https://images.unsplash.com/photo-1599174898893-6f675919d029?ixlib=rb-4.0.3',
                    timeSlots: ['16:00', '17:00', '18:00']
                },
                'jetski': {
                    title: 'Jet Ski Adventure',
                    description: 'Experience the thrill of riding waves on our powerful jet skis.',
                    duration: '2 hours',
                    capacity: 'Up to 2 people',
                    basePrice: 129,
                    image: 'https://images.unsplash.com/photo-1622651783098-0bc0035d3dfa?ixlib=rb-4.0.3',
                    timeSlots: ['09:00', '11:00', '13:00', '15:00', '17:00']
                },
                'sailing': {
                    title: 'Sailing Experience',
                    description: 'Learn sailing basics or enjoy a relaxing day on the water.',
                    duration: '5 hours',
                    capacity: 'Up to 8 people',
                    basePrice: 179,
                    image: 'https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?ixlib=rb-4.0.3',
                    timeSlots: ['08:00', '10:00', '14:00', '16:00']
                },
                'whale': {
                    title: 'Whale Watching Tour',
                    description: 'Witness majestic whales in their natural habitat.',
                    duration: '4 hours',
                    capacity: 'Up to 20 people',
                    basePrice: 159,
                    image: 'https://images.unsplash.com/photo-1511314814214-81dc6551aee5?ixlib=rb-4.0.3',
                    timeSlots: ['07:00', '11:00', '15:00']
                }
            },
            booking: {
                service: '',
                fullName: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                guests: 1
            }
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
            return this.calculateBasePrice;
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
        },
        async submitBooking() {
            console.log('Booking submitted:', {
                ...this.booking,
                totalPrice: this.calculateTotal
            });
            
            alert('Booking submitted successfully! We will contact you shortly.');
            
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
        }
    },
    mounted() {
        // Set initial service from URL
        const urlParams = new URLSearchParams(window.location.search);
        this.booking.service = urlParams.get('service') || 'fishing';
    }
});

app.mount('#bookingApp');
