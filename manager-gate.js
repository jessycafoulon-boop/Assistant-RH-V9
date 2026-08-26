/* =========================================================
   ESPACE MANAGERS — LIRE AVANT DE MODIFIER
   ---------------------------------------------------------
   Cette page (managers.html) est un fichier statique hébergé
   sur un dépôt GitHub PUBLIC. Le HTML et le JS de ce site sont
   entièrement téléchargés par le navigateur, y compris par
   quelqu'un qui n'a pas le code — c'est pour ça que les
   ressources managers (MANAGER_RESOURCES_CIPHERTEXT ci-dessous)
   sont chiffrées : sans le bon code, ce n'est qu'une suite de
   caractères illisible, et ni le titre, ni la description, ni
   le lien de chaque ressource n'apparaissent en clair dans le
   code source tant que le bon code n'a pas été saisi.

   ⚠️ Ce chiffrement protège contre la consultation occasionnelle
   du code source, mais un code à 4 chiffres ne représente que
   10 000 combinaisons : quelqu'un de déterminé pourrait écrire
   un script qui les essaie toutes hors ligne pour déchiffrer le
   contenu. Ce n'est donc toujours pas un vrai coffre-fort.

   Règles à respecter :
   1. Ne mettez jamais ici de contenu réellement confidentiel
      (données personnelles, informations disciplinaires, etc.),
      même chiffré.
   2. Pour du contenu vraiment confidentiel : ne l'intégrez pas
      dans cette page. Utilisez un lien vers un espace DÉJÀ
      protégé par une authentification réelle (dossier Drive ou
      SharePoint restreint à un groupe, intranet avec
      identifiants nominatifs...). C'est ce système externe qui
      doit assurer la sécurité, pas cette page statique.
   3. Le code "4827" utilisé jusqu'ici est déjà visible dans
      l'historique Git de ce dépôt public. Si des managers
      l'utilisaient réellement, changez-le (voir plus bas).

   ---------------------------------------------------------
   COMMENT MODIFIER LES RESSOURCES OU LE CODE

   Comme les ressources sont chiffrées, vous ne pouvez plus les
   éditer directement dans le HTML : il faut régénérer le bloc
   chiffré. Ouvrez la console du navigateur sur managers.html
   (ou n'importe quelle page qui charge ce script) et exécutez :

     await encryptResources("VOTRE_CODE_A_4_CHIFFRES", [
       // Ressource de type "lien" (vers un espace déjà sécurisé) :
       {
         icon: "📋",
         title: "Titre de la ressource",
         description: "Description courte.",
         url: "https://lien-vers-une-ressource-deja-securisee.fr",
         linkLabel: "Ouvrir"
       },
       // Ressource de type "faq" (accordéon affiché directement) :
       {
         type: "faq",
         icon: "💶",
         title: "Titre du guide",
         description: "Sous-titre du guide.",
         items: [
           { question: "1. Une question ?", answer: "<p>La réponse, en HTML.</p>" }
         ]
       }
       // ... autant de ressources que nécessaire
     ])

   La fonction affiche une longue chaîne de caractères : copiez-la
   intégralement dans MANAGER_RESOURCES_CIPHERTEXT ci-dessous, à la
   place de la valeur actuelle.
========================================================= */
const MANAGER_RESOURCES_CIPHERTEXT =
  "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"; // ressources chiffrées avec le code "4827" — à régénérer, voir note ci-dessus

const MANAGER_MAX_ATTEMPTS = 5;
const MANAGER_LOCKOUT_MS = 60000;

let managerFailedAttempts = 0;
let managerLockedUntil = 0;

/* =========================================================
   OUTILS DE CHIFFREMENT (AES-256-GCM, clé dérivée du code)
========================================================= */

async function deriveKeyFromPin(pin){
  const bytes = new TextEncoder().encode(pin);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return crypto.subtle.importKey("raw", digest, "AES-GCM", false, ["encrypt", "decrypt"]);
}

function base64ToBytes(base64){
  return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
}

function bytesToBase64(bytes){
  let binary = "";
  bytes.forEach(b => binary += String.fromCharCode(b));
  return btoa(binary);
}

// À exécuter dans la console pour régénérer MANAGER_RESOURCES_CIPHERTEXT
// (voir instructions dans le commentaire en haut de ce fichier).
async function encryptResources(pin, resourcesArray){
  const key = await deriveKeyFromPin(pin);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const plaintext = new TextEncoder().encode(JSON.stringify(resourcesArray));
  const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);

  const combined = new Uint8Array(iv.length + ciphertext.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(ciphertext), iv.length);

  const result = bytesToBase64(combined);
  console.log(result);
  return result;
}

// Tente de déchiffrer les ressources avec le code saisi.
// Retourne le tableau de ressources si le code est correct,
// ou null si le code est incorrect (l'échec de déchiffrement
// EST la vérification du code : il n'y a pas de code stocké
// séparément à comparer).
async function decryptResources(pin){
  try{
    const key = await deriveKeyFromPin(pin);
    const combined = base64ToBytes(MANAGER_RESOURCES_CIPHERTEXT);
    const iv = combined.slice(0, 12);
    const ciphertext = combined.slice(12);
    const plaintext = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
    return JSON.parse(new TextDecoder().decode(plaintext));
  }catch(error){
    return null; // code incorrect, ou données corrompues
  }
}

/* =========================================================
   AFFICHAGE
========================================================= */

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function renderLinkResource(resource){
  return `
    <div class="manager-resource">
      <div class="manager-resource-info">
        <div class="manager-resource-title">
          ${escapeHtml(resource.icon || "")} ${escapeHtml(resource.title)}
        </div>
        <div class="manager-resource-description">
          ${escapeHtml(resource.description)}
        </div>
      </div>
      <a class="manager-resource-link" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener">
        ${escapeHtml(resource.linkLabel || "Ouvrir")}
      </a>
    </div>
  `;
}

function renderLinkListResource(resource){
  const links = (resource.links || []).map(link => `
    <div class="manager-resource-sublink">
      <span class="manager-resource-sublink-label">${escapeHtml(link.label)}</span>
      <a class="manager-resource-link" href="${escapeHtml(link.url)}" target="_blank" rel="noopener">
        ${escapeHtml(link.linkLabel || "Ouvrir")}
      </a>
    </div>
  `).join("");

  return `
    <div class="manager-resource manager-resource-multi">
      <div class="manager-resource-info">
        <div class="manager-resource-title">
          ${escapeHtml(resource.icon || "")} ${escapeHtml(resource.title)}
        </div>
        <div class="manager-resource-description">
          ${escapeHtml(resource.description)}
        </div>
      </div>
      <div class="manager-resource-sublinks">
        ${links}
      </div>
    </div>
  `;
}

function renderFaqResource(resource){
  const items = (resource.items || []).map(item => `
    <details class="manager-faq-item">
      <summary>${escapeHtml(item.question)}</summary>
      <div class="manager-faq-answer">${item.answer}</div>
    </details>
  `).join("");

  return `
    <details class="manager-faq">
      <summary class="manager-faq-header">
        <div class="manager-resource-title">
          ${escapeHtml(resource.icon || "")} ${escapeHtml(resource.title)}
        </div>
        <div class="manager-resource-description">
          ${escapeHtml(resource.description)}
        </div>
      </summary>
      <div class="manager-faq-items">
        ${items}
      </div>
    </details>
  `;
}

/* =========================================================
   RECHERCHE PAR MOT-CLÉ DANS LES FAQ (insensible aux accents)
========================================================= */
(function injectManagerSearchStyles(){
  const style = document.createElement("style");
  style.textContent = `
    .manager-search-bar{margin:16px 0 24px;display:flex;align-items:center;gap:10px;}
    .manager-search-input{flex:1;padding:10px 14px;border-radius:8px;border:1px solid var(--border,#ccc);font-size:14px;background:var(--panel,#fff);color:inherit;}
    .manager-search-count{font-size:12px;color:var(--muted,#777);white-space:nowrap;}
    .manager-search-highlight{background:#fff3a3;padding:0 2px;border-radius:2px;}
    .manager-annuaire-search-bar{margin:12px 0;}
    .manager-annuaire-input{width:100%;padding:10px 14px;border-radius:8px;border:1px solid var(--border,#ccc);font-size:14px;background:var(--panel,#fff);color:inherit;box-sizing:border-box;}
    .manager-annuaire-results{display:flex;flex-direction:column;gap:10px;}
    .manager-annuaire-hint{font-size:13px;color:var(--muted,#777);padding:6px 2px;}
    .manager-contact-card{border:1px solid var(--border,#ddd);border-radius:10px;padding:12px 14px;background:var(--panel,#fff);}
    .manager-contact-name{font-weight:600;font-size:15px;margin-bottom:2px;}
    .manager-contact-fonction{font-size:13px;color:var(--muted,#777);margin-bottom:6px;}
    .manager-contact-line{font-size:13px;line-height:1.6;}
  `;
  document.head.appendChild(style);
})();

let managerSearchInitialized = false;

// Table des lettres accentuées courantes en français, pour une recherche
// insensible aux accents (ex : "eleve" retrouve "élève").
const MANAGER_ACCENT_MAP = {
  a: "aàâäá", e: "eéèêë", i: "iîïí",
  o: "oôöó", u: "uùûüú", c: "cç", n: "nñ", y: "yÿý"
};

function stripAccents(str){
  return String(str).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Construit un motif regex qui matche un terme (déjà sans accent) contre
// du texte accentué, pour pouvoir surligner "élève" à partir de "eleve".
function accentInsensitivePattern(term){
  return term.split("").map(ch => {
    const lower = ch.toLowerCase();
    if(MANAGER_ACCENT_MAP[lower]) return `[${MANAGER_ACCENT_MAP[lower]}]`;
    return ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }).join("");
}

function highlightText(text, terms){
  let result = escapeHtml(text);
  terms.forEach(term => {
    if(!term) return;
    result = result.replace(new RegExp(`(${accentInsensitivePattern(term)})`, "gi"),
      "<mark class=\"manager-search-highlight\">$1</mark>");
  });
  return result;
}

function initManagerSearch(){
  const searchBar = document.getElementById("managerSearchBar");
  const input = document.getElementById("managerSearchInput");
  if(!searchBar || !input) return;

  searchBar.hidden = false;

  document.querySelectorAll(".manager-faq-item").forEach(item => {
    const summary = item.querySelector("summary");
    const answer = item.querySelector(".manager-faq-answer");
    const questionText = summary ? summary.textContent : "";
    const answerText = answer ? answer.textContent : "";
    item.dataset.searchText = stripAccents((questionText + " " + answerText).toLowerCase());
    item.dataset.originalQuestion = questionText;
  });

  if(managerSearchInitialized) return;
  managerSearchInitialized = true;

  input.addEventListener("input", () => applyManagerSearch(input.value));
}

function applyManagerSearch(rawQuery){
  const countEl = document.getElementById("managerSearchCount");
  const terms = stripAccents(rawQuery.trim().toLowerCase()).split(/\s+/).filter(Boolean);
  const faqGroups = document.querySelectorAll("details.manager-faq");

  if(terms.length === 0){
    document.querySelectorAll(".manager-faq-item").forEach(item => {
      item.hidden = false;
      item.open = false;
      const summary = item.querySelector("summary");
      if(summary) summary.textContent = item.dataset.originalQuestion || summary.textContent;
    });
    faqGroups.forEach(group => { group.hidden = false; group.open = false; });
    document.querySelectorAll(".manager-resource").forEach(res => { res.hidden = false; });
    if(countEl) countEl.textContent = "";
    return;
  }

  let totalMatches = 0;

  faqGroups.forEach(group => {
    const items = group.querySelectorAll(".manager-faq-item");
    let groupHasItemMatch = false;

    items.forEach(item => {
      const matches = terms.every(term => (item.dataset.searchText || "").includes(term));
      const summary = item.querySelector("summary");

      if(matches){
        item.hidden = false;
        item.open = true;
        groupHasItemMatch = true;
        totalMatches++;
        if(summary) summary.innerHTML = highlightText(item.dataset.originalQuestion, terms);
      }else{
        item.hidden = true;
        item.open = false;
        if(summary) summary.textContent = item.dataset.originalQuestion || summary.textContent;
      }
    });

    const groupTitle = stripAccents(group.querySelector(".manager-resource-title")?.textContent.toLowerCase() || "");
    const groupDesc = stripAccents(group.querySelector(".manager-resource-description")?.textContent.toLowerCase() || "");
    const groupTextMatches = terms.every(term => groupTitle.includes(term) || groupDesc.includes(term));

    if(groupHasItemMatch || groupTextMatches){
      group.hidden = false;
      group.open = groupHasItemMatch;
      if(groupTextMatches && !groupHasItemMatch){
        items.forEach(item => { item.hidden = false; });
        totalMatches++;
      }
    }else{
      group.hidden = true;
    }
  });

  document.querySelectorAll(".manager-resource").forEach(res => {
    const title = stripAccents(res.querySelector(".manager-resource-title")?.textContent.toLowerCase() || "");
    const desc = stripAccents(res.querySelector(".manager-resource-description")?.textContent.toLowerCase() || "");
    const matches = terms.every(term => title.includes(term) || desc.includes(term));
    res.hidden = !matches;
    if(matches) totalMatches++;
  });

  if(countEl){
    countEl.textContent = totalMatches > 0
      ? `${totalMatches} résultat${totalMatches > 1 ? "s" : ""}`
      : "Aucun résultat";
  }
}

function renderAnnuaireResource(resource){
  return `
    <div class="manager-resource manager-annuaire">
      <div class="manager-resource-info">
        <div class="manager-resource-title">
          ${escapeHtml(resource.icon || "📇")} ${escapeHtml(resource.title)}
        </div>
        <div class="manager-resource-description">
          ${escapeHtml(resource.description || "")}
        </div>
      </div>
      <div class="manager-annuaire-search-bar">
        <input type="search" class="manager-annuaire-input"
               placeholder="🔎 Rechercher un contact par mot-clé…" autocomplete="off"
               aria-label="Rechercher un contact dans l'annuaire">
      </div>
      <div class="manager-annuaire-results"></div>
    </div>
  `;
}

function renderResources(resourcesArray){
  const container = document.getElementById("managerResources");
  if(!container) return;

  container.innerHTML = resourcesArray.map(resource => {
    if(resource.type === "faq") return renderFaqResource(resource);
    if(resource.type === "linklist") return renderLinkListResource(resource);
    if(resource.type === "annuaire") return renderAnnuaireResource(resource);
    return renderLinkResource(resource);
  }).join("");

  container.hidden = false;
}

/* =========================================================
   ANNUAIRE — RECHERCHE DE CONTACTS PAR MOT-CLÉ
   (jusqu'à 3 fiches contact affichées, classées par pertinence)
========================================================= */
function initAnnuaireSearches(resourcesArray){
  const annuaireResources = resourcesArray.filter(r => r.type === "annuaire");
  const containers = document.querySelectorAll(".manager-annuaire");

  containers.forEach((container, i) => {
    const contacts = (annuaireResources[i] && annuaireResources[i].contacts) || [];
    const input = container.querySelector(".manager-annuaire-input");
    const resultsEl = container.querySelector(".manager-annuaire-results");
    if(!input || !resultsEl) return;

    const indexed = contacts.map(c => ({
      ...c,
      _keywordsNorm: (c.keywords || []).map(k => stripAccents(String(k).toLowerCase())),
      _nameNorm: stripAccents(String(c.name || "").toLowerCase())
    }));

    input.addEventListener("input", () => renderAnnuaireResults(indexed, input.value, resultsEl));
  });
}

function renderAnnuaireResults(indexed, rawQuery, resultsEl){
  const terms = stripAccents(rawQuery.trim().toLowerCase()).split(/\s+/).filter(Boolean);

  if(terms.length === 0){
    resultsEl.innerHTML = `<div class="manager-annuaire-hint">Tapez un mot-clé (ex. « paie », « retraite », « recrutement »…) pour trouver un contact.</div>`;
    return;
  }

  const scored = indexed.map(c => {
    let score = 0;
    terms.forEach(term => {
      if(c._keywordsNorm.some(k => k.includes(term))) score += 2;
      if(c._nameNorm.includes(term)) score += 1;
    });
    return { contact: c, score };
  }).filter(entry => entry.score > 0);

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 3);

  if(top.length === 0){
    resultsEl.innerHTML = `<div class="manager-annuaire-hint">Aucun contact ne correspond à « ${escapeHtml(rawQuery.trim())} ».</div>`;
    return;
  }

  resultsEl.innerHTML = top.map(({ contact }) => `
    <div class="manager-contact-card">
      <div class="manager-contact-name">${escapeHtml(contact.icon || "👤")} ${escapeHtml(contact.name || "")}</div>
      <div class="manager-contact-fonction">${escapeHtml(contact.fonction || "")}</div>
      <div class="manager-contact-line">📞 ${escapeHtml(contact.tel || "—")}</div>
      <div class="manager-contact-line">✉️ <a href="mailto:${escapeHtml(contact.email || "")}">${escapeHtml(contact.email || "—")}</a></div>
    </div>
  `).join("");
}

/* =========================================================
   VERIFICATION DU CODE
========================================================= */

async function unlockManagerResources(){
  const input = document.getElementById("managerPin");
  const error = document.getElementById("managerPinError");
  const gate = document.getElementById("managerGate");
  const button = document.getElementById("managerPinSubmit");

  if(!input || !error || !gate) return;

  const now = Date.now();

  if(now < managerLockedUntil){
    const secondsLeft = Math.ceil((managerLockedUntil - now) / 1000);
    error.textContent = `Trop de tentatives. Réessayez dans ${secondsLeft}s.`;
    error.classList.add("active");
    return;
  }

  const pin = input.value.trim();

  if(!/^\d{4}$/.test(pin)){
    error.textContent = "Saisissez un code composé de 4 chiffres.";
    error.classList.add("active");
    return;
  }

  if(button) button.disabled = true;

  const resources = await decryptResources(pin);

  if(resources){
    managerFailedAttempts = 0;
    error.classList.remove("active");
    gate.hidden = true;
    renderResources(resources);
    initManagerSearch();
    initAnnuaireSearches(resources);
  }else{
    managerFailedAttempts += 1;

    if(managerFailedAttempts >= MANAGER_MAX_ATTEMPTS){
      managerLockedUntil = Date.now() + MANAGER_LOCKOUT_MS;
      managerFailedAttempts = 0;
      error.textContent = `Trop de tentatives. Réessayez dans ${Math.ceil(MANAGER_LOCKOUT_MS / 1000)}s.`;
    }else{
      error.textContent = "Code incorrect.";
    }

    error.classList.add("active");
    input.select();

    if(button) button.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("managerPin");
  if(!input) return;

  input.focus();

  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 4);
    const error = document.getElementById("managerPinError");
    if(error) error.classList.remove("active");
  });

  input.addEventListener("keydown", event => {
    if(event.key === "Enter"){
      event.preventDefault();
      unlockManagerResources();
    }
  });

  document.getElementById("managerPinSubmit")
    ?.addEventListener("click", unlockManagerResources);
});
