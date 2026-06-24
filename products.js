/* ============================================================
   AU FIL DE NATH — Données produits
   Utilisé par fiche-produit.html et formulaire-produit.html
   ============================================================ */

/* Dossier photo principal */
const P = 'Pages%20figma/fiches%20et%20formulaires%20produits/photos%20produits/';

const PRODUCTS = [

  /* ── Univers bébé ─────────────────────────────────────── */

  {
    slug: 'turbulette',
    name: 'Turbulette personnalisable',
    category: 'bebe',
    price: '30',
    sizes: '0–18 mois',
    photos: [
      P + 'Turbulette%201.webp',
      P + 'turbulette%20brod%C3%A9e%202%201.webp',
    ],
    description: [
      'Une pièce douce et rassurante pour accompagner les premiers sommeils. Réalisée en coton OEKO-TEX, cousue main avec attention.',
      'Le prix final dépend des options choisies (tissu, broderie, taille, pochon…)',
      'Disponible en plusieurs tailles, la turbulette est confectionnée à la main pour s\'adapter aux saisons et aux besoins de bébé.',
      'Selon le modèle choisi, elle peut être réalisée :\n— en coton ou en double gaze pour l\'été\n— en molleton\n— avec une polaire appliquée à l\'intérieur pour plus de chaleur',
      'Adaptée à la saison et confectionnée pour le confort et la sécurité de bébé.',
    ],
    delai: 'Environ 7 à 10 jours ouvrés, selon les options et la charge de travail.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Broderie motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
      {
        title: 'Tailles disponibles',
        items: ['0/3 mois (50 cm) — 30 €', '3/6 mois (60 cm) — 35 €', '6/12 mois (75 cm) — 40 €', '12/18 mois (85 cm) — 45 €'],
      },
    ],
    reassurance: 'Motifs proposés selon disponibilités et saison.',
  },

  {
    slug: 'babynest',
    name: 'Babynest personnalisable',
    category: 'bebe',
    price: '60',
    sizes: null,
    photos: [
      P + '552785966_17970778961946309_8562487617140048474_n.%201.webp',
      P + '569387996_17974343630946309_5089851895889682679_n.%201.webp',
      P + 'Babynest%20%282%29.webp',
      P + 'Babynest%20%283%29.webp',
      P + 'Babynest%20%284%29.webp',
    ],
    description: [
      'Un cocon doux et couvrant pour envelopper bébé et lui assurer la sécurité des premiers jours.',
      'Le prix final dépend des options choisies (tissu, broderie, motifs, pochon…)',
      'Le babynest est confectionné avec un tissu cocon qui crée un espace sécurisant et libère les bras. Chaque pièce est réalisée à la commande avec la possibilité d\'ajouter une pochette intérieure amovible.',
      'Fermeture sécurisée et fixations originales. Modèle bébé uniquement.',
    ],
    delai: 'Environ 7 à 10 jours ouvrés, selon les options et la charge de travail.',
    warning: 'Le babynest doit toujours être utilisé sous surveillance d\'un adulte.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Taille du motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
    ],
  },

  {
    slug: 'sac-a-dos-creche',
    name: 'Sac à dos crèche / maternelle personnalisable',
    category: 'bebe',
    price: '30',
    sizes: null,
    photos: [
      P + 'sac%20%C3%A0%20dos%20cr%C3%A8che%206.webp',
      P + 'sac%20%C3%A0%20dos%20cr%C3%A8che%202%201.webp',
      P + 'sac%20%C3%A0%20dos%20cr%C3%A8che%203%201.webp',
      P + 'sac%20%C3%A0%20dos%20cr%C3%A8che%205%201.webp',
    ],
    description: [
      'Un petit sac pratique et personnalisable pour accompagner votre enfant à la crèche ou à la maternelle.',
      'Personnalisation possible selon vos choix.',
      'Confectionné avec soin, ce sac à dos idéal pour transporter doudou, goûter ou petit change au quotidien.',
      'Léger et adapté aux petites épaules, il accompagne les premiers jours et se confectionne à la main pour s\'adapter à votre enfant.',
      'Chaque modèle est réalisé à la commande et peut être personnalisé avec un prénom ou un motif pour le rendre encore plus unique.',
      'Taille adaptée aux tout-petits, pensé pour être pratique et résistant au quotidien.',
      'Fermeture sécurisée et finitions soignées. Modèle bébé unique.',
    ],
    delai: 'Environ 7 à 10 jours ouvrés, selon les options et la charge de travail.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Broderie motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
    ],
  },

  {
    slug: 'protege-carnet-sante',
    name: 'Protège carnet de santé personnalisable',
    category: 'bebe',
    price: '20',
    sizes: null,
    photos: [
      P + '574750256_17975969078946309_2476281317568177951_n.%201.webp',
      P + '586669161_17977583036946309_1278746929384982568_n.%201.webp',
      P + 'Prot%C3%A8ge%20carnet%20de%20sant%C3%A9%201.webp',
    ],
    description: [
      'Un protège carnet de santé en tissu, cousu main et entièrement personnalisable.',
      'Personnalisation possible selon vos choix.',
      'Pour garder les précieux souvenirs de bébé en beauté tout en protégeant son carnet de santé.',
      'Réalisé à la commande selon vos couleurs et préférences. Possible avec broderie prénom ou motif.',
    ],
    delai: 'Environ 5 à 7 jours ouvrés, selon les options et la charge de travail.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Broderie motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
    ],
  },

  {
    slug: 'doudou-lapin',
    name: 'Doudou Lapin personnalisable',
    category: 'bebe',
    price: '10',
    priceNote: 'Doudou + pochette : 25 € · Doudou seul : 20 € · Pochette seule : 10 €',
    sizes: null,
    photos: [
      P + 'Doudou%20lapin%202.webp',
      P + 'Doudou%20lapin%201.webp',
      P + 'Doudou%20lapin%20%283%29.webp',
      P + 'Doudou%20lapin%20%285%29.webp',
      P + 'Doudou%20lapin%20%2812%29.webp',
    ],
    description: [
      'Un doudou tout doux, cousu main, pour accompagner bébé dans ses premiers moments.',
      'Disponible seul ou avec sa pochette assortie : doudou + pochette 25 €, doudou seul 20 €, pochette seule 10 €.',
      'Personnalisation possible selon vos choix.',
      'Réalisé en tissu doux et résistant, il est conçu pour durer et devenir le compagnon préféré de bébé.',
      'Personnalisable avec le prénom de bébé brodé ou un petit motif de votre choix.',
    ],
    delai: 'Environ 5 à 7 jours ouvrés, selon les options et la charge de travail.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Broderie motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
    ],
  },

  {
    slug: 'pochette-a-doudou',
    name: 'Pochette à doudou personnalisable',
    category: 'bebe',
    price: '10',
    sizes: null,
    photos: [], /* Pas de photo disponible pour le moment */
    description: [
      'Une petite pochette pratique pour protéger et transporter le doudou préféré.',
      'Personnalisation possible selon vos choix.',
      'Idéale pour la crèche, l\'école ou les sorties, cette pochette permet de garder le doudou propre et à portée de main.',
      'Légère et facile à glisser dans un sac, elle accompagne votre enfant au quotidien. Chaque modèle est confectionné à la commande et peut être personnalisé avec un prénom ou un motif pour le rendre encore plus unique.',
      'Idéal pour garder le doudou propre et toujours à portée de main.',
      'Finitions soignées.',
    ],
    delai: 'Environ 3 à 5 jours ouvrés, selon les options et la charge de travail.',
    reassurance: 'Pratique pour la crèche et idéale pour toute la famille.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Broderie motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
    ],
  },

  /* ── Accessoires ──────────────────────────────────────── */

  {
    slug: 'pochette-cotons-lavables',
    name: 'Pochette + cotons lavables',
    category: 'accessoires',
    price: '15',
    sizes: null,
    photos: [
      P + 'Pochette%20%2B%20coton%209%201.webp',
      P + 'Pochette%20%2B%20coton%201%201.webp',
      P + 'Pochette%20%2B%20coton%205%201.webp',
      P + 'Pochette%20%2B%20coton%206%201.webp',
    ],
    description: [
      'Une pochette zippée accompagnée de ses cotons lavables, pour une routine beauté zéro déchet.',
      'Personnalisation possible selon vos choix.',
      'Confectionnée en tissu imperméable à l\'intérieur et en tissu décoratif à l\'extérieur. Les cotons sont en éponge de bambou, doux et lavables en machine.',
    ],
    delai: 'Environ 3 à 5 jours ouvrés, selon les options et la charge de travail.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Broderie motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
    ],
  },

  {
    slug: 'serviette-de-tete',
    name: 'Serviette de tête personnalisable',
    category: 'accessoires',
    price: '18',
    sizes: null,
    photos: [
      P + 'Serviette%20de%20t%C3%AAte.webp',
      P + 'Serviette%20de%20t%C3%AAte%201.webp',
      P + 'Serviette%20de%20t%C3%AAte%202.webp',
    ],
    description: [
      'Une serviette de tête en tissu éponge, douce et absorbante, personnalisable selon vos envies.',
      'Pratique pour la sortie du bain, le sport ou la plage. Réalisée à la commande avec broderie possible.',
    ],
    delai: 'Environ 3 à 5 jours ouvrés, selon les options et la charge de travail.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Broderie motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
    ],
  },

  {
    slug: 'pochette-soignante',
    name: 'Pochette soignant',
    category: 'accessoires',
    price: '12',
    sizes: null,
    photos: [
      P + '552950121_17970917090946309_2205476163409626417_n.%201.webp',
      P + 'Pochette%20pour%20soignants%203%201.webp',
      P + 'Pochette%20pour%20soignants%204%201.webp',
      P + 'Pochette%20pour%20soignants%205%201.webp',
      P + 'Pochette%20infiermiere%206.webp',
      P + 'Pochette%20infiermiere%2011.webp',
    ],
    description: [
      'Une pochette pratique et élégante, pensée pour les soignants et toutes celles qui ont besoin d\'un rangement rapide et accessible.',
      'Personnalisation possible selon vos choix.',
      'Réalisée en tissu résistant et facile à nettoyer. Personnalisable avec un prénom ou un motif.',
    ],
    delai: 'Environ 3 à 5 jours ouvrés, selon les options et la charge de travail.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Broderie motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
    ],
  },

  {
    slug: 'trousse-agenda',
    name: 'Trousse agenda personnalisable',
    category: 'accessoires',
    price: '10',
    sizes: null,
    photos: [
      P + 'Trousse%20agenda%20%281%29.webp',
      P + 'Trousse%20agenda%201.webp',
      P + 'Trousse%20agenda%20%288%29.webp',
      P + 'Trousse%20agenda%20%285%29.webp',
    ],
    description: [
      'Une trousse fine et élégante, pensée pour glisser stylos, crayons et petits accessoires dans votre agenda ou sac.',
      'Personnalisation possible selon vos choix.',
      'Réalisée en tissu décoratif, fermeture zippée, personnalisable selon vos couleurs et envies.',
    ],
    delai: 'Environ 3 à 5 jours ouvrés, selon les options et la charge de travail.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Broderie motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
    ],
  },

  {
    slug: 'marque-page',
    name: 'Marque-page personnalisable',
    category: 'accessoires',
    price: '5',
    sizes: null,
    photos: [
      P + 'Marque%20page%201%201.webp',
      P + 'Marque%20page%203%201.webp',
    ],
    description: [
      'Une touche douce et élégante pour accompagner vos lectures.',
      'Personnalisation possible selon vos choix.',
      'Un marque-page en tissu cousu main, pour les amoureux des livres. Simple, original et pratique.',
      'Personnalisable avec un prénom brodé ou un petit motif. Idéal en cadeau.',
      'Idéal pour la crèche et idéale pour toutes les grandes lectrices.',
    ],
    delai: 'Environ 7 à 10 jours ouvrés, selon les options et la charge de travail.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Broderie motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
    ],
  },

  {
    slug: 'essuie-tout-lavable',
    name: 'Essuie-tout lavable — 8 feuilles',
    category: 'accessoires',
    price: '25',
    sizes: null,
    photos: [], /* Pas de photo disponible pour le moment */
    description: [
      'Un lot de 8 feuilles d\'essuie-tout lavables en tissu, pour remplacer le papier au quotidien.',
      'En tissu éponge d\'un côté, tissu imprimé de l\'autre. Lavable en machine à 60°C. Vendus avec une pochette de rangement.',
    ],
    delai: 'Environ 5 à 7 jours ouvrés, selon la charge de travail.',
    options: [
      {
        title: 'Broderie motif (pochette)',
        items: ['Petit (3 €)', 'Moyen (10 €)'],
      },
    ],
  },

  /* ── Sacs & maroquinerie ──────────────────────────────── */

  {
    slug: 'sac-weekend',
    name: 'Sac Weekend personnalisable',
    category: 'sacs',
    price: '35',
    sizes: null,
    photos: [
      P + 'georges%202%201.webp',
      P + 'georges%203%201.webp',
      P + 'georges%204%201.webp',
      P + 'georges%205%201.webp',
    ],
    description: [
      'Le sac Georges : un sac cabas élégant et pratique, cousu main dans un tissu robuste.',
      'Il permet de garder l\'essentiel à portée de main tout en restant sobre et élégant.',
      'Elle est personnalisable à la commande et peut être entièrement adaptée selon vos envies (tissu, couleurs, broderie).',
    ],
    delai: 'Environ 7 à 10 jours ouvrés, selon les options et la charge de travail.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Broderie motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
    ],
  },

  {
    slug: 'banane',
    name: 'Banane personnalisable',
    category: 'sacs',
    price: '19',
    priceNote: 'Mini banane : 19 € · Banane classique : 29 € · Banane rectangulaire : 29 €',
    sizes: null,
    photos: [
      P + 'Banane%202%201.webp',
      P + 'Bananes%20livr%C3%A9es%20pour%20No%C3%ABl%20%F0%9F%8E%85%201.webp',
      P + 'Bananes%20livr%C3%A9es%20pour%20No%C3%ABl%20%F0%9F%8E%85%20%284%29%201.webp',
      P + 'Sac%20banane%201.webp',
    ],
    description: [
      'La banane en tissu : la sacoche en bandoulière à la fois tendance et pratique à porter en toute liberté.',
      'À partir de 29 € — et +5 € avec une poche zippée supplémentaire.',
      'Pratique et moderne, la banane se porte en bandoulière ou à la taille. Elle est munie d\'une poche principale zippée pour garder vos affaires en sécurité tout en restant proche de votre corps.',
      'Élégante et compacte, la commande est entièrement adaptée à votre projet et peut être entièrement personnalisée par broderie.',
      'Pratique, confortable et adaptée à une usage quotidien.',
    ],
    delai: 'Environ 7 à 10 jours ouvrés, selon les options et la charge de travail.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Broderie motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
    ],
  },

  {
    slug: 'housse-pc',
    name: 'Housse pour PC personnalisable',
    category: 'sacs',
    price: '30',
    sizes: null,
    photos: [
      P + 'ordi%204.webp',
      P + 'ordi%202%201.webp',
      P + 'ordi%203%201.webp',
    ],
    description: [
      'Une housse pour ordinateur portable, cousue main dans un tissu rembourré pour protéger votre matériel.',
      'Disponible pour différentes tailles d\'ordinateur. Personnalisable selon vos couleurs et envies.',
    ],
    delai: 'Environ 7 à 10 jours ouvrés, selon les options et la charge de travail.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
      {
        title: 'Broderie motif',
        items: ['Petit (3 €)', 'Moyen (10 €)', 'Grand (15 €)'],
      },
    ],
  },


  /* ── Nouveaux produits ─────────────────────────────────── */

  {
    slug: 'sac-a-langer',
    name: 'Sac à langer & tapis nomade',
    category: 'bebe',
    price: '100',
    priceNote: "100 € l'ensemble · 40 € le tapis seul",
    photos: [
      P + 'Sac%20a%20langer.webp',
      P + 'Sac%20a%20langer%202.webp',
      P + 'Sac%20a%20langer%20(1).webp',
      P + 'Sac%20a%20langer%20(2).webp',
      P + 'Sac%20a%20langer%20(3).webp',
      P + 'Sac%20a%20langer%20(4).webp',
      P + 'Sac%20a%20langer%20(5).webp',
      P + 'Sac%20a%20langer%20(6).webp',
      P + 'Tapis%20a%20langer.webp',
      P + 'Tapis%20a%20langer%201.webp',
      P + 'Tapis%20a%20langer%202.webp',
      P + 'Tapis%20a%20langer%20(2).webp',
      P + 'Tapis%20a%20langer%20(4).webp',
    ],
    description: [
      "Un ensemble pensé pour accompagner les sorties du quotidien avec bébé, en alliant praticité, confort et fabrication artisanale.",
      "Ce sac à langer a été imaginé pour permettre aux parents de garder l'essentiel à portée de main lors des déplacements. Son grand volume facilite le rangement des affaires de bébé, tandis que le tapis nomade assorti permet de réaliser un change rapidement, où que vous soyez.",
      "Chaque pièce est confectionnée à la main avec soin dans l'atelier Au fil de Nath.",
    ],
    features: [
      'Fabrication artisanale',
      'Grand espace de rangement',
      'Tapis à langer nomade assorti',
      'Matières douces et résistantes',
      'Finitions soignées',
      'Modèle unique ou réalisé sur commande',
    ],
    care: 'Lavage délicat recommandé. Séchage à l\'air libre.',
    delai: 'Environ 10 à 14 jours ouvrés, selon les options et la charge de travail.',
    options: [
      {
        title: 'Broderie prénom (tapis)',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
    ],
    reassurance: "Tissus, coloris et associations adaptés selon vos envies et les disponibilités de l'atelier.",
  },

  {
    slug: 'bavoir-maternelle',
    name: 'Bavoir de maternelle personnalisé',
    category: 'bebe',
    price: '10',
    photos: [
      P + 'bavoir%20de%20maternelle.webp',
      P + 'bavoir%20de%20maternelle%20(1).webp',
      P + 'bavoir%20de%20maternelle%20(2).webp',
    ],
    description: [
      'Pratique, confortable et facilement identifiable grâce à la personnalisation.',
      "Conçu pour accompagner les enfants à l'école maternelle, ce bavoir élastiqué est facile à enfiler de manière autonome. Sa partie absorbante protège efficacement les vêtements lors des repas tandis que la personnalisation permet de retrouver facilement son bavoir.",
      "Chaque modèle est réalisé à la main dans l'atelier.",
    ],
    features: [
      "Enfilage facile grâce à l'élastique",
      'Personnalisation avec prénom',
      'Tissu absorbant',
      'Fabrication artisanale',
      'Idéal pour la maternelle',
    ],
    care: 'Lavable en machine.',
    delai: 'Environ 3 à 5 jours ouvrés, selon la charge de travail.',
    options: [
      {
        title: 'Broderie prénom',
        items: ['1 € / lettre (1–3 cm)', '1,50 € / lettre (3–6 cm)', '2 € / lettre (6–10 cm)'],
      },
    ],
    reassurance: 'Prénom brodé sur demande.',
  },

  {
    slug: 'mugbag',
    name: 'Mugbag',
    category: 'accessoires',
    price: '20',
    photos: [
      P + 'Mugbag%201.webp',
      P + 'Mugbag%202.webp',
      P + 'Mugbag%20(1).webp',
      P + 'Mugbag%20(2).webp',
      P + 'Mugbag%20(3).webp',
      P + 'Mugbag%20(4).webp',
      P + 'Mugbag%20(5).webp',
    ],
    description: [
      'La petite pause thé ou café à emporter partout.',
      'Le Mugbag est un accessoire pratique conçu pour transporter facilement une tasse, quelques sachets de thé, du sucre ou de petites gourmandises. Idéal pour le bureau, les déplacements ou comme idée cadeau originale, il permet de réunir tout le nécessaire pour une pause chaleureuse dans un format compact.',
      "Chaque pièce est réalisée à la main dans l'atelier.",
    ],
    features: [
      'Compact et facile à transporter',
      'Fermeture pratique',
      'Emplacement pour accessoires',
      'Fabrication artisanale',
      'Idée cadeau originale',
    ],
    care: 'Lavage délicat recommandé.',
    delai: 'Environ 3 à 5 jours ouvrés, selon la charge de travail.',
    options: [
      {
        title: 'Personnalisation',
        items: ['Différents tissus et coloris peuvent être proposés selon les stocks disponibles.'],
      },
    ],
    reassurance: 'Différents tissus et coloris disponibles selon le stock.',
  },

  {
    slug: 'pochette-a-livre',
    name: 'Pochette à livre',
    category: 'accessoires',
    price: '15',
    photos: [], /* Photos à venir */
    description: [
      'Protégez vos lectures préférées avec une pochette douce et élégante.',
      'Cette pochette permet de transporter vos livres en toute sécurité dans un sac ou une valise. Elle protège les couvertures des frottements et des petits accidents du quotidien tout en apportant une touche personnelle à vos lectures.',
      'Chaque modèle est confectionné à la main avec le plus grand soin.',
    ],
    features: [
      'Protège les livres et carnets',
      'Légère et peu encombrante',
      'Fabrication artisanale',
      'Tissus soigneusement sélectionnés',
      'Idée cadeau appréciée des lecteurs',
    ],
    care: 'Lavage délicat recommandé.',
    delai: 'Environ 3 à 5 jours ouvrés, selon la charge de travail.',
    options: [
      {
        title: 'Personnalisation',
        items: ["Choix de tissus et motifs selon les disponibilités de l'atelier."],
      },
    ],
  },

  {
    slug: 'trousse-de-toilette',
    name: 'Trousse de toilette',
    category: 'accessoires',
    price: '40',
    photos: [
      P + 'Trousse%20de%20toilette%20(1).webp',
      P + 'Trousse%20de%20toilette%20(2).webp',
      P + 'Trousse%20de%20toilette%20(3).webp',
      P + 'Trousse%20de%20toilette%20(4).webp',
      P + 'Trousse%20de%20toilette%20(5).webp',
      P + 'Trousse%20de%20toilette%20(6).webp',
    ],
    description: [
      'Une trousse élégante et pratique pour accompagner tous vos déplacements.',
      'Pensée pour accueillir les essentiels du quotidien, cette trousse de toilette offre un espace généreux tout en restant facile à transporter. Chaque modèle est confectionné à la main avec des tissus soigneusement sélectionnés pour allier esthétique et durabilité.',
    ],
    features: [
      'Format pratique',
      'Belle capacité de rangement',
      'Fabrication artisanale',
      'Finitions soignées',
      'Idéale pour les voyages ou le quotidien',
    ],
    care: 'Lavage délicat recommandé.',
    delai: 'Environ 5 à 7 jours ouvrés, selon la charge de travail.',
    options: [
      {
        title: 'Personnalisation',
        items: ["Possibilité d'adapter les tissus selon les disponibilités de l'atelier."],
      },
    ],
  },

];

/* ── Helpers ──────────────────────────────────────────── */

function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug) || null;
}

/* Renvoie la première photo dispo, ou null si aucune */
function getProductThumb(product) {
  return (product.photos && product.photos.length > 0) ? product.photos[0] : null;
}
