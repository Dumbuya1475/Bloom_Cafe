import { Coffee, Instagram, Facebook, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const handleLinkClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-coffee-dark text-coffee-cream/70 border-t border-coffee-accent/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Logo / Tagline Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick("#home")}>
              <div className="bg-coffee-primary text-coffee-cream p-2 rounded-full shadow-inner">
                <Coffee className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Bloom Café
              </span>
            </div>
            <p className="font-sans text-sm text-coffee-cream/60 max-w-sm leading-relaxed">
              Brewing exceptional specialty coffee, offering artisan delicacies, and creating beautiful, cozy community sanctuaries in the heart of the city.
            </p>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-base tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Menu", href: "#menu" },
                { name: "Reviews", href: "#reviews" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Column (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-white text-base tracking-wide">Follow the Bloom</h4>
            <p className="font-sans text-sm text-coffee-cream/60 leading-relaxed">
              Tag us in your moments using <span className="text-white font-medium">#BloomCafe</span> for a chance to be featured!
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-coffee-primary hover:text-white p-3 rounded-full transition-all duration-200 text-coffee-cream"
                aria-label="Instagram link"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-coffee-primary hover:text-white p-3 rounded-full transition-all duration-200 text-coffee-cream"
                aria-label="Facebook link"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-coffee-primary hover:text-white p-3 rounded-full transition-all duration-200 text-coffee-cream"
                aria-label="Twitter link"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-coffee-cream/40">
          <div>
            © {new Date().getFullYear()} Bloom Café. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-light">
            Crafted with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> for coffee lovers.
          </div>
        </div>

      </div>
    </footer>
  );
}
