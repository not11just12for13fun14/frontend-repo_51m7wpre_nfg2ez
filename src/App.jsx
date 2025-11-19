import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'

function App() {
  const [showReserveToast, setShowReserveToast] = useState(false)

  const handleReserve = () => {
    setShowReserveToast(true)
    setTimeout(() => setShowReserveToast(false), 2500)
  }

  // Placeholder details; if you share the exact place details, I'll wire them in.
  const details = {
    name: 'Your Restaurant',
    tagline: 'Elevated dining with seasonal flavors and warm hospitality.',
    phone: '',
    address: 'Share the exact address to update',
    hours: 'Mon–Thu 12:00–22:00\nFri–Sat 12:00–23:00\nSun 12:00–21:00',
    mapsUrl: 'https://maps.app.goo.gl/79azUDqwpz23zZW5',
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onReserve={handleReserve} />

      <main className="pt-16">
        <Hero name={details.name} tagline={details.tagline} ctaText="Reserve Now" onReserve={handleReserve} />
        <Features />
        <Menu />
        <Gallery />
        <Location address={details.address} phone={details.phone} hours={details.hours} mapsUrl={details.mapsUrl} />
        <Contact onSubmit={() => setShowReserveToast(true)} />
      </main>

      {/* Toast */}
      {showReserveToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white/90 shadow-lg">
          Thanks! We will confirm your reservation shortly.
        </div>
      )}

      {/* Soft background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-10 w-[28rem] h-[28rem] bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-10 w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  )
}

export default App
