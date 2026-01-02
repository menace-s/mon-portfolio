"use client";
import Link from 'next/link';
import { useState } from 'react';
// 1. On importe Orbitron (Le style Sci-Fi / Asimovian / Speed)
import { Orbitron } from 'next/font/google';

// 2. Configuration de la police pour le logo
const logoFont = Orbitron({
  weight: '900', // Très gras pour l'impact
  subsets: ['latin'],
});

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Les sections de ton portfolio
  const navItems = [
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Stack technique', href: '#stack' },
    { name: 'Mon Cv', href: '#cv' },
  ];

  return (
    // CONTENEUR PRINCIPAL
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      
      {/* LA NAVBAR "Capsule" */}
      <nav className="w-full max-w-5xl bg-white/60 backdrop-blur-sm border border-[#bdbdbd] rounded-[20px] px-8 py-4 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

        {/* 1. LOGO AKJP (Style Orbitron / Speed) */}
        <Link href="/" className="group relative flex items-center">
            <span 
              className={`${logoFont.className} text-3xl md:text-3xl tracking-widest`} 
              style={{
                // LE DÉGRADÉ WARMR
                background: 'linear-gradient(180deg, #FFD065 0%, #E6A23C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                // Ombre portée fine
                filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.15))'
              }}
            >
              AKJP
            </span>
        </Link>

        {/* 2. LIENS (Desktop - Cachés sur mobile) */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-gray-600 text-lg  hover:text-black hover:scale-105 transition-all duration-200 relative group"
            >
              {item.name}
              {/* Petit point jaune au survol */}
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#FFD065] rounded-full transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2"></span>
            </Link>
          ))}
        </div>

        {/* 3. BURGER MENU (Mobile) */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>

      </nav>

      {/* MENU MOBILE DÉROULANT */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-6 right-6 bg-white rounded-[32px] shadow-2xl border border-gray-100 p-6 flex flex-col gap-2 md:hidden animate-in fade-in slide-in-from-top-5">
          {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                // STYLE FIXÉ : Jaune pâle Warmr + Texte Noir
                className="text-gray-600 text-xl p-4 hover:bg-[#FFF8E8] hover:text-black rounded-2xl transition-colors text-center"
              >
                {item.name}
              </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;