import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1541542684-4a8dda2d15b6?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541870730196-cd1efcbf5646?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1428515613728-6b4607e44363?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1974&auto=format&fit=crop',
]

const GalleryPage = () => {
  return (
    <section className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl">
              <img src={src} alt="Restaurant" className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryPage
