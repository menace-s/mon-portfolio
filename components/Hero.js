import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#FEFEFE] pt-32 pb-20 px-6 overflow-hidden">
      
      {/* DÉCORATION D'ARRIÈRE-PLAN (Formes floues style Warmr) */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px]  rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px]  rounded-full pointer-events-none"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* --- COLONNE GAUCHE : TEXTE --- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">

          {/* Gros Titre */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#111827] leading-[1.1] tracking-tight">
            Salut, je suis <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD065] to-[#E6A23C]">
              AKJP.
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed font-medium">
            Développeur Fullstack créatif. Je transforme vos idées complexes en interfaces <span className="text-black font-bold">simples</span> et <span className="text-black font-bold">élégantes</span>.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            
            {/* Bouton Principal (Style Warmr) */}
            <Link 
              href="#projects"
              className="px-8 py-4 rounded-full font-bold text-[#491D04] transition-transform hover:scale-105 hover:shadow-lg text-center"
              style={{
                background: 'linear-gradient(180deg, #FFD065 0%, #FFCF4D 100%)',
                boxShadow: '0px 4px 10px rgba(255, 170, 0, 0.3)'
              }}
            >
              Voir mes projets
            </Link>

            {/* Bouton Secondaire */}
            <Link 
              href="#contact"
              className="px-8 py-4 rounded-full font-bold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all text-center"
            >
              Me contacter
            </Link>
          </div>

          {/* Liens Sociaux (Icônes SVG) */}
          <div className="flex gap-6 pt-4 opacity-80">
            {/* Github */}
            <a href="#" className="hover:text-[#FFD065] transition-colors text-gray-400">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="hover:text-[#FFD065] transition-colors text-gray-400">
               <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
               </svg>
            </a>
          </div>

        </div>

        {/* --- COLONNE DROITE : TA PHOTO --- */}
        <div className="relative flex justify-center items-center py-10 md:py-0">
            
            {/* Le fond jaune flou derrière */}
            <div className="absolute w-[90%] h-[90%]  rotate-6 opacity-20 blur-xl transform translate-x-4 translate-y-4 z-0"></div>
            
            {/* LE CONTENEUR DE L'IMAGE 
                - z-10 : Pour passer devant le fond jaune
                - rotate-2 : Légère rotation pour l'effet "collé au mur"
                - hover:rotate-0 : Se redresse quand on passe la souris (petit effet interactif sympa)
            */}
            <div className="relative z-10 w-[85%] md:w-[95%] transform rotate-2 hover:rotate-0 transition-all duration-500 ease-in-out">
                <Image
                  src="/profile-photo.png" // On pointe vers l'image dans le dossier public
                  alt="Portrait de AKJP"
                  width={600} // Largeur de base pour l'optimisation
                  height={800} // Hauteur de base (le ratio s'adaptera)
                  // drop-shadow-2xl : Donne l'effet de profondeur sous le polaroid
                  className="w-full h-auto" 
                  priority // Charge cette image en priorité car elle est au dessus de la ligne de flottaison
                />
            </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;