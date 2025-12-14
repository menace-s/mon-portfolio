"use client"; 

import { useState } from 'react';
import Card from "../components/Card";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import SectionTitle from "../components/SectionTitle";
import DownloadCV from "../components/DownloadCV";
import Projects from "../components/Projects";
import About from "../components/About"
import Footer from "../components/Footer";

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
      <About />
      {/* SECTION PROJETS */}
      <Projects />
      {/* SECTION STACK TECHNIQUE */}
      <TechStack />
      <DownloadCV />
      <Footer />

    </main>
  );
}