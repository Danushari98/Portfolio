import React from "react";
import { FaEnvelope, FaGithub, FaWhatsapp, FaInstagram, FaGlobe  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 MyPortfolio | Built with ❤️ by Danushik</p>

      <div className="social-links">
        <a href="https://github.com/Danushari98/frontend/tree/master" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.instagram.com/d_a_n_u_s_h_18" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
        <a href="https://app.netlify.com/teams/danushari98/projects" target="_blank" rel="noopener noreferrer">
          <FaGlobe /> Netlify
        </a>
        <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer">
          <FaGlobe /> Vercel
        </a>
        <a href="mailto:danushari98@gmail.com">
          <FaEnvelope /> Email
        </a>
      </div>

      <div className="contact-info">
        <p>Address:145,Perundurai main road,behind parimalam tyres, Palayaplayam,Erode </p>
        <p>Email: danushari98@gmail.com</p>
        <p>Phone: +91 83448 33303</p>
      </div>
    </footer>
  );
}
