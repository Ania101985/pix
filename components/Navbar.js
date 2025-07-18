'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'; // Optional for route navigation

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on link click
  const handleMenuClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-purple-700">
          Pix Adventures
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          <li><a href="#hero" className="hover:text-purple-600">Inicio</a></li>
          <li><a href="#how-it-works" className="hover:text-purple-600">Cómo funciona</a></li>
          <li><a href="#cursos" className="hover:text-purple-600">Cursos</a></li>
          <li><a href="#precios" className="hover:text-purple-600">Precios</a></li>
          <li><a href="#faq" className="hover:text-purple-600">FAQ</a></li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden relative" ref={menuRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Mobile Menu */}
          <div
            className={`absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg py-2 text-sm text-gray-700 font-semibold z-50 transition-all duration-200 origin-top-right transform ${
              isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
            }`}
          >
            <ul onClick={handleMenuClick}>
              <li><a href="#hero" className="block px-4 py-2 hover:bg-purple-100">Inicio</a></li>
              <li><a href="#how-it-works" className="block px-4 py-2 hover:bg-purple-100">Cómo funciona</a></li>
              <li><a href="#cursos" className="block px-4 py-2 hover:bg-purple-100">Cursos</a></li>
              <li><a href="#precios" className="block px-4 py-2 hover:bg-purple-100">Precios</a></li>
              <li><a href="#faq" className="block px-4 py-2 hover:bg-purple-100">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
