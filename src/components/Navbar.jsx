import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ onReserve }) => {
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about', label: 'About' },
    { to: '/location', label: 'Location' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0b2b24]/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#c5a344] grid place-items-center text-[#0b2b24] font-black">SH</div>
          <span className="text-white/90 font-semibold tracking-wide group-hover:text-white transition-colors">The Shetty’s House</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={({isActive}) => `px-2 py-1 rounded hover:text-white transition ${isActive? 'text-[#c5a344]':'text-white/70'}`}>{n.label}</NavLink>
          ))}
        </nav>
        <button onClick={onReserve} className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c5a344] text-[#0b2b24] font-semibold shadow-lg hover:brightness-110 transition">
          Reserve
        </button>
        <Link to="/contact" className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#c5a344] text-[#0b2b24] text-sm">Reserve</Link>
      </div>
    </header>
  );
};

export default Navbar;
