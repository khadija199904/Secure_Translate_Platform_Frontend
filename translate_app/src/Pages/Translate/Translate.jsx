
import React, { useState } from 'react';
import { FaInfoCircle, FaPowerOff } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import './Translate.css'; 
import About from '../../Components/About.jsx';

const Translate = () => {
  const navigate = useNavigate();
  const [direction, setDirection] = useState('fr-en');
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 
  const [showAbout, setShowAbout] = useState(false);

  // --- Fonction de Traduction ---
  const handleTranslate = async () => {
    setError(null);
    setResult('');
    
    if (!text.trim()) {
      setError("Veuillez entrer du texte.");
      return;
    }

    setLoading(true);
    const token = localStorage.getItem('token'); 

    if (!token) {
      setError("Non connecté.");
      setLoading(false);
      return;
    }

    try {
      const URL = `http://127.0.0.1:8000/translate?translation_sens=${direction}`
      
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token 
        },
        body: JSON.stringify({ text :text })
      });

       if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData.detail) || 'Erreur requête');
      }
      const data = await response.json();
      setResult(data.translation_text || "Traduction ok");

    } catch (err) {
      console.error("Détails de l'erreur :", err); 
      setError("Erreur : " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fonction de Déconnexion 
  const handleLogout = () => {
    
    localStorage.removeItem('token');
    
    navigate('/'); 
  };

  return (
    <div className="translate-page">
      <div className="auth-header">
         <span className="tradname">Welcome to Lingua Magiqua KE</span>
      </div>
      {/* 1. Carte de Traduction (Existante) */}
      <div className="card_tr">
        <h1 className="title">Traducteur</h1>

        <div className="form-group">
          <label>Langue :</label>
          <select 
            className="form-control"
            value={direction} 
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value="fr-en"> Français ➝  Anglais</option>
            <option value="en-fr"> Anglais ➝  Français</option>
          </select>
        </div>

        <div className="form-group">
          <label>Texte</label>
          <textarea
            className="form-control"
            placeholder={direction === 'fr-en' ? "Saisissez votre texte ici..." : "Type here..."}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button 
          className="btn-primary"
          onClick={handleTranslate}
          disabled={loading}
        >
          {loading ? 'Traduction en cours...' : 'Traduire le texte'}
        </button>

        {error && <div className="alert-error">⚠️ {error}</div>}

        {result && !loading && (
          <div className="result-box">
            <span className="result-label">Résultat :</span>
            <p className="result-text">{result}</p>
          </div>
        )}
      </div>

      {/* 2. Contrôles en BAS À GAUCHE (Ajoutés) */}
      <div className="bottom-controls">
        <button className="btn-control about-trigger" onClick={() => setShowAbout(true)}>
           <FaInfoCircle style={{ marginRight: '8px' }} />  À propos
        </button>
        <button className="btn-control logout-trigger" onClick={handleLogout}>
          <FaPowerOff style={{ marginRight: '8px' }} />  Déconnexion
        </button>
      </div>

      {/* 3. Modale About (Ajoutée) */}
      {showAbout && (
        <div className="modal-overlay" onClick={() => setShowAbout(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close" onClick={() => setShowAbout(false)}>✖</button>
            <About />
          </div>
        </div>
      )}

    </div>
  );
};

export default Translate;