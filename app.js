/* =========================================================
   CONFIGURATION
========================================================= */

const ORG_NAME =
  "Mairie de Conflans-Sainte-Honorine";


/* =========================================================
   CONTACTS
========================================================= */

const CONTACTS = {

  gestionnaireCarriere:{
    label:"Votre gestionnaire carrière",
    email:"rhgestion@mairie-conflans.fr",
    phone:"A_COMPLETER"
  },

  rhPaie:{
    label:"Secteur Paie",
    email:"rhpaie@mairie-conflans.fr",
    phone:"0134908879"
  },

  formation:{
    label:"Secteur Formation",
    email:"formationrh@mairie-conflans.fr",
    phone:"0134908903"
  },

  jessyca:{
    label:"Jessyca Foulon",
    email:"jfoulon@mairie-conflans.fr",
    phone:"0134908903"
  },

  informatique:{
    label:"Service informatique",
    email:"A_COMPLETER",
    phone:"A_COMPLETER"
  }

};

/* =========================================================
   DOCUMENTS
========================================================= */

const DOCUMENTS = {

  Gestcarr:{
    title:"Votre Gestionnaire carrière",
    description:
      "Pour connaître le nom de votre Gestionnaire carrière, cliquez sur ce lien.",
    type:"lien",
    format:"Lien",
    url:"https://c.conflans.mairie-conflans.fr/#!/community/Ressources%2520Humaines/b1876ea4-a47a-4cb4-b84e-076eeade8ce6/d8bad4a4-3557-4feb-8087-54df234e8080/f696bd4c-ba5b-483f-a228-13b29933ef85/viewdetail/"
  },

  tempstravail:{
    title:"Règlement relatif au temps de travail",
    description:
      "Organisation du temps de travail pour les agents de la ville, du CCAS et du théâtre.",
    type:"pdf",
    format:"PDF",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/ab19fec5-96cf-43b7-9b38-4e96e8bdcca6"
  },

  cet:{
    title:"Le Compte Épargne Temps",
    description:
      "Pour connaître le fonctionnement du Compte Épargne Temps, consultez ce document.",
    type:"pdf",
    format:"PDF",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/873c5cac-8923-4be2-8ca3-264c7676b923"
  },

  formulaireRIB:{
    title:"Formulaire de changement de coordonnées bancaires",
    description:
      "Formulaire à utiliser pour transmettre un nouveau RIB.",
    type:"formulaire",
    format:"Formulaire",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/df5ec181-0683-42e0-94d7-193218d840ff"
  },

  transmissiondocument:{
    title:"Comment transmettre vos documents au service RH",
    description:
      "Vous devez transmettre un document au service des Ressources Humaines ?",
    type:"page",
    format:"Page intranet",
    url:"https://c.conflans.mairie-conflans.fr/#!/community/Ressources%2520Humaines/b1876ea4-a47a-4cb4-b84e-076eeade8ce6/d8bad4a4-3557-4feb-8087-54df234e8080/658dd1e2-3072-45ff-9cc0-61b9913de021/viewdetail/"
  },

  versementsalaire:{
    title:"Calendrier de versement des salaires 2026",
    description:
      "Calendrier de versement des salaires 2026.",
    type:"page",
    format:"Page intranet",
    url:"https://c.conflans.mairie-conflans.fr/#!/community/Ressources%2520Humaines/b1876ea4-a47a-4cb4-b84e-076eeade8ce6/d8bad4a4-3557-4feb-8087-54df234e8080/72601d00-ac3a-416e-becf-58d4c729c93c/viewdetail/"
  },

  CartePluxee:{
    title:"Bulletin d'adhésion Pluxee",
    description:
      "Formulaire à compléter et transmettre au secteur Paie.",
    type:"formulaire",
    format:"Formulaire",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/1d06e930-963b-46dd-84eb-e8d120113c87"
  },

  CatalogueCNFPT:{
    title:"CNFPT : Offre de formation",
    description:
      "Consultez le catalogue des formations proposées par le CNFPT.",
    type:"page",
    format:"Page web",
    url:"https://www.cnfpt.fr/rechercher-formation?page=1&size=10"
  },

  Formulaireinscriptionformation:{
    title:"Formulaire de demande de formation CNFPT",
    description:
      "Formulaire à compléter pour une demande de formation.",
    type:"formulaire",
    format:"Formulaire",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/e4424002-3d33-442b-aecf-660f628e9a31"
  },

  Reglementformation:{
    title:"Le règlement de formation",
    description:
      "Informations essentielles sur vos droits relatifs à la formation.",
    type:"pdf",
    format:"PDF",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/1e9742a8-6173-4fa1-89ad-e12413e29eda"
  },

  Calendrierconcours:{
    title:"Calendrier des concours et examens professionnels",
    description:
      "Consultez le calendrier des prochains concours et examens professionnels.",
    type:"pdf",
    format:"PDF",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/27a81f61-c8ea-463b-b2d0-2a8d53fca549"
  },

  Prepaconcours:{
    title:"Préparation concours et examens professionnels",
    description:
      "Le CNFPT vous accompagne dans votre préparation.",
    type:"page",
    format:"Page web",
    url:"https://www.cnfpt.fr/evoluer/preparation-aux-concours-concours-examens-professionnels/preparer-concours-ou-examen-professionnel/national"
  },

  ConnexionSMD:{
    title:"Connexion SMD",
    description:
      "Comment accéder à votre compte SMD depuis votre mobile.",
    type:"pdf",
    format:"PDF",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/ad6e2366-b835-43d7-834a-1bcc5658f78e"
  }

};

/* =========================================================
   FAQ
========================================================= */

const FAQ = [

  {
    id:"conges",
    category:"Congés / Absences",
    keywords:[
      "congé","conges","congés","congés annuels",
      "solde congés","poser congé","poser mes congés",
      "annuler congé","modifier congé","reporter congé",
      "congés non pris","jours de congés","vacances",
      "RTT","rtt","absence","CET","solde CET",
      "compte épargne temps","congé bonifié","temps de travail"
    ],
    title:"Question sur vos congés, votre solde ou votre CET",
    answer:
      "Pour une question concernant vos congés, votre CET, votre solde de jours ou une anomalie dans votre compteur, contactez votre gestionnaire carrière.",
    contact:"gestionnaireCarriere",
    documents:["Gestcarr","tempstravail","cet"]
  },

  {
    id:"asa",
    category:"Congés / Absences",
    keywords:[
      "mariage","PACS","déménagement","demenagement",
      "décès","deces","enfant malade","mon enfant est malade",
      "ASA","autorisation spéciale d'absence",
      "absence exceptionnelle","absence urgente",
      "justificatif d'absence"
    ],
    title:"Question sur une absence exceptionnelle (ASA)",
    answer:
      "Pour une question concernant une absence exceptionnelle ou une ASA, contactez votre gestionnaire carrière.",
    contact:"gestionnaireCarriere",
    documents:["transmissiondocument","Gestcarr"]
  },

  {
    id:"salaire",
    category:"Paie",
    keywords:[
      "bulletin","salaire","paie","paye","remuneration",
      "rémunération","fiche de paie","fiche de salaire",
      "bulletin de salaire","prime","prélèvement",
      "prelevement","remboursement","abonnement","transports",
      "Navigo","indemnité","régime indemnitaire",
      "RIFSEEP","IFSE","CIA","NBI","indice majoré","SFT",
      "supplément familial","prélèvement à la source",
      "retenue sur salaire","régularisation",
      "heures supplémentaires","astreinte","permanence"
    ],
    title:"Question sur votre bulletin de salaire",
    answer:
      "Pour toute question sur votre dernier bulletin de salaire, son contenu, une prime, une retenue ou une variation de rémunération, contactez le secteur Paie.",
    contact:"rhPaie",
    documents:["versementsalaire"]
  },

  {
    id:"rib",
    category:"Paie",
    keywords:[
      "RIB","modifier RIB","changer RIB","changement RIB",
      "nouvelle banque","nouveau RIB","coordonnées bancaires",
      "coordonnees bancaires","compte bancaire",
      "changer de banque","changement de banque"
    ],
    title:"Changement de coordonnées bancaires",
    answer:
      "Pour transmettre votre nouveau RIB, utilisez le formulaire ci-dessous. Si nécessaire, contactez également le secteur Paie.",
    contact:"rhPaie",
    documents:["formulaireRIB"]
  },

  {
    id:"formation",
    category:"Formation",
    keywords:[
      "formation","former","stage","CNFPT","catalogue",
      "formation professionnelle","inscription formation",
      "demande formation","financement formation",
      "bilan de compétences","VAE","validation des acquis",
      "congé de formation","reconversion",
      "projet professionnel","formation obligatoire"
    ],
    title:"Question sur une formation",
    answer:
      "Pour une demande de formation, une question sur le catalogue ou le suivi d'une inscription, contactez le Service Formation.",
    contact:"formation",
    documents:[
      "CatalogueCNFPT",
      "Formulaireinscriptionformation",
      "Reglementformation"
    ]
  },

  {
    id:"concours",
    category:"Formation",
    keywords:[
      "concours","inscription concours","calendrier concours",
      "préparation concours","prépa concours","examen",
      "examen professionnel","examens professionnels"
    ],
    title:"Renseignements sur les concours ou examens professionnels",
    answer:
      "Contactez le service Formation afin de connaître la marche à suivre.",
    contact:"formation",
    documents:[
      "Calendrierconcours",
      "Prepaconcours"
    ]
  },

  {
    id:"cpf",
    category:"Formation",
    keywords:[
      "CPF","compte personnel de formation",
      "heures CPF","compteur CPF","solde CPF"
    ],
    title:"Question concernant votre CPF",
    answer:
      "Pour obtenir des informations sur votre compte CPF ou son utilisation, contactez le service Formation.",
    contact:"formation"
  },

  {
    id:"intranet",
    category:"Intranet",
    keywords:[
      "intranet","connexion intranet","connecter intranet",
      "mot de passe intranet","identifiant intranet",
      "login intranet","accès intranet","acces intranet",
      "C.Conflans"
    ],
    title:"Problème de connexion à l'intranet",
    answer:
      "Si vous n'arrivez pas à vous connecter à l'intranet, contactez la personne référente indiquée ci-dessous.",
    contact:"jessyca"
  },

  {
    id:"smd",
    category:"Compte SMD",
    keywords:[
      "connexion SMD","connecter SMD","connexion à SMD",
      "connexion au SMD","compte SMD","compte smd",
      "mot de passe SMD","identifiant SMD",
      "identifiants SMD","login SMD","accès SMD",
      "acces SMD","je ne connais pas mes identifiants"
    ],
    title:"Problème de connexion à votre compte SMD",
    answer:
      "Si vous n'arrivez pas à vous connecter à votre compte SMD, contactez votre gestionnaire carrière.",
    contact:"gestionnaireCarriere",
    documents:[
      "Gestcarr",
      "ConnexionSMD"
    ]
  },

  {
    id:"retraite",
    category:"Retraite",
    keywords:[
      "retraite","départ retraite","depart retraite",
      "partir en retraite","âge retraite","age retraite",
      "trimestres","carrière retraite",
      "erreur carrière","retraite progressive","pension"
    ],
    title:"Question concernant la retraite",
    answer:
      "Pour obtenir des informations sur votre retraite, contactez votre gestionnaire carrière.",
    contact:"gestionnaireCarriere"
  },

  {
    id:"informatique",
    category:"Informatique",
    keywords:[
      "ordinateur","PC","ordinateur portable","imprimante",
      "informatique","souris","clavier","logiciel",
      "écran","ecran","panne informatique"
    ],
    title:"Problème informatique",
    answer:
      "Pour un problème matériel ou informatique, contactez le service informatique de la collectivité.",
    contact:"informatique"
  },

  {
    id:"easter",
    category:"Humour",
    keywords:[
      "licorne",
      "en pls"
    ],
    title:"🦄 Vous avez trouvé un passage secret !",
    answer:
      "Bien joué. Vous venez de découvrir un petit secret de l'Assistant RH. Puisque vous êtes joueur, un défi un peu plus sérieux vous attend…",
    challenge:true
  }

];

/* =========================================================
   SUGGESTIONS
========================================================= */

const suggestions = [

  [
    "🏖️ Congés / Absences",
    "J'ai un problème avec mes congés"
  ],

  [
    "💶 Paie",
    "Je ne comprends pas mon dernier bulletin de salaire"
  ],

  [
    "🗂️ Dossier administratif",
    "Comment modifier mon adresse ?"
  ],

  [
    "🎓 Formation",
    "Je souhaite faire une formation"
  ],

  [
    "💻 Intranet",
    "Je n'arrive pas à me connecter à l'intranet"
  ],

  [
    "🎯 Compte SMD",
    "Je ne connais pas mes identifiants"
  ],

  [
    "📑 Documents",
    "J'ai besoin d'une attestation"
  ],

  [
    "👩‍🦳 Retraite",
    "Quand pourrai-je partir à la retraite ?"
  ]

];

/* =========================================================
   SECURITE
========================================================= */

function escapeHtml(value){

  return String(value).replace(
    /[&<>"']/g,
    char => ({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"
    }[char])
  );

}

/* =========================================================
   NORMALISATION
========================================================= */

function normalize(value){

  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"")
    .trim();

}

/* =========================================================
   DETECTION MOBILE
========================================================= */

function isMobileDevice(){

  return window.matchMedia(
    "(max-width:600px)"
  ).matches;

}

/* =========================================================
   CONTACT
========================================================= */

function contactHtml(key){

  const contact =
    CONTACTS[key];

  if(!contact){
    return "";
  }

  const emailOk =
    contact.email &&
    !contact.email.includes("A_COMPLETER");

  const phoneOk =
    contact.phone &&
    !contact.phone.includes("A_COMPLETER");

  let html = `
    <div class="contact">

      <strong>
        📍 Votre interlocuteur :
        ${escapeHtml(contact.label)}
      </strong>
  `;

  if(emailOk){

    html += `
      <div>
        ✉️
        <a
          href="mailto:${escapeHtml(contact.email)}">

          ${escapeHtml(contact.email)}

        </a>
      </div>
    `;

  }

  if(phoneOk){

    const cleanPhone =
      String(contact.phone)
        .replace(/\s+/g,"");

    html += `
      <div>
        ☎️
        <a
          href="tel:${escapeHtml(cleanPhone)}">

          ${escapeHtml(contact.phone)}

        </a>
      </div>
    `;

  }

  html += `
    </div>
  `;

  return html;

}

/* =========================================================
   DOCUMENTS
========================================================= */

function documentButton(key){

  const doc =
    DOCUMENTS[key];

  if(!doc || !doc.url){
    return "";
  }

  let icon = "🔗";
  let label = "Ouvrir";

  if(doc.type === "pdf"){
    icon = "📄";
    label = "Ouvrir le PDF";
  }

  if(doc.type === "page"){
    icon = "🌐";
    label = "Ouvrir la page";
  }

  if(doc.type === "formulaire"){
    icon = "📝";
    label = "Ouvrir le formulaire";
  }

  if(doc.type === "annuaire"){
    icon = "👤";
    label = "Ouvrir l'annuaire";
  }

  return `
    <div class="document-box">

      <div class="document-title">
        ${icon}
        ${escapeHtml(doc.title)}
      </div>

      <div class="document-description">
        ${escapeHtml(doc.description)}
      </div>

      <span class="document-format">
        ${escapeHtml(doc.format)}
      </span>

      <div class="actions">

        <button
          class="action primary"
          type="button"
          onclick="openDocumentByKey('${escapeHtml(key)}')">

          ${icon}
          ${label}

        </button>

      </div>

    </div>
  `;

}

/* =========================================================
   OUVERTURE DOCUMENT
========================================================= */

function openDocumentByKey(key){

  const doc =
    DOCUMENTS[key];

  if(!doc || !doc.url){
    return;
  }

  if(isMobileDevice()){

    showMobileDocumentNotice(doc);

    return;
  }

  window.location.href =
    doc.url;

}

/* =========================================================
   MODALE DOCUMENT MOBILE
========================================================= */

function showMobileDocumentNotice(doc){

  const existing =
    document.getElementById(
      "documentModal"
    );

  if(existing){
    existing.remove();
  }

  const modal =
    document.createElement("div");

  modal.id =
    "documentModal";

  modal.innerHTML = `
    <div
      class="document-overlay"
      onclick="closeDocumentModal(event)">

      <div
        class="document-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="documentModalTitle"
        onclick="event.stopPropagation()">

        <button
          class="document-close"
          type="button"
          aria-label="Fermer"
          onclick="closeDocumentModal()">

          ✕

        </button>

        <div class="document-icon">
          📄
        </div>

        <h3 id="documentModalTitle">
          ${escapeHtml(
            doc.title || "Document RH"
          )}
        </h3>

        <p>
          Vous consultez ce document depuis
          un téléphone.
          L'accès à certains documents de
          l'intranet peut nécessiter une
          reconnexion.
        </p>

        <p class="document-info">

          Si l'intranet vous demande vos
          identifiants, connectez-vous puis
          revenez dans votre navigateur.

        </p>

        <div class="actions document-actions">

          <a
            class="action primary"
            href="${escapeHtml(doc.url)}">

            🔐 Ouvrir le document

          </a>

          <button
            class="action"
            type="button"
            onclick="closeDocumentModal()">

            Retour

          </button>

        </div>

      </div>

    </div>
  `;

  document.body.appendChild(modal);

  document.body.style.overflow =
    "hidden";

}

/* =========================================================
   FERMETURE MODALE
========================================================= */

function closeDocumentModal(event){

  if(
    event &&
    event.target !== event.currentTarget
  ){
    return;
  }

  const modal =
    document.getElementById(
      "documentModal"
    );

  if(modal){
    modal.remove();
  }

  document.body.style.overflow =
    "";

}

/* =========================================================
   MOTEUR RH
========================================================= */

function scoreQuestion(question,item){

  const q =
    normalize(question);

  let score = 0;

  for(const keyword of item.keywords){

    const k =
      normalize(keyword);

    if(q.includes(k)){

      score +=
        k.length >= 7
          ? 3
          : 2;

    }

  }

  return score;

}

function findMatches(question){

  return FAQ
    .map(item => ({
      item,
      score:
        scoreQuestion(
          question,
          item
        )
    }))
    .filter(x => x.score > 0)
    .sort(
      (a,b) =>
        b.score - a.score
    );

}

/* =========================================================
   CHAT
========================================================= */

function addMessage(html, who = "bot"){
  const element = document.createElement("div");
  element.className = "msg " + who;
  element.innerHTML = html;
  document.getElementById("chat").appendChild(element);

  requestAnimationFrame(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "nearest" });
  });
}

/* =========================================================
   REPONSE RH
========================================================= */

function answer(question){

  const matches =
    findMatches(question);

  if(!matches.length){

    addMessage(`
      <div class="answer">

        <h3>
          Je n'ai pas identifié votre demande
        </h3>

        <p>
          Essayez avec des mots comme
          <strong>congés</strong>,
          <strong>paie</strong>,
          <strong>formation</strong>,
          <strong>RIB</strong>,
          <strong>intranet</strong>
          ou
          <strong>informatique</strong>.
        </p>

      </div>
    `);

    return;

  }

  const best =
    matches[0];

  let html = `
    <div class="answer">

      <span class="badge">
        ${escapeHtml(
          best.item.category
        )}
      </span>

      <h3>
        ${escapeHtml(
          best.item.title
        )}
      </h3>

      <p>
        ${escapeHtml(
          best.item.answer
        )}
      </p>
  `;

  if(best.item.challenge){

    html += `
      <div class="actions">

        <button
          class="action primary"
          type="button"
          onclick="startTreasureHunt()">

          🗝️ Envie de jouer ?

        </button>

      </div>
    `;

  }else{

    html +=
      contactHtml(
        best.item.contact
      );

    if(best.item.documents){

      html +=
        best.item.documents
          .map(key =>
            documentButton(key)
          )
          .join("");

    }

  }

  html += `
    </div>
  `;

  addMessage(html);

}

/* =========================================================
   GOOGLE FORMS
========================================================= */

const GOOGLE_FORM_LIKE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd415h4_XtNb2YSoWM3QA1jQfxT4uVZXR_inQP4fa5PF-3znA/viewform?usp=pp_url&entry.1522524480=J'aime+cet+outil";

function feedbackHtml(){

  return `
    <div class="feedback">

      <div class="feedback-title">
        Votre avis nous intéresse ❤️
      </div>

      <div class="feedback-text">

        Maintenant, vous savez vous servir de votre
        Assistant RH ! 🎉

        <br><br>

        N'hésitez pas à nous dire si vous aimez cet outil
        en appuyant sur le pouce ci-dessous.

      </div>

      <div class="like-area">

        <button
          id="likeButton"
          class="like-button"
          type="button"
          onclick="sendLike()">

          👍 J'aime cet outil

        </button>

        <button
          class="dislike-button"
          type="button"
          onclick="sendDislike()">

          👎

        </button>

        <span
          class="like-count"
          id="likeCount">

          Votre avis compte !

        </span>

      </div>

    </div>
  `;

}

function sendLike(){

  try{

    localStorage.setItem(
      "assistantRH_liked",
      "true"
    );

  }catch(error){
    /* LocalStorage indisponible :
       on continue quand même. */
  }

  const button =
    document.getElementById(
      "likeButton"
    );

  const count =
    document.getElementById(
      "likeCount"
    );

  if(button){

    button.classList.add(
      "liked"
    );

    button.textContent =
      "👍 Merci !";

  }

  if(count){

    count.textContent =
      "Merci pour votre avis ❤️";

  }

  window.open(
    GOOGLE_FORM_LIKE_URL,
    "_blank"
  );

}

function sendDislike(){

  const url =
    GOOGLE_FORM_LIKE_URL.replace(
      "J'aime+cet+outil",
      "Je+n'aime+pas+encore+cet+outil"
    );

  window.open(
    url,
    "_blank"
  );

}

/* =========================================================
   FORMULAIRE QUESTION
========================================================= */

document.getElementById("questionForm").addEventListener("submit", event => {
  event.preventDefault();

  const input = document.getElementById("question");
  const question = input.value.trim();
  if(!question) return;

  addMessage(escapeHtml(question), "user");
  input.value = "";
  input.blur(); // sur mobile, ferme le clavier après l'envoi

  setTimeout(() => answer(question), 120);
});

/* =========================================================
   SUGGESTIONS
========================================================= */

const suggestionsContainer = document.getElementById("suggestions");

suggestions.forEach(([label, question]) => {
  const button = document.createElement("button");
  button.className = "chip";
  button.type = "button";
  button.textContent = label;

  button.onclick = () => {
    addMessage(escapeHtml(question), "user");
    setTimeout(() => answer(question), 120);
  };

  suggestionsContainer.appendChild(button);
});

/* =========================================================
   MESSAGE INITIAL
========================================================= */

addMessage(`

  <div class="answer">

    <h3>
      👋 Je suis prêt !
    </h3>

    <p>
      Posez-moi votre question ou choisissez
      une suggestion pour commencer.
    </p>

    <p>
      Et si vous avez envie de tester vos talents
      d'enquêteur, le bouton
      <strong>🕵️ Envie de jouer ?</strong>
      vous attend juste au-dessus.
    </p>

  </div>

`);

/* =========================================================
   RESTAURATION DU FEEDBACK
========================================================= */

try{
  if(localStorage.getItem("assistantRH_liked") === "true"){
    // Le bouton n'existe que lorsque le jeu est terminé,
    // donc rien à faire ici pour le moment.
  }
}catch(error){
  /* LocalStorage indisponible */
}

/* =========================================================
   FERMETURE MODALE AVEC ECHAP
========================================================= */

document.addEventListener("keydown", event => {
  if(event.key !== "Escape") return;
  closeDocumentModal();
});
