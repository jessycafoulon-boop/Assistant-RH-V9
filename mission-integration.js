/* =========================================================
   MISSION D'INTÉGRATION — "UN MESSAGE DE SAM"
   ---------------------------------------------------------
   Remplace la chasse au trésor sur photo par un parcours en
   messages de type SMS : Sam, une nouvelle recrue, envoie une
   question RH à son collègue (le joueur), qui doit choisir la
   bonne réponse parmi 3 propositions. Chaque bonne réponse
   révèle un chiffre du code final.

   Aucune image requise — 100% autonome (HTML/CSS/JS injectés).
   La fonction reste nommée startTreasureHunt() pour rester
   compatible avec le bouton existant dans index.html.
========================================================= */

const MISSION_STEPS = [
  {
    from: "Sam",
    message:
      "Salut ! 👋 Je viens d'arriver et je suis un peu perdu avec mes congés : " +
      "si j'ai un souci avec mon compteur de jours, je dois contacter qui déjà ?",
    options: [
      "Le service informatique",
      "Mon gestionnaire carrière",
      "Le secteur Formation"
    ],
    correct: 1,
    key: "Clé RH",
    resource: {
      title: "Votre Gestionnaire carrière",
      note: "Pour connaître le nom de ton gestionnaire carrière, clique sur ce lien.",
      url: "https://c.conflans.mairie-conflans.fr/#!/community/Ressources%2520Humaines/b1876ea4-a47a-4cb4-b84e-076eeade8ce6/d8bad4a4-3557-4feb-8087-54df234e8080/f696bd4c-ba5b-483f-a228-13b29933ef85/viewdetail/",
      linkLabel: "Voir la fiche"
    }
  },
  {
    from: "Sam",
    message:
      "Merci ! Ensuite, on m'a dit qu'il fallait que je me connecte à un truc qui " +
      "s'appelle « SMD » pour poser mes congés. C'est quoi exactement ?",
    options: [
      "Un logiciel de paie",
      "Une carte de tickets restaurant",
      "C'est le logiciel dans lequel tu peux saisir tes demandes de congés, consulter tes entretiens professionnels, ton dossier de formation…"
    ],
    correct: 2,
    key: "Clé SMD",
    resource: {
      title: "Connexion SMD",
      note: "Pour savoir comment te connecter à ton SMD, consulte cette procédure.",
      url: "https://c.conflans.mairie-conflans.fr/#!/media/documents/ad6e2366-b835-43d7-834a-1bcc5658f78e",
      linkLabel: "Voir le guide"
    }
  },
  {
    from: "Sam",
    message:
      "Question un peu bête… je suis payé quand exactement ce mois-ci ? " +
      "Où je peux trouver toutes les dates ?",
    options: [
      "Dans le règlement de formation",
      "Sur le bulletin d'adhésion Pluxee",
      "Dans le calendrier de versement des salaires"
    ],
    correct: 2,
    key: "Clé Salaire",
    resource: {
      title: "Calendrier de versement des salaires 2026",
      note: "Le calendrier de versement des salaires est disponible ici.",
      url: "https://c.conflans.mairie-conflans.fr/#!/community/Ressources%2520Humaines/b1876ea4-a47a-4cb4-b84e-076eeade8ce6/d8bad4a4-3557-4feb-8087-54df234e8080/72601d00-ac3a-416e-becf-58d4c729c93c/viewdetail/",
      linkLabel: "Voir le calendrier"
    }
  },
  {
    from: "Sam",
    message:
      "On m'a parlé d'une carte pour des tickets restaurant, un nom un peu " +
      "particulier… tu te souviens comment elle s'appelle ?",
    options: [
      "La carte SMD",
      "La carte Pluxee",
      "La carte CNFPT"
    ],
    correct: 1,
    key: "Clé Avantages",
    resource: {
      title: "Bulletin d'adhésion Pluxee",
      note: "Pour adhérer, complète ce formulaire et transmets-le au Secteur Paie.",
      url: "https://c.conflans.mairie-conflans.fr/#!/media/documents/1d06e930-963b-46dd-84eb-e8d120113c87",
      linkLabel: "Voir le bulletin",
      contact: {
        label: "Secteur Paie",
        email: "rhpaie@mairie-conflans.fr",
        phone: "01 34 90 88 79"
      }
    }
  },
  {
    from: "Sam",
    message:
      "Dernière chose, promis ! Je voudrais faire une formation, il y a un organisme " +
      "en particulier pour les agents territoriaux, non ?",
    options: [
      "Pôle emploi",
      "L'URSSAF",
      "Le CNFPT"
    ],
    correct: 2,
    key: "Clé Formation",
    resource: {
      title: "CNFPT : Offre de formation",
      note: "Pour consulter le catalogue des formations proposées par le CNFPT, clique sur ce lien.",
      url: "https://www.cnfpt.fr/rechercher-formation?page=1&size=10",
      linkLabel: "Voir le catalogue"
    }
  }
];

let missionCurrentStep = 0;

/* =========================================================
   SCINTILLEMENT DU BOUTON DE LANCEMENT
   Actif tant que le joueur n'a pas cliqué pour démarrer.
========================================================= */
(function initGameLaunchPulse(){
  function setup(){
    const btn = document.querySelector(".game-launch");
    if(!btn) return;

    const style = document.createElement("style");
    style.id = "missionPulseStyles";
    style.textContent = `
      .game-launch{ animation: missionButtonPulse 1.6s ease-in-out infinite; }
      @keyframes missionButtonPulse{
        0%, 100% { box-shadow: 0 0 0 0 rgba(47,111,79,.45); }
        50% { box-shadow: 0 0 0 10px rgba(47,111,79,0); }
      }
    `;
    document.head.appendChild(style);
    btn.classList.add("game-launch-pulse");
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", setup);
  }else{
    setup();
  }
})();

function stopGameLaunchPulse(){
  const btn = document.querySelector(".game-launch");
  if(btn) btn.style.animation = "none";
}

function injectMissionStyles(){
  if(document.getElementById("missionStyles")) return;
  const style = document.createElement("style");
  style.id = "missionStyles";
  style.textContent = `
    .mission-phone-frame{width:100%;}
    .mission-phone-screen{width:100%;}

    @media (min-width: 700px){
      .mission-phone-frame{
        max-width:375px;margin:24px auto;background:#111;border-radius:46px;
        padding:14px;box-shadow:0 24px 48px rgba(0,0,0,.18);position:relative;
      }
      .mission-phone-frame::before{
        content:"";position:absolute;top:14px;left:50%;transform:translateX(-50%);
        width:110px;height:22px;background:#111;border-radius:0 0 16px 16px;z-index:2;
      }
      .mission-phone-screen{
        background:var(--surface, var(--panel,#faf9f6));border-radius:34px;
        overflow-y:auto;min-height:620px;max-height:700px;padding:28px 16px 20px;
      }
      .mission-phone-screen.mission-screen-center{
        display:flex;flex-direction:column;justify-content:center;
      }
      .mission-phone-screen .mission-wrap{width:100%;}
    }
    .mission-wrap{max-width:520px;margin:0 auto;padding:8px 4px 24px;}
    .mission-progress{display:flex;justify-content:center;gap:10px;margin-bottom:20px;}
    .mission-dot{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;
      justify-content:center;font-weight:700;font-size:15px;border:2px solid var(--border,#ddd);
      background:var(--panel,#fff);color:var(--muted,#999);transition:all .3s ease;}
    .mission-dot.filled{background:#2f6f4f;border-color:#2f6f4f;color:#fff;
      transform:scale(1.05);}
    .mission-chat{display:flex;flex-direction:column;gap:14px;min-height:80px;margin-bottom:18px;}
    .mission-bubble{max-width:82%;padding:12px 15px;border-radius:16px;font-size:14px;
      line-height:1.5;animation:missionFadeIn .35s ease;}
    .mission-bubble.sam{align-self:flex-start;background:var(--panel,#f1f1f3);
      border-bottom-left-radius:4px;}
    .mission-bubble.me{align-self:flex-end;background:#2f6f4f;color:#fff;
      border-bottom-right-radius:4px;}
    .mission-bubble .mission-author{display:block;font-size:11px;font-weight:700;
      opacity:.65;margin-bottom:3px;text-transform:uppercase;letter-spacing:.03em;}
    @keyframes missionFadeIn{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:none;}}

    .mission-options{display:flex;flex-direction:column;gap:10px;margin-top:4px;}
    .mission-option{text-align:left;padding:13px 16px;border-radius:12px;
      border:1.5px solid var(--border,#ddd);background:var(--panel,#fff);color:inherit;
      font-size:14px;line-height:1.4;cursor:pointer;transition:all .15s ease;}
    .mission-option:hover:not(:disabled){border-color:#2f6f4f;background:rgba(47,111,79,.06);}
    .mission-option:disabled{cursor:default;}
    .mission-option.correct{background:#2f6f4f;border-color:#2f6f4f;color:#fff;}
    .mission-option.incorrect{background:#fbeae6;border-color:#c9765f;color:#8a3a26;}

    .mission-resource{display:flex;align-items:center;justify-content:space-between;gap:12px;
      background:var(--panel,#f1f1f3);border-radius:12px;padding:12px 16px;margin-top:2px;
      animation:missionFadeIn .35s ease;}
    .mission-resource-title{font-size:13px;font-weight:600;}
    .mission-resource-sub{font-size:11px;color:var(--muted,#888);margin-top:1px;}
    .mission-resource-link{flex-shrink:0;font-size:13px;font-weight:600;color:#2f6f4f;
      text-decoration:none;white-space:nowrap;}
    .mission-resource-link:hover{text-decoration:underline;}
    .mission-contact{background:var(--panel,#f1f1f3);border-radius:12px;padding:12px 16px;
      margin-top:8px;animation:missionFadeIn .35s ease;}
    .mission-contact-label{font-size:12px;font-weight:600;margin-bottom:4px;}
    .mission-contact-line{font-size:12px;color:var(--muted,#888);line-height:1.6;}
    .mission-contact-line a{color:#2f6f4f;text-decoration:none;}
    .mission-contact-line a:hover{text-decoration:underline;}
    .mission-next{margin-top:14px;padding:10px 18px;border-radius:10px;border:none;
      background:#2f6f4f;color:#fff;font-weight:600;font-size:14px;cursor:pointer;}

    .mission-notif-wrap{text-align:center;padding-top:12px;}
    .mission-notif-card{display:flex;align-items:center;gap:12px;text-align:left;
      background:var(--panel,#fff);border-radius:16px;padding:14px 16px;
      box-shadow:0 6px 18px rgba(0,0,0,.08);animation:missionNotifDrop .5s ease;}
    .mission-notif-icon{width:42px;height:42px;border-radius:12px;background:#2f6f4f;
      color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;
      flex-shrink:0;}
    .mission-notif-title{font-size:14px;font-weight:700;}
    .mission-notif-sub{font-size:12px;color:var(--muted,#888);margin-top:2px;}
    @keyframes missionNotifDrop{
      0%{transform:translateY(-16px);opacity:0;}
      100%{transform:translateY(0);opacity:1;}
    }

    .mission-quit{display:block;margin:18px auto 0;background:none;border:none;
      color:var(--muted,#888);font-size:12px;text-decoration:underline;cursor:pointer;}

    .mission-finale{text-align:center;padding:24px 12px;}
    .mission-keyring-svg{width:200px;height:170px;margin:14px auto 4px;
      animation:missionJingle 2.1s ease-in-out infinite;transform-origin:100px 22px;
      filter:drop-shadow(0 4px 6px rgba(0,0,0,.12));}
    .mission-key-group{animation:missionKeyFade .4s ease backwards;}
    @keyframes missionJingle{
      0%,100%{transform:rotate(-3deg);}
      50%{transform:rotate(3deg);}
    }
    @keyframes missionKeyFade{
      from{opacity:0;}
      to{opacity:1;}
    }
    .mission-key-legend{display:flex;justify-content:center;flex-wrap:wrap;gap:8px 14px;
      margin:2px 0 4px;}
    .mission-key-legend-item{font-size:11px;color:var(--muted,#888);display:flex;
      align-items:center;gap:4px;}
    .mission-key-legend-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;}
    .mission-finale-title{font-size:17px;font-weight:700;margin:10px 0 4px;}
    .mission-finale-sub{font-size:14px;color:var(--muted,#777);max-width:380px;margin:0 auto;line-height:1.5;}
    .mission-confetti-layer{position:relative;height:0;overflow:visible;}
    .mission-confetti{position:absolute;top:-20px;font-size:20px;
      animation:missionFall 2.6s ease-in forwards;}
    @keyframes missionFall{
      0%{transform:translateY(0) rotate(0deg);opacity:1;}
      100%{transform:translateY(340px) rotate(360deg);opacity:0;}
    }
    .mission-restart{margin-top:18px;padding:10px 20px;border-radius:10px;border:none;
      background:#2f6f4f;color:#fff;font-weight:600;font-size:14px;cursor:pointer;}
  `;
  document.head.appendChild(style);
}

function renderMissionShell(){
  const container = document.getElementById("gameContainer");
  if(!container) return;

  container.innerHTML = `
    <div class="mission-phone-frame">
      <div class="mission-phone-screen">
        <div class="mission-wrap">
          <div class="mission-progress" id="missionProgress"></div>
          <div class="mission-chat" id="missionChat"></div>
          <div class="mission-options" id="missionOptions"></div>
          <button type="button" class="mission-quit" id="missionQuit">← Quitter la mission</button>
        </div>
      </div>
    </div>
  `;

  renderMissionProgress();
  document.getElementById("missionQuit").addEventListener("click", quitMission);
}

function renderMissionProgress(){
  const el = document.getElementById("missionProgress");
  if(!el) return;
  el.innerHTML = MISSION_STEPS.map((step, i) => `
    <div class="mission-dot ${i < missionCurrentStep ? "filled" : ""}">
      ${i < missionCurrentStep ? "🔑" : (i + 1)}
    </div>
  `).join("");
}

function addMissionBubble(author, text){
  const chat = document.getElementById("missionChat");
  if(!chat) return;
  const bubble = document.createElement("div");
  bubble.className = "mission-bubble " + (author === "Sam" ? "sam" : "me");
  bubble.innerHTML = `<span class="mission-author">${author === "Sam" ? "💬 Sam" : "Toi"}</span>${escapeMissionHtml(text)}`;
  chat.appendChild(bubble);
  chat.scrollTop = chat.scrollHeight;
}

function escapeMissionHtml(value){
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function renderMissionOptions(){
  const el = document.getElementById("missionOptions");
  const step = MISSION_STEPS[missionCurrentStep];
  if(!el || !step) return;

  el.innerHTML = step.options.map((opt, i) => `
    <button type="button" class="mission-option" data-index="${i}">${escapeMissionHtml(opt)}</button>
  `).join("");

  el.querySelectorAll(".mission-option").forEach(btn => {
    btn.addEventListener("click", () => handleMissionAnswer(Number(btn.dataset.index)));
  });
}

function handleMissionAnswer(index){
  const step = MISSION_STEPS[missionCurrentStep];
  const buttons = document.querySelectorAll("#missionOptions .mission-option");
  if(!step) return;

  buttons.forEach(b => b.disabled = true);

  if(index === step.correct){
    buttons[index].classList.add("correct");
    missionCurrentStep++;
    renderMissionProgress();
    showMissionResource(step);
  }else{
    buttons[index].classList.add("incorrect");
    setTimeout(() => {
      buttons.forEach(b => {
        b.disabled = false;
        b.classList.remove("incorrect");
      });
    }, 700);
  }
}

function showMissionResource(step){
  const el = document.getElementById("missionOptions");
  if(!el) return;

  const resourceHtml = step.resource ? `
    <div class="mission-resource">
      <div>
        <div class="mission-resource-title">${escapeMissionHtml(step.resource.title)}</div>
        ${step.resource.note ? `<div class="mission-resource-sub">${escapeMissionHtml(step.resource.note)}</div>` : ""}
      </div>
      <a class="mission-resource-link" href="${escapeMissionHtml(step.resource.url)}">
        ${escapeMissionHtml(step.resource.linkLabel || "Voir")}
      </a>
    </div>
    ${step.resource.contact ? `
      <div class="mission-contact">
        <div class="mission-contact-label">📞 ${escapeMissionHtml(step.resource.contact.label)}</div>
        <div class="mission-contact-line">${escapeMissionHtml(step.resource.contact.phone)}</div>
        <div class="mission-contact-line"><a href="mailto:${escapeMissionHtml(step.resource.contact.email)}">${escapeMissionHtml(step.resource.contact.email)}</a></div>
      </div>
    ` : ""}
  ` : "";

  el.innerHTML = resourceHtml + `
    <button type="button" class="mission-next" id="missionNextBtn">
      ${missionCurrentStep < MISSION_STEPS.length ? "Continuer" : "Terminer"}
    </button>
  `;

  document.getElementById("missionNextBtn").addEventListener("click", advanceMission);
}

function advanceMission(){
  document.getElementById("missionOptions").innerHTML = "";

  if(missionCurrentStep < MISSION_STEPS.length){
    addMissionBubble("Sam", MISSION_STEPS[missionCurrentStep].message);
    renderMissionOptions();
  }else{
    addMissionBubble("Sam", "Génial, merci pour ton aide sur tout ça ! 🙌");
    const optionsEl = document.getElementById("missionOptions");
    optionsEl.innerHTML = `
      <button type="button" class="mission-next" id="missionSeeFinaleBtn">Voir la suite</button>
    `;
    document.getElementById("missionSeeFinaleBtn").addEventListener("click", showMissionFinale);
  }
}

function showMissionFinale(){
  const container = document.getElementById("gameContainer");
  if(!container) return;

  const confettiEmojis = ["🎉", "✨", "🎊", "💚"];
  const confettiHtml = Array.from({ length: 18 }).map((_, i) => {
    const left = Math.round(Math.random() * 100);
    const delay = (Math.random() * 0.6).toFixed(2);
    const emoji = confettiEmojis[i % confettiEmojis.length];
    return `<span class="mission-confetti" style="left:${left}%; animation-delay:${delay}s;">${emoji}</span>`;
  }).join("");

  const keyColors = ["#e3b32a", "#d9a521", "#f0c23f", "#cc971d", "#e8bb3a"];
  const keyAngles = [-32, -15, 0, 16, 32];

  const keysSvg = MISSION_STEPS.map((step, i) => {
    const angle = keyAngles[i] || 0;
    const color = keyColors[i % keyColors.length];
    return `
      <g class="mission-key-group" style="animation-delay:${(i * 0.1).toFixed(2)}s;"
         transform="translate(100,20) rotate(${angle})">
        <circle cx="0" cy="17" r="8" fill="none" stroke="${color}" stroke-width="3.5"/>
        <rect x="-2" y="25" width="4" height="28" rx="1" fill="${color}"/>
        <rect x="2" y="44" width="5" height="4" fill="${color}"/>
        <rect x="2" y="50" width="7" height="4" fill="${color}"/>
      </g>
    `;
  }).join("");

  const keyringSvg = `
    <svg class="mission-keyring-svg" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="20" r="13" fill="none" stroke="#8a6d1f" stroke-width="5"/>
      ${keysSvg}
    </svg>
  `;

  const legendHtml = MISSION_STEPS.map((step, i) => `
    <span class="mission-key-legend-item">
      <span class="mission-key-legend-dot" style="background:${keyColors[i % keyColors.length]};"></span>
      ${escapeMissionHtml(step.key)}
    </span>
  `).join("");

  container.innerHTML = `
    <div class="mission-phone-frame">
      <div class="mission-phone-screen mission-screen-center">
        <div class="mission-wrap mission-finale">
          <div class="mission-confetti-layer">${confettiHtml}</div>
          <div>🏆 Mission accomplie !</div>
          ${keyringSvg}
          <div class="mission-key-legend">${legendHtml}</div>
          <div class="mission-finale-title">Trousseau complet !</div>
          <div class="mission-finale-sub">
            Bravo, vous avez aidé Sam à obtenir ses premières clés pour débuter à la Mairie. 🌿
          </div>
          <button type="button" class="mission-restart" id="missionRestart">Rejouer</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("missionRestart").addEventListener("click", startTreasureHunt);
  toggleWelcomeMessage(true);
  toggleSearchbar(true);
}

function toggleWelcomeMessage(visible){
  const el = document.getElementById("welcomeMessage");
  if(el) el.style.display = visible ? "" : "none";
}

function toggleSearchbar(visible){
  const el = document.querySelector(".searchbar");
  if(el) el.style.display = visible ? "" : "none";
}

function quitMission(){
  const gameContainer = document.getElementById("gameContainer");
  const welcome = document.querySelector(".welcome");
  if(gameContainer) gameContainer.classList.add("hidden");
  if(welcome) welcome.classList.remove("hidden");
  toggleWelcomeMessage(true);
  toggleSearchbar(true);
}

// Nom conservé pour rester compatible avec le bouton existant dans index.html
function startTreasureHunt(){
  stopGameLaunchPulse();
  injectMissionStyles();
  missionCurrentStep = 0;

  const gameContainer = document.getElementById("gameContainer");
  const welcome = document.querySelector(".welcome");
  if(welcome) welcome.classList.add("hidden");
  if(gameContainer) gameContainer.classList.remove("hidden");
  toggleWelcomeMessage(false);
  toggleSearchbar(false);

  renderMissionNotification();
}

function renderMissionNotification(){
  const container = document.getElementById("gameContainer");
  if(!container) return;

  container.innerHTML = `
    <div class="mission-phone-frame">
      <div class="mission-phone-screen mission-screen-center">
        <div class="mission-wrap mission-notif-wrap">
          <div class="mission-notif-card" id="missionNotifCard">
            <div class="mission-notif-icon">💬</div>
            <div class="mission-notif-text">
              <div class="mission-notif-title">Nouveau message</div>
              <div class="mission-notif-sub">Sam vient de t'écrire…</div>
            </div>
          </div>
          <button type="button" class="mission-next" id="missionOpenChatBtn">Lire le message</button>
          <button type="button" class="mission-quit" id="missionQuit">← Quitter la mission</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("missionOpenChatBtn").addEventListener("click", openMissionChat);
  document.getElementById("missionQuit").addEventListener("click", quitMission);
}

function openMissionChat(){
  renderMissionShell();
  addMissionBubble("Sam", MISSION_STEPS[0].message);
  renderMissionOptions();
}
