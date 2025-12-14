"use client";
import SectionTitle from "./SectionTitle";

const About = () => {
  // --- TES INFOS ICI ---
  const myInfo = {
    age: "23 ans", // Mets ton âge ici
    city: "Abidjan, CI", // Ta ville
    school: "ESATIC",
    degree: "Licence SIGL",
    current: "Master 2"
  };

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto mb-20">
      
      <SectionTitle
        pill="À propos"
        title="Qui suis-je ?"
        // subtitle="Plus qu'un développeur, un passionné de solutions numériques."
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* --- COLONNE GAUCHE : LE TEXTE & PARCOURS --- */}
        <div className="space-y-8">
          
          {/* Texte de présentation */}
          <div className="prose prose-lg text-gray-600">
            <p>
              Salut ! Je suis un développeur passionné basé à <span className="font-bold text-[#111827]">{myInfo.city}</span>. 
              Mon parcours a commencé par une fascination pour la logique et la création.
            </p>
            <p>
              J'ai solidifié mes connaissances à l&apos;<strong>ESATIC</strong>, où j&apos;ai appris la rigueur de l&apos;ingénierie logicielle. Aujourd&apos;hui, en fin de cursus Master, je combine cette rigueur académique avec une créativité moderne pour bâtir des applications web et mobiles performantes.
            </p>
          </div>

          {/* TIMELINE ACADÉMIQUE (Style Brutalism Soft) */}
          <div className="space-y-4 mt-8">
            
            {/* Étape 1 : Master 2 (Actuel) */}
            <div className="flex items-center gap-4 bg-[#FFFBF5] border-2 border-[#111827] p-4 rounded-2xl shadow-[4px_4px_0px_0px_#111827] hover:translate-x-1 hover:shadow-none transition-all">
              <div className="w-12 h-12 bg-[#FFD065] rounded-xl border-2 border-[#111827] flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🎓</span>
              </div>
              <div>
                <h4 className="font-black text-[#111827] text-lg">Master 2 (En cours)</h4>
                <p className="text-sm font-bold text-gray-500">Spécialisation Développement & Systèmes</p>
              </div>
            </div>

            {/* Étape 2 : ESATIC */}
            <div className="flex items-center gap-4 bg-white border-2 border-[#111827] p-4 rounded-2xl shadow-[4px_4px_0px_0px_#111827] hover:translate-x-1 hover:shadow-none transition-all">
              <div className="w-12 h-12 bg-white rounded-xl border-2 border-[#111827] flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🏛️</span>
              </div>
              <div>
                <h4 className="font-black text-[#111827] text-lg">Licence SIGL</h4>
                <p className="text-sm font-bold text-gray-500">ESATIC • Systèmes d&apos;Information & Génie Logiciel</p>
              </div>
            </div>

          </div>
        </div>

        {/* --- COLONNE DROITE : LA "CARTE D'IDENTITÉ" --- */}
        <div className="relative">
          
          {/* Carte Principale */}
          <div className="bg-white border-4 border-[#111827] rounded-[40px] p-8 shadow-[10px_10px_0px_0px_#111827] relative overflow-hidden">
            
            {/* Déco Ruban Jaune */}
            <div className="absolute top-0 right-0 bg-[#FFD065] text-[#111827] font-black text-xs px-8 py-2 border-b-2 border-l-2 border-[#111827] rounded-bl-2xl">
              PROFILE_DEV.EXE
            </div>

            <div className="grid grid-cols-2 gap-6 mt-4">
              
              {/* Stat 1 : Localisation */}
              <div className="flex flex-col gap-2">
                <span className="text-gray-400 text-xs font-black uppercase tracking-widest">Localisation</span>
                <div className="flex items-center gap-2 font-bold text-[#111827] text-lg">
                  <svg className="w-5 h-5 text-[#FFD065]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {myInfo.city}
                </div>
              </div>

              {/* Stat 2 : Age */}
              <div className="flex flex-col gap-2">
                <span className="text-gray-400 text-xs font-black uppercase tracking-widest">Âge</span>
                <div className="flex items-center gap-2 font-bold text-[#111827] text-lg">
                  <svg className="w-5 h-5 text-[#FFD065]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path></svg>
                  {myInfo.age}
                </div>
              </div>

              {/* Stat 3 : Ecole */}
              <div className="flex flex-col gap-2 col-span-2 border-t-2 border-dashed border-gray-200 pt-4">
                <span className="text-gray-400 text-xs font-black uppercase tracking-widest">Formation</span>
                <div className="font-bold text-[#111827] text-lg">
                  Système d&apos;Information & <br/>
                  <span className="bg-[#FFD065] px-1">Génie Logiciel</span>
                </div>
              </div>

              {/* Stat 4 : Status */}
              <div className="flex flex-col gap-2 col-span-2 bg-gray-50 p-4 rounded-xl border-2 border-gray-100">
                <span className="text-gray-400 text-xs font-black uppercase tracking-widest">Actuellement</span>
                <div className="flex items-center gap-2 text-green-600 font-bold">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Master 2 & Open to work
                </div>
              </div>

            </div>
          </div>

          {/* Décoration arrière (Le 2ème cadre décalé pour l'effet stack) */}
          <div className="absolute inset-0 bg-[#FFD065] rounded-[40px] border-4 border-[#111827] -z-10 translate-x-4 translate-y-4"></div>

        </div>

      </div>
    </section>
  );
};

export default About;