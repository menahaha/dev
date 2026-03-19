// Extrapolated scripts for the individual iframe pages
document.addEventListener('DOMContentLoaded', () => {
    // Shared Toggles Logic
    const toggles = document.querySelectorAll('.custom-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
        });
    });

    // Delegation to Top Frame (Navigation from buttons inside iframe)
    const upgradeBtns = document.querySelectorAll('[data-target="plan-selection"]');
    upgradeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if(window.parent) {
                window.parent.postMessage({ type: 'navigate', target: 'plans' }, '*');
            }
        });
    });

    // Chart Defaults
    if (typeof Chart !== 'undefined') {
        Chart.defaults.color = '#8a8a9d';
        Chart.defaults.font.family = "'Inter', sans-serif";
        Chart.defaults.scale.grid.color = 'rgba(255, 255, 255, 0.05)';

        // Risk Score
        const ctxRisk = document.getElementById('riskScoreChart');
        if (ctxRisk) {
            new Chart(ctxRisk, {
                type: 'doughnut',
                data: {
                    labels: ['Risk', 'Safe'],
                    datasets: [{
                        data: [28, 72],
                        backgroundColor: ['rgba(255, 255, 255, 0.05)', '#ffea00'],
                        borderWidth: 0, borderRadius: 10, cutout: '80%'
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } }, animation: { animateScale: true, animateRotate: true } }
            });
        }

        // Trend
        const ctxTrend = document.getElementById('trendChart');
        if (ctxTrend) {
            let gradient = ctxTrend.getContext('2d').createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(0, 240, 255, 0.5)'); 
            gradient.addColorStop(1, 'rgba(0, 240, 255, 0.0)');
            new Chart(ctxTrend, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Risk Multiplier', data: [1.2, 1.5, 1.1, 2.3, 1.8, 1.0, 1.4],
                        borderColor: '#00f0ff', backgroundColor: gradient, borderWidth: 2, tension: 0.4, fill: true,
                        pointBackgroundColor: '#06060e', pointBorderColor: '#00f0ff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { backgroundColor: 'rgba(20, 20, 35, 0.9)', titleColor: '#fff', bodyColor: '#00f0ff', borderColor: 'rgba(0, 240, 255, 0.3)', borderWidth: 1, padding: 10, displayColors: false } }, scales: { y: { beginAtZero: true, max: 3, grid: { borderDash: [5, 5] } }, x: { grid: { display: false } } } }
            });
        }

        // Prediction
        const ctxPredict = document.getElementById('predictionChart');
        if (ctxPredict) {
            new Chart(ctxPredict, {
                type: 'bar',
                data: {
                    labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
                    datasets: [
                        { label: 'Waterlogging %', data: [10, 5, 20, 60, 85, 40, 15], backgroundColor: 'rgba(181, 53, 255, 0.7)', borderRadius: 4 },
                        { label: 'Traffic %', data: [50, 65, 45, 40, 60, 90, 70], backgroundColor: 'rgba(0, 240, 255, 0.7)', borderRadius: 4 }
                    ]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { boxWidth: 12, usePointStyle: true } }, tooltip: { backgroundColor: 'rgba(20, 20, 35, 0.9)', padding: 10, borderColor: 'rgba(255, 255, 255, 0.1)', borderWidth: 1 } }, scales: { y: { beginAtZero: true, max: 100, grid: { borderDash: [5, 5] } }, x: { grid: { display: false }, stacked: false } } }
            });
        }
    }
});
