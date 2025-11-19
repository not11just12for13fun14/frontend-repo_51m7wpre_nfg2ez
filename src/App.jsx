import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import MenuPage from './pages/Menu'
import AboutPage from './pages/About'
import GalleryPage from './pages/Gallery'
import ContactPage from './pages/Contact'
import LocationPage from './pages/Location'

function App() {
  const [showReserveToast, setShowReserveToast] = useState(false)
  const navigate = useNavigate()

  const handleReserve = () => {
    navigate('/contact')
    setShowReserveToast(true)
    setTimeout(() => setShowReserveToast(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0b2b24]">
      <Navbar onReserve={handleReserve} />

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage onReserve={handleReserve} />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage onReserved={() => setShowReserveToast(true)} />} />
          <Route path="/location" element={<LocationPage />} />
        </Routes>
      </main>

      {/* Floating Reserve button */}
      <button
        onClick={handleReserve}
        className="fixed bottom-6 right-6 px-5 py-3 rounded-full bg-[#c5a344] text-[#0b2b24] font-semibold shadow-lg hover:brightness-110 transition"
      >
        Reserve Now
      </button>

      {/* Toast */}
      {showReserveToast && (
        <div className="fixed bottom-24 right-6 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white/90 shadow-lg">
          Opening reservation form…
        </div>
      )}

      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-10 w-[28rem] h-[28rem] bg-[#c5a344]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-10 w-[30rem] h-[30rem] bg-[#c5a344]/10 rounded-full blur-3xl" />
      </div>

      <Footer />
    </div>
  )
}

export default App
