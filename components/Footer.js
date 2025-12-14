const Footer = () => {
  return (
    // W-FULL : Prend toute la largeur
    // border-t-2 border-[#491D04] : La ligne de séparation style Brutalism
    <footer className="w-full bg-white border-t-2 border-[#491D04] py-8 mt-auto">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* GAUCHE : Copyright */}
        <div className="flex items-center gap-2">
           <span className="text-xl">⚡️</span>
           <p className="font-bold text-[#491D04] text-sm md:text-base">
             © 2025 AKJP. Tous droits réservés.
           </p>
        </div>

        {/* DROITE : Mention du style */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500 font-medium">Fait avec ❤️ et le style</span>
          
          {/* Badge Neo-Brutalism Interactif */}
          <span className="bg-[#FFD065] text-[#491D04] px-3 py-1 rounded-lg border-2 border-[#491D04] font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_#491D04] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default">
            Neo-Brutalism
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;