#  Frontend – Secure Translate Platform (React)

Ce document décrit la structure, les fonctionnalités et le fonctionnement du **frontend React** de l’application Secure Translate Platform.  
Il couvre également la **dockerisation complète** de l’application (backend + frontend + base de données).

---

## Stack Technique
- **React.js** (Vite)
- **CSS** (Design responsive & moderne)
- **Fetch API** (Communication asynchrone)

---

### Pré-requis
*   [Node.js](https://nodejs.org/)
*   [npm](https://www.npmjs.com/get-npm)



### Installation

1.  Clonez le dépôt
    ```sh
    git clone https://github.com/khadija199904/Secure_Translate_Platform_Frontend
    ```
2.  Installez les dépendances NPM
    ```sh
    npm install
    ```
3.  Démarrez l'application en mode développement
    ```sh
    npm run dev
    ```
    L'application devrait s'ouvrir dans votre navigateur à l'adresse `http://localhost:5173/`.



###  Structure du Répertoire

```bash

├── Secure_Translate_Platform_Frontend/
│
├── translate_app/
│   ├── public/                         # Fichiers statiques accessibles
│   │   └── TR5.jpg                     # Image utilisée dans le projet
│
│   ├── src/                            # Code source Next.js
│   │   ├── assets/                     # Images / icônes internes
│   │   │   └── (images...)
│   │   │
│   │   ├── components/                 # Composants réutilisables
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   │
│   │   ├── pages/                      # Pages principales
│   │   │   ├── RegisterLogin/
│   │   │   ├── ├── Auth.css
│   │   │   │   └── Auth.jsx            # Authentification (login + register)
│   │   │   └── Translate/
│   │   │       ├── Translate.jsx       # Page de traduction
│   │   │       └── Translate.css
│   │
├── Dockerfile   
│
├── docker-compose.yml              # Orchestration Docker
├── Readme.md  
└── .dockerignore                   # Fichiers ignorés par Docker

 ```

 ### Aperçu de l'Application

Cette section présente les différentes interfaces clés de la plateforme de traduction, illustrant le parcours utilisateur complet : connexion, inscription, traduction et affichage des résultats.

---

#### 1. Page de Connexion

L'utilisateur débute sur la page de connexion, où il s’identifie pour obtenir un jeton JWT.  
L’interface est simple et ergonomique, facilitant une authentification rapide et sécurisée.

![Page de Connexion](/images/login_pages.png)

---

#### 2. Page d’Inscription

Pour les nouveaux utilisateurs, la plateforme propose une page d'inscription dédiée.  
Le formulaire est clair, permettant la création d’un compte en quelques secondes avant d’accéder aux fonctionnalités de traduction.

![Page d’Inscription](/images/register_page.png)

---

#### 3. Page de Traduction

Après connexion, l'utilisateur accède à la page principale de l’application.  
Il peut :

- saisir le texte à traduire,  
- choisir la direction (FR → EN ou EN → FR),  
- lancer la traduction via le backend sécurisé.  
- Recoi une traduction de text 

L’interface est épurée, centrée sur la facilité d’utilisation.

![Page de Traduction](/images/Translate_page.png)

---
##  Lancement avec Docker

### 1. Lancer le Frontend

```bash
docker build -t translate-frontend .
docker run -p 3000:3000 translate-frontend
```

### Lancer toute la plateforme (Frontend + Backend + PostgreSQL)
```bash
docker-compose up --build
```


## Auteur

**Nom :** KHADIJA ELABBIOUI  
**Email :** khadija.elabbioui1999@gmail.com  
**LinkedIn :** [linkedin.com/in/khadija-elabbioui](https://www.linkedin.com/in/khadija-elabbioui-308499216/)  
**GitHub :** [github.com/ton-github](https://github.com/khadija199904)