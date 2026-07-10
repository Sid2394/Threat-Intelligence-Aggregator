# 🛡️ Threat Intelligence Aggregator

![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)
![Flask](https://img.shields.io/badge/Flask-Backend-black?logo=flask)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?logo=vite)
![SQLite](https://img.shields.io/badge/Database-SQLite-003B57?logo=sqlite)
![License](https://img.shields.io/badge/License-MIT-green)

A full-stack cybersecurity web application that aggregates threat intelligence from multiple trusted security sources into a single, user-friendly dashboard. The application enables security analysts, students, and cybersecurity enthusiasts to investigate suspicious IP addresses, explore the latest Common Vulnerabilities and Exposures (CVEs), and visualize cybersecurity trends through an intuitive interface.

---

## 🚀 Features

### 📊 Dashboard

* Real-time cybersecurity overview
* Interactive charts and visualizations
* Threat statistics at a glance
* Clean and responsive interface

### 🌐 IP Intelligence

* IP reputation lookup
* Abuse confidence score
* Country and ISP information
* Usage type and reputation details

### 🛡️ Vulnerability Intelligence

* Latest CVE search
* CVSS severity score
* Vulnerability descriptions
* Published and last updated dates

### ⚡ User Experience

* Fast REST API
* Responsive design
* User-friendly error handling
* Smooth navigation
* Modern UI

---

## 💡 Why This Project?

Threat intelligence is often distributed across multiple platforms, requiring analysts to switch between different services to gather relevant information. This project simplifies the investigation process by combining trusted cybersecurity data sources into a single dashboard, making vulnerability research and IP reputation analysis faster, easier, and more efficient.

---

## ⭐ Key Highlights

* Full Stack Cybersecurity Project
* REST API Architecture
* Flask Backend
* React Frontend
* SQLite Database
* Third-party API Integration
* Interactive Charts
* Responsive Design
* Portfolio Ready

---

## 🏗️ Tech Stack

### Frontend

* React
* Vite
* Axios
* Chart.js
* React Icons
* CSS3

### Backend

* Python
* Flask
* Flask-CORS
* SQLAlchemy

### Database

* SQLite

### APIs Used

* National Vulnerability Database (NVD)
* AbuseIPDB

---

## 🏛️ Architecture

## 🏛️ System Architecture

```mermaid
flowchart LR

    User[User Browser]

    subgraph Frontend
        React[React + Vite]
    end

    subgraph Backend
        Flask[Flask REST API]
        Services[Service Layer]
        Database[(SQLite Database)]
    end

    subgraph External_APIs
        AbuseIPDB[AbuseIPDB API]
        NVD[NVD API]
    end

    User --> React
    React --> Flask
    Flask --> Services
    Services --> Database
    Services --> AbuseIPDB
    Services --> NVD
```

## 🔄 Application Workflow

```mermaid
flowchart TD

A[User Opens Application]

A --> B[React Dashboard]

B --> C{Select Module}

C --> D[IP Lookup]

C --> E[CVE Search]

D --> F[Flask API]

E --> F

F --> G[Service Layer]

G --> H[External APIs]

H --> I[Process Response]

I --> J[Store Data in SQLite]

J --> K[Return JSON]

K --> L[Display Results]
```

## 📊 Data Flow

```mermaid
flowchart LR

User --> Frontend

Frontend --> Backend

Backend --> AbuseIPDB

Backend --> NVD

AbuseIPDB --> Backend

NVD --> Backend

Backend --> SQLite

SQLite --> Backend

Backend --> Frontend

Frontend --> User
```

---

## 📁 Project Structure

```text
Threat-Intelligence-Aggregator
│
├── backend
│   ├── routes
│   ├── services
│   ├── instance
│   ├── app.py
│   ├── config.py
│   ├── database.py
│   ├── models.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── screenshots
├── docs
├── README.md
└── .gitignore
```
---

## ⚙️ Installation

### Clone the Repository

```bash
git clone <repository-url>
cd Threat-Intelligence-Aggregator
```

### Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt

python app.py
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

The application will be available at:

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:5000`

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` directory.

```env
NVD_API_KEY=YOUR_NVD_API_KEY
ABUSEIPDB_API_KEY=YOUR_ABUSEIPDB_API_KEY
```

---

## 🌐 API Endpoints

| Method | Endpoint         | Description                     |
| ------ | ---------------- | ------------------------------- |
| GET    | `/api/dashboard` | Retrieve dashboard statistics   |
| GET    | `/api/ip`        | Perform IP reputation lookup    |
| GET    | `/api/cve`       | Retrieve latest CVE information |

---

## 📸 Screenshots

Project screenshots will be added after deployment.

* Dashboard
* IP Reputation Lookup
* CVE Search
* Analytics & Charts
* Responsive UI

---

## 🌍 Live Demo

Deployment links will be added after hosting.

* Frontend: Coming Soon
* Backend API: Coming Soon

---

## 🔮 Future Enhancements

* IOC (Indicators of Compromise) Search
* Threat Feed Aggregation
* PDF Report Generation
* CSV Export
* Email Notifications
* User Authentication
* Threat History Tracking
* Advanced Search Filters
* Dark Mode
* Docker Deployment
* Threat Intelligence Feed Integration
* Performance Optimization

---

## 👨‍💻 Author

**Siddhant Uniyal**

Bachelor of Engineering (Computer Science)

Chandigarh University

---

## 📄 License

This project is created for educational, learning, and portfolio purposes.

Feel free to fork, modify, and extend the project for personal or educational use.


## 📌 Project Highlights

- ✅ Full-Stack Cybersecurity Application
- ✅ RESTful API Architecture
- ✅ Modular Flask Backend
- ✅ Responsive React Frontend
- ✅ SQLite Database Integration
- ✅ Third-Party Threat Intelligence APIs
- ✅ Interactive Charts & Dashboard
- ✅ Professional GitHub Documentation
- ✅ Portfolio-Ready Project

## 🧠 Skills Demonstrated

- Python
- Flask
- REST API Development
- React.js
- Vite
- SQLAlchemy
- SQLite
- API Integration
- JSON Processing
- Cybersecurity Fundamentals
- Threat Intelligence
- Data Visualization
- Responsive Web Design
- Git & GitHub

## 📈 Project Statistics

| Category              | Details            |
| --------------------- | ------------------ |
| Frontend              | React + Vite       |
| Backend               | Flask              |
| Database              | SQLite             |
| APIs Used             | 2                  |
| Programming Languages | Python, JavaScript |
| REST Endpoints        | 3+                 |
| Charts                | Yes                |
| Responsive Design     | Yes                |
| GitHub Ready          | ✅                  |

## 🎯 Learning Outcomes

Through this project, I strengthened my understanding of:

* Building full-stack web applications using React and Flask
* Designing and consuming RESTful APIs
* Integrating third-party cybersecurity APIs
* Managing data with SQLite and SQLAlchemy
* Structuring scalable frontend and backend codebases
* Creating responsive user interfaces
* Handling API errors and asynchronous requests
* Presenting technical projects with professional documentation


