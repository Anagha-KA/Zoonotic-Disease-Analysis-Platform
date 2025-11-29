# Zoonotic Disease Analysis Platform 🧬🔬

[![Status](https://img.shields.io/badge/Status-Project%20Complete-success)]()
[![Frontend](https://img.shields.io/badge/Frontend-React%20v18+-blue)]()
[![Backend](https://img.shields.io/badge/Backend-Python%2FFlask-lightgreen)]()

## 📝 Overview

This platform is an **AI-driven web application** developed as a final-year project to combat health misinformation by providing users with clear, actionable insights from complex medical data. It directly addresses the information gap created by cryptic lab reports (like RT-PCR results) and unreliable symptom self-diagnosis.

The system features a dual-module architecture built on a responsive **React frontend** and a dedicated **Python/Flask backend**.

## 🌟 Key Features

* **RT-PCR Report Analyzer:** Uses **Tesseract OCR** and **RegEx** to extract specific clinical indicators (like Ct values) from uploaded PDF and image files, providing a clear viral load **risk assessment** (High/Moderate/Low).
* **Intelligent Symptom Predictor:** Leverages a trained **Random Forest** classification model to predict potential zoonotic diseases based on user input.
* **Quantitative Results:** The model achieved a testing accuracy of **95.42%** on the validation dataset.
* **Intuitive Input:** Features a custom **tag-based symptom entry system** that accepts both the 'Enter' key and comma-separated lists for fast, error-reducing data input.
* **Modern UI/UX:** Fully responsive design with a dynamic **Light/Dark Mode** theme toggle and engaging scroll animations (Timeline, Staggered Cards).

## 🛠️ Technology Stack

| Layer | Technologies | Purpose |
| :--- | :--- | :--- |
| **Frontend** | `React.js`, `React Router`, `CSS Modules` | Dynamic interface, state management, and navigation. |
| **Backend/API** | Python 3, Flask, `Axios` | RESTful API endpoints, business logic, and serving ML models. |
| **AI/ML** | `Scikit-learn` (Random Forest), `Pytesseract` (OCR), `Pandas` | Model training, prediction, image preprocessing, and text extraction. |

## 💻 Installation and Setup (Full Stack)

Follow these steps to get the project running locally.

### 1. Prerequisites

You must have the following installed on your machine:
* [Git](https://git-scm.com/downloads)
* [Python 3.8+](https://www.python.org/downloads/)
* [Node.js / npm](https://www.nodejs.org/)
* **Tesseract OCR Engine** (Must be installed system-wide for the backend to function)

### 2. Backend Setup (Flask/ML)

Navigate to the project root directory in your terminal.

```bash
# 1. Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows, use: .\venv\Scripts\activate

# 2. Install Python dependencies
pip install -r requirements.txt 

# 3. Run the Flask server (The API will start on [http://127.0.0.1:5000](http://127.0.0.1:5000))
python app.py  # (Use your specific server filename if different)
```

### 3. Frontend Setup (React)

Open a new terminal session and navigate into the `frontend` directory.

```bash
# 1. Install Node dependencies (like react, react-dom, etc.)
npm install

# 2. Start the React development server
npm start
# The application should open automatically at http://localhost:3000
```
### 📸 Visuals

*(Insert your best screenshots here, replacing the placeholders with image URLs or local links)*

| Fig 1: Report Analysis Dashboard | Fig 2: Symptom Prediction & Tag Input |
| :---: | :---: |
| [Image URL of Report Result] | [Image URL of Symptom Tag Input & Prediction] |

---

### 🤝 Team

This project was developed by a dedicated team of final year Computer Science and Engineering students.

| Name | Role |
| :--- | :--- |
| **Heerali** | Backend Developer 
| **Anushree** | Backend Developer |
| **Anagha** | Frontend Developer | 
| **Anusha** | UI/UX Designer | 

***
*Disclaimer: This platform is for informational purposes only and is not a substitute for professional medical diagnosis.*
