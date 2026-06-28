import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-coffee-cream text-coffee-dark selection:bg-coffee-accent/30 selection:text-coffee-dark">
      {/* Navbar */}
      <Navbar onBookClick={handleBookClick} />
      
      {/* Sections Container */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreMenuClick={() => scrollToSection("menu")}
          onVisitUsClick={() => scrollToSection("contact")}
        />

        {/* About Section */}
        <About />

        {/* Menu Section */}
        <Menu />

        {/* Features Section */}
        <Features />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Table Overlay Modal */}
      <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}
