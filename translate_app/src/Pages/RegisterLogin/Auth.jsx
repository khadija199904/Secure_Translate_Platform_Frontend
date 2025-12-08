import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
const Auth = () => {
  const navigate = useNavigate();

 
  const [action, setAction] = useState('login'); // 'login' ou 'register'

 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState("");

  
  const switchMode = (mode) => {
    setAction(mode);
    setError(null);
    setSuccess(null);
    setMessage(""); 

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    
    if (action === 'register') {
      if (password !== confirmPassword) {
        setError("Les mots de passe ne correspondent pas.");
        setLoading(false);
        return;
      }
    }

    
    let payload = {};
    let endpoint = "";

    if (action === 'login') {
      endpoint = "/login";
      payload = { username, password };
    } else {
      endpoint = "/register";
      payload = { username, email, password };
    }

    // --- PRÉPARATION DES DONNÉES ---
    const API_URL = `http://127.0.0.1:8000${endpoint}`;
    
    try {
      console.log(`Tentative de ${action} vers : ${API_URL}`)

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Réponse du backend :", data);

      if (!response.ok) {
        setError(data.detail || data.message || "Une erreur est survenue");
        return;
      }

      // --- SUCCÈS ---
      if (action === 'login') {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          console.log("Token reçu :", data.access_token);
          navigate('/Translate');
        }
      } else {
       
        setSuccess("Compte créé avec succès ! Vous pouvez maintenant vous connecter.");
       
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h1 className="title-login">
        {action === 'login' ? 'Bienvenue' : 'Créer un compte'}
      </h1>
      <p className="title-register">
        {action === 'login' ? 'Connectez-vous à votre espace' : 'Créez votre compte pour commencer'}
      </p>
      
      <form onSubmit={handleSubmit}>
        
        
        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        
        {action === 'register' && (
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="exemple@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}

        
        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        
        {action === 'register' && (
          <div className="form-group">
            <label>Confirmer le mot de passe</label>
            <input
              type="password"
              className="form-control"
              placeholder="******"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

       
        {error && <div className="alert-error"> {error}</div>}
        {message && <div className="alert-error">⚠️ {message}</div>} 
        {success && <div className="alert-success">✅ {success}</div>}

       
        <button 
          type="submit" 
          className="btn-primary" 
          disabled={loading}
          style={{ marginTop: '15px' }}
        >
          {loading ? 'Chargement...' : (action === 'login' ? 'Se connecter' : "S'inscrire")}
        </button>

      </form>

      <div className="toggle-container">
        {action === 'login' ? (
          <p className="toggle-text">
            Pas encore de compte ? 
            <span 
              className="toggle-link" 
              onClick={() => switchMode('register')}
            >
               S'inscrire
            </span>
          </p>
        ) : (
          <p className="toggle-text">
            Déjà un compte ? 
            <span 
              className="toggle-link" 
              onClick={() => switchMode('login')}
            >
               Se connecter
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;