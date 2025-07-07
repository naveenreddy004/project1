document.addEventListener('DOMContentLoaded', function() {
    // Common functionality for all pages
    
    // Toggle return date field based on journey type
    const journeyType = document.getElementById('journeyType');
    const returnDateGroup = document.getElementById('returnDateGroup');
    
    if (journeyType && returnDateGroup) {
        journeyType.addEventListener('change', function() {
            if (this.value === 'round-trip') {
                returnDateGroup.style.display = 'block';
                document.getElementById('returnDate').setAttribute('required', '');
            } else {
                returnDateGroup.style.display = 'none';
                document.getElementById('returnDate').removeAttribute('required');
            }
        });
        
        // Initialize on page load
        if (journeyType.value === 'one-way') {
            returnDateGroup.style.display = 'none';
        }
    }
    
    // Form submission handlers
    const ticketBookingForm = document.getElementById('ticketBookingForm');
    if (ticketBookingForm) {
        ticketBookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, this would make an API call
            document.getElementById('searchResults').style.display = 'block';
            populateTrainResults();
            window.scrollTo({
                top: document.getElementById('searchResults').offsetTop - 20,
                behavior: 'smooth'
            });
        });
    }
    
    const pnrStatusForm = document.getElementById('pnrStatusForm');
    if (pnrStatusForm) {
        pnrStatusForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, this would make an API call
            document.getElementById('pnrResult').style.display = 'block';
            populatePnrDetails();
            window.scrollTo({
                top: document.getElementById('pnrResult').offsetTop - 20,
                behavior: 'smooth'
            });
        });
    }
    
    const scheduleForm = document.getElementById('scheduleForm');
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, this would make an API call
            document.getElementById('scheduleResult').style.display = 'block';
            populateScheduleDetails();
            window.scrollTo({
                top: document.getElementById('scheduleResult').offsetTop - 20,
                behavior: 'smooth'
            });
        });
    }
    
    const fareEnquiryForm = document.getElementById('fareEnquiryForm');
    if (fareEnquiryForm) {
        fareEnquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, this would make an API call
            document.getElementById('fareResult').style.display = 'block';
            populateFareDetails();
            window.scrollTo({
                top: document.getElementById('fareResult').offsetTop - 20,
                behavior: 'smooth'
            });
        });
    }
    
    const availabilityForm = document.getElementById('availabilityForm');
    if (availabilityForm) {
        availabilityForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, this would make an API call
            document.getElementById('availabilityResult').style.display = 'block';
            populateAvailabilityDetails();
            window.scrollTo({
                top: document.getElementById('availabilityResult').offsetTop - 20,
                behavior: 'smooth'
            });
        });
    }
    
    const cancelTicketForm = document.getElementById('cancelTicketForm');
    if (cancelTicketForm) {
        cancelTicketForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, this would make an API call
            document.getElementById('cancelResult').style.display = 'block';
            populateCancelDetails();
            window.scrollTo({
                top: document.getElementById('cancelResult').offsetTop - 20,
                behavior: 'smooth'
            });
        });
    }
    
    const confirmCancel = document.getElementById('confirmCancel');
    if (confirmCancel) {
        confirmCancel.addEventListener('click', function() {
            alert('Ticket cancelled successfully! Refund will be processed within 7 working days.');
            window.location.href = 'my-bookings.html';
        });
    }
    
    // Tab functionality for My Bookings
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and tabs
            document.querySelectorAll('.tab-btn').forEach(tb => tb.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, this would validate credentials
            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'my-bookings.html';
        });
    }
    
    // Set today's date as minimum for date inputs
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => {
        input.setAttribute('min', today);
        if (!input.value) {
            input.value = today;
        }
    });
});

// Demo data population functions
function populateTrainResults() {
    const trainResults = document.getElementById('trainResults');
    trainResults.innerHTML = '';
    
    const trains = [
        {
            number: '12345',
            name: 'Rajdhani Express',
            departure: '16:35',
            departureStation: 'Delhi (DEL)',
            arrival: '08:15',
            arrivalStation: 'Mumbai (CSTM)',
            duration: '15h 40m',
            classes: [
                { class: '1A', availability: 'Available', fare: '₹3,500' },
                { class: '2A', availability: 'Available', fare: '₹2,500' },
                { class: '3A', availability: 'RAC 5', fare: '₹1,800' },
                { class: 'SL', availability: 'WL 12', fare: '₹800' }
            ]
        },
        {
            number: '12565',
            name: 'Shatabdi Express',
            departure: '06:00',
            departureStation: 'Bangalore (SBC)',
            arrival: '11:00',
            arrivalStation: 'Chennai (MAS)',
            duration: '5h 00m',
            classes: [
                { class: 'CC', availability: 'Available', fare: '₹1,200' },
                { class: '2S', availability: 'Available', fare: '₹600' }
            ]
        },
        {
            number: '18626',
            name: 'Patna Express',
            departure: '20:30',
            departureStation: 'Delhi (DEL)',
            arrival: '07:15',
            arrivalStation: 'Patna (PNBE)',
            duration: '10h 45m',
            classes: [
                { class: '2A', availability: 'Available', fare: '₹2,200' },
                { class: '3A', availability: 'RAC 3', fare: '₹1,600' },
                { class: 'SL', availability: 'WL 8', fare: '₹700' }
            ]
        }
    ];
    
    trains.forEach(train => {
        const trainCard = document.createElement('div');
        trainCard.className = 'train-card';
        
        trainCard.innerHTML = `
            <div class="train-header">
                <span class="train-number">${train.number}</span>
                <span class="train-name">${train.name}</span>
            </div>
            <div class="train-timings">
                <div class="departure">
                    <div class="time">${train.departure}</div>
                    <div class="station">${train.departureStation}</div>
                </div>
                <div class="duration">${train.duration}</div>
                <div class="arrival">
                    <div class="time">${train.arrival}</div>
                    <div class="station">${train.arrivalStation}</div>
                </div>
            </div>
            <div class="train-classes">
                ${train.classes.map(cls => `
                    <div class="class-badge">
                        ${cls.class}: ${cls.availability} (${cls.fare})
                    </div>
                `).join('')}
            </div>
            <div class="train-actions">
                <div class="price">From ${train.classes[0].fare}</div>
                <a href="book-ticket.html" class="btn btn-primary btn-small">Book Now</a>
            </div>
        `;
        
        trainResults.appendChild(trainCard);
    });
}

function populatePnrDetails() {
    const passengerDetails = document.getElementById('passengerDetails');
    passengerDetails.innerHTML = '';
    
    const passengers = [
        { no: 1, bookingStatus: 'CNF/B2/15', currentStatus: 'CNF/B2/15', coach: 'B2', berth: '15' },
        { no: 2, bookingStatus: 'CNF/B2/16', currentStatus: 'CNF/B2/16', coach: 'B2', berth: '16' },
        { no: 3, bookingStatus: 'RAC 5', currentStatus: 'RAC 5', coach: '-', berth: '-' }
    ];
    
    passengers.forEach(passenger => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${passenger.no}</td>
            <td>${passenger.bookingStatus}</td>
            <td>${passenger.currentStatus}</td>
            <td>${passenger.coach}</td>
            <td>${passenger.berth}</td>
        `;
        passengerDetails.appendChild(row);
    });
}

function populateScheduleDetails() {
    const stationList = document.getElementById('stationList');
    stationList.innerHTML = '';
    
    const stations = [
        { code: 'DEL', name: 'Delhi', arrival: '-', departure: '16:35', halt: '-', day: 1, distance: 0 },
        { code: 'MTJ', name: 'Mathura Junction', arrival: '18:05', departure: '18:10', halt: '5m', day: 1, distance: 141 },
        { code: 'AGC', name: 'Agra Cantt', arrival: '19:00', departure: '19:05', halt: '5m', day: 1, distance: 200 },
        { code: 'GWL', name: 'Gwalior Junction', arrival: '20:30', departure: '20:35', halt: '5m', day: 1, distance: 313 },
        { code: 'JHS', name: 'Jhansi Junction', arrival: '22:15', departure: '22:25', halt: '10m', day: 1, distance: 403 },
        { code: 'BPL', name: 'Bhopal Junction', arrival: '02:00', departure: '02:10', halt: '10m', day: 2, distance: 701 },
        { code: 'ET', name: 'Itarsi Junction', arrival: '03:45', departure: '03:50', halt: '5m', day: 2, distance: 792 },
        { code: 'KNW', name: 'Khandwa Junction', arrival: '06:15', departure: '06:20', halt: '5m', day: 2, distance: 900 },
        { code: 'BSL', name: 'Bhusaval Junction', arrival: '07:30', departure: '07:35', halt: '5m', day: 2, distance: 1002 },
        { code: 'CSTM', name: 'Mumbai', arrival: '08:15', departure: '-', halt: '-', day: 2, distance: 1384 }
    ];
    
    stations.forEach(station => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${station.code}</td>
            <td>${station.name}</td>
            <td>${station.arrival}</td>
            <td>${station.departure}</td>
            <td>${station.halt}</td>
            <td>${station.day}</td>
            <td>${station.distance} km</td>
        `;
        stationList.appendChild(row);
    });
}

function populateFareDetails() {
    const fareDetails = document.getElementById('fareDetails');
    fareDetails.innerHTML = '';
    
    const fares = [
        { class: '1A', baseFare: '₹2,500', reservation: '₹300', superfast: '₹225', gst: '₹475', total: '₹3,500' },
        { class: '2A', baseFare: '₹1,800', reservation: '₹200', superfast: '₹225', gst: '₹275', total: '₹2,500' },
        { class: '3A', baseFare: '₹1,300', reservation: '₹100', superfast: '₹225', gst: '₹175', total: '₹1,800' },
        { class: 'SL', baseFare: '₹600', reservation: '₹40', superfast: '₹120', gst: '₹40', total: '₹800' }
    ];
    
    fares.forEach(fare => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fare.class}</td>
            <td>${fare.baseFare}</td>
            <td>${fare.reservation}</td>
            <td>${fare.superfast}</td>
            <td>${fare.gst}</td>
            <td>${fare.total}</td>
        `;
        fareDetails.appendChild(row);
    });
}

function populateAvailabilityDetails() {
    const availabilityDetails = document.getElementById('availabilityDetails');
    availabilityDetails.innerHTML = '';
    
    const availability = [
        { class: '1A', available: '10', rac: '-', wl: '-', status: 'Available' },
        { class: '2A', available: '5', rac: '-', wl: '-', status: 'Available' },
        { class: '3A', available: '-', rac: '8', wl: '12', status: 'RAC 8' },
        { class: 'SL', available: '-', rac: '-', wl: '25', status: 'WL 25' }
    ];
    
    availability.forEach(avail => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${avail.class}</td>
            <td>${avail.available}</td>
            <td>${avail.rac}</td>
            <td>${avail.wl}</td>
            <td>${avail.status}</td>
        `;
        availabilityDetails.appendChild(row);
    });
}

function populateCancelDetails() {
    const cancelPassengerDetails = document.getElementById('cancelPassengerDetails');
    cancelPassengerDetails.innerHTML = '';
    
    const passengers = [
        { no: 1, name: 'John Doe', age: 35, gender: 'Male', status: 'CNF/B2/15' },
        { no: 2, name: 'Jane Doe', age: 32, gender: 'Female', status: 'CNF/B2/16' },
        { no: 3, name: 'Child Doe', age: 8, gender: 'Male', status: 'RAC 5' }
    ];
    
    passengers.forEach(passenger => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${passenger.no}</td>
            <td>${passenger.name}</td>
            <td>${passenger.age}</td>
            <td>${passenger.gender}</td>
            <td>${passenger.status}</td>
            <td><input type="checkbox" name="cancelPassenger" value="${passenger.no}"></td>
        `;
        cancelPassengerDetails.appendChild(row);
    });
    
    document.getElementById('cancelSummary').style.display = 'block';
}

// Homepage Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality for booking card
    const bookingTabs = document.querySelectorAll('.booking-tabs .tab-btn');
    if (bookingTabs.length > 0) {
        bookingTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                document.querySelectorAll('.booking-tabs .tab-btn').forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // In a real app, you would switch between different forms here
            });
        });
    }
    
    // Set today's date as default for journey date
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const journeyDate = document.getElementById('journeyDate');
    if (journeyDate) {
        journeyDate.value = tomorrow.toISOString().split('T')[0];
        journeyDate.setAttribute('min', today.toISOString().split('T')[0]);
    }
    
    // Quick booking form submission
    const quickBookingForm = document.getElementById('quickBookingForm');
    if (quickBookingForm) {
        quickBookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = 'book-ticket.html';
        });
    }
    
    // Auto-fill station suggestions (mock implementation)
    const stationInputs = document.querySelectorAll('input[type="text"][placeholder*="station"]');
    stationInputs.forEach(input => {
        input.addEventListener('focus', function() {
            // In a real app, this would fetch station suggestions from an API
            console.log('Fetching station suggestions for:', this.id);
        });
    });
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (mobileMenuToggle && primaryNav) {
    mobileMenuToggle.addEventListener('click', function() {
        primaryNav.classList.toggle('active');
        this.innerHTML = primaryNav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!primaryNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            primaryNav.classList.remove('active');
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navigationMenu = document.querySelector('.navigation-menu');

if (mobileToggle && navigationMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navigationMenu.classList.toggle('active');
    });
}

// Dropdown Menu Functionality for Mobile
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            dropdown.classList.toggle('active');
            
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navigationMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navigationMenu.classList.remove('active');
    }
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 992) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
});
// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const mobileOverlay = document.createElement('div');
mobileOverlay.className = 'mobile-overlay';
document.body.appendChild(mobileOverlay);

// Toggle mobile menu
if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        
        // Animate hamburger to X
        const bars = this.querySelectorAll('.menu-bar');
        if (this.classList.contains('active')) {
            bars[0].style.transform = 'translateY(8px) rotate(45deg)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
            bars[0].style.transform = '';
            bars[1].style.opacity = '';
            bars[2].style.transform = '';
        }
    });
}

// Mobile dropdown functionality
const mobileMenuHeadings = document.querySelectorAll('.mobile-menu-heading');

mobileMenuHeadings.forEach(heading => {
    heading.addEventListener('click', function() {
        const dropdown = this.nextElementSibling;
        const icon = this.querySelector('.dropdown-toggle');
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
        icon.style.transform = dropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        
        // Close other dropdowns
        document.querySelectorAll('.mobile-dropdown-menu').forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
                otherDropdown.previousElementSibling.querySelector('.dropdown-toggle').style.transform = 'rotate(0deg)';
            }
        });
    });
});

// Close mobile menu when clicking overlay
mobileOverlay.addEventListener('click', function() {
    mobileMenuBtn.classList.remove('active');
    mobileNav.classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('no-scroll');
    
    // Reset hamburger icon
    const bars = mobileMenuBtn.querySelectorAll('.menu-bar');
    bars[0].style.transform = '';
    bars[1].style.opacity = '';
    bars[2].style.transform = '';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu-link, .mobile-dropdown-item').forEach(link => {
    link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
        
        // Reset hamburger icon
        const bars = mobileMenuBtn.querySelectorAll('.menu-bar');
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
    });
});

// Prevent body scroll when mobile menu is open
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .no-scroll {
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
});