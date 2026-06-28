import { useState, useEffect } from "react";
import { Coffee, Menu, X } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section for high-contrast indicator
      const sections = ["home", "about", "menu", "reviews", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-coffee-cream/95 backdrop-blur-md shadow-md py-3 border-b border-coffee-accent/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick("#home")}>
            <div className="bg-coffee-primary text-coffee-cream p-2 rounded-full shadow-inner">
              <Coffee className="h-6 w-6" />
            </div>
            <span className={`font-display font-bold text-2xl tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-coffee-primary" : "text-coffee-cream"
            }`}>
              Bloom Café
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative font-medium text-sm transition-colors duration-200 py-2 ${
                    isActive
                      ? isScrolled
                        ? "text-coffee-primary font-semibold"
                        : "text-coffee-accent font-semibold"
                      : isScrolled
                        ? "text-coffee-dark/70 hover:text-coffee-primary"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${
                      isScrolled ? "bg-coffee-primary" : "bg-coffee-accent"
                    }`} />
                  )}
                </a>
              );
            })}
          </div>

          {/* Book Table Button */}
          <div className="hidden md:block">
            <button
              id="nav-book-btn"
              onClick={onBookClick}
              className={`px-5 py-2.5 rounded-full font-display font-medium text-sm shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 ${
                isScrolled
                  ? "bg-coffee-primary text-white hover:bg-coffee-primary/90"
                  : "bg-coffee-cream text-coffee-dark hover:bg-white"
              }`}
            >
              Book Table
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden">
            <button
              id="hamburger-btn"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 focus:outline-none transition-colors duration-200 ${
                isScrolled
                  ? "text-coffee-dark/80 hover:text-coffee-primary"
                  : "text-white hover:text-coffee-accent"
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-coffee-cream border-b border-coffee-accent/10 shadow-lg absolute top-full left-0 w-full transition-all duration-300 z-50">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-coffee-primary/10 text-coffee-primary font-semibold"
                      : "text-coffee-dark/70 hover:bg-coffee-light hover:text-coffee-primary"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 px-4">
              <button
                id="mobile-nav-book-btn"
                onClick={() => {
                  setIsOpen(false);
                  onBookClick();
                }}
                className="w-full bg-coffee-primary text-white hover:bg-coffee-primary/90 px-4 py-3 rounded-full font-display font-semibold text-center shadow-md transition-colors"
              >
                Book Table
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
