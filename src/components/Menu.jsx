import React from "react";

const Menu = ({ items = [] }) => {
  const demo =
    items.length > 0
      ? items
      : [
          { category: "Starters", name: "Heirloom Tomato Salad", price: "$14", desc: "Burrata, basil oil, balsamic glaze" },
          { category: "Starters", name: "Crispy Calamari", price: "$16", desc: "Lemon aioli, pickled chilies" },
          { category: "Mains", name: "Seared Salmon", price: "$28", desc: "Citrus beurre blanc, asparagus" },
          { category: "Mains", name: "Truffle Pasta", price: "$24", desc: "Wild mushrooms, pecorino, herbs" },
          { category: "Desserts", name: "Chocolate Fondant", price: "$12", desc: "Vanilla gelato, hazelnut crumble" },
          { category: "Desserts", name: "Lemon Tart", price: "$11", desc: "Meringue, raspberry coulis" }
        ];

  const grouped = demo.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <section id="menu" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Menu Highlights</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(grouped).map(([cat, list]) => (
            <div key={cat} className="bg-white/5 rounded-2xl border border-white/10 p-6">
              <h3 className="text-white/90 font-semibold text-xl mb-4">{cat}</h3>
              <ul className="space-y-4">
                {list.map((it, idx) => (
                  <li key={idx} className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-white/90 font-medium">{it.name}</p>
                      <p className="text-white/60 text-sm">{it.desc}</p>
                    </div>
                    <span className="text-amber-400 font-semibold">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
