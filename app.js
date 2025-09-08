// Advanced College Bus Tracking System - Bug-Free Implementation


class AdvancedBusTrackingApp {
    constructor() {
        // Application state
        this.currentUser = null;
        this.currentSection = 'dashboard';
        this.map = null;
        this.busMarkers = [];
        this.currentTheme = 'default';
        this.updateIntervals = {};
        this.pushNotificationQueue = [];
        this.lastRFIDScanAt = null;
        this.selectedBusId = null;
        
        // Enhanced data with comprehensive features
        this.data = {
            users: [
                {
                    id: 1, username: "24CS001", password: "student123", role: "student",
                    name: "Arjun Kumar", email: "arjun.kumar@college.edu", registerNumber: "24CS001",
                    department: "Computer Science", year: 2, phone: "+91 9876543210",
                    assignedRoute: "Route A", status: "Active", joinDate: "2024-08-15",
                    walletBalance: 1250, emergencyContact: "+91 9876543211", 
                    address: "Anna Nagar, Chennai"
                },
                {
                    id: 2, username: "24ME015", password: "student456", role: "student", 
                    name: "Priya Sharma", email: "priya.sharma@college.edu", registerNumber: "24ME015",
                    department: "Mechanical Engineering", year: 3, phone: "+91 8765432109",
                    assignedRoute: "Route B", status: "Active", joinDate: "2023-08-15",
                    walletBalance: 890, emergencyContact: "+91 8765432108", 
                    address: "T. Nagar, Chennai"
                },
                {
                    id: 3, username: "staff001", password: "staff123", role: "staff",
                    name: "Dr. Rajesh Menon", email: "rajesh.menon@college.edu", 
                    department: "Computer Science", position: "Professor", phone: "+91 7654321098",
                    employeeId: "EMP001", status: "Active", joinDate: "2020-06-01"
                },
                {
                    id: 4, username: "admin001", password: "admin123", role: "admin",
                    name: "Abinesh", email: "santhosh.kumar@college.edu", 
                    position: "Transport Administrator", phone: "+91 6543210987",
                    employeeId: "ADM001", status: "Active", joinDate: "2019-04-01"
                }
            ],
            buses: [
                {
                    id: "TN-09-AB-1234", route: "Route A - Tech Corridor", 
                    driver: "Kumar Selvam", driverPhone: "+91 9988776655",
                    capacity: 45, currentOccupancy: 32, status: "Active",
                    currentSpeed: 35, nextStop: "Velachery", eta: "5 min",
                    lastUpdated: "2025-09-08T15:30:00Z",
                    location: {lat: 13.0067, lng: 80.2206}
                },
                {
                    id: "TN-09-CD-5678", route: "Route B - Central Chennai",
                    driver: "Murugan Ravi", driverPhone: "+91 8877665544",
                    capacity: 40, currentOccupancy: 28, status: "Active",
                    currentSpeed: 28, nextStop: "T. Nagar", eta: "12 min",
                    lastUpdated: "2025-09-08T15:28:00Z",
                    location: {lat: 13.0827, lng: 80.2707}
                },
                {
                    id: "TN-09-EF-9012", route: "Route C - Complete Circuit",
                    driver: "Vishnu Prasad", driverPhone: "+91 7766554433",
                    capacity: 50, currentOccupancy: 38, status: "Active",
                    currentSpeed: 42, nextStop: "Marina Beach", eta: "8 min",
                    lastUpdated: "2025-09-08T15:29:00Z",
                    location: {lat: 12.9716, lng: 80.2594}
                },
                {
                    id: "TN-10-GH-3456", route: "Route D - North Chennai",
                    driver: "Suresh Babu", driverPhone: "+91 9898989898",
                    capacity: 44, currentOccupancy: 21, status: "Active",
                    currentSpeed: 30, nextStop: "Perambur", eta: "9 min",
                    lastUpdated: "2025-09-08T15:29:30Z",
                    location: {lat: 13.1210, lng: 80.2140}
                },
                {
                    id: "TN-10-IJ-7890", route: "Route E - South Chennai",
                    driver: "Aravind Kumar", driverPhone: "+91 9797979797",
                    capacity: 46, currentOccupancy: 33, status: "Active",
                    currentSpeed: 36, nextStop: "Tambaram", eta: "14 min",
                    lastUpdated: "2025-09-08T15:29:45Z",
                    location: {lat: 12.9229, lng: 80.1275}
                },
                {
                    id: "TN-10-KL-1122", route: "Route F - West Chennai",
                    driver: "Manikandan", driverPhone: "+91 9696969696",
                    capacity: 48, currentOccupancy: 26, status: "Active",
                    currentSpeed: 33, nextStop: "Poonamallee", eta: "11 min",
                    lastUpdated: "2025-09-08T15:30:15Z",
                    location: {lat: 13.0494, lng: 80.1020}
                }
            ],
            requests: [
                {
                    id: 1, student: "Arjun Kumar", registerNumber: "24CS001",
                    type: "Route Change", 
                    message: "Request to change from Route A to Route B due to family relocation to T. Nagar area",
                    status: "approved", submittedDate: "2025-09-07",
                    approvedBy: "Dr. Rajesh Menon", approvedDate: "2025-09-08"
                },
                {
                    id: 2, student: "Priya Sharma", registerNumber: "24ME015",
                    type: "Leave Request",
                    message: "Medical leave for 3 days - will not be using bus service from Sept 10-12",
                    status: "pending", submittedDate: "2025-09-06"
                },
                {
                    id: 3, student: "Rahul Krishnan", registerNumber: "24EE020",
                    type: "Route Change",
                    message: "Request to change to Route C due to internship location change",
                    status: "rejected", submittedDate: "2025-09-05",
                    rejectedBy: "Admin", rejectedDate: "2025-09-06",
                    reason: "Insufficient capacity in requested route"
                }
            ],
            announcements: [
                {
                    id: 1, title: "Live GPS Tracking Now Available",
                    message: "Real-time bus tracking with live GPS updates is now active. Track your bus location and speed in real-time through the GPS Tracking section.",
                    type: "feature", priority: "high", createdBy: "System Administrator",
                    timestamp: "2025-09-08T15:00:00Z"
                },
                {
                    id: 2, title: "Annual Bus Fees Payment Reminder",
                    message: "Annual bus fees for the 2025-26 academic year are due by September 30th. Please complete your payment to continue using the bus service without interruption.",
                    type: "billing", priority: "medium", createdBy: "Finance Department",
                    timestamp: "2025-09-07T16:30:00Z"
                },
                {
                    id: 3, title: "New Bus Added to Fleet",
                    message: "We have added a new bus (TN-09-XY-5678) to Route D serving the IT Corridor. This will help reduce wait times and improve service quality.",
                    type: "info", priority: "low", createdBy: "Transport Department",
                    timestamp: "2025-09-06T10:00:00Z"
                }
            ],
            routes: [
                {
                    id: "route_a", name: "Route A", displayName: "Route A - Tech Corridor",
                    stops: [
                        {name: "Anna University", location: "13.0067,80.2206"},
                        {name: "Guindy", location: "13.0104,80.2128"},
                        {name: "Little Mount", location: "13.0178,80.2223"},
                        {name: "Saidapet", location: "13.0218,80.2305"},
                        {name: "Velachery", location: "12.9816,80.2209"},
                        {name: "Taramani", location: "12.9842,80.2424"},
                        {name: "Perungudi", location: "12.9719,80.2485"},
                        {name: "Thoraipakkam", location: "12.9489,80.2401"},
                        {name: "Karapakkam", location: "12.9188,80.2278"},
                        {name: "OMR Sholinganallur", location: "12.9010,80.2279"}
                    ]
                },
                {
                    id: "route_b", name: "Route B", displayName: "Route B - Central Chennai",
                    stops: [
                        {name: "Chennai Central", location: "13.0827,80.2707"},
                        {name: "Egmore", location: "13.0744,80.2626"},
                        {name: "Kilpauk", location: "13.0782,80.2404"},
                        {name: "Chetpet", location: "13.0733,80.2407"},
                        {name: "Nungambakkam", location: "13.0604,80.2430"},
                        {name: "Kodambakkam", location: "13.0516,80.2207"},
                        {name: "T. Nagar", location: "13.0418,80.2341"},
                        {name: "Mylapore", location: "13.0333,80.2673"},
                        {name: "Santhome", location: "13.0270,80.2803"},
                        {name: "Marina Beach", location: "13.0499,80.2824"}
                    ]
                },
                {
                    id: "route_c", name: "Route C", displayName: "Route C - Complete Circuit",
                    stops: [
                        {name: "Anna University", location: "13.0067,80.2206"},
                        {name: "Saidapet", location: "13.0218,80.2305"},
                        {name: "Nandanam", location: "13.0290,80.2400"},
                        {name: "Teynampet", location: "13.0446,80.2514"},
                        {name: "Chennai Central", location: "13.0827,80.2707"},
                        {name: "Parrys Corner", location: "13.0917,80.2867"},
                        {name: "Marina Beach", location: "13.0499,80.2824"},
                        {name: "Adyar", location: "13.0033,80.2550"},
                        {name: "Velachery", location: "12.9816,80.2209"},
                        {name: "OMR Sholinganallur", location: "12.9010,80.2279"}
                    ]
                },
                {
                    id: "route_d", name: "Route D", displayName: "Route D - North Chennai",
                    stops: [
                        {name: "Washermanpet", location: "13.1175,80.2870"},
                        {name: "Tondiarpet", location: "13.1228,80.2942"},
                        {name: "Royapuram", location: "13.1096,80.2945"},
                        {name: "Perambur", location: "13.1210,80.2140"},
                        {name: "Vyasarpadi", location: "13.1218,80.2474"},
                        {name: "Purasaiwalkam", location: "13.0867,80.2500"}
                    ]
                },
                {
                    id: "route_e", name: "Route E", displayName: "Route E - South Chennai",
                    stops: [
                        {name: "Velachery", location: "12.9816,80.2209"},
                        {name: "Medavakkam", location: "12.9166,80.1970"},
                        {name: "Pallikaranai", location: "12.9496,80.2120"},
                        {name: "Chromepet", location: "12.9526,80.1406"},
                        {name: "Tambaram", location: "12.9229,80.1275"},
                        {name: "Camp Road", location: "12.9255,80.1395"}
                    ]
                },
                {
                    id: "route_f", name: "Route F", displayName: "Route F - West Chennai",
                    stops: [
                        {name: "Vadapalani", location: "13.0526,80.2124"},
                        {name: "Koyambedu", location: "13.0695,80.1966"},
                        {name: "Maduravoyal", location: "13.0666,80.1675"},
                        {name: "Porur", location: "13.0340,80.1584"},
                        {name: "Poonamallee", location: "13.0494,80.1020"}
                    ]
                }
            ],
            bookings: [
                {
                    id: 1, studentId: 1, route: "Route A", date: "2025-09-08",
                    boardingStop: "Anna University", dropStop: "Velachery",
                    status: "confirmed", amount: 25, bookingTime: "2025-09-07T18:30:00Z"
                },
                {
                    id: 2, studentId: 2, route: "Route B", date: "2025-09-08",
                    boardingStop: "Chennai Central", dropStop: "T. Nagar",
                    status: "confirmed", amount: 20, bookingTime: "2025-09-07T19:15:00Z"
                }
            ],
            rfidScans: [
                { id: 1, cardId: 'RFID001', userId: 1, action: 'tap_in', location: 'Anna University', timestamp: new Date(Date.now() - 300000).toISOString() },
                { id: 2, cardId: 'RFID002', userId: 2, action: 'tap_out', location: 'Velachery', timestamp: new Date(Date.now() - 600000).toISOString() }
            ],
            notifications: [
                {
                    id: 1, userId: 1, title: "Bus Arriving Soon",
                    message: "Your bus will arrive at Anna University in 5 minutes",
                    type: "arrival", read: false, timestamp: new Date(Date.now() - 300000).toISOString()
                },
                {
                    id: 2, userId: 2, title: "Booking Approved",
                    message: "Your booking request for Route B has been approved",
                    type: "approval", read: true, timestamp: "2025-09-07T19:15:00Z"
                },
                {
                    id: 3, userId: 1, title: "Missed Bus Alert",
                    message: "You missed the bus. Please contact transport office or book next available slot.",
                    type: "missed_bus", read: false, timestamp: "2025-09-08T08:10:00Z"
                }
            ],
            payments: [
                {
                    id: 1, userId: 1, amount: 25, type: "booking", method: "UPI",
                    transactionId: "TXN001234567", status: "success", 
                    timestamp: "2025-09-07T18:30:00Z"
                },
                {
                    id: 2, userId: 2, amount: 500, type: "monthly_pass", method: "Net Banking",
                    transactionId: "TXN001234568", status: "success",
                    timestamp: "2025-09-01T10:00:00Z"
                }
            ],
            activityLogs: [
                {
                    id: 1, userId: 3, userRole: "staff", action: "APPROVED_BOOKING",
                    details: "Approved booking request for student 24CS001", 
                    timestamp: "2025-09-08T09:30:00Z", ipAddress: "192.168.1.150"
                },
                {
                    id: 2, userId: 3, userRole: "staff", action: "SENT_ANNOUNCEMENT",
                    details: "Sent route delay notification to Route A students",
                    timestamp: "2025-09-08T11:00:00Z", ipAddress: "192.168.1.150"
                }
            ]
        };

        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupApplication());
        } else {
            this.setupApplication();
        }
    }

    setupApplication() {
        console.log('Setting up application...');
        
        // Initialize theme first
        this.initializeTheme();
        
        // Check session
        this.checkExistingSession();
        
        // Bind events with delay to ensure DOM is ready
        setTimeout(() => {
            this.bindAllEvents();
        }, 100);
        
        console.log('Application setup complete');
    }

    bindAllEvents() {
        // Clear any existing event listeners
        this.unbindEvents();
        
        // Bind authentication events
        this.bindAuthEvents();
        
        // Bind main app events
        this.bindMainAppEvents();
        
        // Bind modal and toast events
        this.bindModalEvents();
    }

    unbindEvents() {
        // Remove event listeners to prevent duplicates
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        
        if (loginForm) {
            loginForm.removeEventListener('submit', this.handleLoginBound);
        }
        if (registerForm) {
            registerForm.removeEventListener('submit', this.handleRegisterBound);
        }
    }

    bindAuthEvents() {
        console.log('Binding authentication events...');
        
        // Create bound methods to avoid issues with removeEventListener
        this.handleLoginBound = this.handleLogin.bind(this);
        this.handleRegisterBound = this.handleRegister.bind(this);
        
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', this.handleLoginBound);
            console.log('Login form event bound');
        }
        
        // Register form
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', this.handleRegisterBound);
            console.log('Register form event bound');
        }

        // Auth switching links
        const showRegister = document.getElementById('showRegister');
        const showLogin = document.getElementById('showLogin');
        
        if (showRegister) {
            showRegister.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Switching to register mode');
                this.switchAuthMode('register');
            });
        }
        
        if (showLogin) {
            showLogin.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Switching to login mode');
                this.switchAuthMode('login');
            });
        }

        // Password strength checker
        const regPassword = document.getElementById('regPassword');
        if (regPassword) {
            regPassword.addEventListener('input', (e) => this.checkPasswordStrength(e.target.value));
        }

        // Fix input focus issues
        this.fixInputFocus();
    }

    fixInputFocus() {
        // Ensure all form inputs can be focused properly
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('click', function() {
                this.focus();
            });
            
            input.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--color-primary)';
            });
            
            input.addEventListener('blur', function() {
                this.style.outline = '';
            });
        });
    }

    bindMainAppEvents() {
        console.log('Binding main app events...');

        // Document-level event delegation
        document.addEventListener('click', (e) => {
            this.handleDocumentClick(e);
        });

        document.addEventListener('change', (e) => {
            this.handleDocumentChange(e);
        });

        document.addEventListener('submit', (e) => {
            this.handleDocumentSubmit(e);
        });

        // Route search input
        const routeSearch = document.getElementById('routeSearch');
        if (routeSearch) {
            routeSearch.addEventListener('input', (e) => {
                this.searchRoutes(e.target.value || '');
            });
        }
    }

    handleDocumentClick(e) {
        // Navigation handling
        if (e.target.matches('[data-section]')) {
            e.preventDefault();
            this.navigateToSection(e.target.dataset.section);
            return;
        }

        // Logout handling
        if (e.target.id === 'logoutBtn') {
            e.preventDefault();
            this.handleLogout();
            return;
        }

        // RFID simulation
        if (e.target.id === 'simulateRfid') {
            this.simulateRFIDScan();
            return;
        }

        // Payment method selection
        if (e.target.closest('.payment-option')) {
            this.selectPaymentMethod(e.target.closest('.payment-option'));
            return;
        }

        // Payments: start auth on pay buttons inside payment form
        if (e.target.matches('#paymentFormContent button[data-pay-method]')) {
            const method = e.target.getAttribute('data-pay-method');
            this.startPaymentAuthorization(method);
            return;
        }

        // Notification filters
        if (e.target.matches('.filter-btn')) {
            this.filterNotifications(e.target.dataset.filter, e.target);
            return;
        }

        // Various action buttons (wallet top-up removed)

        if (e.target.id === 'markAllRead') {
            this.markAllNotificationsRead();
            return;
        }

        // Notification bell
        if (e.target.id === 'notificationBell' || e.target.closest('#notificationBell')) {
            this.navigateToSection('notifications');
            return;
        }

        // Bus selection (Live Bus Status)
        const busItem = e.target.closest && e.target.closest('.bus-item[data-bus-id]');
        if (busItem) {
            this.selectedBusId = busItem.getAttribute('data-bus-id');
            this.updateBusList();
            this.updateETAPanel();
            return;
        }

        // Request actions
        if (e.target.matches('.request-approve')) {
            const requestId = parseInt(e.target.dataset.requestId);
            this.handleRequest(requestId, 'approve');
            return;
        }

        if (e.target.matches('.request-reject')) {
            const requestId = parseInt(e.target.dataset.requestId);
            this.handleRequest(requestId, 'reject');
            return;
        }

        // Bus management actions
        if (e.target.id === 'addBusBtn') {
            this.showAddBusModal();
            return;
        }
        if (e.target.matches('.edit-bus')) {
            const busId = e.target.getAttribute('data-bus-id');
            this.showEditBusModal(busId);
            return;
        }
        if (e.target.matches('.track-live')) {
            const busId = e.target.getAttribute('data-bus-id');
            this.selectedBusId = busId;
            this.navigateToSection('tracking');
            return;
        }

        // Announcements creation
        if (e.target.id === 'addAnnouncementBtn') {
            this.showAddAnnouncementModal();
            return;
        }

        // User management (admin only)
        if (e.target.id === 'addUserBtn') {
            this.showAddUserModal();
            return;
        }
        if (e.target.matches('.edit-user')) {
            const userId = parseInt(e.target.getAttribute('data-user-id'));
            this.showEditUserModal(userId);
            return;
        }
        if (e.target.matches('.view-user')) {
            const userId = parseInt(e.target.getAttribute('data-user-id'));
            this.showViewUserModal(userId);
            return;
        }
    }

    handleDocumentChange(e) {
        // Theme selector
        if (e.target.id === 'themeSelector') {
            this.changeTheme(e.target.value);
            return;
        }

        // Booking route selection
        if (e.target.id === 'bookingRoute') {
            this.updateBookingStops();
            return;
        }

        // Route filter
        if (e.target.id === 'routeFilter') {
            this.filterBusByRoute(e.target.value);
            return;
        }

        // Boarding/drop stop selection for fare calculation
        if (e.target.id === 'boardingStop' || e.target.id === 'dropStop') {
            this.updateFareCalculation();
            return;
        }
    }

    handleDocumentSubmit(e) {
        if (e.target.id === 'bookingForm') {
            e.preventDefault();
            this.handleBooking(e);
            return;
        }
    }

    bindModalEvents() {
        const modalClose = document.getElementById('modalClose');
        const modal = document.getElementById('modal');
        const toastClose = document.getElementById('toastClose');

        if (modalClose) {
            modalClose.addEventListener('click', () => this.hideModal());
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
                    this.hideModal();
                }
            });
        }

        if (toastClose) {
            toastClose.addEventListener('click', () => this.hideToast());
        }
    }

    checkExistingSession() {
        try {
            const savedUser = sessionStorage.getItem('currentUser');
            if (savedUser) {
                this.currentUser = JSON.parse(savedUser);
                console.log('Existing session found for:', this.currentUser.name);
                this.showMainApp();
            } else {
                console.log('No existing session, showing auth screen');
                this.showAuthScreen();
            }
        } catch (error) {
            console.error('Session check error:', error);
            this.showAuthScreen();
        }
    }

    switchAuthMode(mode) {
        const loginSection = document.getElementById('loginSection');
        const registerSection = document.getElementById('registerSection');
        
        if (mode === 'register') {
            if (loginSection) loginSection.classList.add('hidden');
            if (registerSection) registerSection.classList.remove('hidden');
        } else {
            if (registerSection) registerSection.classList.add('hidden');
            if (loginSection) loginSection.classList.remove('hidden');
        }
    }

    checkPasswordStrength(password) {
        const strengthMeter = document.getElementById('passwordStrength');
        if (!strengthMeter) return;

        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        strengthMeter.className = 'password-strength';
        if (strength === 1) strengthMeter.classList.add('weak');
        else if (strength === 2) strengthMeter.classList.add('medium');
        else if (strength >= 3) strengthMeter.classList.add('strong');
    }

    async handleLogin(e) {
        e.preventDefault();
        
        try {
            console.log('Processing login...');
            this.showLoading('Authenticating...');

            const roleEl = document.getElementById('role');
            const usernameEl = document.getElementById('username');
            const passwordEl = document.getElementById('password');

            if (!roleEl || !usernameEl || !passwordEl) {
                console.error('Login form elements not found');
                this.hideLoading();
                this.showToast('Form elements not found', 'error');
                return;
            }

            const role = roleEl.value.trim();
            const username = usernameEl.value.trim();
            const password = passwordEl.value.trim();

            console.log('Login attempt:', { role, username, passwordLength: password.length });

            if (!role || !username || !password) {
                this.hideLoading();
                this.showToast('Please fill all fields', 'error');
                return;
            }

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            const user = this.data.users.find(u => 
                u.username === username && 
                u.password === password && 
                u.role === role
            );

            console.log('User found:', !!user);

            if (user) {
                this.currentUser = user;
                sessionStorage.setItem('currentUser', JSON.stringify(user));
                
                this.hideLoading();
                
                // Clear form and hide auth screen properly
                e.target.reset();
                
                // Show main app
                this.showMainApp();
                
                // Show success message
                this.showToast('Welcome back, ' + user.name + '!', 'success');
                
                // Schedule welcome notification
                setTimeout(() => {
                    this.showPushNotification('Welcome back!', 'Have a great day at campus');
                }, 2000);

                // Start notification schedulers
                this.startNotificationSchedulers();
                
            } else {
                this.hideLoading();
                this.showToast('Invalid credentials. Please check your details.', 'error');
            }
        } catch (error) {
            console.error('Login error:', error);
            this.hideLoading();
            this.showToast('Login failed. Please try again.', 'error');
        }
    }

    async handleRegister(e) {
        e.preventDefault();
        
        try {
            console.log('Processing registration...');
            this.showLoading('Creating your account...');

            const regNumberEl = document.getElementById('regNumber');
            const passwordEl = document.getElementById('regPassword');
            const confirmPasswordEl = document.getElementById('confirmPassword');

            if (!regNumberEl || !passwordEl || !confirmPasswordEl) {
                console.error('Registration form elements not found');
                this.hideLoading();
                this.showToast('Form elements not found', 'error');
                return;
            }

            const regNumber = regNumberEl.value.trim().toUpperCase();
            const password = passwordEl.value.trim();
            const confirmPassword = confirmPasswordEl.value.trim();

            console.log('Registration attempt:', { regNumber, passwordLength: password.length });

            // Validation
            if (!this.validateRegisterNumber(regNumber)) {
                this.hideLoading();
                this.showToast('Invalid register number format. Use format: 24CS001', 'error');
                return;
            }

            if (password.length < 6) {
                this.hideLoading();
                this.showToast('Password must be at least 6 characters', 'error');
                return;
            }

            if (password !== confirmPassword) {
                this.hideLoading();
                this.showToast('Passwords do not match', 'error');
                return;
            }

            // Check if user already exists
            if (this.data.users.find(u => u.registerNumber === regNumber)) {
                this.hideLoading();
                this.showToast('Register number already exists', 'error');
                return;
            }

            await new Promise(resolve => setTimeout(resolve, 1500));

            // Create new user
            const newUser = {
                id: this.data.users.length + 1,
                username: regNumber,
                password: password,
                role: "student",
                name: this.generateNameFromRegNumber(regNumber),
                email: regNumber.toLowerCase() + '@college.edu',
                registerNumber: regNumber,
                department: this.getDepartmentFromRegNumber(regNumber),
                year: parseInt(regNumber.substring(0, 2)) === 24 ? 1 : 2,
                phone: '+91 ' + Math.floor(Math.random() * 9000000000 + 1000000000),
                assignedRoute: "Route A",
                walletBalance: 500,
                status: "Active",
                joinDate: new Date().toISOString().split('T')[0]
            };

            this.data.users.push(newUser);
            
            this.hideLoading();
            this.showToast('Registration successful! Please login with your credentials.', 'success');
            this.switchAuthMode('login');
            
            // Pre-fill login form
            const roleEl = document.getElementById('role');
            const usernameEl = document.getElementById('username');
            if (roleEl) roleEl.value = 'student';
            if (usernameEl) usernameEl.value = regNumber;
            
        } catch (error) {
            console.error('Registration error:', error);
            this.hideLoading();
            this.showToast('Registration failed. Please try again.', 'error');
        }
    }

    validateRegisterNumber(regNumber) {
        return /^[0-9]{2}[A-Z]{2}[0-9]{3}$/.test(regNumber);
    }

    generateNameFromRegNumber(regNumber) {
        const names = ['Aarav Kumar', 'Diya Patel', 'Arjun Singh', 'Kavya Reddy', 'Rohit Sharma', 'Priya Nair'];
        return names[Math.floor(Math.random() * names.length)];
    }

    getDepartmentFromRegNumber(regNumber) {
        const dept = regNumber.substring(2, 4);
        const departments = {
            'CS': 'Computer Science',
            'ME': 'Mechanical Engineering', 
            'EE': 'Electrical Engineering',
            'CE': 'Civil Engineering',
            'IT': 'Information Technology'
        };
        return departments[dept] || 'General';
    }

    handleLogout() {
        try {
            console.log('Processing logout...');
            
            // Clear session and intervals
            sessionStorage.removeItem('currentUser');
            this.currentUser = null;
            this.clearAllIntervals();
            
            this.showAuthScreen();
            this.showToast('Logged out successfully', 'success');
        } catch (error) {
            console.error('Logout error:', error);
            this.showToast('Logout failed', 'error');
        }
    }

    showAuthScreen() {
        console.log('Showing auth screen');
        const authScreen = document.getElementById('authScreen');
        const mainApp = document.getElementById('mainApp');
        
        if (authScreen && mainApp) {
            // Ensure proper hiding/showing
            authScreen.classList.remove('hidden');
            authScreen.style.display = 'flex';
            mainApp.classList.add('hidden');
            mainApp.style.display = 'none';
            
            // Reset theme
            document.body.removeAttribute('data-theme');
        }
        
        console.log('Auth screen shown, main app hidden');
    }

    showMainApp() {
        console.log('Showing main app');
        const authScreen = document.getElementById('authScreen');
        const mainApp = document.getElementById('mainApp');
        
        if (authScreen && mainApp && this.currentUser) {
            // Ensure proper hiding/showing
            authScreen.classList.add('hidden');
            authScreen.style.display = 'none';
            mainApp.classList.remove('hidden');
            mainApp.style.display = 'flex';
            
            console.log('Auth screen hidden, main app shown');
            
            // Setup main app components
            this.setupNavigation();
            this.updateUserInfo();
            this.updateNotificationCount();
            this.navigateToSection('dashboard');
            // Ensure schedulers are running after showing app
            this.startNotificationSchedulers();
        } else {
            console.error('Failed to show main app - missing elements or user');
        }
    }

    setupNavigation() {
        const navMenu = document.getElementById('navMenu');
        if (!navMenu || !this.currentUser) {
            console.error('Navigation setup failed - missing menu or user');
            return;
        }
        
        const menuItems = this.getMenuItemsForRole(this.currentUser.role);
        
        navMenu.innerHTML = menuItems.map(item => 
            `<li><a href="#" data-section="${item.section}">${item.name}</a></li>`
        ).join('');
        
        console.log('Navigation setup complete for role:', this.currentUser.role);
    }

    getMenuItemsForRole(role) {
        const baseItems = [
            { section: 'dashboard', name: 'Dashboard' },
            { section: 'tracking', name: 'Live Tracking' },
            { section: 'notifications', name: 'Notifications' }
        ];

        if (role === 'student') {
            return [
                ...baseItems,
                { section: 'rfid', name: 'RFID Onboarding' },
                { section: 'payments', name: 'Payments' },
                { section: 'announcements', name: 'Announcements' }
            ];
        } else if (role === 'staff') {
            return [
                ...baseItems,
                { section: 'rfid', name: 'RFID Scanner' },
                { section: 'requests', name: 'Student Requests' },
                { section: 'buses', name: 'Bus Management' },
                { section: 'announcements', name: 'Announcements' }
            ];
        } else if (role === 'admin') {
            return [
                ...baseItems,
                { section: 'users', name: 'User Management' },
                { section: 'buses', name: 'Bus Management' },
                { section: 'requests', name: 'Requests' },
                { section: 'activityLogs', name: 'Activity Logs' },
                { section: 'announcements', name: 'Announcements' }
            ];
        }
        return baseItems;
    }

    updateUserInfo() {
        const userInfo = document.getElementById('userInfo');
        if (userInfo && this.currentUser) {
            userInfo.textContent = `${this.currentUser.name} (${this.currentUser.role.charAt(0).toUpperCase() + this.currentUser.role.slice(1)})`;
        }
        // Wallet UI removed
    }

    updateNotificationCount() {
        const notificationCount = document.getElementById('notificationCount');
        if (notificationCount && this.currentUser) {
            const unreadCount = this.data.notifications.filter(n => 
                n.userId === this.currentUser.id && !n.read
            ).length;
            
            notificationCount.textContent = unreadCount;
            notificationCount.style.display = unreadCount > 0 ? 'flex' : 'none';
        }
    }

    navigateToSection(section) {
        try {
            console.log('Navigating to section:', section);
            
            // Update active navigation
            document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
            const activeLink = document.querySelector(`[data-section="${section}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            // Hide all sections
            document.querySelectorAll('.content-section').forEach(s => s.classList.add('hidden'));
            
            // Show target section
            const targetSection = document.getElementById(section);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                this.currentSection = section;
                this.loadSectionContent(section);
            }
        } catch (error) {
            console.error('Navigation error:', error);
        }
    }

    loadSectionContent(section) {
        try {
            switch(section) {
                case 'dashboard':
                    this.loadDashboard();
                    break;
                case 'rfid':
                    this.loadRFIDSection();
                    break;
                case 'tracking':
                    this.loadTracking();
                    break;
                // booking section removed
                case 'payments':
                    this.loadPayments();
                    break;
                case 'notifications':
                    this.loadNotifications();
                    break;
                case 'users':
                    this.loadUserManagement();
                    break;
                case 'buses':
                    this.loadBusManagement();
                    break;
                case 'requests':
                    this.loadRequests();
                    break;
                case 'activityLogs':
                    this.loadActivityLogs();
                    break;
                case 'announcements':
                    this.loadAnnouncements();
                    break;
            }
        } catch (error) {
            console.error('Section load error:', error);
            this.showToast('Failed to load section content', 'error');
        }
    }

    loadDashboard() {
        this.loadDashboardStats();
        this.loadDashboardCards();
    }

    loadDashboardStats() {
        const statsContainer = document.getElementById('dashboardStats');
        if (!statsContainer || !this.currentUser) return;

        const stats = this.getDashboardStats();
        
        statsContainer.innerHTML = stats.map(stat => `
            <div class="stat-card">
                <h4>${stat.label}</h4>
                <p class="stat-value">${stat.value}</p>
            </div>
        `).join('');
    }

    getDashboardStats() {
        if (!this.currentUser) return [];
        
        const role = this.currentUser.role;
        
        if (role === 'student') {
            const unreadNotifications = this.data.notifications.filter(n => n.userId === this.currentUser.id && !n.read);
            const nextTrip = this.getNextScheduledTripForStudent();
            const announcementCount = (this.data.announcements || []).length;
            return [
                { label: 'RFID Ready', value: 'Yes' },
                { label: 'Available Routes', value: this.data.routes.length },
                { label: 'Announcements', value: announcementCount }
            ];
        } else if (role === 'staff') {
            const pendingRequests = this.data.requests.filter(r => r.status === 'pending');
            const activeBuses = this.data.buses.filter(b => b.status === 'Active');
            
            return [
                { label: 'Pending Requests', value: pendingRequests.length },
                { label: 'Active Buses', value: activeBuses.length },
                { label: 'Total Students', value: this.data.users.filter(u => u.role === 'student').length },
                { label: 'Total Routes', value: this.data.routes.length }
            ];
        } else if (role === 'admin') {
            return [
                { label: 'Total Users', value: this.data.users.length },
                { label: 'Active Buses', value: this.data.buses.filter(b => b.status === 'Active').length },
                { label: 'Total Bookings', value: this.data.bookings.length },
                { label: 'Staff Activities', value: this.data.activityLogs.length }
            ];
        }
        return [];
    }

    loadDashboardCards() {
        const gridContainer = document.getElementById('dashboardGrid');
        if (!gridContainer || !this.currentUser) return;

        let cards = '';
        const role = this.currentUser.role;

        cards += this.getRecentActivityCard();

        if (role === 'student') {
            cards += this.getStudentDashboardCards();
        } else if (role === 'staff') {
            cards += this.getStaffDashboardCards();
        } else if (role === 'admin') {
            cards += this.getAdminDashboardCards();
            cards += this.getAdminExpandedDetailsCards();
        }

        gridContainer.innerHTML = cards;

        if (role === 'admin') {
            setTimeout(() => this.initializeAdminCharts(), 100);
        }
    }

    getAdminExpandedDetailsCards() {
        const usersList = this.data.users.map(u => `
            <div style="padding:8px; border-bottom:1px solid var(--color-card-border-inner)">
                <div class="text-wrap" style="font-weight:500">${u.name} <span class="status status--info" style="margin-left:6px;">${u.role}</span></div>
                <div class="text-wrap" style="font-size:12px; color:var(--color-text-secondary)">${u.email}</div>
            </div>
        `).join('');

        const activeBuses = this.data.buses.filter(b => b.status === 'Active');
        const busesList = activeBuses.map(b => `
            <div style="padding:8px; border-bottom:1px solid var(--color-card-border-inner)">
                <div class="text-wrap" style="font-weight:500">${b.id} • ${b.route.split(' - ')[0]}</div>
                <div class="text-wrap" style="font-size:12px; color:var(--color-text-secondary)">Driver: ${b.driver} • Next: ${b.nextStop} • ETA: ${b.eta}</div>
            </div>
        `).join('');

        const bookingsList = this.data.bookings.map(b => `
            <div style="padding:8px; border-bottom:1px solid var(--color-card-border-inner)">
                <div class="text-wrap" style="font-weight:500">Booking #${b.id} • ${b.route}</div>
                <div class="text-wrap" style="font-size:12px; color:var(--color-text-secondary)">${b.date} • ${b.boardingStop} → ${b.dropStop} • ${b.status}</div>
            </div>
        `).join('');

        const staffLogs = this.data.activityLogs.slice(0, 8).map(log => {
            const staff = this.data.users.find(u => u.id === log.userId);
            return `
                <div style="padding:8px; border-bottom:1px solid var(--color-card-border-inner)">
                    <div class="text-wrap" style="font-weight:500">${staff ? staff.name : 'Unknown'} • ${log.action.replace(/_/g, ' ')}</div>
                    <div class="text-wrap" style="font-size:12px; color:var(--color-text-secondary)">${this.formatDate(log.timestamp)}</div>
                </div>
            `;
        }).join('');

        return `
            <div class="dashboard-card">
                <h4>Total Users (${this.data.users.length})</h4>
                <div class="scrollable">${usersList || '<p style="padding:8px; color:var(--color-text-secondary)">No users</p>'}</div>
            </div>
            <div class="dashboard-card">
                <h4>Active Buses (${activeBuses.length})</h4>
                <div class="scrollable">${busesList || '<p style="padding:8px; color:var(--color-text-secondary)">No active buses</p>'}</div>
            </div>
            <div class="dashboard-card">
                <h4>Total Bookings (${this.data.bookings.length})</h4>
                <div class="scrollable">${bookingsList || '<p style="padding:8px; color:var(--color-text-secondary)">No bookings</p>'}</div>
            </div>
            <div class="dashboard-card">
                <h4>Recent Staff Activity</h4>
                <div class="scrollable">${staffLogs || '<p style="padding:8px; color:var(--color-text-secondary)">No recent activity</p>'}</div>
            </div>
        `;
    }

    getRecentActivityCard() {
        const recentNotifications = this.data.notifications
            .filter(n => n.userId === this.currentUser.id)
            .slice(0, 3);

        return `
            <div class="dashboard-card">
                <h4>Recent Notifications</h4>
                <div class="activity-list">
                    ${recentNotifications.length ? recentNotifications.map(notification => `
                        <div class="activity-item" style="display: flex; align-items: center; margin-bottom: 12px; padding: 8px; border-bottom: 1px solid var(--color-border);">
                            <div class="activity-icon" style="margin-right: 12px; font-size: 18px;">${this.getNotificationIcon(notification.type)}</div>
                            <div class="activity-content" style="flex: 1;">
                                <div class="activity-title text-wrap" style="font-weight: 500; color: var(--color-text); font-size: 14px; line-height: 1.3;">${notification.title}</div>
                                <div class="activity-time" style="font-size: 11px; color: var(--color-text-secondary); margin-top: 2px;">${this.formatRelativeTime(notification.timestamp)}</div>
                            </div>
                        </div>
                    `).join('') : '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No recent notifications</p>'}
                </div>
            </div>
        `;
    }

    getStudentDashboardCards() {
        const nextBus = this.getNextBusForStudent();
        const nextTrip = this.getNextScheduledTripForStudent();
        
        return `
            <div class="dashboard-card">
                <h4>Next Bus Arrival</h4>
                ${nextBus ? `
                    <div class="next-bus-info" style="text-align: center; padding: 16px;">
                        <div class="bus-route" style="font-size: 18px; font-weight: 600; color: var(--color-primary); margin-bottom: 8px;">${nextBus.route}</div>
                        <div class="bus-eta" style="margin: 8px 0; font-size: 16px;">ETA: <span class="eta-time" style="color: var(--color-text); font-weight: 500;">${nextBus.eta}</span></div>
                        <div class="bus-stop" style="color: var(--color-text-secondary); font-size: 14px;">At: ${nextBus.nextStop}</div>
                    </div>
                ` : '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No buses scheduled</p>'}
            </div>
            
            <div class="dashboard-card">
                <h4>Upcoming Travel</h4>
                ${nextTrip ? `
                    <div class="booking-summary-item" style="padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-background);">
                        <div class="booking-route text-wrap" style="font-weight: 500; color: var(--color-text); margin-bottom: 4px;">${nextTrip.route} • ${nextTrip.date} ${nextTrip.time}</div>
                        <div class="booking-stops text-wrap" style="font-size: 13px; color: var(--color-text-secondary);">${nextTrip.boardingStop} → ${nextTrip.dropStop}</div>
                        <div class="booking-stops text-wrap" style="font-size: 12px; color: var(--color-text-secondary); margin-top: 6px;">Bus: ${nextTrip.busId}</div>
                            </div>
                ` : '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No upcoming travel scheduled</p>'}
            </div>
        `;
    }

    getStaffDashboardCards() {
        return `
            <div class="dashboard-card">
                <h4>Bus Status Overview</h4>
                <div class="bus-overview-grid scrollable" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; max-height: 300px;">
                    ${this.data.buses.map(bus => `
                        <div class="bus-overview-item" style="padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; text-align: center; background: var(--color-background);">
                            <div class="bus-number text-wrap" style="font-weight: 600; color: var(--color-text); font-size: 13px; margin-bottom: 4px;">${bus.id}</div>
                            <div class="status status--success" style="margin: 4px 0; padding: 2px 6px; border-radius: 4px; font-size: 10px; display: inline-block;">
                                ${bus.status}
                            </div>
                            <div class="bus-occupancy" style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">${bus.currentOccupancy}/${bus.capacity}</div>
                            <div class="progress-bar" style="height: 3px; background: var(--color-border); border-radius: 2px; margin-top: 4px; overflow: hidden;">
                                <div class="progress-fill" style="height: 100%; background: var(--color-primary); width: ${(bus.currentOccupancy / bus.capacity) * 100}%;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    getAdminDashboardCards() {
        return `
            <div class="dashboard-card">
                <h4>System Analytics</h4>
                <div class="chart-container" style="position: relative; height: 300px;">
                    <canvas id="systemChart"></canvas>
                </div>
            </div>
            
            <div class="dashboard-card">
                <h4>Recent Staff Activity</h4>
                <div class="activity-log-preview scrollable" style="max-height: 300px;">
                    ${this.data.activityLogs.slice(0, 4).map(log => `
                        <div class="log-item" style="padding: 8px; border-bottom: 1px solid var(--color-border); margin-bottom: 8px;">
                            <div class="log-action text-wrap" style="font-weight: 500; color: var(--color-text); font-size: 13px; margin-bottom: 2px;">${log.action.replace(/_/g, ' ')}</div>
                            <div class="log-details text-wrap" style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 2px;">${log.details}</div>
                            <div class="log-time" style="font-size: 11px; color: var(--color-text-secondary);">${this.formatRelativeTime(log.timestamp)}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    initializeAdminCharts() {
        const ctx = document.getElementById('systemChart');
        if (ctx && !ctx.chart && typeof Chart !== 'undefined') {
            try {
                ctx.chart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Active Buses', 'Total Users', 'Completed Bookings'],
                        datasets: [{
                            data: [
                                this.data.buses.filter(b => b.status === 'Active').length,
                                this.data.users.length,
                                this.data.bookings.filter(b => b.status === 'confirmed').length
                            ],
                            backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }
                });
            } catch (error) {
                console.error('Chart initialization error:', error);
            }
        }
    }

    // [Continue with rest of methods...]
    
    loadRFIDSection() {
        this.updateRFIDStatus();
        this.loadScanHistory();
    }

    updateRFIDStatus() {
        const rfidStatus = document.getElementById('rfidStatus');
        if (rfidStatus) {
            rfidStatus.textContent = 'Ready to scan - Tap your RFID card';
        }
    }

    loadScanHistory() {
        const scanList = document.getElementById('scanList');
        if (!scanList) return;

        const scans = (this.data.rfidScans || []).slice().sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 25);
        
        scanList.innerHTML = scans.length ? scans.map(scan => {
            const user = this.data.users.find(u => u.id === scan.userId);
            return `
                <div class="scan-item">
                    <div class="scan-info">
                        <div class="scan-user text-wrap">${user ? user.name : 'Unknown User'}</div>
                        <div class="scan-details text-wrap">
                            ${scan.action.replace('_', ' ')} at ${scan.location}<br>
                            ${this.formatRelativeTime(scan.timestamp)}
                        </div>
                    </div>
                    <div class="scan-status success">Success</div>
                </div>
            `;
        }).join('') : '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No recent scans</p>';
    }

    async simulateRFIDScan() {
        try {
            const rfidCard = document.getElementById('rfidCard');
            const rfidStatus = document.getElementById('rfidStatus');
            
            if (rfidCard && rfidStatus) {
                rfidCard.style.transform = 'scale(0.95)';
                rfidStatus.textContent = 'Scanning...';
                
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                rfidCard.style.transform = 'scale(1)';
                rfidStatus.textContent = 'Scan successful! Welcome aboard.';
                
                const now = new Date();
                this.lastRFIDScanAt = now;
                // Append new scan
                const newScan = {
                    id: (this.data.rfidScans?.length || 0) + 1,
                    cardId: 'RFID' + String(Math.floor(Math.random()*900)+100),
                    userId: this.currentUser?.id || 1,
                    action: 'tap_in',
                    location: 'Campus Main Gate',
                    timestamp: now.toISOString()
                };
                this.data.rfidScans = this.data.rfidScans || [];
                this.data.rfidScans.unshift(newScan);
                this.loadScanHistory();
                this.showToast('RFID scan successful! Boarding recorded.', 'success');
                
                setTimeout(() => {
                    if (rfidStatus) {
                        rfidStatus.textContent = 'Ready to scan';
                    }
                }, 3000);
            }
        } catch (error) {
            console.error('RFID scan error:', error);
            this.showToast('RFID scan failed. Please try again.', 'error');
        }
    }

    loadTracking() {
        this.initializeMap();
        this.drawAllRoutes();
        this.updateBusList();
        this.updateETAPanel();
        this.startBusMovementSimulation();
    }

    initializeMap() {
        if (typeof L === 'undefined') {
            console.warn('Leaflet not loaded');
            return;
        }

        try {
            if (!this.map) {
                this.map = L.map('map').setView([13.0827, 80.2707], 11);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                }).addTo(this.map);
            }

            this.clearBusMarkers();
            this.addBusMarkers();
            
        } catch (error) {
            console.error('Map initialization error:', error);
        }
    }

    drawAllRoutes() {
        if (!this.map) return;
        // Clear existing polylines
        if (!this.routeLayers) this.routeLayers = {};
        Object.values(this.routeLayers).forEach(layer => this.map.removeLayer(layer));
        this.routeLayers = {};

        this.data.routes.forEach(route => {
            const waypoints = route.stops.map(s => {
                const [lat, lng] = s.location.split(',').map(Number);
                return L.latLng(lat, lng);
            });

            if (L.Routing && L.Routing.control) {
                const control = L.Routing.control({
                    waypoints,
                    addWaypoints: false,
                    routeWhileDragging: false,
                    draggableWaypoints: false,
                    fitSelectedRoutes: false,
                    show: false,
                    lineOptions: {
                        styles: [{ color: '#1FB8CD', weight: 4, opacity: 0.75 }]
                    }
                }).addTo(this.map);

                // extract the created line for reference
                control.on('routesfound', (e) => {
                    const line = e.routes[0].coordinates.map(c => L.latLng(c.lat, c.lng));
                    if (this.routeLayers[route.name]) this.map.removeLayer(this.routeLayers[route.name]);
                    this.routeLayers[route.name] = L.polyline(line, { color: '#1FB8CD', weight: 4, opacity: 0.75 }).addTo(this.map);
                    // remove control UI, keep just the line
                    control.remove();
                });
            } else {
                // Fallback: straight polyline between stops
                const latlngs = waypoints.map(wp => [wp.lat, wp.lng]);
                const poly = L.polyline(latlngs, { color: '#1FB8CD', weight: 4, opacity: 0.6 }).addTo(this.map);
                this.routeLayers[route.name] = poly;
            }
        });
    }

    clearBusMarkers() {
        this.busMarkers.forEach(marker => this.map.removeLayer(marker));
        this.busMarkers = [];
    }

    addBusMarkers() {
        this.data.buses.forEach(bus => {
            const busIcon = L.divIcon({
                className: 'bus-marker',
                html: `<div style="background-color: #1FB8CD; padding: 4px; border-radius: 50%; color: white; font-size: 16px; text-align: center;">🚌</div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });

            const marker = L.marker([bus.location.lat, bus.location.lng], {icon: busIcon})
                .bindPopup(`
                    <div class="bus-popup" style="min-width: 200px;">
                        <strong style="color: var(--color-text);">${bus.id}</strong><br>
                        <div style="margin: 4px 0; color: var(--color-text-secondary);">
                            Route: ${bus.route}<br>
                            Driver: ${bus.driver}<br>
                            Occupancy: ${bus.currentOccupancy}/${bus.capacity}<br>
                            Next Stop: ${bus.nextStop}<br>
                            ETA: ${bus.eta}<br>
                            Speed: ${bus.currentSpeed} km/h
                        </div>
                    </div>
                `)
                .addTo(this.map);
            
            this.busMarkers.push(marker);
        });
    }

    startBusMovementSimulation() {
        if (!this.map) return;
        if (this.updateIntervals.busMovement) clearInterval(this.updateIntervals.busMovement);

        // Prepare route polylines for snapping and deviation checks
        const routeToPolyline = {};
        Object.values(this.routeLayers || {}).forEach((poly) => {
            const name = Object.entries(this.routeLayers).find(([k, v]) => v === poly)?.[0];
            if (name) routeToPolyline[name] = poly;
        });

        this.updateIntervals.busMovement = setInterval(() => {
            this.data.buses.forEach((bus, idx) => {
                const routeKey = bus.route.split(' - ')[0].replace('Route ', 'Route '); // name like 'Route A'
                const poly = routeToPolyline[routeKey];
                if (!poly) return;
                const latlngs = poly.getLatLngs();
                if (!latlngs.length) return;

                // Move along the polyline by a realistic step (~0.5-1.5 km per tick)
                if (bus._progress == null) bus._progress = 0; // index in latlngs
                let nextIndex = bus._progress + 1;
                if (nextIndex >= latlngs.length) nextIndex = 0; // loop for demo

                const curr = latlngs[bus._progress];
                const next = latlngs[nextIndex];
                const step = 0.05 + Math.random() * 0.1; // slower movement
                const newLat = curr.lat + (next.lat - curr.lat) * step;
                const newLng = curr.lng + (next.lng - curr.lng) * step;

                bus.location = { lat: newLat, lng: newLng };

                // Advance progress when close to next
                const dToNext = this.calculateHaversineDistanceKm(newLat, newLng, next.lat, next.lng);
                if (dToNext < 0.05) { // 50m
                    bus._progress = nextIndex;
                }

                // Update marker on map
                const marker = this.busMarkers[idx];
                if (marker) marker.setLatLng([newLat, newLng]);

                // Deviation detection (> 0.5 km from route)
                const nearest = this.getNearestPointOnPolyline([newLat, newLng], latlngs);
                const deviationKm = this.calculateHaversineDistanceKm(newLat, newLng, nearest[0], nearest[1]);
                if (deviationKm > 0.5) {
                    this.enqueueAndShowNotification('Bus Route Deviation', `${bus.id} deviated ${this.formatDistance(deviationKm)} from route`, 'announcement');
                }
            });
        }, 4000);
    }

    getNearestPointOnPolyline(point, polyPoints) {
        // Simple nearest vertex for demo (could be improved with segment projection)
        let best = polyPoints[0];
        let bestD = Infinity;
        polyPoints.forEach(p => {
            const d = this.calculateHaversineDistanceKm(point[0], point[1], p.lat, p.lng);
            if (d < bestD) {
                bestD = d;
                best = p;
            }
        });
        return [best.lat, best.lng];
    }

    formatDistance(distanceKm) {
        const meters = distanceKm * 1000;
        if (meters < 1000) return `${Math.round(meters)} m`;
        return `${(distanceKm).toFixed(2)} km`;
    }

    updateBusList() {
        const busList = document.getElementById('busList');
        if (!busList) return;

        const selectedId = this.selectedBusId;
        busList.innerHTML = `
            <h4>Live Bus Status</h4>
            ${this.data.buses.map(bus => `
                <div class="bus-item${selectedId===bus.id ? ' active' : ''}" data-bus-id="${bus.id}">
                    <div class="bus-header">
                        <div class="bus-number text-wrap">${bus.id}</div>
                        <div class="bus-status active">${bus.status}</div>
                    </div>
                    <div class="bus-route text-wrap">${bus.route}</div>
                    <div class="bus-details text-wrap" style="line-height: 1.4;">
                        Driver: ${bus.driver}<br>
                        Phone: ${bus.driverPhone}<br>
                        Next Stop: ${bus.nextStop}<br>
                        ETA: <strong>${bus.eta}</strong><br>
                        Occupancy: ${bus.currentOccupancy}/${bus.capacity}<br>
                        Speed: ${bus.currentSpeed} km/h
                    </div>
                    <div class="bus-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${(bus.currentOccupancy / bus.capacity) * 100}%"></div>
                        </div>
                        <div class="progress-text">${Math.round((bus.currentOccupancy / bus.capacity) * 100)}% Full</div>
                    </div>
                </div>
            `).join('')}
        `;

        const routeDetails = document.getElementById('routeStops');
        if (routeDetails) {
            let route = null;
            const selectedBus = this.data.buses.find(b => b.id === this.selectedBusId);
            if (selectedBus) {
                const routeName = selectedBus.route.split(' - ')[0];
                route = this.data.routes.find(r => r.name === routeName);
            }
            if (!route && this.currentUser?.assignedRoute) {
                route = this.data.routes.find(r => r.name === this.currentUser.assignedRoute);
            }
            if (!route) {
                route = this.data.routes[0];
            }
            routeDetails.innerHTML = route ? route.stops.map((s, i) => {
                const eta = this.computeEtaForStop(route.name, s);
                return `
                <div class="booking-item" style="margin-bottom:8px;">
                    <div class="booking-header">
                        <div class="booking-route text-wrap"><strong>${i + 1}. ${s.name}</strong> ${eta ? `<span class=\"status status--info\" style=\"margin-left:8px;\">ETA: ${eta}</span>` : ''}</div>
                    </div>
                    <div class="booking-details text-wrap"><strong>Lat,Lng:</strong> ${s.location}</div>
                </div>`;
            }).join('') : '<p style="color: var(--color-text-secondary);">No route selected</p>';
        }
    }

    updateETAPanel() {
        const etaList = document.getElementById('etaList');
        if (!etaList) return;

        // Build ETAs. If a bus is selected, restrict to that bus only
        const rows = [];
        (this.data.buses || []).forEach(bus => {
            if (this.selectedBusId && bus.id !== this.selectedBusId) return;
            const routeName = bus.route.split(' - ')[0];
            const route = this.data.routes.find(r => r.name === routeName);
            if (!route || !this.routeLayers || !this.routeLayers[route.name]) return;
            const poly = this.routeLayers[route.name];
            const latlngs = poly.getLatLngs();
            if (!latlngs.length) return;

            // find nearest index on poly to bus
            let nearestIdx = 0;
            let bestD = Infinity;
            latlngs.forEach((p, i) => {
                const d = this.calculateHaversineDistanceKm(bus.location.lat, bus.location.lng, p.lat, p.lng);
                if (d < bestD) { bestD = d; nearestIdx = i; }
            });

            // average speed in km/h
            const speed = Math.max(15, Math.min(45, bus.currentSpeed || 25));
            let cumulativeKm = 0;
            let cursor = nearestIdx;

            route.stops.slice(0, 10).forEach(stop => {
                // find nearest poly point to stop
                let stopIdx = 0;
                let stopBest = Infinity;
                latlngs.forEach((p, i) => {
                    const [sLat, sLng] = stop.location.split(',').map(Number);
                    const d = this.calculateHaversineDistanceKm(sLat, sLng, p.lat, p.lng);
                    if (d < stopBest) { stopBest = d; stopIdx = i; }
                });
                // accumulate distance from cursor to stopIdx
                let dist = 0;
                for (let i = cursor; i < stopIdx; i++) {
                    if (i + 1 < latlngs.length) {
                        dist += this.calculateHaversineDistanceKm(latlngs[i].lat, latlngs[i].lng, latlngs[i+1].lat, latlngs[i+1].lng);
                    }
                }
                cumulativeKm += dist;
                cursor = stopIdx;
                const etaMin = Math.max(1, Math.round((cumulativeKm / speed) * 60));
                rows.push({
                    stop: stop.name,
                    eta: `${etaMin} min`,
                    route: route.name,
                    busNumber: bus.id,
                    sortKey: etaMin
                });
            });
        });

        rows.sort((a, b) => a.sortKey - b.sortKey);
        const top = rows.slice(0, 10);

        etaList.innerHTML = top.length ? top.map(arrival => `
            <div class="eta-item">
                <div class="eta-info">
                    <div class="eta-stop text-wrap">${arrival.stop}</div>
                    <div class="eta-route">${arrival.route} • ${arrival.busNumber}</div>
                </div>
                <div class="eta-time">${arrival.eta}</div>
            </div>
        `).join('') : '<p style="color: var(--color-text-secondary); padding: 16px; text-align: center;">No upcoming arrivals</p>';
    }

    computeEtaForStop(routeName, stop) {
        try {
            if (!this.routeLayers || !this.routeLayers[routeName]) return null;
            const poly = this.routeLayers[routeName];
            const latlngs = poly.getLatLngs();
            if (!latlngs.length) return null;

            // pick the first bus on this route
            const bus = (this.data.buses || []).find(b => b.route.includes(routeName));
            if (!bus) return null;

            // find nearest indices
            let busIdx = 0, stopIdx = 0, bestBus = Infinity, bestStop = Infinity;
            latlngs.forEach((p, i) => {
                const dBus = this.calculateHaversineDistanceKm(bus.location.lat, bus.location.lng, p.lat, p.lng);
                if (dBus < bestBus) { bestBus = dBus; busIdx = i; }
                const [sLat, sLng] = stop.location.split(',').map(Number);
                const dStop = this.calculateHaversineDistanceKm(sLat, sLng, p.lat, p.lng);
                if (dStop < bestStop) { bestStop = dStop; stopIdx = i; }
            });

            if (stopIdx <= busIdx) return null; // stop already passed

            let distKm = 0;
            for (let i = busIdx; i < stopIdx; i++) {
                if (i + 1 < latlngs.length) {
                    distKm += this.calculateHaversineDistanceKm(latlngs[i].lat, latlngs[i].lng, latlngs[i+1].lat, latlngs[i+1].lng);
                }
            }
            const speed = Math.max(15, Math.min(45, bus.currentSpeed || 25));
            const etaMin = Math.max(1, Math.round((distKm / speed) * 60));
            return `${etaMin} min`;
        } catch (_) {
            return null;
        }
    }

    filterBusByRoute(routeName) {
        this.clearBusMarkers();
        
        const filteredBuses = routeName ? 
            this.data.buses.filter(bus => bus.route.includes(routeName)) : 
            this.data.buses;
            
        filteredBuses.forEach(bus => {
            const busIcon = L.divIcon({
                className: 'bus-marker',
                html: `<div style="background-color: #1FB8CD; padding: 4px; border-radius: 50%; color: white; font-size: 16px; text-align: center;">🚌</div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });

            const marker = L.marker([bus.location.lat, bus.location.lng], {icon: busIcon})
                .bindPopup(`
                    <strong>${bus.id}</strong><br>
                    Route: ${bus.route}<br>
                    Driver: ${bus.driver}<br>
                    Next Stop: ${bus.nextStop}<br>
                    ETA: ${bus.eta}
                `)
                .addTo(this.map);
            
            this.busMarkers.push(marker);
        });
    }

    searchRoutes(query) {
        const q = (query || '').trim().toLowerCase();
        // Filter buses by route name
        const routeName = q ? (this.data.routes.find(r => r.name.toLowerCase().includes(q) || r.displayName.toLowerCase().includes(q))?.name || '') : '';
        this.filterBusByRoute(routeName.replace('Route ', 'Route '));
        // Update route details panel
        this.updateBusList();
    }

    // Continue with booking, payments, notifications, etc. methods...
    // [Due to length limits, I'll include the essential ones]

    loadBooking() {
        this.updateBookingStops();
        this.updateBookingHistory();
        this.updateFareCalculation();
        
        const dateInput = document.getElementById('bookingDate');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
            dateInput.value = today;
        }
    }

    updateBookingStops() {
        const routeSelect = document.getElementById('bookingRoute');
        const boardingSelect = document.getElementById('boardingStop');
        const dropSelect = document.getElementById('dropStop');

        if (!routeSelect || !boardingSelect || !dropSelect) return;

        const selectedRoute = routeSelect.value;
        const route = this.data.routes.find(r => r.displayName.includes(selectedRoute) || r.name === selectedRoute);

        boardingSelect.innerHTML = '<option value="">Select Boarding Stop</option>';
        dropSelect.innerHTML = '<option value="">Select Drop Stop</option>';

        if (route) {
            route.stops.forEach(stop => {
                boardingSelect.innerHTML += `<option value="${stop.name}">${stop.name}</option>`;
                dropSelect.innerHTML += `<option value="${stop.name}">${stop.name}</option>`;
            });
        }

        this.updateFareCalculation();
    }

    updateFareCalculation() {
        const boardingSelect = document.getElementById('boardingStop');
        const dropSelect = document.getElementById('dropStop');
        const fareElement = document.getElementById('bookingFare');
        const annualFeeInfo = document.getElementById('annualFeeInfo');

        if (!boardingSelect || !dropSelect || !fareElement) return;

        const boarding = boardingSelect.value;
        const drop = dropSelect.value;

        if (boarding && drop && boarding !== drop) {
            const routeSelect = document.getElementById('bookingRoute');
            const selectedRoute = routeSelect?.value || '';
            const route = this.data.routes.find(r => r.displayName.includes(selectedRoute) || r.name === selectedRoute);

            let distanceKm = 0;
            if (route) {
                const findStop = (name) => route.stops.find(s => s.name === name);
                const bStop = findStop(boarding);
                const dStop = findStop(drop);
                if (bStop && dStop) {
                    const [bLat, bLng] = (bStop.location || '').split(',').map(Number);
                    const [dLat, dLng] = (dStop.location || '').split(',').map(Number);
                    distanceKm = this.calculateHaversineDistanceKm(bLat, bLng, dLat, dLng);
                }
            }

            const baseAnnualFee = 5000;
            const perKmRate = 100;
            const annualFee = Math.max(baseAnnualFee, Math.round(baseAnnualFee + perKmRate * distanceKm));

            fareElement.textContent = annualFee;

            if (annualFeeInfo) {
                annualFeeInfo.innerHTML = `
                    <div class="wallet-balance" style="gap:12px;">
                        <span>Annual Fee</span>
                        <strong>₹${annualFee}</strong>
                        <span style=\"color: var(--color-text-secondary);\">(Distance: ${distanceKm.toFixed(1)} km)</span>
                    </div>`;
            }
        } else {
            fareElement.textContent = '0';
            if (annualFeeInfo) annualFeeInfo.innerHTML = '';
        }
    }

    async handleBooking(e) {
        e.preventDefault();
        
        try {
            this.showLoading('Processing your booking...');

            const routeSelect = document.getElementById('bookingRoute');
            const dateInput = document.getElementById('bookingDate');
            const boardingSelect = document.getElementById('boardingStop');
            const dropSelect = document.getElementById('dropStop');
            const fareElement = document.getElementById('bookingFare');

            const route = routeSelect.value;
            const date = dateInput.value;
            const boarding = boardingSelect.value;
            const drop = dropSelect.value;
            const fare = parseInt(fareElement.textContent);

            if (!route || !date || !boarding || !drop || fare === 0) {
                this.hideLoading();
                this.showToast('Please fill all booking details', 'error');
                return;
            }

            await new Promise(resolve => setTimeout(resolve, 1500));

            const booking = {
                id: this.data.bookings.length + 1,
                studentId: this.currentUser.id,
                route: route,
                date: date,
                boardingStop: boarding,
                dropStop: drop,
                status: 'confirmed',
                amount: fare,
                bookingTime: new Date().toISOString()
            };

            const payment = {
                id: this.data.payments.length + 1,
                userId: this.currentUser.id,
                amount: fare,
                type: 'booking',
                method: 'UPI',
                transactionId: 'TXN' + Date.now(),
                status: 'success',
                timestamp: new Date().toISOString()
            };

            this.data.bookings.push(booking);
            this.data.payments.push(payment);
            
            const notification = {
                id: this.data.notifications.length + 1,
                userId: this.currentUser.id,
                title: 'Booking Confirmed',
                message: `Your booking for ${route} on ${date} has been confirmed. Don't forget to tap your RFID card when boarding.`,
                type: 'approval',
                read: false,
                timestamp: new Date().toISOString()
            };
            
            this.data.notifications.push(notification);
            
            this.hideLoading();
            this.updateBookingHistory();
            this.updateUserInfo();
            this.updateNotificationCount();
            e.target.reset();
            
            this.showToast('Booking confirmed successfully! Payment recorded.', 'success');

            setTimeout(() => {
                this.showPushNotification(
                    'Booking Confirmed',
                    `Your ${route} booking is confirmed. Remember to tap your RFID card!`
                );
            }, 3000);
            
        } catch (error) {
            console.error('Booking error:', error);
            this.hideLoading();
            this.showToast('Booking failed. Please try again.', 'error');
        }
    }

    updateBookingHistory() {
        const historyContainer = document.getElementById('bookingHistory');
        if (!historyContainer || !this.currentUser) return;

        const userBookings = this.data.bookings
            .filter(b => b.studentId === this.currentUser.id)
            .sort((a, b) => new Date(b.bookingTime) - new Date(a.bookingTime));

        historyContainer.innerHTML = userBookings.length ? userBookings.map(booking => `
            <div class="booking-item">
                <div class="booking-header">
                    <div class="booking-route text-wrap">${booking.route}</div>
                    <div class="status status--${booking.status}">${booking.status}</div>
                </div>
                <div class="booking-details text-wrap">
                    Date: ${booking.date}<br>
                    ${booking.boardingStop} → ${booking.dropStop}<br>
                    Amount: ₹${booking.amount}<br>
                    Booked: ${this.formatDate(booking.bookingTime)}
                </div>
            </div>
        `).join('') : '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No bookings found</p>';
    }

    loadPayments() {
        this.loadPaymentMethods();
        this.loadTransactionHistory();
        const latest = this.data.payments
            .filter(p => this.currentUser && p.userId === this.currentUser.id)
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
        const formContainer = document.getElementById('paymentFormContent');
        if (formContainer) {
            if (latest) {
                formContainer.innerHTML = `
                    <div class="form-group">
                        <label class="form-label">Last Payment Amount</label>
                        <div>₹${latest.amount}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Transaction ID</label>
                        <div>${latest.transactionId}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Status</label>
                        <div>${latest.status}</div>
                    </div>`;
            } else {
                formContainer.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 20px;">No payments yet. Choose a method to pay.</p>';
            }
        }
    }

    loadPaymentMethods() {
        document.querySelectorAll('.payment-option').forEach(option => {
            option.addEventListener('click', () => this.selectPaymentMethod(option));
        });
    }

    selectPaymentMethod(option) {
        document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        
        const method = option.dataset.method;
        this.showPaymentForm(method);
    }

    showPaymentForm(method) {
        const formContainer = document.getElementById('paymentFormContent');
        if (!formContainer) return;

        let formHTML = '';
        
        switch(method) {
            case 'upi':
                formHTML = `
                    <div class="form-group">
                        <label class="form-label">UPI ID</label>
                        <input type="text" class="form-control" placeholder="Enter UPI ID" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Amount</label>
                        <input type="number" class="form-control" placeholder="Enter amount" required>
                    </div>
                    <button type="button" data-pay-method="upi" class="btn btn--primary btn--full-width">Pay with UPI</button>
                `;
                break;
                
            case 'card':
                formHTML = `
                    <div class="form-group">
                        <label class="form-label">Card Number</label>
                        <input type="text" class="form-control" placeholder="1234 5678 9012 3456" maxlength="19" required>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div class="form-group">
                            <label class="form-label">Expiry</label>
                            <input type="text" class="form-control" placeholder="MM/YY" maxlength="5" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">CVV</label>
                            <input type="text" class="form-control" placeholder="123" maxlength="3" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Amount</label>
                        <input type="number" class="form-control" placeholder="Enter amount" required>
                    </div>
                    <button type="button" data-pay-method="card" class="btn btn--primary btn--full-width">Pay with Card</button>
                `;
                break;
                
            default:
                const latest = this.data.payments
                    .filter(p => this.currentUser && p.userId === this.currentUser.id)
                    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
                formHTML = latest ? `
                    <div class="form-group">
                        <label class="form-label">Last Payment Amount</label>
                        <div>₹${latest.amount}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Transaction ID</label>
                        <div>${latest.transactionId}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Status</label>
                        <div>${latest.status}</div>
                    </div>` : '<p style="text-align: center; color: var(--color-text-secondary); padding: 20px;">Select a payment method to continue</p>';
        }
        
        formContainer.innerHTML = formHTML;
    }

    calculateHaversineDistanceKm(lat1, lon1, lat2, lon2) {
        if ([lat1, lon1, lat2, lon2].some(v => Number.isNaN(v))) return 0;
        const toRad = (deg) => deg * Math.PI / 180;
        const R = 6371; // Earth radius in km
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    async processPayment(method) {
        try {
            this.showLoading('Processing payment...');
            
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            const amountInput = document.querySelector('#paymentFormContent input[type="number"]');
            const amount = parseInt(amountInput?.value || 0);
            
            if (amount <= 0) {
                this.hideLoading();
                this.showToast('Please enter a valid amount', 'error');
                return;
            }

            const payment = {
                id: this.data.payments.length + 1,
                userId: this.currentUser.id,
                amount: amount,
                type: 'booking',
                method: method,
                transactionId: 'TXN' + Date.now(),
                status: 'success',
                timestamp: new Date().toISOString()
            };
            
            this.data.payments.push(payment);
            
            this.hideLoading();
            this.loadTransactionHistory();
            this.showToast(`Payment of ₹${amount} successful!`, 'success');
            
            document.getElementById('paymentFormContent').innerHTML = `
                <div class="form-group">
                    <label class="form-label">Last Payment Amount</label>
                    <div>₹${amount}</div>
                </div>
                <div class="form-group">
                    <label class="form-label">Transaction ID</label>
                    <div>${payment.transactionId}</div>
                </div>
                <div class="form-group">
                    <label class="form-label">Status</label>
                    <div>success</div>
                </div>`;
            document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
            
        } catch (error) {
            console.error('Payment error:', error);
            this.hideLoading();
            this.showToast('Payment failed. Please try again.', 'error');
        }
    }

    startPaymentAuthorization(method) {
        // Show password prompt modal before charging
        const roleLabel = this.currentUser?.role ? this.currentUser.role.toUpperCase() : 'USER';
        const modalContent = `
            <div class="form-group">
                <label class="form-label">${roleLabel} Password</label>
                <input type="password" id="authPasswordInput" class="form-control" placeholder="Enter your password" required>
            </div>
            <div style="display: flex; gap: 8px;">
                <button type="button" id="confirmPaymentBtn" class="btn btn--primary" data-method="${method}">Authorize & Pay</button>
                <button type="button" id="cancelPaymentBtn" class="btn btn--outline">Cancel</button>
            </div>
        `;
        this.showModal('Payment Authorization', modalContent);

        const confirmBtn = document.getElementById('confirmPaymentBtn');
        const cancelBtn = document.getElementById('cancelPaymentBtn');
        if (confirmBtn) {
            confirmBtn.addEventListener('click', async () => {
                const input = document.getElementById('authPasswordInput');
                const pass = input?.value || '';
                if (!this.currentUser) { this.showToast('Not authenticated', 'error'); return; }
                if (pass !== this.currentUser.password) { this.showToast('Invalid password', 'error'); return; }
                this.hideModal();
                await this.processPayment(confirmBtn.getAttribute('data-method'));
            });
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => this.hideModal());
        }
    }

    loadTransactionHistory() {
        const historyContainer = document.getElementById('transactionHistory');
        if (!historyContainer || !this.currentUser) return;

        const userTransactions = this.data.payments
            .filter(p => p.userId === this.currentUser.id)
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        historyContainer.innerHTML = userTransactions.length ? userTransactions.map(transaction => `
            <div class="transaction-item">
                <div class="transaction-details">
                    <div class="transaction-type text-wrap">${this.formatTransactionType(transaction.type)}</div>
                    <div class="transaction-meta text-wrap">
                        ${transaction.method} • ${transaction.transactionId}<br>
                        ${this.formatDate(transaction.timestamp)}
                    </div>
                </div>
                <div class="transaction-amount debit" style="color: var(--color-error);">
                    -₹${transaction.amount}
                </div>
            </div>
        `).join('') : '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No transactions found</p>';
    }

    formatTransactionType(type) {
        const types = {
            'booking': 'Bus Booking',
            'monthly_pass': 'Monthly Pass'
        };
        return types[type] || type;
    }

    showAddMoneyModal() {
        const modalContent = `
            <div class="add-money-form">
                <h4>Add Money to Wallet</h4>
                <p>Current Balance: ₹${this.currentUser.walletBalance || 0}</p>
                
                <div class="quick-amounts" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin: 16px 0;">
                    <button class="btn btn--outline" onclick="app.setAmount(100)">₹100</button>
                    <button class="btn btn--outline" onclick="app.setAmount(250)">₹250</button>
                    <button class="btn btn--outline" onclick="app.setAmount(500)">₹500</button>
                    <button class="btn btn--outline" onclick="app.setAmount(1000)">₹1000</button>
                </div>
                
                <div class="form-group">
                    <label class="form-label">Custom Amount</label>
                    <input type="number" id="customAmount" class="form-control" placeholder="Enter amount">
                </div>
                
                <button onclick="app.addMoneyToWallet()" class="btn btn--primary btn--full-width">Add Money</button>
            </div>
        `;
        
        this.showModal('Add Money', modalContent);
    }

    setAmount(amount) {
        const customAmount = document.getElementById('customAmount');
        if (customAmount) {
            customAmount.value = amount;
        }
    }

    async addMoneyToWallet() {
        try {
            const customAmount = document.getElementById('customAmount');
            const amount = parseInt(customAmount?.value || 0);
            
            if (amount <= 0) {
                this.showToast('Please enter a valid amount', 'error');
                return;
            }

            this.hideModal();
            this.showLoading('Processing payment...');
            
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            this.currentUser.walletBalance += amount;
            
            const payment = {
                id: this.data.payments.length + 1,
                userId: this.currentUser.id,
                amount: amount,
                type: 'wallet_topup',
                method: 'UPI',
                transactionId: 'TXN' + Date.now(),
                status: 'success',
                timestamp: new Date().toISOString()
            };
            
            this.data.payments.push(payment);
            
            this.hideLoading();
            this.updateUserInfo();
            this.showToast(`₹${amount} added to your wallet successfully!`, 'success');
            
        } catch (error) {
            console.error('Add money error:', error);
            this.hideLoading();
            this.showToast('Failed to add money. Please try again.', 'error');
        }
    }

    loadNotifications() {
        this.loadNotificationsList();
    }

    loadNotificationsList(filter = 'all') {
        const notificationsList = document.getElementById('notificationsList');
        if (!notificationsList || !this.currentUser) return;

        let notifications = this.data.notifications.filter(n => n.userId === this.currentUser.id);
        
        if (filter !== 'all') {
            notifications = notifications.filter(n => n.type === filter);
        }
        
        notifications.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        notificationsList.innerHTML = notifications.length ? notifications.map(notification => `
            <div class="notification-item ${notification.read ? '' : 'unread'}">
                <div class="notification-icon">${this.getNotificationIcon(notification.type)}</div>
                <div class="notification-content">
                    <div class="notification-title text-wrap">${notification.title}</div>
                    <div class="notification-message text-wrap">${notification.message}</div>
                    <div class="notification-time">${this.formatRelativeTime(notification.timestamp)}</div>
                </div>
            </div>
        `).join('') : '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No notifications found</p>';
    }

    getNotificationIcon(type) {
        const icons = {
            'arrival': '🚌',
            'approval': '✅',
            'missed_bus': '⚠️',
            'announcement': '📢',
            'payment': '💳',
            'emergency': '🚨'
        };
        return icons[type] || '📋';
    }

    filterNotifications(filter, buttonElement) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        buttonElement.classList.add('active');
        this.loadNotificationsList(filter);
    }

    markAllNotificationsRead() {
        this.data.notifications.forEach(notification => {
            if (notification.userId === this.currentUser.id) {
                notification.read = true;
            }
        });
        
        this.updateNotificationCount();
        this.loadNotificationsList();
        this.showToast('All notifications marked as read', 'success');
    }

    loadUserManagement() {
        const container = document.getElementById('usersTable');
        if (!container) return;

        const users = this.data.users;

        const canManage = this.currentUser && this.currentUser.role === 'admin';
        // Ensure only the header button from index.html is used
        const headerAddBtn = document.getElementById('addUserBtn');
        if (headerAddBtn) headerAddBtn.style.display = canManage ? '' : 'none';

        container.innerHTML = `
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th>Contact</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${users.map(user => `
                        <tr>
                            <td><div class="text-wrap">${user.name}</div></td>
                            <td><div class="text-wrap">${user.email}</div></td>
                            <td><span class="status status--info">${user.role}</span></td>
                            <td><div class="text-wrap">${user.department || 'N/A'}</div></td>
                            <td><div class="text-wrap">${user.phone || 'N/A'}</div></td>
                            <td><span class="status status--success">${user.status || 'Active'}</span></td>
                            <td>
                                <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                                    ${canManage ? `<button class="btn btn--sm btn--outline edit-user" data-user-id="${user.id}">Edit</button>` : ''}
                                    <button class="btn btn--sm btn--outline view-user" data-user-id="${user.id}">View</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    showAddUserModal() {
        const modalContent = `
            <div class="form-group">
                <label class="form-label">Name</label>
                <input type="text" id="userNameInput" class="form-control" placeholder="Full name" required>
            </div>
            <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" id="userEmailInput" class="form-control" placeholder="email@domain.com" required>
            </div>
            <div class="form-group">
                <label class="form-label">Username</label>
                <input type="text" id="userUsernameInput" class="form-control" placeholder="login username" required>
            </div>
            <div class="form-group">
                <label class="form-label">Password</label>
                <input type="password" id="userPasswordInput" class="form-control" placeholder="temporary password" required>
            </div>
            <div class="form-group">
                <label class="form-label">Role</label>
                <select id="userRoleInput" class="form-control">
                    <option value="student">student</option>
                    <option value="staff">staff</option>
                    <option value="admin">admin</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Department</label>
                <input type="text" id="userDeptInput" class="form-control" placeholder="Department (optional)">
            </div>
            <div style="display:flex; gap:8px;">
                <button class="btn btn--primary" id="saveNewUserBtn">Create User</button>
                <button class="btn btn--outline" id="cancelNewUserBtn">Cancel</button>
            </div>
        `;
        this.showModal('Add New User', modalContent);
        document.getElementById('saveNewUserBtn')?.addEventListener('click', () => this.saveNewUser());
        document.getElementById('cancelNewUserBtn')?.addEventListener('click', () => this.hideModal());
    }

    saveNewUser() {
        const name = (document.getElementById('userNameInput')?.value || '').trim();
        const email = (document.getElementById('userEmailInput')?.value || '').trim();
        const username = (document.getElementById('userUsernameInput')?.value || '').trim();
        const password = (document.getElementById('userPasswordInput')?.value || '').trim();
        const role = (document.getElementById('userRoleInput')?.value || 'student').trim();
        const dept = (document.getElementById('userDeptInput')?.value || '').trim();
        if (!name || !email || !username || !password) { this.showToast('Fill all required fields', 'error'); return; }
        const id = Math.max(...this.data.users.map(u => u.id)) + 1;
        this.data.users.push({ id, username, password, role, name, email, department: dept, status: 'Active', phone: '', joinDate: new Date().toISOString().split('T')[0] });
        this.hideModal();
        this.loadUserManagement();
        this.showToast('User created', 'success');
    }

    showEditUserModal(userId) {
        const user = this.data.users.find(u => u.id === userId);
        if (!user) return;
        const modalContent = `
            <div class="form-group">
                <label class="form-label">Name</label>
                <input type="text" id="editUserNameInput" class="form-control" value="${user.name}">
            </div>
            <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" id="editUserEmailInput" class="form-control" value="${user.email}">
            </div>
            <div class="form-group">
                <label class="form-label">Role</label>
                <select id="editUserRoleInput" class="form-control">
                    ${['student','staff','admin'].map(r => `<option value="${r}" ${user.role===r?'selected':''}>${r}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Department</label>
                <input type="text" id="editUserDeptInput" class="form-control" value="${user.department || ''}">
            </div>
            <div style="display:flex; gap:8px;">
                <button class="btn btn--primary" id="saveEditUserBtn" data-user-id="${user.id}">Save Changes</button>
                <button class="btn btn--outline" id="cancelEditUserBtn">Cancel</button>
            </div>
        `;
        this.showModal('Edit User', modalContent);
        document.getElementById('saveEditUserBtn')?.addEventListener('click', () => this.saveEditedUser(user.id));
        document.getElementById('cancelEditUserBtn')?.addEventListener('click', () => this.hideModal());
    }

    saveEditedUser(userId) {
        const user = this.data.users.find(u => u.id === userId);
        if (!user) return;
        const name = (document.getElementById('editUserNameInput')?.value || '').trim();
        const email = (document.getElementById('editUserEmailInput')?.value || '').trim();
        const role = (document.getElementById('editUserRoleInput')?.value || 'student').trim();
        const dept = (document.getElementById('editUserDeptInput')?.value || '').trim();
        if (!name || !email) { this.showToast('Name and email are required', 'error'); return; }
        user.name = name; user.email = email; user.role = role; user.department = dept;
        this.hideModal();
        this.loadUserManagement();
        this.showToast('User updated', 'success');
    }

    showViewUserModal(userId) {
        const user = this.data.users.find(u => u.id === userId);
        if (!user) return;
        const modalContent = `
            <div style="display:grid; gap:8px;">
                <div><strong>Name:</strong> <span class="text-wrap">${user.name}</span></div>
                <div><strong>Email:</strong> <span class="text-wrap">${user.email}</span></div>
                <div><strong>Role:</strong> ${user.role}</div>
                <div><strong>Department:</strong> <span class="text-wrap">${user.department || 'N/A'}</span></div>
                <div><strong>Phone:</strong> <span class="text-wrap">${user.phone || 'N/A'}</span></div>
                <div><strong>Status:</strong> ${user.status || 'Active'}</div>
                <div><strong>Joined:</strong> ${user.joinDate || ''}</div>
            </div>
        `;
        this.showModal('User Details', modalContent);
    }

    loadBusManagement() {
        const container = document.getElementById('busesGrid');
        if (!container) return;
        const canManage = this.currentUser && (this.currentUser.role === 'staff' || this.currentUser.role === 'admin');
        // Use the single header button from index.html; toggle its visibility
        const headerBtn = document.getElementById('addBusBtn');
        if (headerBtn) headerBtn.style.display = canManage ? '' : 'none';

        container.innerHTML = this.data.buses.map(bus => `
            <div class="bus-card">
                <div class="bus-card-header">
                    <span class="bus-card-number text-wrap">${bus.id}</span>
                    <span class="bus-status active">${bus.status}</span>
                </div>
                <div class="bus-card-details text-wrap">
                    Route: ${bus.route}<br>
                    Driver: ${bus.driver}<br>
                    Phone: ${bus.driverPhone}<br>
                    Capacity: ${bus.capacity} seats<br>
                    Current Occupancy: ${bus.currentOccupancy}/${bus.capacity}<br>
                    Next Stop: ${bus.nextStop}<br>
                    ETA: ${bus.eta}<br>
                    Speed: ${bus.currentSpeed} km/h<br>
                    Last Updated: ${this.formatDate(bus.lastUpdated)}
                </div>
                <div style="margin-top: 16px; display: flex; gap: 8px; flex-wrap: wrap;">
                    ${canManage ? `<button class="btn btn--sm btn--outline edit-bus" data-bus-id="${bus.id}">Edit</button>` : ''}
                    <button class="btn btn--sm btn--primary track-live" data-bus-id="${bus.id}">Track Live</button>
                </div>
            </div>
        `).join('');
    }

    showAddBusModal() {
        const modalContent = `
            <div class="form-group">
                <label class="form-label">Bus Number</label>
                <input type="text" id="busNumberInput" class="form-control" placeholder="TN-00-XX-0000" required>
            </div>
            <div class="form-group">
                <label class="form-label">Route</label>
                <select id="busRouteInput" class="form-control">
                    ${this.data.routes.map(r => `<option value="${r.name} - ${r.displayName.split(' - ').slice(1).join(' - ')}">${r.displayName}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Driver Name</label>
                <input type="text" id="busDriverInput" class="form-control" placeholder="Driver Name" required>
            </div>
            <div class="form-group">
                <label class="form-label">Driver Phone</label>
                <input type="text" id="busPhoneInput" class="form-control" placeholder="+91 ##########" required>
            </div>
            <div class="form-group">
                <label class="form-label">Capacity</label>
                <input type="number" id="busCapacityInput" class="form-control" value="45" min="10" max="70" required>
            </div>
            <div style="display:flex; gap:8px;">
                <button class="btn btn--primary" id="saveNewBusBtn">Save</button>
                <button class="btn btn--outline" id="cancelNewBusBtn">Cancel</button>
            </div>
        `;
        this.showModal('Add New Bus', modalContent);
        const saveBtn = document.getElementById('saveNewBusBtn');
        const cancelBtn = document.getElementById('cancelNewBusBtn');
        saveBtn?.addEventListener('click', () => this.saveNewBus());
        cancelBtn?.addEventListener('click', () => this.hideModal());
    }

    saveNewBus() {
        const number = (document.getElementById('busNumberInput')?.value || '').trim();
        const route = (document.getElementById('busRouteInput')?.value || '').trim();
        const driver = (document.getElementById('busDriverInput')?.value || '').trim();
        const phone = (document.getElementById('busPhoneInput')?.value || '').trim();
        const capacity = parseInt(document.getElementById('busCapacityInput')?.value || '45');
        if (!number || !route || !driver || !phone || !capacity) { this.showToast('Please fill all fields', 'error'); return; }
        this.data.buses.push({
            id: number,
            route: route,
            driver,
            driverPhone: phone,
            capacity,
            currentOccupancy: 0,
            status: 'Active',
            currentSpeed: 0,
            nextStop: 'Depot',
            eta: '--',
            lastUpdated: new Date().toISOString(),
            location: { lat: 13.0827, lng: 80.2707 }
        });
        this.hideModal();
        this.loadBusManagement();
        this.showToast('New bus added', 'success');
    }

    showEditBusModal(busId) {
        const bus = this.data.buses.find(b => b.id === busId);
        if (!bus) return;
        const modalContent = `
            <div class="form-group">
                <label class="form-label">Bus Number</label>
                <input type="text" id="editBusNumberInput" class="form-control" value="${bus.id}" disabled>
            </div>
            <div class="form-group">
                <label class="form-label">Route</label>
                <select id="editBusRouteInput" class="form-control">
                    ${this.data.routes.map(r => {
                        const val = `${r.name} - ${r.displayName.split(' - ').slice(1).join(' - ')}`;
                        const sel = bus.route === val ? 'selected' : '';
                        return `<option value="${val}" ${sel}>${r.displayName}</option>`;
                    }).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Driver Name</label>
                <input type="text" id="editBusDriverInput" class="form-control" value="${bus.driver}">
            </div>
            <div class="form-group">
                <label class="form-label">Driver Phone</label>
                <input type="text" id="editBusPhoneInput" class="form-control" value="${bus.driverPhone}">
            </div>
            <div class="form-group">
                <label class="form-label">Capacity</label>
                <input type="number" id="editBusCapacityInput" class="form-control" value="${bus.capacity}" min="10" max="70">
            </div>
            <div style="display:flex; gap:8px;">
                <button class="btn btn--primary" id="saveEditBusBtn" data-bus-id="${bus.id}">Save Changes</button>
                <button class="btn btn--outline" id="cancelEditBusBtn">Cancel</button>
            </div>
        `;
        this.showModal('Edit Bus', modalContent);
        document.getElementById('saveEditBusBtn')?.addEventListener('click', () => this.saveEditedBus(bus.id));
        document.getElementById('cancelEditBusBtn')?.addEventListener('click', () => this.hideModal());
    }

    saveEditedBus(busId) {
        const bus = this.data.buses.find(b => b.id === busId);
        if (!bus) return;
        const route = (document.getElementById('editBusRouteInput')?.value || '').trim();
        const driver = (document.getElementById('editBusDriverInput')?.value || '').trim();
        const phone = (document.getElementById('editBusPhoneInput')?.value || '').trim();
        const capacity = parseInt(document.getElementById('editBusCapacityInput')?.value || '45');
        if (!route || !driver || !phone || !capacity) { this.showToast('Please fill all fields', 'error'); return; }
        bus.route = route;
        bus.driver = driver;
        bus.driverPhone = phone;
        bus.capacity = capacity;
        bus.lastUpdated = new Date().toISOString();
        this.hideModal();
        this.loadBusManagement();
        this.updateBusList();
        this.showToast('Bus updated', 'success');
    }

    loadRequests() {
        const container = document.getElementById('requestsList');
        if (!container) return;

        const pendingCount = this.data.requests.filter(r => r.status === 'pending').length;
        const approvedCount = this.data.requests.filter(r => r.status === 'approved').length;
        
        const pendingEl = document.getElementById('pendingCount');
        const approvedEl = document.getElementById('approvedCount');
        if (pendingEl) pendingEl.textContent = pendingCount;
        if (approvedEl) approvedEl.textContent = approvedCount;

        container.innerHTML = this.data.requests.length ? this.data.requests.map(request => `
            <div class="card" style="margin-bottom: 16px;">
                <div class="card__body">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; gap: 16px;">
                        <h5 class="text-wrap">Request #${request.id} - ${request.student}</h5>
                        <span class="status status--${request.status}">${request.status}</span>
                    </div>
                    <p class="text-wrap"><strong>Type:</strong> ${request.type}</p>
                    <p class="text-wrap"><strong>Register Number:</strong> ${request.registerNumber}</p>
                    <p class="text-wrap"><strong>Message:</strong> ${request.message}</p>
                    <p><strong>Submitted:</strong> ${request.submittedDate}</p>
                    ${request.status === 'approved' ? `<p><strong>Approved by:</strong> ${request.approvedBy} on ${request.approvedDate}</p>` : ''}
                    ${request.status === 'rejected' ? `<p><strong>Rejected by:</strong> ${request.rejectedBy} on ${request.rejectedDate}</p><p><strong>Reason:</strong> ${request.reason}</p>` : ''}
                    ${request.status === 'pending' ? `
                        <div style="margin-top: 16px; display: flex; gap: 8px; flex-wrap: wrap;">
                            <button class="btn btn--sm btn--primary request-approve" data-request-id="${request.id}">Approve</button>
                            <button class="btn btn--sm btn--outline request-reject" data-request-id="${request.id}">Reject</button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('') : '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No requests found</p>';
    }

    async handleRequest(requestId, action) {
        try {
            this.showLoading(`${action === 'approve' ? 'Approving' : 'Rejecting'} request...`);
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const request = this.data.requests.find(r => r.id === requestId);
            if (request) {
                request.status = action === 'approve' ? 'approved' : 'rejected';
                request[`${action}dBy`] = this.currentUser.name;
                request[`${action}dDate`] = new Date().toISOString().split('T')[0];
                
                if (action === 'reject') {
                    request.reason = 'Request denied after review';
                }
            }
            
            this.hideLoading();
            this.showToast(`Request ${action}d successfully!`, 'success');
            this.loadRequests();
            
        } catch (error) {
            console.error('Handle request error:', error);
            this.hideLoading();
            this.showToast('Failed to handle request', 'error');
        }
    }

    loadActivityLogs() {
        const container = document.getElementById('activityLogsTable');
        if (!container) return;

        const staffFilter = document.getElementById('logStaffFilter');
        if (staffFilter) {
            const staffUsers = this.data.users.filter(u => u.role === 'staff' || u.role === 'admin');
            staffFilter.innerHTML = '<option value="">All Staff</option>' + 
                staffUsers.map(user => `<option value="${user.id}">${user.name}</option>`).join('');
        }

        const logs = this.data.activityLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        container.innerHTML = `
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>User</th>
                        <th>Role</th>
                        <th>Action</th>
                        <th>Details</th>
                        <th>IP Address</th>
                    </tr>
                </thead>
                <tbody>
                    ${logs.map(log => {
                        const user = this.data.users.find(u => u.id === log.userId);
                        return `
                            <tr>
                                <td><div class="text-wrap">${this.formatDate(log.timestamp)}</div></td>
                                <td><div class="text-wrap">${user ? user.name : 'Unknown'}</div></td>
                                <td><span class="status status--info">${log.userRole}</span></td>
                                <td><span class="status status--success">${log.action.replace(/_/g, ' ')}</span></td>
                                <td><div class="text-wrap">${log.details}</div></td>
                                <td>${log.ipAddress}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    loadAnnouncements() {
        const container = document.getElementById('announcementsList');
        if (!container) return;

        // Ensure only the header button from index.html is used
        const canManage = this.currentUser && (this.currentUser.role === 'staff' || this.currentUser.role === 'admin');
        const headerBtn = document.getElementById('addAnnouncementBtn');
        if (headerBtn) headerBtn.style.display = canManage ? '' : 'none';

        const announcements = this.data.announcements.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        container.innerHTML = announcements.map(announcement => `
            <div class="announcement-item">
                <div class="announcement-header">
                    <h4 class="announcement-title text-wrap">${announcement.title}</h4>
                    <span class="announcement-type ${announcement.type}">${announcement.type}</span>
                </div>
                <p class="announcement-message text-wrap">${announcement.message}</p>
                <div class="announcement-meta text-wrap">
                    Priority: ${announcement.priority} | 
                    Created by: ${announcement.createdBy} | 
                    ${this.formatDate(announcement.timestamp)}
                </div>
            </div>
        `).join('');
    }

    showAddAnnouncementModal() {
        const modalContent = `
            <div class="form-group">
                <label class="form-label">Title</label>
                <input type="text" id="announceTitleInput" class="form-control" placeholder="Title" required>
            </div>
            <div class="form-group">
                <label class="form-label">Message</label>
                <textarea id="announceMessageInput" class="form-control" placeholder="Message" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Type</label>
                <select id="announceTypeInput" class="form-control">
                    <option value="info">info</option>
                    <option value="feature">feature</option>
                    <option value="billing">billing</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Priority</label>
                <select id="announcePriorityInput" class="form-control">
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </select>
            </div>
            <div style="display:flex; gap:8px;">
                <button class="btn btn--primary" id="saveAnnouncementBtn">Publish</button>
                <button class="btn btn--outline" id="cancelAnnouncementBtn">Cancel</button>
            </div>
        `;
        this.showModal('New Announcement', modalContent);
        document.getElementById('saveAnnouncementBtn')?.addEventListener('click', () => this.saveAnnouncement());
        document.getElementById('cancelAnnouncementBtn')?.addEventListener('click', () => this.hideModal());
    }

    saveAnnouncement() {
        const title = (document.getElementById('announceTitleInput')?.value || '').trim();
        const message = (document.getElementById('announceMessageInput')?.value || '').trim();
        const type = (document.getElementById('announceTypeInput')?.value || 'info').trim();
        const priority = (document.getElementById('announcePriorityInput')?.value || 'low').trim();
        if (!title || !message) { this.showToast('Please provide title and message', 'error'); return; }
        this.data.announcements.unshift({
            id: this.data.announcements.length + 1,
            title,
            message,
            type,
            priority,
            createdBy: this.currentUser?.name || 'System',
            timestamp: new Date().toISOString()
        });
        this.hideModal();
        this.loadAnnouncements();
        this.showToast('Announcement published', 'success');
    }

    // Theme Management
    initializeTheme() {
        const savedTheme = sessionStorage.getItem('selectedTheme') || 'default';
        this.changeTheme(savedTheme);
        
        const themeSelector = document.getElementById('themeSelector');
        if (themeSelector) {
            themeSelector.value = savedTheme;
        }
    }

    changeTheme(theme) {
        this.currentTheme = theme;
        document.body.setAttribute('data-theme', theme);
        sessionStorage.setItem('selectedTheme', theme);
        
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    showPushNotification(title, message) {
        const pushNotification = document.getElementById('pushNotification');
        const pushTitle = document.getElementById('pushTitle');
        const pushMessage = document.getElementById('pushMessage');
        
        if (pushNotification && pushTitle && pushMessage) {
            pushTitle.textContent = title;
            pushMessage.textContent = message;
            
            pushNotification.classList.remove('hidden');
            
            setTimeout(() => {
                pushNotification.classList.add('hidden');
            }, 5000);
        }
    }

    // Utility Methods
    formatRelativeTime(timestamp) {
        const now = new Date();
        const time = new Date(timestamp);
        const diffInMinutes = Math.floor((now - time) / 60000);
        
        if (diffInMinutes < 1) return 'Just now';
        if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
        if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
        return `${Math.floor(diffInMinutes / 1440)} days ago`;
    }

    // Notification Scheduling
    startNotificationSchedulers() {
        this.stopNotificationSchedulers();
        // Bus arrival checks every minute
        this.updateIntervals.busArrival = setInterval(() => this.checkBusArrivalNotifications(), 60000);
        // Missed bus checks every 2 minutes
        this.updateIntervals.missedBus = setInterval(() => this.checkMissedBusNotifications(), 120000);
        // General announcements/requests refresh every 3 minutes
        this.updateIntervals.announcements = setInterval(() => this.pushGeneralNotifications(), 180000);
        // Run immediately once
        this.checkBusArrivalNotifications();
        this.checkMissedBusNotifications();
        this.pushGeneralNotifications();
    }

    stopNotificationSchedulers() {
        ['busArrival','missedBus','announcements'].forEach(k => {
            if (this.updateIntervals[k]) clearInterval(this.updateIntervals[k]);
            this.updateIntervals[k] = null;
        });
    }

    checkBusArrivalNotifications() {
        if (!this.currentUser || this.currentUser.role !== 'student') return;
        const upcoming = this.getNextBusForStudent();
        if (!upcoming) return;
        // Notify when ETA is within 5 minutes
        const etaNum = parseInt((upcoming.eta || '').replace(/[^0-9]/g, ''));
        if (!Number.isNaN(etaNum) && etaNum <= 5) {
            const message = `Your bus for ${upcoming.route} will arrive at ${upcoming.nextStop} in ${etaNum} minutes.`;
            this.enqueueAndShowNotification('Bus Arriving Soon', message, 'arrival');
        }
    }

    checkMissedBusNotifications() {
        if (!this.currentUser || this.currentUser.role !== 'student') return;
        const nextTrip = this.getNextScheduledTripForStudent();
        if (!nextTrip) return;
        const tripTime = new Date(`${nextTrip.date}T${nextTrip.time}:00`);
        const now = new Date();
        // If trip started > 10 minutes ago and last RFID scan is older than 30 minutes → missed
        const hasStarted = now.getTime() - tripTime.getTime() > 10 * 60000;
        const recentScan = this.lastRFIDScanAt && (now.getTime() - this.lastRFIDScanAt.getTime() < 30 * 60000);
        if (hasStarted && !recentScan) {
            const message = `You may have missed the ${nextTrip.route} at ${nextTrip.time} from ${nextTrip.boardingStop}.`;
            this.enqueueAndShowNotification('Missed Bus Alert', message, 'missed_bus');
        }
    }

    pushGeneralNotifications() {
        if (!this.currentUser) return;
        // Push a random announcement/request-style notification occasionally
        const shouldPush = Math.random() < 0.25; // 25% chance on interval
        if (!shouldPush) return;
        const samples = [
            { title: 'Transport Notice', message: 'Route A will have minor delays due to traffic.', type: 'announcement' },
            { title: 'Booking Reminder', message: 'Remember to confirm your next travel schedule.', type: 'approval' },
            { title: 'Campus Update', message: 'Shuttle maintenance planned this weekend.', type: 'announcement' }
        ];
        const pick = samples[Math.floor(Math.random() * samples.length)];
        this.enqueueAndShowNotification(pick.title, pick.message, pick.type);
    }

    enqueueAndShowNotification(title, message, type) {
        // Add to in-memory list and data.notifications for UI
        const notif = {
            id: this.data.notifications.length + 1,
            userId: this.currentUser.id,
            title,
            message,
            type,
            read: false,
            timestamp: new Date().toISOString()
        };
        this.data.notifications.unshift(notif);
        this.updateNotificationCount();
        if (this.currentSection === 'notifications') {
            this.loadNotificationsList();
        }
        // Show toast + push overlay
        this.showToast(title + ' — ' + message, type === 'missed_bus' ? 'warning' : 'info');
        this.showPushNotification(title, message);
    }

    formatDate(timestamp) {
        return new Date(timestamp).toLocaleString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    clearAllIntervals() {
        Object.values(this.updateIntervals).forEach(interval => {
            if (interval) clearInterval(interval);
        });
        this.updateIntervals = {};
    }

    showLoading(message = 'Loading...') {
        const spinner = document.getElementById('loadingSpinner');
        const loadingMessage = document.getElementById('loadingMessage');
        
        if (spinner) {
            spinner.classList.remove('hidden');
            if (loadingMessage) {
                loadingMessage.textContent = message;
            }
        }
    }

    hideLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.classList.add('hidden');
        }
    }

    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        const toastIcon = document.getElementById('toastIcon');
        
        if (toast && toastMessage) {
            const icons = {
                success: '✅',
                error: '❌', 
                warning: '⚠️',
                info: 'ℹ️'
            };
            
            if (toastIcon) toastIcon.textContent = icons[type] || icons.info;
            toastMessage.textContent = message;
            toast.className = `toast ${type}`;
            toast.classList.remove('hidden');
            
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 5000);
        }
    }

    hideToast() {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.classList.add('hidden');
        }
    }

    showModal(title, content) {
        const modal = document.getElementById('modal');
        const titleEl = document.getElementById('modalTitle');
        const bodyEl = document.getElementById('modalBody');
        
        if (modal && titleEl && bodyEl) {
            titleEl.textContent = title;
            bodyEl.innerHTML = content;
            modal.classList.remove('hidden');
        }
    }

    hideModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    getNextBusForStudent() {
        if (!this.currentUser || this.currentUser.role !== 'student') return null;
        
        const assignedRoute = this.currentUser.assignedRoute;
        const bus = this.data.buses.find(b => b.route.includes(assignedRoute));
        
        return bus ? {
            route: bus.route.split(' - ')[0],
            nextStop: bus.nextStop,
            eta: bus.eta
        } : null;
    }

    getNextScheduledTripForStudent() {
        if (!this.currentUser || this.currentUser.role !== 'student') return null;
        const today = new Date();
        // Mock weekly schedule: morning pickup and evening drop for the student's assigned route
        const baseTrips = [
            { time: '08:10', route: this.currentUser.assignedRoute, boardingStop: 'Anna University', dropStop: 'Campus Main Gate' },
            { time: '17:30', route: this.currentUser.assignedRoute, boardingStop: 'Campus Main Gate', dropStop: 'Anna University' }
        ];

        // Build next 7 days schedule and pick the soonest in the future
        const candidates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const dateStr = date.toISOString().split('T')[0];
            baseTrips.forEach(t => {
                candidates.push({
                    date: dateStr,
                    time: t.time,
                    route: t.route,
                    boardingStop: t.boardingStop,
                    dropStop: t.dropStop,
                    busId: this.data.buses.find(b => b.route.includes(t.route))?.id || 'TN-09-AB-1234'
                });
            });
        }

        const nowMs = Date.now();
        const future = candidates.map(c => ({
            ...c,
            ts: new Date(`${c.date}T${c.time}:00`).getTime()
        })).filter(c => c.ts > nowMs)
        .sort((a, b) => a.ts - b.ts);

        return future[0] || null;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, creating app instance');
    window.app = new AdvancedBusTrackingApp();
});

// Fallback initialization
if (document.readyState !== 'loading') {
    console.log('DOM ready, creating app instance immediately');
    window.app = new AdvancedBusTrackingApp();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (window.app) {
        window.app.clearAllIntervals();
    }
});