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
    title: "Stage en développement logiciel",
  company: "Chemins de Fer Luxembourgeois (CFL)",
  region: "Luxembourg",
  description:
    "Développé et maintenu des outils internes, automatisé des processus, participé à l'analyse et au traitement de données pour optimiser les opérations ferroviaires. Collaboré avec les équipes IT et opérationnelles pour livrer des solutions fiables et maintenables.",
  technologies: [
    "Java",
    "MongoDB",
    "Git",
    "REST API",
  "Agile/Scrum",
],
  
},
{
title: "Stage au domaine thermal de Mondorf",
  company: "Domaine Thermal de Mondorf",
  region: "Luxembourg",
  description:
    "Contribué à des projets de digitalisation des services, amélioré l'expérience client à travers des solutions web et applications, participé à la gestion de projets et à l'optimisation des workflows internes.",
  technologies: [
    "React",
    "JavaScript",
    "Node.js",
    "HTML/CSS",
    "Git",
    "Tailwind CSS",
  ]}
];

export type WorkItem = (typeof work)[number];

