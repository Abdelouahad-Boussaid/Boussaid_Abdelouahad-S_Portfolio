const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const yearNode = document.getElementById("year");
const themeButtons = document.querySelectorAll(".theme-toggle");
const langSelects = document.querySelectorAll(".lang-switch");

const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "header.cta": "Let's talk",
    "hero.available": "Available for opportunities",
    "hero.titleStart": "Building",
    "hero.titleHighlight": "useful software",
    "hero.titleEnd": "from idea to production.",
    "hero.roleLine1": "Computer Science Engineering Student",
    "hero.roleLine2": "Full-Stack & Mobile Developer",
    "hero.text":
      "I build web and mobile applications with React, React Native, Node.js and MongoDB, with a strong focus on authentication, APIs, clean architecture and maintainable code.",
    "hero.viewWork": "View my work",
    "hero.location": "Algiers, Algeria",
    "hero.badge": "Developer",
    "hero.badgeRole": "Full-Stack & Mobile",
    "about.label": "About",
    "about.title": "Engineering mindset,",
    "about.titleHighlight": "practical results.",
    "about.p1":
      "I'm a Computer Science Engineering student and Full-Stack Developer experienced in building web and mobile applications.",
    "about.p2":
      "My work combines frontend and mobile development with backend engineering, database design, authentication, OTP verification, caching and REST APIs. I enjoy turning requirements into clear, reliable software.",
    "about.locationLabel": "Location",
    "about.location": "Algiers, Algeria",
    "about.educationLabel": "Education",
    "about.education": "Computer Science Engineering",
    "about.languagesLabel": "Languages",
    "about.languages": "Arabic · French · English",
    "about.focusLabel": "Current focus",
    "about.focus": "Full-Stack & Mobile Development",
    "skills.label": "Skills",
    "skills.title": "A stack built for",
    "skills.titleHighlight": "real applications.",
    "skills.frontendTitle": "Frontend & Mobile",
    "skills.frontendText": "React.js, React Native, Expo, HTML5 and CSS3.",
    "skills.backendTitle": "Backend & APIs",
    "skills.backendText":
      "Node.js, Express.js, REST APIs and JWT authentication.",
    "skills.dbTitle": "Databases",
    "skills.dbText":
      "MongoDB, Mongoose and Firebase Firestore for data-driven applications.",
    "skills.authTitle": "Auth & Cloud",
    "skills.authText": "JWT, Redis, Twilio and Firebase Authentication.",
    "skills.toolsTitle": "Developer Tools",
    "skills.toolsText": "Git, GitHub, Postman, VS Code and Linux.",
    "skills.langTitle": "Languages",
    "skills.langText":
      "JavaScript, TypeScript and C with a strong software engineering foundation.",
    "projects.label": "Featured project",
    "projects.title": "One project,",
    "projects.titleHighlight": "built end-to-end.",
    "projects.status": "In development",
    "projects.phoneTitle": "My vehicles",
    "projects.phoneSub": "Maintenance tracking",
    "projects.maintenance": "Maintenance",
    "projects.upToDate": "Up to date",
    "projects.kicker": "Car Maintenance & Management",
    "projects.heading": "A mobile companion for smarter vehicle ownership.",
    "projects.description":
      "LOTOTY is a mobile application designed to help car owners manage vehicles, maintenance records, service schedules and reminders.",
    "projects.point1": "RESTful backend with Node.js and Express.js",
    "projects.point2": "JWT authentication and protected API routes",
    "projects.point3": "OTP verification using Twilio",
    "projects.point4": "MongoDB/Mongoose database architecture",
    "projects.point5": "Controllers, routes, models, middleware and services",
    "education.label": "Education",
    "education.title": "Growing through",
    "education.titleHighlight": "engineering.",
    "education.emp": "Engineering Studies in Computer Science · Algeria",
    "education.enpei":
      "Diplôme du Premier Cycle des Études d’Ingéniorat in Computer Science · Rouiba, Algiers",
    "education.arabic": "Native",
    "education.french": "Upper-Intermediate",
    "education.english": "Intermediate",
    "contact.label": "Contact",
    "contact.title": "Have a project or opportunity in mind?",
    "contact.text":
      "I'm open to internships, software engineering opportunities and projects where I can build useful, maintainable products.",
    "contact.emailLabel": "Email me",
    "contact.callLabel": "Call me",
    "footer.role": "Computer Science · Full-Stack · Mobile",
  },
  fr: {
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    "header.cta": "Discutons",
    "hero.available": "Disponible pour des opportunités",
    "hero.titleStart": "Créer",
    "hero.titleHighlight": "des solutions utiles",
    "hero.titleEnd": "du concept à la production.",
    "hero.roleLine1": "Étudiant en ingénierie informatique",
    "hero.roleLine2": "Développeur Full-Stack & Mobile",
    "hero.text":
      "Je conçois des applications web et mobiles avec React, React Native, Node.js et MongoDB, en mettant l'accent sur l'authentification, les API, l'architecture propre et le code maintenable.",
    "hero.viewWork": "Voir mes projets",
    "hero.location": "Alger, Algérie",
    "hero.badge": "Développeur",
    "hero.badgeRole": "Full-Stack & Mobile",
    "about.label": "À propos",
    "about.title": "Esprit d’ingénierie,",
    "about.titleHighlight": "résultats concrets.",
    "about.p1":
      "Je suis étudiant en ingénierie informatique et développeur Full-Stack spécialisé dans la création d'applications web et mobiles.",
    "about.p2":
      "Mon travail associe le développement frontend et mobile à l'ingénierie backend, la conception de bases de données, l'authentification, la vérification OTP, le cache et les API REST. J'aime transformer les besoins en logiciels fiables et lisibles.",
    "about.locationLabel": "Localisation",
    "about.location": "Alger, Algérie",
    "about.educationLabel": "Formation",
    "about.education": "Ingénierie Informatique",
    "about.languagesLabel": "Langues",
    "about.languages": "Arabe · Français · Anglais",
    "about.focusLabel": "Focus actuel",
    "about.focus": "Développement Full-Stack & Mobile",
    "skills.label": "Compétences",
    "skills.title": "Une stack pensée pour",
    "skills.titleHighlight": "des applications réelles.",
    "skills.frontendTitle": "Frontend & Mobile",
    "skills.frontendText": "React.js, React Native, Expo, HTML5 et CSS3.",
    "skills.backendTitle": "Backend & API",
    "skills.backendText":
      "Node.js, Express.js, API REST et authentification JWT.",
    "skills.dbTitle": "Base de données",
    "skills.dbText":
      "MongoDB, Mongoose et Firebase Firestore pour des applications orientées données.",
    "skills.authTitle": "Auth & Cloud",
    "skills.authText": "JWT, Redis, Twilio et Firebase Authentication.",
    "skills.toolsTitle": "Outils de dev",
    "skills.toolsText": "Git, GitHub, Postman, VS Code et Linux.",
    "skills.langTitle": "Langages",
    "skills.langText":
      "JavaScript, TypeScript et C avec une solide base en ingénierie logicielle.",
    "projects.label": "Projet phare",
    "projects.title": "Un projet,",
    "projects.titleHighlight": "conçu de bout en bout.",
    "projects.status": "En développement",
    "projects.phoneTitle": "Mes véhicules",
    "projects.phoneSub": "Suivi de maintenance",
    "projects.maintenance": "Maintenance",
    "projects.upToDate": "À jour",
    "projects.kicker": "Maintenance & Gestion Automobile",
    "projects.heading":
      "Un compagnon mobile pour une meilleure gestion automobile.",
    "projects.description":
      "LOTOTY est une application mobile conçue pour aider les propriétaires de voitures à gérer leurs véhicules, leur historique d'entretien, les rappels et les calendriers de maintenance.",
    "projects.point1": "Backend REST avec Node.js et Express.js",
    "projects.point2": "Authentification JWT et routes API protégées",
    "projects.point3": "Vérification OTP via Twilio",
    "projects.point4": "Architecture base de données MongoDB/Mongoose",
    "projects.point5": "Contrôleurs, routes, modèles, middleware et services",
    "education.label": "Formation",
    "education.title": "Se former par",
    "education.titleHighlight": "l’ingénierie.",
    "education.emp": "Études d’ingénierie en informatique · Algérie",
    "education.enpei":
      "Diplôme du premier cycle des études d’ingéniorat en informatique · Rouiba, Alger",
    "education.arabic": "Natif",
    "education.french": "Très bon niveau",
    "education.english": "Intermédiaire",
    "contact.label": "Contact",
    "contact.title": "Vous avez un projet ou une opportunité en tête ?",
    "contact.text":
      "Je suis ouvert aux stages, aux opportunités d'ingénierie logicielle et aux projets où je peux développer des produits utiles et maintenables.",
    "contact.emailLabel": "Écrivez-moi",
    "contact.callLabel": "Appelez-moi",
    "footer.role": "Informatique · Full-Stack · Mobile",
  },
  ar: {
    "nav.about": "من أنا",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.education": "التعليم",
    "nav.contact": "التواصل",
    "header.cta": "دعنا نتحدث",
    "hero.available": "متاح للفرص",
    "hero.titleStart": "أبني",
    "hero.titleHighlight": "برامج مفيدة",
    "hero.titleEnd": "من الفكرة إلى الإنتاج.",
    "hero.roleLine1": "طالب هندسة معلوماتية",
    "hero.roleLine2": "مطور Full-Stack & Mobile",
    "hero.text":
      "أقوم ببناء تطبيقات ويب وموبايل باستخدام React وReact Native وNode.js وMongoDB مع تركيز كبير على المصادقة والواجهات والهيكلة النظيفة والكود القابل للصيانة.",
    "hero.viewWork": "شاهد أعمالي",
    "hero.location": "الجزائر، الجزائر",
    "hero.badge": "مطور",
    "hero.badgeRole": "Full-Stack & Mobile",
    "about.label": "من أنا",
    "about.title": "فكر هندسي،",
    "about.titleHighlight": "نتائج عملية.",
    "about.p1":
      "أنا طالب في هندسة المعلوماتية ومطور Full-Stack متخصص في بناء تطبيقات الويب والهواتف المحمولة.",
    "about.p2":
      "أعمل على تطوير الواجهة الأمامية والجوال مع الهندسة الخلفية وتصميم قواعد البيانات والمصادقة والتحقق من OTP والتخزين المؤقت وREST APIs. أحب تحويل المتطلبات إلى برامج موثوقة وسهلة الصيانة.",
    "about.locationLabel": "الموقع",
    "about.location": "الجزائر، الجزائر",
    "about.educationLabel": "التعليم",
    "about.education": "هندسة المعلوماتية",
    "about.languagesLabel": "اللغات",
    "about.languages": "العربية · الفرنسية · الإنجليزية",
    "about.focusLabel": "التركيز الحالي",
    "about.focus": "تطوير Full-Stack & Mobile",
    "skills.label": "المهارات",
    "skills.title": "تراكم تقني مبني لـ",
    "skills.titleHighlight": "تطبيقات حقيقية.",
    "skills.frontendTitle": "واجهة أمامية & جوال",
    "skills.frontendText": "React.js وReact Native وExpo وHTML5 وCSS3.",
    "skills.backendTitle": "الواجهة الخلفية & API",
    "skills.backendText": "Node.js وExpress.js وREST APIs ومصادقة JWT.",
    "skills.dbTitle": "قواعد البيانات",
    "skills.dbText":
      "MongoDB وMongoose وFirebase Firestore لتطبيقات قائمة على البيانات.",
    "skills.authTitle": "المصادقة & السحابة",
    "skills.authText": "JWT وRedis وTwilio ومصادقة Firebase.",
    "skills.toolsTitle": "أدوات التطوير",
    "skills.toolsText": "Git وGitHub وPostman وVS Code وLinux.",
    "skills.langTitle": "اللغات",
    "skills.langText":
      "JavaScript وTypeScript وC مع قاعدة قوية في هندسة البرمجيات.",
    "projects.label": "مشروع مميز",
    "projects.title": "مشروع واحد،",
    "projects.titleHighlight": "تم تطويره من البداية إلى النهاية.",
    "projects.status": "قيد التطوير",
    "projects.phoneTitle": "سياراتي",
    "projects.phoneSub": "تتبع الصيانة",
    "projects.maintenance": "الصيانة",
    "projects.upToDate": "محدث",
    "projects.kicker": "إدارة وصيانة السيارات",
    "projects.heading": "مساعد mobile أكثر ذكاءً لإدارة السيارة.",
    "projects.description":
      "LOTOTY هو تطبيق جوال يساعد مالكي السيارات على إدارة مركباتهم وسجلات الصيانة وجدولة الخدمات والتذكيرات.",
    "projects.point1": "واجهة خلفية REST باستخدام Node.js وExpress.js",
    "projects.point2": "مصادقة JWT ومسارات API محمية",
    "projects.point3": "تحقق OTP عبر Twilio",
    "projects.point4": "هيكل قاعدة بيانات MongoDB/Mongoose",
    "projects.point5": "Controllers وRoutes وModels وMiddleware والخدمات",
    "education.label": "التعليم",
    "education.title": "النمو عبر",
    "education.titleHighlight": "الهندسة.",
    "education.emp": "دراسات هندسة المعلوماتية · الجزائر",
    "education.enpei":
      "شهادة الدورة الأولى لدراسات الهندسة في علوم الحاسوب · الرويبة، الجزائر",
    "education.arabic": "لغة أم",
    "education.french": "مستوى جيد جدًا",
    "education.english": "متوسط",
    "contact.label": "التواصل",
    "contact.title": "هل لديك فكرة مشروع أو فرصة في ذهنك؟",
    "contact.text":
      "أنا متاح للتدريب والدورات وفرص الهندسة البرمجية والمشاريع حيث أستطيع بناء منتجات مفيدة وقابلة للصيانة.",
    "contact.emailLabel": "راسلني",
    "contact.callLabel": "اتصل بي",
    "footer.role": "علوم الحاسوب · Full-Stack · Mobile",
  },
};

function applyThemeMode() {
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  const isLight = savedTheme === "light";
  document.body.classList.toggle("light-mode", isLight);

  themeButtons.forEach((button) => {
    const icon = button.querySelector("i");
    if (!icon) return;
    icon.className = isLight ? "bi bi-moon-fill" : "bi bi-sun-fill";
    button.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to light mode",
    );
  });
}

function applyLanguage() {
  const savedLang = localStorage.getItem("portfolio-language") || "en";
  const current = translations[savedLang] ? savedLang : "en";
  const direction = current === "ar" ? "rtl" : "ltr";

  document.documentElement.lang = current;
  document.documentElement.dir = direction;
  document.body.dir = direction;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[current][key]) {
      element.textContent = translations[current][key];
    }
  });

  langSelects.forEach((select) => {
    select.value = current;
  });
}

menuToggle?.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.innerHTML = open
    ? '<i class="bi bi-x-lg"></i>'
    : '<i class="bi bi-list"></i>';
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.innerHTML = '<i class="bi bi-list"></i>';
  });
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-mode")
      ? "dark"
      : "light";
    localStorage.setItem("portfolio-theme", nextTheme);
    applyThemeMode();
  });
});

langSelects.forEach((select) => {
  select.addEventListener("change", (event) => {
    const nextLanguage = event.target.value;
    localStorage.setItem("portfolio-language", nextLanguage);
    applyLanguage();
  });
});

if (yearNode) yearNode.textContent = new Date().getFullYear();

applyThemeMode();
applyLanguage();
