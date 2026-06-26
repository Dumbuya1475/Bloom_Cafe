import React, { useState } from "react";
import { MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-coffee-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-coffee-primary font-display font-semibold text-sm tracking-wider uppercase block mb-2">
            Connect
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-coffee-dark tracking-tight leading-tight">
            Drop by or Get in Touch
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Contact Details (5 cols) */}
          <div className="lg:col-span-5 bg-coffee-dark text-coffee-cream rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-coffee-accent/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 space-y-10">
              <h3 className="font-display font-extrabold text-2xl tracking-tight text-white mb-6">
                Café Information
              </h3>

              {/* Info blocks */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-coffee-accent/20 text-coffee-accent p-3.5 rounded-xl h-fit">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Our Address</h4>
                    <p className="font-sans text-sm text-white/75 mt-1 leading-relaxed">
                      128 Bloom Alley, Coffee District
                      <br />
                      New York, NY 10012
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-coffee-accent/20 text-coffee-accent p-3.5 rounded-xl h-fit">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Phone Number</h4>
                    <p className="font-sans text-sm text-white/75 mt-1">
                      +1 (555) 321-7890
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-coffee-accent/20 text-coffee-accent p-3.5 rounded-xl h-fit">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Opening Hours</h4>
                    <div className="font-sans text-sm text-white/75 mt-1.5 space-y-1">
                      <div className="flex justify-between w-48">
                        <span>Mon - Fri:</span>
                        <span className="font-medium">7:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between w-48">
                        <span>Sat - Sun:</span>
                        <span className="font-medium">8:00 AM - 9:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro aesthetic note */}
            <div className="relative z-10 pt-10 border-t border-white/10 mt-10 text-xs text-white/50 leading-relaxed font-light">
              * Note: We are a walk-in friendly space, but table bookings can be requested in advance via our reservation modal above.
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-coffee-accent/10 shadow-sm flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center max-w-md mx-auto">
                <div className="bg-green-100 text-green-600 p-4 rounded-full mb-6">
                  <CheckCircle className="h-12 w-12" />
                </div>
                <h3 className="font-display font-bold text-2xl text-coffee-dark mb-3">
                  Message Sent!
                </h3>
                <p className="font-sans text-coffee-dark/70 text-sm sm:text-base leading-relaxed mb-8">
                  Thank you, <span className="font-semibold text-coffee-primary">{formData.name}</span>. We've received your note and will get back to you at <span className="font-medium text-coffee-dark">{formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-coffee-primary text-white hover:bg-coffee-primary/90 px-6 py-2.5 rounded-full font-display font-medium text-sm transition-colors duration-200 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-display font-extrabold text-2xl text-coffee-dark tracking-tight mb-4">
                  Send Us a Message
                </h3>
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-coffee-dark/70 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-coffee-light/20 border border-coffee-accent/15 focus:border-coffee-primary focus:ring-1 focus:ring-coffee-primary rounded-xl px-4 py-3 text-sm text-coffee-dark placeholder-coffee-dark/30 outline-none transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-coffee-dark/70 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-coffee-light/20 border border-coffee-accent/15 focus:border-coffee-primary focus:ring-1 focus:ring-coffee-primary rounded-xl px-4 py-3 text-sm text-coffee-dark placeholder-coffee-dark/30 outline-none transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-coffee-dark/70 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    className="w-full bg-coffee-light/20 border border-coffee-accent/15 focus:border-coffee-primary focus:ring-1 focus:ring-coffee-primary rounded-xl px-4 py-3 text-sm text-coffee-dark placeholder-coffee-dark/30 outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-coffee-primary text-white hover:bg-coffee-primary/95 font-display font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
