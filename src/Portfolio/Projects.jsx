import React, { useState } from "react";
import digitalclockImg from "./html-clock.jpg";
import progressImg from "./neo.gif";
import dragdropImg from "./drag.jpg";
import vfxImg from "./vfx.jpg"; // add your VFX image here

export default function Projects() {
  const projects = [
    { 
      title: "digitalclock",
      category: "technology",
      code: "https://github.com/Danushari98/Javascript", 
      live: "https://digitalclock-idm.netlify.app",
      image: digitalclockImg
    },
    { 
      title: "neomorphic-circular-progress",
      category: "technology",
      code: "https://github.com/Danushari98/neomorphic-circular-progress", 
      live: "https://neomorphic-circular-progress-idm.netlify.app",
      image: progressImg
    },
    { 
      title: "drag-drop-box",
      category: "technology",
      code: "https://github.com/Danushari98/Dragdrop", 
      live: "https://drag-drop-boxidm.netlify.app/",
      image: dragdropImg
    },
    {
      title: "VFX Project",
      category: "creativity",
      image: vfxImg
    }
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button 
          className={filter === "all" ? "active" : ""} 
          onClick={() => setFilter("all")}
        >
          View All
        </button>
        <button 
          className={filter === "technology" ? "active" : ""} 
          onClick={() => setFilter("technology")}
        >
          Technology
        </button>
        <button 
          className={filter === "creativity" ? "active" : ""} 
          onClick={() => setFilter("creativity")}
        >
          Creativity
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((p, i) => (
          <div key={i} className="project-card">
            <img src={p.image} alt={p.title} className="project-image" />
            <h3>{p.title}</h3>

            {/* Show buttons only for Technology projects */}
            {p.category === "technology" && (
              <div className="project-buttons">
                <button onClick={() => window.open(p.code, "_blank")}>Code</button>
                <button onClick={() => window.open(p.live, "_blank")}>Live</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
