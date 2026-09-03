// ===== Artefact Products — script.js =====

document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";
  const languageContent = {
    "index.html": {
      title: "Artefact Products — Haiti, plants & well-being",
      description: "A Haitian brand dedicated to the well-being of people affected by cancer through the power of plants.",
      text: {
        ".hero-brand-country": ["Haiti", "Haïti"], ".hero-title": ["Haiti", "Haïti"],
        ".hero-sub": ["The dark night of the soul has passed. Let us leave the pain behind.", "La nuit noire de l’âme est passée. Laissons le mal derrière nous."],
        ".btn-gold": ["Discover the product", "Découvrir le produit"], ".btn-outline": ["Read Centering", "Lire Centrage"],
        ".value-item:nth-child(1) h3": ["Product", "Produit"], ".value-item:nth-child(1) p": ["A blend of three plants recommended together by naturopaths for people living with cancer.", "Un mélange de trois plantes recommandées ensemble par des naturopathes pour les personnes atteintes de cancer."],
        ".value-item:nth-child(2) h3": ["Purpose", "Objectif"], ".value-item:nth-child(2) p": ["To support medical treatment and promote your well-being.", "Soutenir les traitements médicaux et favoriser votre bien-être."],
        ".value-item:nth-child(3) h3": ["Philosophy", "Philosophie"], ".value-item:nth-child(3) p": ["Looking inward and trusting the treatment process are keys to overcoming illness.", "Se tourner vers soi et faire confiance au processus de soin sont des clés pour surmonter la maladie."]
      }
    },
    "produit.html": {
      title: "The product — Artefact Products", description: "A well-being blend made with Haitian plants. Ingredients, pricing, reviews, and FAQs.",
      text: {
        ".eyebrow": ["Haiti Edition", "Édition Haïti"], ".product-name": ["Plant Blend", "Mélange de plantes"], ".rating span:last-child": ["4.9 · 128 reviews", "4.9 · 128 avis"],
        ".product-desc": ["This blend of three plants is recommended by naturopaths to be taken together by people living with cancer, including breast, brain, stomach, colon, and blood cancers.", "Ce mélange de trois plantes est recommandé par des naturopathes pour être pris ensemble par les personnes atteintes de cancers du sein, du cerveau, de l’estomac, du côlon ou du sang."],
        ".price-amount": ["Price: $1,000", "Prix : 1 000 $"], ".price-details": ["Free shipping. One complete month of treatment.", "Livraison gratuite. Un mois complet de cure."], ".price-box .btn": ["Order now", "Commander"], ".disclaimer": ["A well-being product. It does not replace medical advice.", "Produit de bien-être. Ne remplace pas un avis médical."], ".reviews h2": ["Customer reviews", "Avis des clients"], ".reviews-empty": ["Coming soon", "À venir"], ".faq > h2": ["Frequently asked questions", "Questions fréquentes"],
        ".faq-item:nth-of-type(1) .faq-q span:first-child": ["Is it a medicine?", "Est-ce un médicament ?"], ".faq-item:nth-of-type(1) .faq-a": ["This plant blend is recommended by naturopaths to be taken together. It is intended to support people who consume it regularly. It was recommended by medical specialists to a young woman with advanced stage-three brain cancer. Alongside chemotherapy and other natural treatments recommended by the same doctor, she has lived cancer-free for more than nine years.", "Ce mélange de plantes est recommandé par des naturopathes pour être pris ensemble. Il est destiné à accompagner les personnes qui le consomment régulièrement. Il a été recommandé par des spécialistes à une jeune femme atteinte d’un cancer du cerveau de stade trois avancé. Avec la chimiothérapie et d’autres traitements naturels recommandés par le même médecin, elle vit sans cancer depuis plus de neuf ans."],
        ".faq-item:nth-of-type(2) .faq-q span:first-child": ["Can I use it during treatment?", "Puis-je l’utiliser pendant un traitement ?"], ".faq-item:nth-of-type(2) .faq-a": ["The plant blend is intended to accompany your medical treatment and support you in your daily life. It does not replace medical treatment.", "Le mélange de plantes est destiné à accompagner votre traitement médical et à vous soutenir au quotidien. Il ne remplace pas un traitement médical."],
        ".faq-item:nth-of-type(3) .faq-q span:first-child": ["How is it made?", "Comment est-il fabriqué ?"], ".faq-item:nth-of-type(3) .faq-a": ["The leaves are delivered as they are picked, with no chemical processing or manufacturing.", "Les feuilles sont livrées telles qu’elles sont cueillies, sans transformation chimique ni fabrication."],
        ".faq-item:nth-of-type(4) .faq-q span:first-child": ["Shipping?", "Livraison ?"], ".faq-item:nth-of-type(4) .faq-a": ["Ships within 3 to 5 business days. International shipping is available.", "Expédition sous 3 à 5 jours ouvrés. Envois internationaux disponibles."]
      }
    },
    "contact.html": {
      title: "Contact — Artefact Products", description: "Contact Artefact Products through our form, social channels, or contact details.",
      text: {
        ".contact-section h1": ["Get in touch", "Écrivez-nous"], ".contact-section > p:not(.eyebrow)": ["A thought, a question, or a need for support. We take the time to give every message a thoughtful reply.", "Un mot, une question ou un besoin d’accompagnement. Nous prenons le temps de répondre à chaque message avec attention."], 'label[for="name"]': ["Name", "Nom"], '.contact-form button': ["Send message", "Envoyer"], '.form-success': ["Thank you. Your message has been sent.", "Merci. Votre message a été envoyé."], ".contact-info h2:first-child": ["Contact details", "Coordonnées"], ".info-note": ["This site offers plant-based well-being support. It is not a promise of healing or a medical treatment. Always speak with your healthcare team.", "Ce site propose un accompagnement bien-être à base de plantes. Il ne constitue ni une promesse de guérison ni un traitement médical. Parlez toujours avec votre équipe soignante."]
      }
    },
    "mon-histoire.html": { title: "Centering — Artefact Products", description: "The family story and human journey behind Artefact Products.", text: {
      ".story-hero h1": ["Centering", "Centrage"], ".story-intro": ["A page devoted to family history, a professional journey, and the roots of a commitment to supporting others.", "Une page consacrée à l’histoire familiale, au parcours professionnel et aux origines d’un engagement tourné vers l’accompagnement."], ".story-card h2": ["An experience carried across generations", "Une expérience traversée sur plusieurs générations"], ".story-card .original-voice": ["My grandmother lived with breast cancer for 16 years. She underwent two mastectomies. She had no chemotherapy or other cancer treatment apart from radiotherapy. My mother had the same cancer for six to seven years. She did not undergo a mastectomy.", "Ma grand-mère a vécu 16 ans avec un cancer du sein. Elle a subi deux ablations. Elle n’a reçu ni chimiothérapie ni autre traitement contre le cancer, à part la radiothérapie. Ma mère a eu le même cancer pendant six à sept ans. Elle n’a pas subi d’ablation."], ".story-stat p": ["years lived with breast cancer in my grandmother’s story.", "années vécues avec un cancer du sein dans le récit de ma grand-mère."], ".story-feature h2": ["Twelve years of listening, followed by public health communications", "Douze années d’écoute, puis la communication en santé publique"], ".story-origin h2": ["A shared discovery that became a starting point", "Une rencontre transmise comme point de départ"], ".medical-disclaimer strong": ["Important information", "Information importante"], ".medical-disclaimer p": ["This story reflects personal and family experience. It does not replace a diagnosis, treatment, or advice from a qualified healthcare professional.", "Ce récit présente une expérience personnelle et familiale. Il ne remplace pas un diagnostic, un traitement ou l’avis d’un professionnel de santé qualifié."]
    }},
    "introspection.html": { title: "Cave — Artefact Products", description: "An introspective page about returning to darkness and finding transformation through light and nature.", text: {
      ".story-hero h1": ["Cave", "Caverne"], ".story-intro": ["A return to the darkness in search of truth, where chiaroscuro and natura become images of transformation.", "Un retour dans l’obscurité en quête de vérité, où le clair-obscur et la natura deviennent des images de transformation."], ".story-hero-image figcaption": ["Light remains visible, even at the heart of darkness.", "La lumière reste visible, même au cœur de l’obscurité."], ".story-poem-intro h2": ["The winding paths within us", "Les méandres de notre être"], ".story-poem-intro .original-voice": ["Cancer draws us into the winding paths of our being, where the dark deposits that are unique to us yet so common to all are overturned and disturbed by dirty, muddy, sticky, viscous waters.", "Le cancer nous plonge dans les méandres de notre être, où les dépôts sombres, propres à chacun mais si communs à tous, sont renversés et bouleversés par des eaux sales, boueuses, collantes et visqueuses."], ".light-quote .original-voice": ["Light is needed wherever things have remained unclear: white light, with a touch of yellow to gild your being.", "Il faut de la lumière là où tout n’est pas encore clair : une lumière blanche, avec une touche de jaune pour dorer votre être."], ".story-night-copy h2": ["Recognizing your place", "Reconnaître sa place"], ".story-night-copy .original-voice": ["Human, all too human. In search of lightness.", "Humain, trop humain. À la recherche de la légèreté."], ".medical-inline": ["The statements about plants are part of the author’s personal text and are not medical advice.", "Les propos concernant les plantes appartiennent au texte personnel de l’autrice et ne constituent pas un avis médical."], ".story-manifesto .original-voice": ["Everything I am, held within a web of understanding and apprehension.", "Tout ce que je suis, retenu dans un filet de compréhension et d’appréhension."]
    }},
    "resilience.html": { title: "Compossible — Artefact Products", description: "A reflection on willpower, discipline, and trust in the healing process.", text: {
      ".story-hero h1": ["Compossible", "Compossible"], ".story-intro-standalone": ["Bring every cell in your body to life.", "Rends chaque cellule de ton corps vivante."], ".story-intro-subline": ["A reflection on discipline.", "Une réflexion sur la discipline."], ".story-power h2": ["Cancer is an illness that gives us extraordinary strength. Let us put it to work.", "Le cancer est une maladie qui nous donne une force extraordinaire. Exploitons-la."], ".story-pillars article:nth-child(1) h3": ["Willpower", "Volonté"], ".story-pillars article:nth-child(1) p": ["The first step is to choose your thoughts. Do you want to recover from cancer: yes or no? If your answer is yes, you must truly want it rather than merely wishing it would happen. Otherwise, you are choosing no: I do not want to recover. The universe responds to what you choose.", "La première étape consiste à choisir ses pensées. Voulez-vous guérir du cancer : oui ou non ? Si votre réponse est oui, vous devez le vouloir véritablement, plutôt que souhaiter que cela arrive. Sinon, vous choisissez non : je ne veux pas guérir. L’univers répond à ce que vous choisissez."], ".story-pillars article:nth-child(2) h3": ["Discipline", "Discipline"], ".story-pillars article:nth-child(2) p": ["The second step is to trust the treatment process. That means following a strict routine when taking your medication and the blend. Each one should be taken at a precise time, at the same time every day. That is what trust looks like: keeping your commitment.", "La deuxième étape consiste à faire confiance au processus de soin. Cela signifie suivre une routine stricte pour prendre vos médicaments et le mélange. Chacun doit être pris à une heure précise, chaque jour à la même heure. Voilà ce qu’est la confiance : tenir son engagement."], ".story-pillars article:nth-child(3) h3": ["Trust", "Confiance"], ".story-pillars article:nth-child(3) p": ["The third step is to choose yourself: to keep choosing your own needs and interests.", "La troisième étape consiste à se choisir : continuer à choisir ses propres besoins et centres d’intérêt."], ".story-feature h2": ["Refusing fatalism", "Refuser la fatalité"], ".story-quote-band .original-voice": ["This trust and willpower, together with the plant blend we offer, are keys to moving forward.", "Cette confiance et cette volonté, avec le mélange de plantes que nous proposons, sont des clés pour avancer."], ".medical-disclaimer strong": ["Important information", "Information importante"], ".medical-disclaimer p": ["The content on this page reflects personal experience and belief. It does not replace medical care and should never lead you to stop treatment without advice from a healthcare professional.", "Le contenu de cette page reflète une expérience et une conviction personnelles. Il ne remplace pas un suivi médical et ne doit jamais vous conduire à interrompre un traitement sans l’avis d’un professionnel de santé."]
    }}
  };
  const commonText = {
    'nav a[href="index.html"]': ["Home", "Accueil"], 'nav a[href="produit.html"]': ["Product", "Produit"], 'nav a[href="mon-histoire.html"]': ["Centering", "Centrage"], 'nav a[href="introspection.html"]': ["Cave", "Caverne"], 'nav a[href="resilience.html"]': ["Compossible", "Compossible"], 'nav a[href="contact.html"]': ["Contact", "Contact"], '.footer-note': ["© 2026 — Well-being support. This site does not replace medical advice.", "© 2026 — Accompagnement bien-être. Ce site ne remplace pas un avis médical."]
  };
  const additionalText = {
    "mon-histoire.html": {
      ".story-hero .story-kicker": ["A story of transmission", "Une histoire de transmission"], ".story-card .story-kicker": ["Family history", "L’histoire familiale"], ".story-feature .story-kicker": ["The journey", "Le parcours"], ".story-origin .story-kicker": ["The blend’s origins", "L’origine du mélange"], ".story-cta .story-kicker": ["Continue", "Poursuivre"], ".story-cta h2": ["Discover the Artefact Products approach", "Découvrir la démarche Artefact Products"], ".story-btn-primary": ["Discover the product →", "Découvrir le produit →"], ".story-btn-secondary": ["Contact us ↗", "Nous contacter ↗"], ".story-feature-image img": ["Plants, oils, and a mortar arranged in a botanical composition", "Plantes, huiles et mortier dans une composition botanique"], ".story-feature .original-voice:nth-of-type(2)": ["I worked for 12 years in a public psychiatric hospital.", "J’ai travaillé pendant 12 ans dans un centre de psychiatrie publique."], ".story-feature .original-voice:nth-of-type(3)": ["I am now a department head at the Ministry of Public Health and Population, in the Communications and Public Relations Unit.", "Je suis actuellement chef de service au Ministère de la Santé publique et de la Population, à l’Unité de communication et des relations publiques."], ".story-origin .original-voice:nth-of-type(2)": ["This blend was a friend’s secret. She had advanced stage-three brain cancer. Alongside her medical treatment, including chemotherapy, her doctor advised her to take this blend every day, as well as other foods I would recommend. She was later declared cancer-free. Nine years later, she is still living without the disease.", "Ce mélange était le secret d’une amie atteinte d’un cancer du cerveau de stade trois avancé. En complément de son traitement médical, dont la chimiothérapie, son médecin lui a conseillé de prendre ce mélange chaque jour ainsi que d’autres aliments que je lui recommanderais. Elle a ensuite été déclarée guérie. Neuf ans plus tard, elle vit toujours sans cette maladie."], ".story-origin .original-voice:nth-of-type(3)": ["We shared the blend with a friend who had advanced stage-two breast cancer. She says she has felt much better since taking the tea every day. Alongside her medical treatment, she feels the blend has been a great support. More than a year later, she continues with all her usual activities.", "Nous avons parlé de ce mélange à une amie atteinte d’un cancer du sein de stade deux avancé. Elle dit se sentir beaucoup mieux depuis qu’elle prend ce thé chaque jour. En complément de son traitement médical, elle estime que le mélange lui apporte un grand soutien. Plus d’un an plus tard, elle poursuit toutes ses activités habituelles."], ".story-symbol-card small": ["Memory • Transmission • Presence", "Mémoire • Transmission • Présence"]
    },
    "introspection.html": {
      ".story-hero .story-kicker": ["Introspection", "Introspection"], ".story-poem-intro .story-kicker": ["Going inward", "Descendre en soi"], ".story-night-copy .story-kicker": ["In search of lightness", "À la recherche de la légèreté"], ".story-cta .story-kicker": ["Continue the journey", "Continuer le chemin"], ".story-cta h2": ["From introspection to inner strength", "De l’introspection à la force intérieure"], ".story-btn-primary": ["Discover Compossible →", "Découvrir Compossible →"], ".story-btn-secondary": ["Talk to us ↗", "Échanger avec nous ↗"]
    },
    "resilience.html": {
      ".story-hero .story-kicker": ["Inner strength", "Force intérieure"], ".story-hero figcaption": ["Turning willpower into movement.", "Transformer la volonté en mouvement."], ".story-power .story-kicker": ["A starting point", "Point de départ"], ".story-feature .story-kicker": ["A clear direction", "Une direction claire"], ".story-cta .story-kicker": ["Take the next step", "Passer à l’action"], ".story-cta h2": ["Discover the product and ask your questions", "Découvrir le produit et poser vos questions"], ".story-btn-primary": ["View the product →", "Voir le produit →"], ".story-btn-secondary": ["Contact us ↗", "Nous contacter ↗"], ".story-feature .original-voice:nth-of-type(2)": ["What is possible is that we will overcome this illness and live many long years beyond it.", "Ce qui est possible, c’est que nous vainquions cette maladie et vivions encore de très longues années après elle."], ".story-feature .original-voice:nth-of-type(3)": ["No doubt, no masochistic pleasure in suffering, and no surrender to fatalism. Otherwise, you accept the idea of dying from it and block your own recovery.", "Ni doute, ni plaisir masochiste de souffrir, ni abandon à la fatalité. Sinon, vous acceptez l’idée d’en mourir et bloquez votre propre guérison."], ".story-quote-band small": ["Original text by the author", "Texte original de l’autrice"]
    }
  };
  const finalText = {
    "mon-histoire.html": {
      ".story-tags span:nth-child(1)": ["Family", "Famille"], ".story-tags span:nth-child(2)": ["Journey", "Parcours"], ".story-tags span:nth-child(3)": ["Transmission", "Transmission"], ".story-hero-image figcaption": ["Family memory is where this project began.", "La mémoire familiale est le point de départ de ce projet."], ".voice-stack .original-voice:nth-child(1)": ["I worked for 12 years in a public psychiatric hospital.", "J’ai travaillé pendant 12 ans dans un centre de psychiatrie publique."], ".voice-stack .original-voice:nth-child(2)": ["I am now a department head at the Ministry of Public Health and Population, in the Communications and Public Relations Unit.", "Je suis actuellement chef de service au Ministère de la Santé publique et de la Population, à l’Unité de communication et des relations publiques."]
    },
    "resilience.html": {
      ".story-tags span:nth-child(1)": ["Willpower", "Volonté"], ".story-tags span:nth-child(3)": ["Trust", "Confiance"]
    }
  };
  const frenchTitles = { "index.html": "Artefact Products — Haïti, plantes & bien-être", "produit.html": "Le produit — Artefact Products", "contact.html": "Contact — Artefact Products", "mon-histoire.html": "Centrage — Artefact Products", "introspection.html": "Caverne — Artefact Products", "resilience.html": "Compossible — Artefact Products" };
  const applyLanguage = (language) => {
    const data = languageContent[page] || languageContent["index.html"];
    const index = language === "fr" ? 1 : 0;
    document.documentElement.lang = language;
    document.title = language === "fr" ? frenchTitles[page] : data.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === "fr" ? "Artefact Products — accompagnement bien-être et plantes haïtiennes." : data.description;
    Object.entries({ ...commonText, ...data.text, ...(additionalText[page] || {}), ...(finalText[page] || {}) }).forEach(([selector, values]) => document.querySelectorAll(selector).forEach((element) => { element.textContent = values[index]; }));
    const imageAlt = {
      "mon-histoire.html": { ".story-hero-image img": ["A woman writing in a journal among plants in natural light", "Une femme écrit dans un carnet entourée de plantes dans une lumière naturelle"] },
      "introspection.html": { ".story-hero-image img": ["A cave lit by moonlight, with a candle and a journal", "Une caverne éclairée par la lune, avec une bougie et un carnet"], ".story-night-image img": ["Lavender and a botanical bottle in a soothing atmosphere", "Lavande et flacon végétal dans une atmosphère apaisante"] },
      "resilience.html": { ".story-hero-image img": ["A woman meditating before a mountain landscape at sunset", "Une femme médite face à un paysage de montagne au coucher du soleil"], ".story-feature-image img": ["A woman breathing in a sunlit forest", "Une femme respire dans une forêt baignée de lumière"] },
      "produit.html": { ".product-gallery-main img": ["Artefact Products — plants in the blend", "Artefact Products — plantes du mélange"] }
    }[page] || {};
    Object.entries(imageAlt).forEach(([selector, values]) => document.querySelectorAll(selector).forEach((image) => { image.alt = values[index]; }));
    document.querySelectorAll("[data-language]").forEach((button) => button.classList.toggle("active", button.dataset.language === language));
    localStorage.setItem("artefact-language", language);
  };
  document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
  applyLanguage(localStorage.getItem("artefact-language") || "en");
  // Menu mobile
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      toggle.textContent = mobileNav.classList.contains("open") ? "✕" : "☰";
    });
  }

  // Mark the current navigation link as active
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-nav a").forEach((a) => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });

  // Generate the sky stars on the homepage
  const sky = document.querySelector(".hero-sky");
  if (sky) {
    for (let i = 0; i < 60; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 70 + "%";
      star.style.animationDelay = Math.random() * 4 + "s";
      sky.appendChild(star);
    }
  }

  // Product gallery
  const thumbs = document.querySelectorAll(".thumb");
  const mainImg = document.querySelector(".product-gallery-main img");
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbs.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
      if (mainImg) mainImg.src = thumb.querySelector("img").src;
    });
  });

  // FAQ accordion
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    q.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });

  // Contact form demo; no message is sent without a backend
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector(".form-success").classList.add("show");
      form.reset();
    });
  }

  // ===== Journals (Centering / Introspection / Compossible) — Supabase storage =====
  const journalText = document.querySelector(".journal-text[data-slug]");
  if (journalText && window.supabase) {
    const SUPABASE_URL = "https://ajeqdehbmxyxwyzwkvfv.supabase.co";
    const SUPABASE_KEY = "sb_publishable_YT34QOad86ViUvFZAzplNw_ewhMJ4Lt";
    const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    const slug = journalText.dataset.slug;
    const saveBtn = document.querySelector(".save-story-btn");
    const statusEl = document.querySelector(".save-status");

    // Load previously saved text
    client
      .from("story_content")
      .select("content")
      .eq("page_slug", slug)
      .single()
      .then(({ data, error }) => {
        if (!error && data && data.content) {
          journalText.innerText = data.content;
        }
      });

    // Save the text when the button is clicked
    if (saveBtn) {
      saveBtn.addEventListener("click", async () => {
        statusEl.textContent = "Saving...";
        statusEl.classList.remove("error");
        const { error } = await client
          .from("story_content")
          .update({ content: journalText.innerText, updated_at: new Date().toISOString() })
          .eq("page_slug", slug);
        if (error) {
          statusEl.textContent = "Error: please try again.";
          statusEl.classList.add("error");
        } else {
          statusEl.textContent = "Saved ✓";
          setTimeout(() => { statusEl.textContent = ""; }, 3000);
        }
      });
    }
  }
});
