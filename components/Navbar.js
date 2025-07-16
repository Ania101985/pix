// components/Navbar.js
'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white shadow-md z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-purple-700">Pix Adventures</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          <li><a href="#hero" className="hover:text-purple-600">Inicio</a></li>
          <li><a href="#how-it-works" className="hover:text-purple-600">Cómo funciona</a></li>
          <li><a href="#cursos" className="hover:text-purple-600">Cursos</a></li>
          <li><a href="#precios" className="hover:text-purple-600">Precios</a></li>
          <li><a href="#faq" className="hover:text-purple-600">FAQ</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden relative">
          <button
            className="text-gray-700 focus:outline-none text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Mobile Dropdown Menu (Right-Aligned) */}
          {isClient && isOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 text-sm text-gray-700 font-semibold z-50">
              <li><a href="#hero" className="block px-4 py-2 hover:bg-purple-100">Inicio</a></li>
              <li><a href="#how-it-works" className="block px-4 py-2 hover:bg-purple-100">Cómo funciona</a></li>
              <li
