"use client";
import { useState } from 'react';
import Image from 'next/image'; // Important pour les images Next.js
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null); // Pour la Modal

  // --- DONNÉES DES PROJETS (À remplacer par tes vrais projets) ---
  const projects = [
    {
      id: 1,
      title: "Clone Netflix",
      category: "Web",
      image: "/project-1.jpg", // Mets une image dans ton dossier public
      desc: "Une reproduction fidèle de l'interface Netflix avec lecture vidéo.",
      details: "Ce projet utilise l'API TMDB pour récupérer les films. J'ai implémenté l'authentification Firebase et le paiement Stripe.",
      techs: ["React", "Firebase", "Stripe", "TMDB API", "Tailwind"]
    },
    {
      id: 2,
      title: "App de Gestion de Tâches",
      category: "Mobile",
      image: "/project-2.jpg", 
      desc: "Application mobile pour organiser sa journée et ses priorités.",
      details: "Développée en React Native. Utilisation de Redux pour l'état global et notifications locales.",
      techs: ["React Native", "Redux", "Expo"]
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      category: "BI & Data",
      image: "/project-3.jpg", 
      desc: "Visualisation de données de vente en temps réel.",
      details: "Tableaux croisés dynamiques, graphiques interactifs avec D3.js et export PDF.",
      techs: ["Power BI", "SQL", "Python", "Excel"]
    },
    {
      id: 4,
      title: "Portfolio Personnel",
      category: "Web",
      image: "/project-4.jpg", 
      desc: "Mon site vitrine pour présenter mes compétences.",
      details: "Design Neo-Brutalism, animations CSS et optimisation SEO maximale.",
      techs: ["Next.js", "Tailwind", "Framer Motion"]
    },
  ];

  // Logique de filtrage
  const categories = ["Tous", "Web", "Mobile", "BI & Data"];
  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projets" className="py-20 px-6 max-w-7xl mx-auto mb-20">
      
      <SectionTitle
        pill="Portfolio"
        title="Mes Réalisations"
        subtitle="Des projets concrets qui démontrent mon savoir-faire."
        align="center"
      />

      {/* --- 1. TABS DE FILTRAGE --- */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-6 py-2.5 rounded-full text-sm font-bold border-2 transition-all duration-200
              ${activeCategory === cat 
                ? 'bg-[#FFD065] border-[#491D04] text-[#491D04] shadow-[3px_3px_0px_#491D04] -translate-y-0.5' 
                : 'bg-white border-[#491D04]/20 text-gray-500 hover:border-[#491D04] hover:text-[#491D04]' 
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- 2. GRILLE DES PROJETS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="group bg-white border-2 border-[#491D04] rounded-[32px] overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            style={{ boxShadow: '6px 6px 0px 0px #491D04' }}
          >
            {/* Image du haut */}
            <div className="h-48 bg-gray-100 relative overflow-hidden border-b-2 border-[#491D04]/10">
              {/* Placeholder si pas d'image, sinon utilise <Image /> */}
              <div className="absolute inset-0 bg-[#FFFBF5] flex items-center justify-center text-[#491D04]/20 font-bold text-4xl">
                 {project.title[0]}
              </div>
              {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
            </div>

            {/* Contenu de la carte */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                 <span className="text-xs font-bold text-[#FFD065] bg-[#491D04] px-2 py-1 rounded-md uppercase tracking-wider">
                   {project.category}
                 </span>
              </div>

              <h3 className="text-2xl font-bold text-[#491D04] mb-2 leading-tight">
                {project.title}
              </h3>
              
              <p className="text-gray-500 text-sm font-medium mb-6 line-clamp-2">
                {project.desc}
              </p>

              {/* Zone Technos + Bouton (Bas de carte) */}
              <div className="mt-auto pt-4 border-t border-[#491D04]/10 flex items-center justify-between">
                
                {/* LOGIQUE D'AFFICHAGE DES TECHNOS (Max 2) */}
                <div className="flex items-center gap-2">
                  {project.techs.slice(0, 2).map((tech) => (
                    <span key={tech} className="text-xs font-bold text-[#491D04] bg-[#FFD065]/20 px-2 py-1 rounded-full border border-[#FFD065]">
                      {tech}
                    </span>
                  ))}
                  {/* Si plus de 2 technos, on affiche +X */}
                  {project.techs.length > 2 && (
                    <span className="text-xs font-bold text-gray-400">
                      +{project.techs.length - 2}
                    </span>
                  )}
                </div>

                {/* Bouton Voir */}
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="text-sm font-bold text-[#491D04] hover:text-[#FFD065] transition-colors flex items-center gap-1 group/btn"
                >
                  Détails
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- 3. LA MODAL (OVERLAY) --- */}
      {selectedProject && (
        // Fond sombre flouté qui couvre TOUTE la page (z-50)
        <div className="fixed inset-0 z-[60] bg-[#491D04]/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          
          {/* La boite de la modal */}
          <div 
            className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] border-2 border-[#491D04] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-in zoom-in-95 duration-200"
            // On empêche le clic sur la modal de la fermer
            onClick={(e) => e.stopPropagation()} 
          >
            
            {/* Bouton Fermer (Croix) */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full border-2 border-[#491D04] hover:bg-[#FFD065] transition-colors z-10"
            >
              <svg className="w-6 h-6 text-[#491D04]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Image en Grand */}
            <div className="h-64 md:h-80 w-full bg-gray-100 relative border-b-2 border-[#491D04]">
               {/* Ici ta <Image ... /> */}
               <div className="absolute inset-0 bg-[#FFFBF5] flex items-center justify-center text-[#491D04]/10 font-black text-6xl">
                 IMAGE PROJET
               </div>
            </div>

            {/* Contenu Détails */}
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                 <h2 className="text-3xl md:text-4xl font-black text-[#491D04]">{selectedProject.title}</h2>
                 <span className="px-3 py-1 bg-[#FFD065] text-[#491D04] font-bold text-sm rounded-lg border border-[#491D04] shadow-[2px_2px_0px_#491D04]">
                   {selectedProject.category}
                 </span>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {selectedProject.details}
              </p>

              {/* Toutes les technos */}
              <h3 className="text-lg font-bold text-[#491D04] mb-3">Technologies utilisées :</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.techs.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl font-semibold text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bouton Lien (Optionnel) */}
              <a href="#" className="inline-flex items-center gap-2 bg-[#491D04] text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-transform hover:-translate-y-1 shadow-[4px_4px_0px_#FFD065]">
                Voir le site en live
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>

            </div>
          </div>
          
          {/* Overlay cliquable pour fermer */}
          <div className="absolute inset-0 -z-10" onClick={() => setSelectedProject(null)}></div>
        </div>
      )}

    </section>
  );
};

export default Projects;