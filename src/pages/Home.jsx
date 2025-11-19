import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Menu from '../components/Menu'
import Gallery from '../components/Gallery'

const HomePage = ({ onReserve }) => {
  return (
    <>
      <Hero name="The Shetty’s House" tagline="Where Flavour Meets Elegance." ctaText="Reserve Now" onReserve={onReserve} />
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6 text-white/80">
          {["Pure Veg + Non-Veg","Multi-cuisine restaurant","Premium ambience","Family-friendly","300+ dishes","Located in Nanded"].map((t,i)=> (
            <div key={i} className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">{t}</div>
          ))}
        </div>
      </section>
      <Menu />
      <Gallery />
    </>
  )
}

export default HomePage
