# 🌐 TalAIt - Secure Translation Platform

**TalAIt** est une application Fullstack sécurisée permettant la traduction instantanée de données sensibles pour les entreprises, utilisant la puissance des modèles d'IA neuronaux.

---

## 📖 Contexte du Projet

La start-up *TalAIt* prépare son expansion aux États-Unis. Les équipes (Marketing & Service Client) avaient besoin d'un outil pour traduire des fiches produits et des tickets clients sans passer par des outils publics non sécurisés.

**La solution :** Une plateforme interne, accessible uniquement via authentification, connectée à des modèles d'IA performants.

## ✨ Fonctionnalités Clés

- **Authentification Sécurisée :** Système de Login avec génération et validation de Tokens JWT.
- **Intelligence Artificielle :** Intégration de l'API Hugging Face (Modèles Helsinki-NLP).
- **Bi-directionnel :** Traduction Français ➝ Anglais et Anglais ➝ Français.
- **Interface Réactive :** Frontend rapide développé avec React & Vite.
- **Protection des Routes :** Impossible d'accéder au traducteur sans être connecté.

## Stack Technique

### Frontend
- **React.js** (Vite)
- **CSS3** (Design responsive & moderne)
- **Fetch API** (Communication asynchrone)

### Backend
- **Python**
- **FastAPI** (API REST performante)
- **Hugging Face Inference API** (Moteur de traduction)
- **JWT** (Sécurité)

---

## 🚀 Installation et Démarrage

### Pré-requis
- Node.js
- Python 3.9+
- Une clé API Hugging Face (gratuite)

### 1. Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

```

```bash
src/
├── assets/
├── components/
│   ├── About.css
│   └── About.jsx       
├── pages/
│   ├── RegisterLogin/
│   │   └── Auth.jsx
│   └── Translate/      i
│       ├── Translate.css
│       └── Translate.jsx
 ```