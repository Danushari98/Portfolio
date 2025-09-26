import React from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa"; 
import danushImg from "./hari.jpg"; 

export default function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* About Text Section */}
        <div className="about-text">
          <h2 className="section-heading">About</h2>
          <hr className="heading-line" />

          <p>
            Hello! I'm <strong>Danushik</strong>, a passionate VFX artist and Python developer.  
            I love combining creativity and technology to build visually stunning effects and interactive applications.  
            From designing cinematic VFX sequences to developing clean Python and web applications, 
            I enjoy turning ideas into reality.
          </p>

          {/* Education & Certifications */}
          <h3 className="section-heading">Education & Certifications</h3>
          <hr className="heading-line" />

          <ul className="education-list">
            <li>
              <FaGraduationCap className="edu-icon" />
              <div>
                <strong>CTECHC-VFX - IMAGE CREATIVE EDUCATION</strong><br />
                <span>10/2018 - 09/2020, Erode</span>
              </div>
            </li>

            <li>
              <FaCertificate className="edu-icon" />
              <div>
                <strong>Python FullStack Development - IDM Techpark</strong><br />
                <span>07/2024 - 12/2024, Erode</span>
              </div>
            </li>

            <li>
              <FaGraduationCap className="edu-icon" />
              <div>
                <strong>B.Sc (Computer Technology) - Kongu Arts and Science College</strong><br />
                <span>06/2015 - 05/2018, Erode</span>
              </div>
            </li>
          </ul>

          {/* ✅ CV Buttons */}
          <div className="cv-buttons">
            {/* View CV in browser */}
            <a
              href="/54774602-8e3a-4f9a-8b7f-675617251b2f.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn view-btn"
            >
              View CV
            </a>

            {/* Download CV */}
            <a
              href="/Danush.pdf"
              download="Danush.pdf"
              className="btn download-btn"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* About Image Section */}
        <div className="about-image">
          <img src={danushImg} alt="Danushik" />
        </div>
      </div>
    </section>
  );
}
