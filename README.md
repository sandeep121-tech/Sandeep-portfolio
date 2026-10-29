# 🚀 Full-Stack Portfolio with Secure Admin Dashboard

A modern, responsive full-stack portfolio website built with a Node.js/Express backend, custom JSON file persistence, and an authenticated admin dashboard for managing visitor messages.

## ✨ Features

- **Responsive Frontend:** Built using HTML5, CSS3 (Flexbox & Grid), and vanilla JavaScript for dynamic interactions.
- **Contact Form Backend:** Express.js server that captures user messages and stores them securely.
- **Data Persistence:** Uses a local `messages.json` file to store and retrieve contact submissions without needing a heavy database setup.
- **Secure Admin Dashboard (`admin.html`):** Protected dashboard equipped with authentication to view, manage, and delete visitor messages.
- **CRUD Operations:** Complete Create, Read, and Delete functionality for handling inquiries.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Backend:** Node.js, Express.js
- **Storage:** JSON File-based persistence
- **Version Control:** Git & GitHub

## 📂 Project Structure

```text
full-stack-journey/
│
├── backend/
│   ├── server.js         # Express server & API routes
│   └── messages.json     # JSON database for contact messages
│
├── css/
│   └── style.css         # Styling and responsive layouts
│
├── js/
│   └── script.js         # Frontend interactivity & API fetching
│
├── admin.html            # Password-protected admin dashboard
├── index.html            # Main portfolio landing page
└── README.md             # Project Documentation