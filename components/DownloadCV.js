"use client";

const DownloadCV = () => {
  return (
    <section className="px-6 max-w-5xl mx-auto mb-20">
      
      {/* CADRE "VIVANT" 
          - Fond Jaune Warmr (#FFD065) pour l'impact visuel
          - Ombre colorée (orange très clair) pour le détacher du fond crème
      */}
      <div className="bg-[#FFD065] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_40px_-15px_rgba(255,200,100,0.4)]">
        
        {/* TEXTE : Noir sur Jaune = Lisibilité Maximale */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3 leading-tight">
            On travaille ensemble ?
          </h2>
          <p className="text-[#111827]/80 font-medium text-lg max-w-md">
            Téléchargez mon CV pour découvrir mon parcours et mes compétences en détail.
          </p>
        </div>

        {/* BOUTON : Blanc pur (Style "Badge")
            - Ressort très fort sur le jaune
            - Texte noir pour rappeler le titre
        */}
        <a 
          href="/cv.pdf"
          download="CV_AGANH_KOLA_JEAN_PHILIPPE_GENIE_LOGICIEL.pdf"
          className="flex-shrink-0 flex items-center gap-3 bg-white text-[#111827] px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#FFFBF5]"
        >
          {/* Icône un peu plus épaisse (strokeWidth="2.5") pour le caractère */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          <span>Télécharger mon CV</span>
        </a>

      </div>
    </section>
  );
};

export default DownloadCV;