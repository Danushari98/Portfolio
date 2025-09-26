import React from "react";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <ul className="experience-list">
        <li>
          <FaBriefcase className="exp-icon" />
          <div>
            <strong>VFX PICK</strong><br />
            <span>Roto Artist</span><br />
            <span>10/2020 - 06/2022, Chennai</span>
          </div>
        </li>
        <li>
          <FaBriefcase className="exp-icon" />
          <div>
            <strong>PIXROCK</strong><br />
            <span>Roto Artist</span><br />
            <span>09/2022 - 11/2024, Salem</span>
          </div>
        </li>
        <li>
          <FaBriefcase className="exp-icon" />
          <div>
            <strong>IDM TECHPARK</strong><br />
            <span>IT Fresher</span><br />
            <span>01/2025 - 10/2025, Erode</span>
          </div>
        </li>
      </ul>
    </section>
  );
}
