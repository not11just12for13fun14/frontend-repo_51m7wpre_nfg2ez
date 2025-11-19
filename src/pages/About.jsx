import React from 'react'

const milestones = [
  { year: '2020', text: 'Idea Conceptualized' },
  { year: '2021', text: 'Menu R&D' },
  { year: '2022', text: 'Launch' },
  { year: '2024', text: 'Expansion into multi-cuisine' },
]

const AboutPage = () => {
  return (
    <section className="py-16 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h1>
        <p className="text-white/80 leading-relaxed">Heritage-inspired Indian cuisine meets modern culinary artistry at The Shetty’s House. We celebrate local flavours from Nanded and beyond, crafting refined plates with premium ingredients and warm hospitality. Family-friendly and service-driven, we blend tradition and innovation across Indian, Continental, Tandoori, and more.</p>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {milestones.map((m, i) => (
            <div key={i} className="bg-white/5 rounded-xl border border-white/10 p-5">
              <div className="text-[#c5a344] font-semibold">{m.year}</div>
              <div className="text-white/90 mt-1">{m.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutPage
