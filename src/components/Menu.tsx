import React, { useState } from "react";
import { Coffee, Tag, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface MenuItem {
  id: number;
  name: string;
  category: "coffee" | "bites";
  description: string;
  price: string;
  image: string;
  tag?: string;
}

export default function Menu() {
  const [filter, setFilter] = useState<"all" | "coffee" | "bites">("all");

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Signature Espresso",
      category: "coffee",
      description: "A concentrated, bold double shot of our house roast. Notes of rich cocoa, dark cherry, and a sweet velvety finish.",
      price: "SLE 80",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
      tag: "Popular",
    },
    {
      id: 2,
      name: "Lavender Honey Latte",
      category: "coffee",
      description: "Two shots of espresso with smooth steamed oat milk, infused with organic culinary lavender syrup and local wildflower honey.",
      price: "SLE 110",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600",
      tag: "House Special",
    },
    {
      id: 3,
      name: "Sea Salt Caramel Cold Brew",
      category: "coffee",
      description: "Our 18-hour slow-steeped cold brew topped with a thick layer of house-whipped sweet cream and premium sea salt flakes.",
      price: "SLE 115",
      image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      name: "Pistachio Cream Croissant",
      category: "bites",
      description: "Flaky, buttery double-baked French croissant generously filled with a rich, velvety Sicilian pistachio paste cream.",
      price: "SLE 90",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
      tag: "Freshly Baked",
    },
    {
      id: 5,
      name: "Avocado Bloom Toast",
      category: "bites",
      description: "Thick artisanal sourdough slice, avocado mash, roasted cherry tomatoes, crumbled Danish feta, and sunflower microgreens.",
      price: "SLE 170",
      image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 6,
      name: "Cold Brew Nitro",
      category: "coffee",
      description: "Rich, smooth, low-acid cold brew infused with nitrogen on tap. Pours with a cascade effect and a creamy Guinness-like head.",
      price: "SLE 100",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const filteredItems = filter === "all" ? menuItems : menuItems.filter(item => item.category === filter);

  return (
    <section id="menu" className="py-24 bg-coffee-light/40 border-y border-coffee-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-coffee-primary font-display font-semibold text-sm tracking-wider uppercase block mb-2">
            The Menu
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-coffee-dark tracking-tight leading-tight mb-4">
            Curated Crafts & Baked Delights
          </h2>
          <p className="font-sans text-coffee-dark/60 text-sm sm:text-base">
            Every cup and bite is prepared with high culinary precision using local, organic ingredients sourced sustainably.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { id: "all", name: "Full Menu" },
            { id: "coffee", name: "Coffee Crafts" },
            { id: "bites", name: "Sweet & Savory" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-6 py-2.5 rounded-full font-display font-medium text-sm transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? "bg-coffee-primary text-white shadow-md"
                  : "bg-white text-coffee-dark/75 hover:bg-coffee-primary/10 hover:text-coffee-primary border border-coffee-accent/15"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Menu Grid (Exact 6 items styled cleanly with hover lift effect) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-coffee-accent/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Accent Tag Overlays */}
                {item.tag && (
                  <span className="absolute top-4 left-4 bg-coffee-primary/95 text-coffee-cream text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    {item.tag}
                  </span>
                )}
                
                {/* Price Tag Overlay on Card Bottom Right */}
                <span className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-coffee-primary text-sm font-bold px-3.5 py-1.5 rounded-xl shadow-md border border-coffee-accent/10 flex items-center gap-1">
                  <Tag className="h-3.5 w-3.5" />
                  {item.price}
                </span>
              </div>

              {/* Text / Info Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-coffee-dark tracking-tight mb-2 group-hover:text-coffee-primary transition-colors duration-200">
                  {item.name}
                </h3>
                <p className="font-sans text-coffee-dark/70 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
                <div className="mt-4 pt-4 border-t border-coffee-accent/10 flex justify-between items-center text-xs text-coffee-primary font-medium tracking-wide uppercase">
                  <span>{item.category === "coffee" ? "Freshly Brewed" : "House Made"}</span>
                  <Coffee className="h-4 w-4 text-coffee-accent/60" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
