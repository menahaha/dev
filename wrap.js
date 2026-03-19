const fs = require('fs');

const head = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="style.css">
    <style>
        body { 
            background: transparent !important; 
            padding: 0.5rem; 
            min-height: 100vh; 
        }
        body::-webkit-scrollbar { width: 8px; }
        body::-webkit-scrollbar-track { background: rgba(0,0,0,0.1); }
        body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
    </style>
</head>
<body class="page-view active">
`;

const tail = `
    <script src="frame-app.js"></script>
</body>
</html>`;

const files = ['dashboard.html', 'plans.html', 'live-monitoring.html', 'wallet.html', 'risk-insights.html', 'profile.html'];

for (const f of files) {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        // Prevent wrapping multiple times
        if (!content.includes('<!DOCTYPE html>')) {
            fs.writeFileSync(f, head + content + tail);
            console.log("Wrapped", f);
        }
    }
}
