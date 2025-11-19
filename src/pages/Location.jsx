import React from 'react'

const LocationPage = () => {
  return (
    <section className="py-16 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Location & Directions</h1>
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
          <p className="text-white/80">NO. 1-18-1121, Beside Rama Sales, Vasant Nagar, Hyder Bagh, Dashmesh Nagar, Nanded, Maharashtra 431602, India</p>
          <ul className="mt-4 text-white/70 text-sm space-y-2">
            <li>• Landmark: Beside Rama Sales</li>
            <li>• Parking available nearby</li>
            <li>• Auto stand within walking distance</li>
            <li>• Easy public transport access</li>
          </ul>
          <a href="https://maps.app.goo.gl/79azUDqwpz23zZW56" className="inline-block mt-4 px-4 py-2 rounded-lg bg-[#c5a344] text-[#0b2b24] font-semibold" target="_blank" rel="noreferrer">Open in Google Maps</a>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[360px] bg-black/20 mt-6">
          <iframe title="Map" className="w-full h-full min-h-[360px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=The%20Shetty%E2%80%99s%20House%20Nanded&output=embed"></iframe>
        </div>
      </div>
    </section>
  )
}

export default LocationPage
