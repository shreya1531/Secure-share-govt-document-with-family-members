# 📁 SecureDocs – Document Management System

**SecureDocs** is a secure web-based document management system built with **HTML, CSS, JavaScript, Firebase**, and **Google Drive**. It allows users to register with their Aadhaar, log in, upload and manage document links (hosted on Google Drive), and share them with family members or trusted contacts.

---

## 🔐 Features

- ✅ Secure Registration/Login using Firebase Authentication  
- 🔄 OTP Verification via Firebase Phone Authentication  
- 📄 Document Upload via Google Drive Public Link  
- 🔗 Document Sharing and Deletion  
- 👤 User Profile with Aadhaar, UID, and Email  
- 🔒 All user and document metadata stored in Firebase Firestore

---

## 🧩 Project Structure

| File                 | Description                                      |
|----------------------|--------------------------------------------------|
| `index.html`         | Welcome page with login/registration navigation |
| `register.html`      | User registration with OTP verification         |
| `login.html`         | Secure login for existing users                 |
| `dashboard.html`     | Document dashboard: add, delete, share docs     |
| `profile.html`       | View Aadhaar, UID, and email                    |
| `firebase-config.js` | Firebase project configuration                  |

---

## ⚙️ Tech Stack

### 🔧 Frontend:
- HTML5, CSS3, JavaScript (Vanilla)

### 🔥 Backend:
- Firebase Authentication
- Firebase Firestore
- Google Drive (used for hosting uploaded documents via shareable links)

---

## 💻 Requirements

### 🔌 Hardware:
- Processor: Intel i3 or higher
- RAM: 4 GB minimum
- Internet Connection

### 🛠️ Software:
- OS: Windows 10
- Code Editor: Visual Studio Code
- Browser: Google Chrome
- Extension: Live Server (VS Code)

---

## 🚀 How to Set Up and Run

### 🌐 Live Demo

🔗 [Click here to view the live demo]( https://shreya1531.github.io/Secure-share-govt-document-with-family-members/)  
📱 Use test phone number `+919353994508` with OTP `123456` for login


### 🔧 Firebase Setup

1. Create a new Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Email/Password** and **Phone Authentication**
3. Enable **Cloud Firestore**
4. Replace the Firebase credentials in `firebase-config.js` with your project credentials

### 🔑 OTP Configuration (For Testing)

- Test Number: `+919353994508`
- Static OTP: `123456`

### ▶️ Run the Application

1. Open the project folder in **Visual Studio Code**
2. Right-click `index.html` → Select **"Open with Live Server"**

---

## 🔮 Future Enhancements

- 📑 Add Document Preview Feature  
- ⏰ Expiry Alerts & Reminders  
- 🛡️ Admin Panel and Role-Based Access Control  
- 📊 Download/View Analytics  
- 🌐 Multi-language Support  
- 🌙 Dark Mode Toggle  

---


## 📄 License

This project is for academic and evaluation purposes only.
