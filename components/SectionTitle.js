const SectionTitle = ({ pill, title, subtitle, align = 'center' }) => {
  // Gestion de l'alignement (gauche ou centré)
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center';
  const mxClass = align === 'left' ? '' : 'mx-auto';

  return (
    <div className={`flex flex-col ${alignClass} mb-16 max-w-4xl ${mxClass}`}>
      
      {/* 1. LE BADGE "PILL" STYLE WARMR */}
      {pill && (
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.03)] mb-6">
          {/* Petite icône décorative (Etoile/Etincelle) */}
          <span className="text-[#FFD065]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </span>
          <span className="text-sm font-bold text-[#491D04] tracking-wide uppercase">
            {pill}
          </span>
        </div>
      )}

      {/* 2. LE TITRE PRINCIPAL */}
      {/* <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15] mb-6">
        {title}
      </h2> */}

      {/* 3. LE SOUS-TITRE */}
      {subtitle && (
        <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
      
    </div>
  );
};

export default SectionTitle;