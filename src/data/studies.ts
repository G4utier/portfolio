export const studies = [
  {
    title: "Diplôme d'Expert en Informatique",
    institution: "Epitech",
    description:
      "Formation intensive en développement logiciel, algorithmique, systèmes d'exploitation, réseaux et bases de données ; projets de groupe et réalisations personnelles orientées applications web et mobile.",
    tags: [
      "Algorithmique",
      "Structures de données",
      "Systèmes d'exploitation",
      "Bases de données",
      "Réseaux",
      "Développement web",
      "Développement mobile",
    ],
  },
  {
    title: "Échange académique",
    institution: "Université Laval, Québec, Canada",
    description:
      "Cours et projets en informatique avancée et en génie logiciel, avec immersion dans un environnement nord-américain ; mise en pratique de l’architecture logicielle, cloud et développement d’applications collaboratives.",
    tags: [
      "Architecture logicielle",
      "Cyber-sécurité",
      "Applications web avancées",
      "Gestion de projets informatiques",
      "Entrepreneuriat et passion de créer",
      "Développement collaboratif",
      "Projets internationaux",
    ],
  },
];

export type StudyItem = (typeof studies)[number];
