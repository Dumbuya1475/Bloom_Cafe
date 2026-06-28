import React from "react";
import { Coffee, Wifi, Cookie, Smile } from "lucide-react";
import { motion } from "motion/react";

interface Feature {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function Features() {
  const features: Feature[] = [
    {
      id: 1,
      icon: Coffee,
      title: "Freshly Brewed Coffee",
      description: "Organic, ethically sourced specialty beans roasted in micro-batches and brewed with surgical accuracy.",
    },
    {
      id: 2,
      icon: Wifi,
      title: "Free High-Speed Wi-Fi",
      description: "Blazing fast fiber internet with plenty of power outlets. The ultimate setup for remote work or study.",
    },
    {
      id: 3,
      icon: Cookie,
      title: "Fresh Artisanal Pastries",
      description: "Baked daily at dawn by our pastry chefs. Organic flour, local butter, and no artificial preservatives.",
    },
    {
      id: 4,
      icon: Smile,
      title: "Warm Friendly Staff",
      description: "Our baristas are coffee nerds who love their craft and are always happy to help you find your perfect blend.",
    },
  ];

  return (
    <section className="py-24 bg-coffee-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-coffee-primary font-display font-semibold text-sm tracking-wider uppercase block mb-2">
            Why Choose Us
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-coffee-dark tracking-tight leading-tight">
            Designed for Coffee Enthusiasts
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-white rounded-3xl p-8 border border-coffee-accent/10 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className="bg-coffee-light text-coffee-primary p-4 rounded-2xl mb-6 transition-all duration-300 group-hover:bg-coffee-primary group-hover:text-white group-hover:scale-110 shadow-inner">
                  <IconComponent className="h-7 w-7" />
                </div>

                {/* Text Description */}
                <h3 className="font-display font-bold text-lg text-coffee-dark mb-3 group-hover:text-coffee-primary transition-colors duration-200">
                  {feat.title}
                </h3>
                
                <p className="font-sans text-coffee-dark/60 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
