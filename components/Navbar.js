'use client';

import { useEffect, useState, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Optional: close menu on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-purple-700">
          Pix Adventures
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          <li><a href="#hero" className="hover:text-purple-600">Inicio</a></li>
          <li><a href="#how-it-works" className="hover:text-purple-600">Cómo funciona</a></li>
          <li><a href="#cursos" className="hover:text-purple-600">Cursos</a></li>
          <li><a href="#precios" className="hover:text-purple-600">Precios</a></li>
          <li><a href="#faq" className="hover:text-purple-600">FAQ</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {isOpen && (
            <ul className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg py-2 text-sm text-gray-700 font-semibold z-50">
              <li><a href="#hero" className="block px-4 py-2 hover:bg-purple-100">Inicio</a></li>
              <li><a href="#how-it-works" className="block px-4 py-2 hover:bg-purple-100">Cómo funciona</a></li>
              <li><a href="#cursos" className="block px-4 py-2 hover:bg-purple-100">Cursos</a></li>
              <li><a href="#precios" className="block px-4 py-2 hover:bg-purple-100">Precios</a></li>
              <li><a href="#faq" className="block px-4 py-2 hover:bg-purple-100">FAQ</a></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
