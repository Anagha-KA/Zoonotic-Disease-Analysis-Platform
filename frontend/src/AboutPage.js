// src/components/AboutPage.js

import React from "react";
import "./AboutPage.css";
// Import icons from the library
import { FaLightbulb, FaStethoscope, FaLock, FaUserMd } from "react-icons/fa";
import { GiDna1 } from "react-icons/gi"; // A nice icon for the hero

// --- Mock Data for the Team (replace with real data later) ---
const teamMembers = [
  {
    name: "Dr. Anya Sharma",
    role: "Founder & Health Lead",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image path
  },
  {
    name: "Rohan Verma",
    role: "Lead Software Engineer",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Priya Singh",
    role: "AI & Data Scientist",
    imageUrl: "https://via.placeholder.com/150",
  },
];
function AboutPage({ darkMode }) {
  return (
    <div className={`about-page ${darkMode ? "dark" : ""}`}>
      {/* --- Hero Section --- */}
      <div className="hero-section">
        <GiDna1 className="hero-icon" />
        {/*
          The title and intro were rendered in separate divs in your JSX,
          but the screenshot shows them side-by-side due to default browser rendering.
          We'll fix this primarily with CSS, but ensuring they are in the correct
          flow is important.
        */}
        <h1 className="title">Our Mission: Transforming Health Data</h1>
        <p className="intro">
          Welcome to **MyProject**, a platform dedicated to bridging the gap between raw lab data and actionable health insights. We believe that managing your health should be proactive, not reactive.
        </p>
      </div>

      {/* --- The Problem Section --- */}
      <div className="content-section">
        <h2>The Problem We Solve</h2>
        <p>
          For too long, medical results have been locked away in complex PDF files filled with cryptic medical terms. We eliminate the frustration by using advanced data extraction and AI analysis to give you a clear, personalized, and understandable picture of your health status.
        </p>
      </div>

      {/* --- Core Values / Features Section (Using a Grid) --- */}
      <div className="content-section">
        <h2>Why Choose MyProject?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaLightbulb className="feature-icon" />
            <h3>Instant Clarity</h3>
            <p>Upload a report and immediately see what your results mean in plain English.</p>
          </div>
          <div className="feature-card">
            <FaStethoscope className="feature-icon" />
            <h3>Symptom Correlation</h3>
            <p>Connect your current well-being with your historical lab data using our Symptom Checker.</p>
          </div>
          <div className="feature-card">
            <FaLock className="feature-icon" />
            <h3>Secure and Private</h3>
            <p>Your data is encrypted and kept private. We prioritize your trust above all else.</p>
          </div>
          <div className="feature-card">
            <FaUserMd className="feature-icon" />
            <h3>Doctor Collaboration</h3>
            <p>We provide doctors with clear, aggregated patient history for better-informed treatment plans.</p>
          </div>
        </div>
      </div>

      {/* --- Vision & Team Section --- */}
      <div className="content-section team-section">
        <h2>Our Vision & The Team Behind It</h2>
        <p>
          We envision a future where individuals are empowered to be the primary custodians of their health journey. **MyProject** is built by a small team of healthcare experts, software engineers, and data scientists from Bengaluru, dedicated to putting complex information back into your hands, simply and securely.
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <img src={member.imageUrl} alt={member.name} className="team-member-img" />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <a href="/contact" className="contact-link">Get in touch with our team!</a>
      </div>
    </div>
  );
}

export default AboutPage;