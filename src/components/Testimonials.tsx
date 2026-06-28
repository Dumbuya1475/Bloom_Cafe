import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  feedback: string;
  avatar: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Amadu Kamara",
      role: "Coffee Aficionado",
      rating: 5,
      feedback: "The Lavender Honey Latte is absolutely life-changing. Easily the best specialty coffee shop in the city! The staff is so welcoming and the atmosphere is serene and perfect for reading or quiet contemplation.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: 2,
      name: "Fatmata Dumbuya",
      role: "Freelance Designer",
      rating: 5,
      feedback: "Bloom Café is my ultimate remote workspace. The high-speed fiber internet is incredibly fast, and their freshly baked pistachio croissant is out of this world. It is clean, spacious, and filled with plants.",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: 3,
      name: "Sahr Mansaray",
      role: "Local Writer",
      rating: 5,
      feedback: "A beautiful neighborhood sanctuary! Their cold brew nitro pours like a draught beer and has an unbelievably smooth finish. You can really tell they care deeply about roasting single-origin beans.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-coffee-light/30 border-t border-coffee-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-coffee-primary font-display font-semibold text-sm tracking-wider uppercase block mb-2">
            Reviews
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-coffee-dark tracking-tight leading-tight">
            Loved by Our Community
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-8 border border-coffee-accent/10 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Decorative Quote Icon on Top Right */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-coffee-accent/10 transform rotate-180" />

              <div>
                {/* Stars Rating Row */}
                <div className="flex gap-1 mb-5">
                  {[...Array(test.rating)].map((_, idx) => (
                    <Star key={idx} className="h-4.5 w-4.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Feedback Body */}
                <p className="font-sans text-coffee-dark/85 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{test.feedback}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-coffee-accent/10 mt-2">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-coffee-accent/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-coffee-dark text-sm sm:text-base">
                    {test.name}
                  </h4>
                  <p className="font-sans text-xs text-coffee-dark/50 font-medium">
                    {test.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
