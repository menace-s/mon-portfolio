"use client";
import { useState, useRef } from 'react';
import SectionTitle from "./SectionTitle";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const categories = [ "Frontend", "Backend", "Mobile", "BI & Data", "Outils" ];

  const stacks = {
    "Frontend": [
      { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
      { name: "Livewire", icon: "https://cdn.simpleicons.org/livewire/FB70A9" },
      { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
      { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    ],
    "Backend": [
      { name: "Laravel", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
      { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
      { name: "Java", icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
      { name: "MySQL", icon: "https://upload.wikimedia.org/wikipedia/fr/6/62/MySQL.svg" },
      { name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
      { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
      { name: "Oracle", icon: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    ],
    "Mobile": [
      { name: "Kotlin", icon: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" },
      { name: "Jetpack Compose", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jetpackcompose/jetpackcompose-original.svg" },
    ],
    "BI & Data": [
      { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg" },
    ],
    "Outils": [
      { name: "Git", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
      { name: "GitHub", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" },
      { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
      { name: "Trello", icon: "https://www.vectorlogo.zone/logos/trello/trello-icon.svg" },
      { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
    ]
  };

  return (
    <section id="stack" className="py-20 px-6 max-w-7xl mx-auto my-10 relative">
      
      <SectionTitle
        pill="Stack technique"
        title="Ma Stack Technique"
        subtitle="Je choisis les meilleurs outils pour chaque problème."
        align="center"
      />

      {/* --- NAVIGATION --- */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white border-2 border-[#491D04] text-[#491D04] shadow-[2px_2px_0px_#491D04] active:shadow-none active:translate-y-[2px] transition-all md:hidden"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg></button>

        <div ref={scrollRef} className="flex overflow-x-auto gap-3 py-2 px-2 scrollbar-hide w-full md:w-auto md:justify-center scroll-smooth snap-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`
                snap-center px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 border-2
                ${activeTab === cat 
                  ? 'bg-[#FFD065] border-[#491D04] text-[#491D04] shadow-[3px_3px_0px_#491D04] -translate-y-0.5' 
                  : 'bg-white border-[#491D04]/20 text-gray-500 hover:border-[#491D04] hover:text-[#491D04]' 
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        <button onClick={() => scroll('right')} className="p-3 rounded-full bg-white border-2 border-[#491D04] text-[#491D04] shadow-[2px_2px_0px_#491D04] active:shadow-none active:translate-y-[2px] transition-all md:hidden"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg></button>
      </div>

      {/* --- CARTES SANS DESCRIPTION --- */}
      <div className="flex justify-center min-h-[200px]">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeTab}">
          {stacks[activeTab].map((tool) => (
            <div 
              key={tool.name} 
              className="group relative bg-white border-2 border-[#491D04] rounded-[24px] p-6 w-36 h-36 md:w-40 md:h-40 flex flex-col items-center justify-center gap-4 transition-all duration-200 hover:-translate-y-1"
              // Ombre dure
              style={{ boxShadow: '6px 6px 0px 0px #491D04' }}
            >
              
              {/* Cercle Icône */}
              <div className="w-14 h-14 bg-[#FFFBF5] rounded-xl flex items-center justify-center border border-[#491D04]/10 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="w-8 h-8 object-contain" 
                />
              </div>
              
              {/* Nom uniquement */}
              <p className="font-bold text-[#491D04] text-sm group-hover:text-[#E6A23C] transition-colors">
                {tool.name}
              </p>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default TechStack;