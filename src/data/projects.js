export const projects = {
  frontend: [
    {
      id: 1,
      title: {
        en: "Portfolio Showcase",
        hu: "Portfólió Bemutató"
      },
      subtitle: {
        en: "Modern portfolio website with dark/light mode",
        hu: "Modern portfólió weboldal sötét/világos móddal"
      },
      description: {
        en: "A responsive portfolio website featuring dark/light mode toggle, bilingual support (EN/HU), and interactive project showcases. Built with React, Tailwind CSS, and Vite for optimal performance.",
        hu: "Reszponzív portfólió weboldal sötét/világos mód váltóval, kétnyelvű támogatással (EN/HU) és interaktív projekt bemutatókkal. React, Tailwind CSS és Vite felhasználásával készült optimális teljesítmény érdekében."
      },
      mainImage: "images/portfolio1.png",
      images: [
        "images/portfolio1.png",
        "/portfolio-website/public/images/portfolio2.png",
        "/portfolio-website/public/images/portfolio3.png",
        "/portfolio-website/public/images/portfolio4.png",
        "/portfolio-website/public/images/portfolio5.png",
      ],
      technologies: ["React", "Tailwind CSS", "Vite", "React Router", "Context API"],
      features: {
        en: [
          "Dark/Light mode with local storage",
          "English/Hungarian language support",
          "Interactive project showcases",
          "Responsive design for all devices",
          "Smooth animations and transitions"
        ],
        hu: [
          "Sötét/Világos mód helyi tárolással",
          "Angol/Magyar nyelvi támogatás",
          "Interaktív projekt bemutatók",
          "Reszponzív design minden eszközre",
          "Simán animációk és átmenetek"
        ]
      },
    },
    {
      id: 2,
      title: {
        en: "E-commerce Beauty Platform",
        hu: "E-commerce Szépség Platform"
      },
      subtitle: {
        en: "Full-featured online store",
        hu: "Teljes értékű online áruház"
      },
      description: {
        en: "A complete e-commerce solution with product catalog, shopping cart, user authentication, and secure checkout. Features include product filtering, reviews, and order tracking.",
        hu: "Teljes e-commerce megoldás termékkatalógussal, bevásárlókosárral, felhasználói hitelesítéssel és biztonságos fizetéssel. Funkciók közé tartozik a termékszűrés, értékelések és rendelés követés."
      },
      mainImage: "/portfolio-website/public/images/dowen1.png",
      images: [
        "/portfolio-website/public/images/dowen1.png",
        "/portfolio-website/public/images/dowen2.png",
        "/portfolio-website/public/images/dowen3.png"
      ],
      technologies: ["React", "Node.js", "MongoDB"],
      features: {
        en: [
          "Product catalog with filtering",
          "Shopping cart functionality",
          "User authentication system",
          "Secure payment processing",
          "Order management dashboard"
        ],
        hu: [
          "Termékkatalógus szűréssel",
          "Bevásárlókosár funkció",
          "Felhasználói hitelesítési rendszer",
          "Biztonságos fizetési folyamat",
          "Rendeléskezelő irányítópult"
        ]
      },
    },
  ],
  video: [
    {
      id: 1,
      title: {
        en: "Gameplay Montage",
        hu: "Gameplay Montázs"
      },
      subtitle: {
        en: "Fast-paced action compilation",
        hu: "Gyors tempójú akció összeállítás"
      },
      description: {
        en: "A high-energy gameplay montage featuring intense action sequences, synchronized with dynamic music. Created using After Effects for effects and DaVinci Resolve for color grading.",
        hu: "Magas energiájú gameplay montázs intenzív akció jelenetekkel, dinamikus zenével szinkronizálva. After Effects használatával készült effektekhez és DaVinci Resolve színezéshez."
      },
      mainImage: "/portfolio-website/public/images/valorant.jpg",
      images: [
       "/portfolio-website/public/images/valorant.jpg",
       "/portfolio-website/public/images/Minecraft.jpg"
      ],
      technologies: ["After Effects", "DaVinci Resolve", "CapCut", "Color Grading"],
      features: {
        en: [
          "Dynamic motion graphics",
          "Synced audio/visual effects",
          "Cinematic color grading",
          "Fast-paced editing style",
          "Custom visual effects"
        ],
        hu: [
          "Dinamikus mozgógrafika",
          "Szinkronizált audio/vizuális effektek",
          "Filmes színezés",
          "Gyors tempójú szerkesztési stílus",
          "Egyedi vizuális effektek"
        ]
      },
    },
    {
      id: 2,
      title: {
        en: "Music Video Edit",
        hu: "Zenei Videó Szerkesztés"
      },
      subtitle: {
        en: "Song-synced video compilation",
        hu: "Zenéhez szinkronizált videó összeállítás"
      },
      description: {
        en: "A music video edit that perfectly synchronizes visual cuts with song beats and lyrics. Features creative transitions, text animations, and rhythm-based editing.",
        hu: "Zenei videó szerkesztés, amely tökéletesen szinkronizálja a vizuális vágásokat a zene ütemével és dalszövegeivel. Kreatív átmenetek, szöveganimációk és ritmus alapú szerkesztés jellemzi."
      },
      mainImage: "/portfolio-website/public/images/TikTok.png",
      images: [
        "/portfolio-website/public/images/TikTok.png",
        "/portfolio-website/public/images/Youtube.png",
      ],
      technologies: ["After Effects", "DaVinci Resolve", "CapCut", "Audio Syncing"],
      features: {
        en: [
          "Perfect beat synchronization",
          "Creative text animations",
          "Rhythm-based editing",
          "Dynamic transitions",
          "Audio waveform visualization"
        ],
        hu: [
          "Tökéletes ütem szinkronizáció",
          "Kreatív szöveganimációk",
          "Ritmus alapú szerkesztés",
          "Dinamikus átmenetek",
          "Audio hullámforma vizualizáció"
        ]
      },
    },
    {
      id: 3,
      title: {
        en: "Custom Client Project",
        hu: "Egyedi Ügyfél Projekt"
      },
      subtitle: {
        en: "Tailored video editing solution",
        hu: "Szabott videó szerkesztési megoldás"
      },
      description: {
        en: "A custom video editing project created according to client specifications. Includes logo animations, custom transitions, and professional color grading to match brand identity.",
        hu: "Egyedi videó szerkesztési projekt ügyfél specifikációk szerint. Tartalmaz logó animációkat, egyedi átmeneteket és professzionális színezést a márka identitásának megfelelően."
      },
      mainImage: "/portfolio-website/public/images/costume.png",
      images: [
        "/portfolio-website/public/images/costume.png",
      ],
      technologies: ["After Effects", "DaVinci Resolve", "CapCut", "Motion Graphics"],
      features: {
        en: [
          "Custom logo animations",
          "Brand-specific color grading",
          "Professional transitions",
          "Client-focused editing",
          "Multiple format exports"
        ],
        hu: [
          "Egyedi logó animációk",
          "Márka specifikus színezés",
          "Professzionális átmenetek",
          "Ügyfélközpontú szerkesztés",
          "Több formátumú exportálás"
        ]
      },
    }
  ],
  design: [
    {
      id: 1,
      title: {
        en: "Logo Design Package",
        hu: "Logó Design Csomag"
      },
      subtitle: {
        en: "Complete brand identity logo set",
        hu: "Teljes márka identitás logó készlet"
      },
      description: {
        en: "A comprehensive logo design package featuring primary logo, secondary logo, favicon, and logo variations. Created with Adobe Express and Procreate for digital and print use.",
        hu: "Átfogó logó design csomag elsődleges logóval, másodlagos logóval, faviconnal és logó variációkkal. Adobe Express és Procreate felhasználásával készült digitális és nyomtatott felhasználáshoz."
      },
      mainImage: "/portfolio-website/public/images/Rlogo.png",
      images: [
        "/portfolio-website/public/images/Rlogo.png",
        "/portfolio-website/public/images/fadedlogo.png",
        "/portfolio-website/public/images/ramolalogo.png"
      ],
      technologies: ["Canva", "Adobe Express", "Procreate", "Photoshop"],
      features: {
        en: [
          "Primary and secondary logos",
          "Multiple color variations",
          "Favicon and app icons",
          "Print-ready files",
          "Digital usage guidelines"
        ],
        hu: [
          "Elsődleges és másodlagos logók",
          "Több színváltozat",
          "Favicon és alkalmazás ikonok",
          "Nyomtatásra kész fájlok",
          "Digitális használati útmutató"
        ]
      },
    },
    {
      id: 2,
      title: {
        en: "Social Media Graphics",
        hu: "Közösségi Média Grafikák"
      },
      subtitle: {
        en: "Custom graphics for social platforms",
        hu: "Egyedi grafikák közösségi platformokra"
      },
      description: {
        en: "A collection of social media graphics including banners, posts, stories, and ads designed for various platforms. Created using Canva and Adobe Express for consistent brand presentation.",
        hu: "Közösségi média grafikák gyűjteménye banner-ekkel, posztokkal, story-kkal és hirdetésekkel különböző platformokra. Canva és Adobe Express felhasználásával készült konzisztens márka megjelenítés érdekében."
      },
      mainImage: "/portfolio-website/public/images/pricelist.png",
      images: [
       "/portfolio-website/public/images/pricelist.png",
       "/portfolio-website/public/images/RoWeb.png"
      ],
      technologies: ["Canva", "Adobe Express", "Photoshop", "Social Templates"],
      features: {
        en: [
          "Platform-specific templates",
          "Brand-consistent colors",
          "Multiple size variations",
          "Editable source files",
          "Optimized for each platform"
        ],
        hu: [
          "Platform specifikus sablonok",
          "Márka konzisztens színek",
          "Több méretváltozat",
          "Szerkeszthető forrásfájlok",
          "Minden platformra optimalizálva"
        ]
      },
    },
    {
      id: 3,
      title: {
        en: "Digital Art Collection",
        hu: "Digitális Művészeti Gyűjtemény"
      },
      subtitle: {
        en: "Procreate digital illustrations",
        hu: "Procreate digitális illusztrációk"
      },
      description: {
        en: "A collection of digital artwork created with Procreate, featuring custom brushes, textures, and digital painting techniques. Includes character designs, backgrounds, and abstract art.",
        hu: "Digitális művészeti gyűjtemény Procreate-tel készítve, egyedi ecsetekkel, texturákkal és digitális festési technikákkal. Tartalmaz karakter terveket, háttereket és absztrakt művészetet."
      },
      mainImage:"/portfolio-website/public/images/bannerforairo.png",
      images: [
        "/portfolio-website/public/images/bannerforairo.png",
        "/portfolio-website/public/images/logoforairo.png"
      ],
      technologies: ["Procreate", "Photoshop", "Digital Painting", "Custom Brushes"],
      features: {
        en: [
          "Custom brush sets",
          "Layered PSD files",
          "High-resolution exports",
          "Digital painting techniques",
          "Printable artwork"
        ],
        hu: [
          "Egyedi ecsetkészletek",
          "Rétegezett PSD fájlok",
          "Nagy felbontású exportálás",
          "Digitális festési technikák",
          "Nyomtatható művészet"
        ]
      },
    }
  ]
};
