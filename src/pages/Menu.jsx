import React, { useMemo, useState } from 'react'

const filters = ["All","Veg","Non-Veg","Egg","Indian","Continental","Beverages","Desserts"]

const sampleData = [
  { name: 'Butter Chicken', price: 320, type: 'Non-Veg', cat: 'Indian' },
  { name: 'Paneer Tikka Masala', price: 280, type: 'Veg', cat: 'Indian' },
  { name: 'Mutton Rogan Josh', price: 380, type: 'Non-Veg', cat: 'Indian' },
  { name: 'Veg Lasagna', price: 260, type: 'Veg', cat: 'Continental' },
  { name: 'Chicken Pesto Pasta', price: 300, type: 'Non-Veg', cat: 'Continental' },
  { name: 'Loaded Paneer Tikka Pizza', price: 320, type: 'Veg', cat: 'Continental' },
  { name: 'Cold Coffee', price: 140, type: 'Veg', cat: 'Beverages' },
  { name: 'Gulab Jamun', price: 120, type: 'Veg', cat: 'Desserts' },
]

const MenuPage = () => {
  const [active, setActive] = useState('All')
  const items = useMemo(() => {
    if (active === 'All') return sampleData
    if (filters.includes(active)) {
      if (["Veg","Non-Veg","Egg"].includes(active)) return sampleData.filter(i=> i.type===active)
      return sampleData.filter(i=> i.cat===active)
    }
    return sampleData
  }, [active])

  return (
    <section className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Menu</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(f => (
            <button key={f} onClick={()=>setActive(f)} className={`px-3 py-1.5 rounded-full border text-sm ${active===f? 'bg-[#c5a344] text-[#0b2b24] border-transparent':'border-white/20 text-white/80 hover:bg-white/10'}`}>{f}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition">
              <div className="aspect-video rounded-lg overflow-hidden mb-3">
                <img src={`https://source.unsplash.com/featured/400x300/?food,${encodeURIComponent(it.name)}`} alt={it.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-white">{it.name}</h3>
                  <p className="text-xs text-white/60">{it.cat} • {it.type}</p>
                </div>
                <div className="text-[#c5a344] font-semibold">₹{it.price}</div>
              </div>
              <p className="text-sm text-white/70 mt-2">A delightful {it.type.toLowerCase()} {it.cat.toLowerCase()} classic, crafted with premium ingredients and bold flavours.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuPage
