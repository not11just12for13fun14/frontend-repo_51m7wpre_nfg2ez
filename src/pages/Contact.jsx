import React, { useState } from 'react'

const ContactPage = ({ onReserved }) => {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: 2, request: '' })
  const [toast, setToast] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setToast('Thanks! We have received your reservation request.')
    onReserved?.(form)
    setTimeout(()=> setToast(''), 2500)
  }

  return (
    <section className="py-16 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Contact & Reservations</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-4 w-full">
            <div>
              <label className="block text-white/80 text-sm mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#c5a344]" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#c5a344]" placeholder="+91 98XXXXXX" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-white/80 text-sm mb-1">Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#c5a344]" />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-1">Time</label>
                <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#c5a344]" />
              </div>
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1">Guests</label>
              <input type="number" min={1} max={20} name="guests" value={form.guests} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#c5a344]" />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1">Special Request</label>
              <textarea name="request" value={form.request} onChange={handleChange} rows={3} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#c5a344]" placeholder="Allergies, celebrations, etc." />
            </div>
            <button className="w-full px-4 py-2 rounded-xl bg-[#c5a344] text-[#0b2b24] font-semibold shadow-lg hover:brightness-110 transition">Book a Table</button>
            {toast && <div className="text-center text-sm text-white/80">{toast}</div>}
          </form>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold text-white">The Shetty’s House</h3>
              <p className="text-white/70 mt-2">NO. 1-18-1121, Beside Rama Sales, Vasant Nagar, Hyder Bagh, Dashmesh Nagar, Nanded, Maharashtra 431602, India</p>
              <p className="text-white/70 mt-2">Phone: +91 99999 99999</p>
              <p className="text-white/70">Email: hello@theshettyshouse.com</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[320px] bg-black/20">
              <iframe title="Map" className="w-full h-full min-h-[320px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7275307157405!2d77.304!3d19.153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sThe%20Shetty%E2%80%99s%20House!5e0!3m2!1sen!2sin!4v1710000000000"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
