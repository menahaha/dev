document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navigation Shell Logic ---
    const navItems = document.querySelectorAll('.nav-item[data-target]');
    const contentFrame = document.getElementById('content-frame');
    const pageTitle = document.getElementById('current-page-title');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const logoutBtn = document.getElementById('logout-btn');

    const pageConfig = {
        'dashboard': { title: 'Overview', file: 'dashboard.html' },
        'plans': { title: 'Plan Selection', file: 'plans.html' },
        'live-monitoring': { title: 'Live Monitoring', file: 'live-monitoring.html' },
        'wallet': { title: 'Wallet & Payouts', file: 'wallet.html' },
        'risk-insights': { title: 'Risk Insights', file: 'risk-insights.html' },
        'profile': { title: 'Profile Settings', file: 'profile.html' }
    };

    // Session Management Check
    function checkLoginState() {
        if (localStorage.getItem('riskshield_logged_in') === 'true') {
            document.body.classList.remove('logged-out');
            loadPage('dashboard');
        } else {
            document.body.classList.add('logged-out');
            contentFrame.src = 'login.html';
        }
    }

    // Load page into iframe
    function loadPage(pageId) {
        if (!pageConfig[pageId]) return;
        contentFrame.src = pageConfig[pageId].file;
        pageTitle.innerText = pageConfig[pageId].title;
    }

    // Listen for Messages from IFrames (like Login Success or Router Links)
    window.addEventListener('message', (event) => {
        if (event.data === 'login_success') {
            localStorage.setItem('riskshield_logged_in', 'true');
            checkLoginState();
        } else if (event.data && event.data.type === 'navigate') {
            const planNav = document.querySelector(`.nav-item[data-target="${event.data.target}"]`);
            if (planNav) planNav.click();
        } else if (event.data === 'logout_trigger') {
            if (logoutBtn) logoutBtn.click();
        }
    });

    // Sidebar Cliker
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            loadPage(item.getAttribute('data-target'));

            if(window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });

    if(mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    if(logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('riskshield_logged_in');
            checkLoginState();
        });
    }

    // Init
    checkLoginState();
});
