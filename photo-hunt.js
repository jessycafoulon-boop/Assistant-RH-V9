/* =========================================================
   CHASSE AU TRÉSOR — ACCUEIL D'UN NOUVEL AGENT
   ---------------------------------------------------------
   Version en photos réelles de la mairie, avec des zones
   cliquables (hotspots) positionnées en pourcentage sur
   chaque image (donc responsive, y compris sur mobile).
   Chaque clé affiche une vraie ressource déjà présente dans
   app.js (CONTACTS / DOCUMENTS) : aucune donnée dupliquée ici.
========================================================= */

const TREASURE_SCENES = [
  {
    id: "gestionnaire-scene",
    photo: "images/gestionnaire.jpg",
    caption: "Accueil — hall d'entrée",
    hotspots: [
      { keyId: "gestionnaire", left: 23, top: 32, width: 27, height: 20 }
    ]
  },
  {
    id: "smd-scene",
    photo: "images/smd.jpg",
    caption: "Bureau — poste de travail",
    hotspots: [
      { keyId: "smd", left: 34, top: 49, width: 46, height: 30 }
    ]
  },
  {
    id: "paie-scene",
    photo: "images/paie-pluxee.jpg",
    caption: "Bureau de la Paie",
    hotspots: [
      { keyId: "salaire", left: 14, top: 0, width: 45, height: 21 },
      { keyId: "pluxee", left: 6, top: 49, width: 16, height: 15 }
    ]
  },
  {
    id: "formation-scene",
    photo: "images/formation.jpg",
    caption: "Couloir — Pôle emploi compétences",
    hotspots: [
      { keyId: "formation", left: 38, top: 36, width: 35, height: 15 }
    ]
  }
];

const TREASURE_KEYS = [
  {
    id: "gestionnaire",
    icon: "🔑",
    label: "Gestionnaire RH",
    title: "Clé n°1 — Votre gestionnaire RH",
    intro: "Chaque agent a un gestionnaire carrière dédié au sein du service RH. C'est votre interlocuteur privilégié pour toute question de carrière.",
    documents: ["Gestcarr"],
    contacts: ["gestionnaireCarriere"]
  },
  {
    id: "smd",
    icon: "🔑",
    label: "Compte SMD",
    title: "Clé n°2 — Votre compte SMD",
    intro: "Le compte SMD vous permet d'accéder à vos outils numériques. Voici la procédure de connexion.",
    documents: ["ConnexionSMD"],
    contacts: []
  },
  {
    id: "salaire",
    icon: "🔑",
    label: "Dates de salaire",
    title: "Clé n°3 — Dates de versement du salaire",
    intro: "Le calendrier de versement des salaires indique, mois par mois, la date à laquelle votre traitement est versé.",
    documents: ["versementsalaire"],
    contacts: []
  },
  {
    id: "pluxee",
    icon: "🔑",
    label: "Carte Pluxee",
    title: "Clé n°4 — Carte déjeuner Pluxee",
    intro: "Pour souscrire à la carte déjeuner Pluxee, un bulletin d'adhésion est à compléter et à transmettre au secteur Paie.",
    documents: ["CartePluxee"],
    contacts: ["rhPaie"]
  },
  {
    id: "formation",
    icon: "🔑",
    label: "Formation",
    title: "Clé n°5 — Demander une formation",
    intro: "Le catalogue CNFPT, le formulaire d'inscription et le règlement de formation vous permettent d'identifier et de demander une formation.",
    documents: ["Formulaireinscriptionformation", "CatalogueCNFPT", "Reglementformation"],
    contacts: ["formation"]
  }
];

let treasureFoundKeys = new Set();

/* =========================================================
   LANCEMENT DU JEU
========================================================= */

function startTreasureHunt(){
  const container = document.getElementById("gameContainer");
  if(!container) return;

  treasureFoundKeys = new Set();
  container.classList.remove("hidden");

  container.innerHTML = `
    <div class="treasure-wrap">
      <div class="treasure-header">
        <div>
          <h3>🗝️ Chasse au trésor — Bienvenue dans la mairie !</h3>
          <p>Explorez les photos et cliquez sur les objets en surbrillance pour trouver les 5 clés indispensables à votre arrivée.</p>
        </div>
        <button class="treasure-close" type="button" onclick="closeTreasureHunt()">✕</button>
      </div>

      <div class="treasure-keyring" id="treasureKeyring"></div>

      <div class="treasure-scenes" id="treasureScenes"></div>
    </div>
  `;

  renderKeyring();
  renderScenes();
}

function closeTreasureHunt(){
  const container = document.getElementById("gameContainer");
  if(container){
    container.classList.add("hidden");
    container.innerHTML = "";
  }
}

/* =========================================================
   HUD — TROUSSEAU DE CLÉS
========================================================= */

function renderKeyring(){
  const keyring = document.getElementById("treasureKeyring");
  if(!keyring) return;

  keyring.innerHTML = TREASURE_KEYS.map(key => `
    <div class="treasure-key ${treasureFoundKeys.has(key.id) ? "found" : ""}" id="treasureKey-${key.id}">
      <span class="treasure-key-icon">${treasureFoundKeys.has(key.id) ? "🔓" : "🔒"}</span>
      <span class="treasure-key-label">${key.label}</span>
    </div>
  `).join("");
}

/* =========================================================
   SCÈNES PHOTO + HOTSPOTS
========================================================= */

function renderScenes(){
  const wrap = document.getElementById("treasureScenes");
  if(!wrap) return;

  wrap.innerHTML = TREASURE_SCENES.map(scene => `
    <div class="treasure-scene">
      <div class="treasure-scene-caption">${escapeHtml(scene.caption)}</div>
      <div class="treasure-photo-wrap">
        <img src="${scene.photo}" alt="${escapeHtml(scene.caption)}" class="treasure-photo" loading="lazy">
        ${scene.hotspots.map(h => `
          <button
            class="treasure-hotspot ${treasureFoundKeys.has(h.keyId) ? "found" : ""}"
            id="treasureHotspot-${h.keyId}"
            type="button"
            aria-label="Zone cliquable"
            style="left:${h.left}%; top:${h.top}%; width:${h.width}%; height:${h.height}%;"
            onclick="openTreasureKey('${h.keyId}')">
          </button>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/* =========================================================
   OUVERTURE D'UNE CLÉ
========================================================= */

function openTreasureKey(keyId){
  const key = TREASURE_KEYS.find(item => item.id === keyId);
  if(!key) return;

  treasureFoundKeys.add(keyId);
  renderKeyring();

  const hotspot = document.getElementById(`treasureHotspot-${keyId}`);
  if(hotspot) hotspot.classList.add("found");

  const documentsHtml = (key.documents || []).map(documentButton).join("");
  const contactsHtml = (key.contacts || []).map(contactHtml).join("");

  const existing = document.getElementById("treasureModal");
  if(existing) existing.remove();

  const modal = document.createElement("div");
  modal.id = "treasureModal";
  modal.innerHTML = `
    <div class="document-overlay" onclick="closeTreasureModal(event)">
      <div class="document-modal" role="dialog" aria-modal="true" aria-labelledby="treasureModalTitle" onclick="event.stopPropagation()">
        <button class="document-close" type="button" aria-label="Fermer" onclick="closeTreasureModal()">✕</button>
        <div class="document-icon">${key.icon}</div>
        <h3 id="treasureModalTitle">${key.title}</h3>
        <p>${key.intro}</p>
        ${documentsHtml}
        ${contactsHtml}
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  if(treasureFoundKeys.size === TREASURE_KEYS.length){
    setTimeout(() => {
      closeTreasureModal();
      renderTreasureVictory();
    }, 900);
  }
}

function closeTreasureModal(event){
  if(event && event.target !== event.currentTarget) return;
  const modal = document.getElementById("treasureModal");
  if(modal) modal.remove();
}

/* =========================================================
   VICTOIRE
========================================================= */

function renderTreasureVictory(){
  const container = document.getElementById("gameContainer");
  if(!container) return;

  container.innerHTML = `
    <div class="treasure-wrap">
      <div class="treasure-victory">
        <div class="treasure-victory-emoji">🏆</div>
        <h3>Bravo, vous avez trouvé les 5 clés !</h3>
        <p>Vous connaissez maintenant votre gestionnaire RH, votre accès SMD, vos dates de versement de salaire, la carte Pluxee et comment demander une formation.</p>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
          <button class="treasure-fallback-item" type="button" onclick="startTreasureHunt()">🔁 Rejouer</button>
          <button class="treasure-fallback-item" type="button" onclick="closeTreasureHunt()">Fermer</button>
        </div>
      </div>
    </div>
  `;
}
