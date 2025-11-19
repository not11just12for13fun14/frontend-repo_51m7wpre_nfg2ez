import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0b2b24] text-white/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c5a344] grid place-items-center text-[#0b2b24] font-black">SH</div>
            <div className="text-white font-semibold text-lg">The Shetty’s House</div>
          </div>
          <p className="mt-3 text-sm text-white/70">Where Flavour Meets Elegance.</p>
          <p className="mt-3 text-sm text-white/60">Premium multi-cuisine dining in Nanded with an ambience crafted for memories.</p>
        </div>
        <div>
          <h4 className="text-[#c5a344] font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/location" className="hover:text-white">Location</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#c5a344] font-semibold mb-3">Opening Hours</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Mon–Thu: 12:00 – 22:30</li>
            <li>Fri–Sat: 12:00 – 23:00</li>
            <li>Sun: 12:00 – 22:00</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#c5a344] font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Phone: +91 99999 99999</li>
            <li>Email: hello@theshettyshouse.com</li>
            <li>Address: NO. 1-18-1121, Beside Rama Sales, Vasant Nagar, Hyder Bagh, Dashmesh Nagar, Nanded, Maharashtra 431602</li>
          </ul>
          <form className="mt-4 flex gap-2">
            <input type="email" placeholder="Subscribe to newsletter" className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-[#c5a344]" />
            <button className="px-4 py-2 rounded-lg bg-[#c5a344] text-[#0b2b24] font-medium hover:brightness-110 transition">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} The Shetty’s House. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
