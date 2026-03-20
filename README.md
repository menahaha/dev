# 🚀 RiskShield AI  
### AI-Powered Safety & Insurance Platform for Gig Workers

---

## 🧠 Overview

**RiskShield AI** is an intelligent platform designed to improve the safety and financial security of gig workers such as delivery partners and ride operators (**Swiggy, Zomato, Blinkit, Zepto**, etc.).

It analyzes real-world working conditions and generates a **dynamic risk score**, helping workers make informed decisions and choose the right insurance plans.

---

## ⚠️ Prototype Notice

This project is a **functional prototype** built for demonstration and rapid development.

- Uses **localStorage** as a simulated database  
- Implements **rule-based AI logic** *(upgradeable to ML models)*  
- Designed with **scalability in mind**  

👉 Future versions will include **backend integration, real-time APIs, and cloud deployment**

---

## ✨ Features

### 🔐 Authentication
- User registration & login  
- Session handling using **localStorage**  
- Protected routes  

---

### 🧾 Smart Registration
Collects detailed worker data:
- 👤 Name, email, password  
- 🏢 Company & work type  
- 💰 Income & working hours  
- ⚠️ Risk factors *(rain, night shift, vehicle)*  

---

### 🤖 AI Risk Prediction
Generates a **risk score (0–100)** based on:

- 🌧 Weather exposure  
- 🌙 Night shifts  
- 🏍 Vehicle type  
- ⏱ Work hours  
- 💸 Income level  

---

### 📊 Dashboard
- Real-time **risk score visualization**  
- Risk classification:
  - 🟢 **Low Risk**  
  - 🟡 **Moderate Risk**  
  - 🔴 **High Risk**  
- Risk explanations  
- Risk history tracking  

---

### 💼 Plans & Recommendations
- Basic / Standard / Premium AI plans  
- Smart recommendations based on user risk  

---

### 📡 Additional Modules
- 📈 Risk Insights *(charts & analytics)*  
- 💰 Wallet system *(mock payouts)*  
- 🛰 Live Monitoring *(simulation)*  
- 👤 Dynamic user profile  

---

## 🏗 Tech Stack

- **Frontend:** React (CDN + Babel)  
- **Routing:** React Router (HashRouter)  
- **Styling:** Custom CSS (Neon UI Theme)  
- **Charts:** Chart.js  
- **Storage:** localStorage (Simulated Database)  

---

## 🧩 Architecture

```
User Input (Register)
        ↓
AI Risk Calculator
        ↓
localStorage (Database)
        ↓
Dashboard (Visualization + Insights)
```

---

## ⚙️ How It Works

1. User registers and enters work-related details  
2. System calculates **risk score using AI logic**  
3. Data is stored in **localStorage**  
4. User logs in  
5. Dashboard displays:
   - Risk score  
   - Risk breakdown  
   - Risk history  

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/menahaha/riskshield.git
```

---

### 2. Navigate into the project

```bash
cd riskshield
```

---

### 3. Run the app

Simply open:

```bash
index.html
```

👉 No installation required — runs directly in browser  

---

## 🧪 Demo Flow

- Click **Create Account**  
- Fill realistic worker data  
- Submit → auto-login  
- Explore dashboard:
  - Risk score  
  - Insights  
  - Recommendations  
- Logout and test login  

---

## 🧠 Core AI Logic

```js
if (rain) risk += 20;
if (night) risk += 15;
if (vehicle === "Bike") risk += 15;
if (hours > 10) risk += 20;
if (income < 500) risk += 10;
```

👉 Final score is capped at **100**

---

## 📌 Key Highlights

- ⚡ No backend required *(lightweight prototype)*  
- 🧠 AI-driven decision logic  
- 🎨 Clean and modern UI  
- 📦 Modular architecture  
- 🔄 Easily scalable to full-stack  

---

## 🔮 Future Improvements

- 📱 Mobile Application *(React Native / Flutter)*  
- 🔐 Backend integration *(Node.js / Firebase)*  
- 🌦 Real-time weather API  
- 📍 Location-based risk zones  
- 🤖 Machine Learning model  
- ☁️ Cloud database with multi-device sync  
- 📊 Advanced analytics & predictions  

---
