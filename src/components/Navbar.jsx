import React from "react";

const Navbar = ({ onReserve }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 shadow-lg shadow-amber-500/20 grid place-items-center">
            <span className="text-white font-black">R</span>
          </div>
          <span className="text-white/90 font-semibold tracking-wide group-hover:text-white transition-colors">Your Restaurant</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="text-white/70 hover:text-white transition">About</a>
          <a href="#menu" className="text-white/70 hover:text-white transition">Menu</a>
          <a href="#gallery" className="text-white/70 hover:text-white transition">Gallery</a>
          <a href="#location" className="text-white/70 hover:text-white transition">Location</a>
          <a href="#contact" className="text-white/70 hover:text-white transition">Contact</a>
        </nav>
        <button onClick={onReserve} className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition">
          Reserve
        </button>
        <a href="#contact" className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500 text-white text-sm">Reserve</a>
      </div>
    </header>
  );
};

export default Navbar;
