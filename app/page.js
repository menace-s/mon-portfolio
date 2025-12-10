"use client"; 

import { useState } from 'react';
import Card from "../components/Card";
import Hero from "../components/Hero";

export default function Home() {
  const mesProjets = [
    { id: 1, titre: "Mon Portfolio", desc: "Site personnel Next.js optimisé.", type: "Web" },
    { id: 2, titre: "App Météo (iOS)", desc: "Application mobile Swift native.", type: "Mobile" },
    { id: 3, titre: "To-Do List", desc: "Gestionnaire de tâches React.", type: "Web" },
    { id: 4, titre: "Calculatrice", desc: "App Android Java complexe.", type: "Mobile" },
  ];

  const [filtreActif, setFiltreActif] = useState("Tous");

  const projetsFiltres = filtreActif === "Tous" 
    ? mesProjets 
    : mesProjets.filter(projet => projet.type === filtreActif);

  // Fonction utilitaire pour le style des boutons (pour ne pas répéter le code)
  const getButtonStyle = (type) => {
    const baseStyle = "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border";
    if (filtreActif === type) {
        // Style ACTIF : Jaune Warmr, texte noir, ombre
        return `${baseStyle} bg-[#FFD065] border-[#FFD065] text-[#111827] shadow-md transform scale-105`;
    }
    // Style INACTIF : Blanc, texte gris, bordure légère
    return `${baseStyle} bg-white border-gray-200 text-gray-500 hover:border-[#FFD065] hover:text-[#111827]`;
  };

  return (
    // 1. AJOUT DE "pt-36" pour compenser la Navbar fixe
    <main className="bg-[#FFFBF5] min-h-screen">
      <Hero />
      {/* En-tête style Warmr : Gros titre centré */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#111827] tracking-tight">
          Mes Réalisations
        </h1>
        <p className="text-xl text-gray-500 font-medium">
           Une sélection de mes projets, triés sur le volet.
        </p>
      </div>

      {/* 2. BOUTONS : Zone de filtre centrée */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button onClick={() => setFiltreActif("Tous")} className={getButtonStyle("Tous")}>
          Tous
        </button>
        <button onClick={() => setFiltreActif("Web")} className={getButtonStyle("Web")}>
          Web
        </button>
        <button onClick={() => setFiltreActif("Mobile")} className={getButtonStyle("Mobile")}>
          Mobile
        </button>
      </div>
      
      {/* Grille aérée */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projetsFiltres.map((projet) => (
          <Card 
            key={projet.id} 
            id={projet.id} // <--- 3. On passe l'ID ici pour l'affichage "Step X"
            titre={projet.titre} 
            desc={projet.desc} 
          />
        ))}
      </div>
    </main>
  );
}