// components/Header/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/salas-de-teatro', label: 'Salas de Teatro' },
    { href: '/registro', label: 'Registro' },
    { href: '/cartelera', label: 'Cartelera' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 text-white">
      {/* Logo */}
      <Link href="#" className="text-xl font-bold">
        Teatro Principal
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="hover:text-[#E6192B] transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="#"
          className="bg-[#E6192B] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#93101B] transition-colors duration-200"
        >
          Compra de Entrada
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/90 md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-primary transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#"
              className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-center hover:bg-primary/90 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Compra de Entrada
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}