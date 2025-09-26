import React from "react";
// import "./TechnicalSkills.css";

export default function TechnicalSkills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">TechnicalSkills</h2>
      <div className="skills-container">
        
        {/* Left Column - Technology */}
        <div className="skills-column">
          <h3>Technology</h3>
          <div className="skill">
            <span>Python 90%</span>
            <div className="progress"><div style={{width:"90%"}}></div></div>
          </div>
          <div className="skill">
            <span>JavaScript 80%</span>
            <div className="progress"><div style={{width:"80%"}}></div></div>
          </div>
          <div className="skill">
            <span>Django 85%</span>
            <div className="progress"><div style={{width:"85%"}}></div></div>
          </div>
          <div className="skill">
            <span>HTML 85%</span>
            <div className="progress"><div style={{width:"85%"}}></div></div>
          </div>
          <div className="skill">
            <span>CSS 80%</span>
            <div className="progress"><div style={{width:"80%"}}></div></div>
          </div>
          <div className="skill">
            <span>React 70%</span>
            <div className="progress"><div style={{width:"70%"}}></div></div>
          </div>
          <div className="skill">
            <span>REST API Integration 75%</span>
            <div className="progress"><div style={{width:"75%"}}></div></div>
          </div>
          <div className="skill">
            <span>Netlify 70%</span>
            <div className="progress"><div style={{width:"70%"}}></div></div>
          </div>
          <div className="skill">
            <span>Vercel 70%</span>
            <div className="progress"><div style={{width:"70%"}}></div></div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="separator"></div>

        {/* Right Column - Creativity */}
        <div className="skills-column">
          <h3>Creativity</h3>
          <div className="skill">
            <span>Adobe Photoshop 85%</span>
            <div className="progress"><div style={{width:"85%"}}></div></div>
          </div>
          <div className="skill">
            <span>Adobe Illustrator 80%</span>
            <div className="progress"><div style={{width:"80%"}}></div></div>
          </div>
          <div className="skill">
            <span>Indesign 70%</span>
            <div className="progress"><div style={{ width: "70%" }}></div></div>
          </div>
          <div className="skill">
            <span>Adobe After Effects 75%</span>
            <div className="progress"><div style={{ width: "75%" }}></div></div>
          </div>
          <div className="skill">
            <span>Adobe Premiere Pro 80%</span>
            <div className="progress"><div style={{ width: "80%" }}></div></div>
          </div>
          <div className="skill">
            <span>Autodesk Maya 70%</span>
            <div className="progress"><div style={{ width: "70%" }}></div></div>
          </div>
          <div className="skill">
            <span>Silhouette 95%</span>
            <div className="progress"><div style={{ width: "95%" }}></div></div>
          </div>
          <div className="skill">
            <span>Nuke 60%</span>
            <div className="progress"><div style={{ width: "60%" }}></div></div>
          </div>
          <div className="skill">
            <span>3DEqualizer 55%</span>
            <div className="progress"><div style={{ width: "55%" }}></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
