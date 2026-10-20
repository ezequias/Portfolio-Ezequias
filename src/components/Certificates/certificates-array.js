// Para adicionar um novo certificado:
// 1. Coloque o arquivo .png dentro da pasta src/components/Certificates/images/
// 2. Importe a imagem aqui:
//    import meuCertificado from "./images/nome-do-arquivo.png";
// 3. Adicione um novo objeto na lista CertificatesArray abaixo.

import meuCertificado from "./images/meu-certificado.png"; 
import certAgileCoach from "./images/cert-agile_coach_Massimus_2022.png";
import salesforce from "./images/trailblazer.png";
import skillsboost from "./images/skillsboost.png";
import learnship from "./images/learnship.png";
import linkedinLearning from "./images/linkedin-learning.png";
import esri from "./images/esri.jpg";
import diplomaUnicap from "./images/diplomaUNICAP.jpg";
import qualiti from "./images/qualiti.jpg";

import microsoft1 from "./images/microsoft1.jpg";

import ipad1 from "./images/ipad1.jpg";
import ipad2 from "./images/ipad2.jpg";

import claudecode from "./images/claudecode.png";
import scrumFundamentals from "./images/scrumfundamentals.jpg";
import borland from "./images/borland.jpg";

export const CertificatesArray = [
  {
    id: "1",
    title: "Curso Claude Code",
    issuer: "Udemy",
    date: "2026",
    image: claudecode,
    alt: "Certificado Claude Code",
    skills: ["Claude Code", "Programação", "Desenvolvimento", "Evolução", "Feedback contínuo", "Cultura de colaboração"],
  },
  {
    id: "2",
    title: "Google Cloud Skillsboost Professional",
    issuer: "Google Cloud",
    date: "2024",
    image: skillsboost,
    alt: "Certificado Google Cloud Skillsboost",
    skills: ["Google Cloud Platform", "Data Analytics", "Cloud Architecture"],
  },
  {
    id: "3",
    title: "DevOps Culture and Mindset",
    issuer: "UC Davis - Coursera",
    date: "2024",
    image: meuCertificado,
    alt: "Certificado DevOps Culture and Mindeset",
    skills: ["DevOps", "Fluxo", "Evolução", "Feedback contínuo", "Cultura de colaboração"],
  },
  {
    id: "4",
    title: "English Course - Advanced",
    issuer: "/learnship/",
    date: "2024",
    image: learnship,
    alt: "Certificado English Course - Advanced (C1)",
    skills: ["DevOps", "Fluxo", "Evolução", "Feedback contínuo", "Cultura de colaboração"],
  },
  {
    id: "5",
    title: "Conceitos Básicos do Sistema Operacional e de Rede do Microsoft Windows 2000",
    issuer: "UC Davis - Coursera",
    date: "2024",
    image: microsoft1,
    alt: "Certificado Conceitos Básicos do Sistema Operacional e de Rede do Microsoft Windows 2000",
    skills: ["Microsoft Windows 2000", "Sistema Operacional", "Rede", "Administração de Sistemas"],
  },
  {
    id: "6",
    title: "Salesforce Trailblazer Specialist (Explorer)",
    issuer: "Salesforce",
    date: "2023",
    image: salesforce,
    alt: "Certificado Salesforce Trailblazer",
    skills: ["Salesforce", "CRM", "Business Analysis", "Process Automation"],
  },
  {
    id: "7",
    title: "CAC Certified Agile Coach",
    issuer: "CertiProf / Agile",
    date: "2022",
    image: certAgileCoach,
    alt: "Certificado CAC Certified Agile Coach",
    skills: ["Agile Coaching", "Scrum", "Kanban", "Liderança de Projetos"],
  },
  {
    id: "8",
    title: "Certificado Scrum Fundamentals",
    issuer: "SCRUMstudy",
    date: "2022",
    image: scrumFundamentals,
    alt: "Certificado Scrum Fundamentals",
    skills: ["Scrum", "Agile", "Gestão de Projetos", "Evolução", "Feedback contínuo", "Cultura de colaboração"],
  },
  {
    id: "9",
    title: "Curso Java Básico",
    issuer: "UC Davis - Coursera",
    date: "2022",
    image: ipad2,
    alt: "Certificado Java Básico",
    skills: ["Java Básico", "Programação", "Desenvolvimento", "Evolução", "Feedback contínuo", "Cultura de colaboração"],
  },
  {
    id: "10",
    title: "Strategic Thinking",
    issuer: "Linkedin Learning",
    date: "2019",
    image: linkedinLearning,
    alt: "Certificado Strategic Thinking",
    skills: ["Pensamento Estratégico", "Gestão Estratégica", "Evolução"],
  },
  {
    id: "11",
    title: "Esri Authorized Instructor",
    issuer: "Esri Inc.",
    date: "2009",
    image: esri,
    alt: "Certificado Esri Authorized Instructor",
    skills: ["ArcGIS", "Geoprocessamento", "Mapeamento", "Análise Espacial"],
  },
  {
    id: "12",
    title: "Fundamentos de um Processo Iterativo e Incremental",
    issuer: "Qualiti Software",
    date: "2007",
    image: qualiti,
    alt: "Certificado Fundamentos de um Processo Iterativo e Incremental",
    skills: ["Processo Iterativo e Incremental", "Agile", "Scrum", "Kanban", "Gestão de Projetos", "Evolução de Processos"],
  },
  {
    id: "13",
    title: "Curso Java Avançado",
    issuer: "IPAD Cursos",
    date: "2002",
    image: ipad1,
    alt: "Certificado Java Avançado",
    skills: ["Java", "Programação", "Desenvolvimento", "Evolução", "Feedback contínuo", "Cultura de colaboração"],
  },
  {
    id: "14",
    title: "Bacharelado em Ciência da Computação",
    issuer: "Universidade Católica de Pernambuco - UNICAP",
    date: "2001",
    image: diplomaUnicap,
    alt: "Certificado DevOps Culture and Mindeset",
    skills: ["Ciência da Computação", "Programação", "Algoritmos", "Estruturas de Dados"],
  },
  {
    id: "15",
    title: "Curso Aplicações Corporativas em Delphi 5",
    issuer: "Borland Inc.",
    date: "2001",
    image: borland,
    alt: "Curso Aplicações Corporativas com Borland Delphi 5",
    skills: ["Delphi", "Borland", "Aplicações Corporativas"],
  },
];

