import React from "react";

const FeatureCard = ({ title, description, icon }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition group">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white grid place-items-center shadow-lg shadow-amber-500/20 mb-4">
      {icon}
    </div>
    <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
    <p className="text-white/70 text-sm leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "Seasonal Menu",
      description:
        "Locally sourced ingredients crafted into dishes that celebrate the season.",
      icon: <span className="font-bold">S</span>,
    },
    {
      title: "Craft Cocktails",
      description:
        "Signature drinks and a curated wine list designed to complement your meal.",
      icon: <span className="font-bold">C</span>,
    },
    {
      title: "Private Dining",
      description:
        "Intimate spaces perfect for celebrations, business dinners, or special occasions.",
      icon: <span className="font-bold">P</span>,
    },
  ];

  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
