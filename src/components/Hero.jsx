import React from "react";

const Hero = ({ name, tagline, ctaText, onReserve }) => {
  return (
    <section className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      {/* Background visuals */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070&auto=format&fit=crop"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900"></div>
        {/* glow orbs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] bg-amber-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
          {name || "Your Restaurant"}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
          {tagline || "Modern cuisine crafted with seasonal ingredients and warm hospitality."}
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button onClick={onReserve} className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium shadow-lg shadow-amber-500/30 hover:shadow-rose-500/30 transition">
            {ctaText || "Book a Table"}
          </button>
          <a href="#menu" className="px-5 py-3 rounded-xl bg-white/10 text-white/90 hover:bg-white/15 transition border border-white/10">View Menu</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
