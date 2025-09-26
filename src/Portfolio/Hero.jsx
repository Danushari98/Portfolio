import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span>Danushik</span></h1>
        <p>A passionate Python Developer</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
