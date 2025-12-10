// components/Card.js

const Card = ({ titre, desc, id }) => {
  return (
    // Container blanc, TRES arrondi (rounded-[2.5rem]), ombre douce
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 flex flex-col justify-between h-full">
      
      <div>
        {/* Petit numéro ou icône décorative en haut à droite */}
        <div className="w-full flex justify-between items-start mb-6">
           <div className="bg-[#FFF8E8] text-orange-500 font-bold px-4 py-2 rounded-xl text-sm">
             Step {id}
           </div>
           {/* Icône décorative jaune simple */}
           <div className="w-10 h-10 rounded-full border-2 border-[#FFD065] flex items-center justify-center">
             <div className="w-2 h-2 bg-[#FFD065] rounded-full"></div>
           </div>
        </div>

        {/* Titre large et gras */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
          {titre}
        </h2>

        {/* Description grise */}
        <p className="text-gray-500 text-lg leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Ligne décorative en bas (optionnel, pour faire "fini") */}
      <div className="mt-8 pt-6 border-t border-gray-50">
        <button className="text-sm font-bold text-gray-900 flex items-center gap-2 group">
          En savoir plus 
          <span className="group-hover:translate-x-1 transition-transform">...</span>
        </button>
      </div>

    </div>
  );
};

export default Card;