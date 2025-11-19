import React, { useState } from "react";

const Contact = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get in touch</h2>
            <p className="text-white/70">Questions about reservations, private dining, or events? Send us a message and we’ll get back to you shortly.</p>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>• Reservations recommended for weekends</li>
              <li>• Private dining available for groups up to 20</li>
              <li>• Vegan and gluten-free options on request</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-4 w-full">
            <div>
              <label className="block text-white/80 text-sm mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="jane@example.com" />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Tell us about your request..." />
            </div>
            <button className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium shadow-lg shadow-amber-500/30">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
