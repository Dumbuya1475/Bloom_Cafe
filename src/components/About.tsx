import { Heart, Globe, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-coffee-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Overlapping Images for Craftsmanship Aesthetic */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Back background aesthetic frame decoration */}
              <div className="absolute inset-0 bg-coffee-accent/15 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
              
              {/* Primary craft image */}
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1200"
                alt="Slow artisan coffee brewing and beans pouring"
                className="w-full h-auto aspect-[4/3] object-cover rounded-3xl shadow-xl border border-coffee-accent/10"
                referrerPolicy="no-referrer"
              />

              {/* Smaller overlay badge or card style detail to enhance craft layout */}
              <div className="absolute -bottom-6 -right-6 sm:-right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-coffee-accent/10 hidden sm:block">
                <div className="flex gap-4 items-center">
                  <div className="bg-coffee-light p-3 rounded-xl text-coffee-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-coffee-dark text-sm">Award Winning</h4>
                    <p className="font-sans text-xs text-coffee-dark/60 mt-0.5">Voted Best Local Roaster 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Warm, inviting Story Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            {/* Header section */}
            <div className="mb-6">
              <span className="text-coffee-primary font-display font-semibold text-sm tracking-wider uppercase block mb-2">
                Our Heritage
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-coffee-dark tracking-tight leading-tight">
                Crafting Exceptional Moments, One Cup at a Time
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-coffee-dark/80 font-sans text-base leading-relaxed">
              <p>
                Founded in 2021, Bloom Café began as a humble dream in a small, brick-walled nook with one simple purpose: to bring communities together over exceptional, carefully crafted specialty coffee.
              </p>
              <p>
                We believe that great coffee is an art form. Our single-origin coffee beans are ethically sourced from sustainable family-owned farms around the globe, roasted locally in micro-batches, and brewed with meticulous care to honor their unique floral, fruit, and nutty profiles.
              </p>
              <p>
                Whether you are stepping in for your daily espresso, working on your next big creative project, or meeting old friends, Bloom Café is designed to be your serene neighborhood sanctuary.
              </p>
            </div>

            {/* Mini Core Values Icons */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-3">
                <div className="bg-coffee-primary/10 text-coffee-primary p-2 rounded-lg mt-1">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-coffee-dark text-sm">100% Ethical</h4>
                  <p className="font-sans text-xs text-coffee-dark/60 mt-0.5">Sourced from fair-trade farms</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-coffee-primary/10 text-coffee-primary p-2 rounded-lg mt-1">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-coffee-dark text-sm">Eco Conscious</h4>
                  <p className="font-sans text-xs text-coffee-dark/60 mt-0.5">Zero-waste composting practices</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
