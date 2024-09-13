"use client"; // Mark the component as a Client Component

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black p-6 sticky top-0 z-50">
      <nav className="flex justify-between items-center text-white">
        {/* Logo */}
        <div className="font-bold">EMCodes</div>

        {/* Hamburger icon for smaller screens */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links (Hidden by default in small screens, displayed in large screens) */}
        <div className="hidden sm:flex space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Dropdown Menu for Mobile View */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-800 sm:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <a href="#about" className="hover:underline" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#projects" className="hover:underline" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
