import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-card">
      {/* Badge de la Promo */}
      <div className="promo-badge">
         Réalisé au sein de la <strong>Promo TalAIt</strong>
      </div>

      <div className="about-header">
        <h2 className="about-title">Plateforme de Traduction Sécurisée</h2>
        <p className="subtitle">Projet Fullstack & Intelligence Artificielle</p>
      </div>
      
      <section className="about-section">
        <h3>Le Contexte du Projet</h3>
        <p>
          Ce projet a été conçu pour répondre à un défi technique réel posé par une start-up en pleine expansion internationale.
          L'objectif était de développer une <strong>alternative interne et sécurisée</strong> aux traducteurs publics pour protéger les données sensibles de l'entreprise.
        </p>
      </section>

      <section className="about-section">
        <h3>Architecture & Compétences</h3>
        <p>
          Cette application valide mes compétences acquises durant le programme <strong>TalAIt</strong> :
        </p>
        <ul className="skills-list">
          <li>
            <strong>Frontend :</strong> Création d'une interface React interactive et responsive.
          </li>
          <li>
            <strong>Backend API :</strong> Développement d'une API Python (FastAPI) performante.
          </li>
          <li>
            <strong>IA & NLP :</strong> Intégration des modèles <em>Hugging Face</em> (Helsinki-NLP) pour la traduction neuronale.
          </li>
          <li>
            <strong>Sécurité :</strong> Protection des routes via authentification JWT.
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h3>Stack Technique</h3>
        <div className="tech-badges">
          <span className="badge react">React.js</span>
          <span className="badge python">FastAPI</span>
          <span className="badge ai">Hugging Face API</span>
          <span className="badge docker">Docker</span>
        </div>
      </section>

      {/* --- Footer Signature --- */}
      <div className="about-footer">
        <p className="signature">
          Made with <span className="heart">❤️</span> by <strong>Khadija Elabbioui</strong>
        </p>
        
        <div className="about-links">
          {/* Remplace par tes vrais liens */}
          <a href="https://www.linkedin.com/in/khadija-elabbioui-308499216/" target="_blank" rel="noopener noreferrer" className="link-btn linkedin">
             LinkedIn
          </a>
          <a href="https://github.com/khadija199904/Secure_Translate_Platform_Backend" target="_blank" rel="noopener noreferrer" className="link-btn github">
             Code Source de Backend 
          </a>
          <a href="https://github.com/khadija199904/Secure_Translate_Platform_Frontend" target="_blank" rel="noopener noreferrer" className="link-btn github">
             Code Source de Frontend 
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;