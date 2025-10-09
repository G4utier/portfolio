import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
  title: "Stage en développement web/support IT",
      date: "Apr 2025 - Jul 2025",
    company: "Domaine Thermal de Mondorf",
    region: "Mondorf-lès-Bains, Luxembourg",
    description:
      "Contribué à des projets de digitalisation des services, amélioré l'expérience client à travers des solutions web et applications, participé à la gestion de projets et à l'optimisation des workflows internes.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "HTML/CSS",
      "Git",
      "Tailwind CSS",
    ]},
    {
      title: "Assistant Pédagogique",
      date: "Feb 2024 - Feb 2025",
      company: "Epitech",
      region: "Nancy, France",
      description:
      "Encadré et assisté les étudiants dans leurs projets et apprentissages, aidé à la résolution de problèmes techniques.",
      technologies: [
        "Gestion de projet",
        "Communication",
        "Support technique",
      ]},
      {
        title: "Stage en développement logiciel",
    date: "Jul 2023 - Dec 2023",
    
      company: "Chemins de Fer Luxembourgeois (CFL)",
      region: "Luxembourg, Luxembourg",
      description:
        "Développé et maintenu des outils internes, automatisé des processus, participé à l'analyse et au traitement de données pour optimiser l'intégration des distributeurs automatiques de billets(DAB/ATM)'. Collaboré avec les équipes IT et opérationnelles pour livrer des solutions fiables et maintenables.",
      technologies: [
        "C# .NET",
        "MongoDB",
        "Git",
        "REST API",
      "Agile/Scrum",
    ],
      
    },
    ];
    
export type WorkItem = (typeof work)[number];

