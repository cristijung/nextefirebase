'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header className="w-full bg-white shadow-md sticky top-0 z-50">      
      <div className="h-1.5 w-full bg-linear-to-r from-purple-600 via-pink-500 to-yellow-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* logo / nome do app */}
          <div className="shrink-0 flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-black tracking-tight focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-lg p-1 group"
              aria-label="PurrfectCare Home"
            >
              <span className="bg-linear-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent group-hover:to-yellow-500 transition-all duration-300">
                Purrfect
              </span>
              <span className="text-slate-800">Care</span>
            </Link>
          </div>

          {/* desktop navigation */}
          <nav className="hidden md:flex space-x-8 items-center" aria-label="Navegação Principal">
            <Link 
              href="/dashboard" 
              className="text-base font-medium text-slate-600 hover:text-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-md px-2 py-1"
            >
              Dashboard
            </Link>
            <Link 
              href="/consultas" 
              className="text-base font-medium text-slate-600 hover:text-pink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-md px-2 py-1"
            >
              Consultas
            </Link>
            <Link 
              href="/pets" 
              className="text-base font-medium text-slate-600 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md px-2 py-1"
            >
              Meus Gatos
            </Link>
            
            {/* btn CTA */}
            <Link
              href="/agendamento"
              className="ml-4 inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-orange-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Agendar Consulta
            </Link>
          </nav>

          {/* btn menu mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-purple-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? (
                // ícone de (X)
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // ícone de hambúrguer
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div 
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-slate-100 bg-white`} 
        id="mobile-menu"
      >
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3 shadow-inner" aria-label="Navegação Mobile">
          <Link
            href="/dashboard"
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/consultas"
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:text-pink-500 hover:bg-pink-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Consultas
          </Link>
          <Link
            href="/pets"
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:text-orange-500 hover:bg-orange-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Meus Gatos
          </Link>
          
          <div className="pt-4 pb-2 border-t border-slate-100 mt-2 px-3">
            <Link
              href="/agendamento"
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500 shadow-md transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar Consulta
            </Link>
          </div>
        </nav>
      </div>
    </header>
    </>
  );
}