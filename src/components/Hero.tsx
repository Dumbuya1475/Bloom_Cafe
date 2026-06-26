import { Coffee, ArrowRight } from "lucide-react";

interface HeroProps {
  onExploreMenuClick: () => void;
  onVisitUsClick: () => void;
}

export default function Hero({ onExploreMenuClick, onVisitUsClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-coffee-dark text-white overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1920"
          alt="Bloom Café warm interior cozy lights and espresso machine"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-50"
          referrerPolicy="no-referrer"
        />
        {/* Subtle radial and linear gradient overlay for elegant typography depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark via-coffee-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated small badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coffee-accent/20 backdrop-blur-md border border-coffee-accent/30 text-coffee-accent mb-6 animate-fade-in">
          <Coffee className="h-4 w-4" />
          <span className="font-display font-medium text-xs tracking-wider uppercase">
            Artisanal Specialty Coffee
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 leading-tight text-coffee-cream">
          Fresh Coffee.
          <br />
          <span className="text-coffee-accent">Warm Moments.</span>
        </h1>

        {/* Short description */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-light">
          Welcome to Bloom Café, a cozy neighborhood sanctuary where passion meets precision. We source the finest ethical beans to roast, brew, and curate beautiful shared spaces for you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            id="hero-explore-btn"
            onClick={onExploreMenuClick}
            className="w-full sm:w-auto bg-coffee-primary hover:bg-coffee-primary/90 text-white font-display font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            Explore Menu
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          
          <button
            id="hero-visit-btn"
            onClick={onVisitUsClick}
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-white font-display font-semibold px-8 py-4 rounded-full shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            Visit Us
          </button>
        </div>
      </div>

      {/* Bottom elegant scroll indicator wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 text-coffee-cream"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,17.44,83.55,25.31,185.73,53.45,263.38,64.24,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
