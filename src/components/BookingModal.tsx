import React, { useState } from "react";
import { X, Calendar, Users, Clock, Check, Sparkles } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "2",
    date: "",
    time: "10:00 AM",
    requests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [bookingCode, setBookingCode] = useState("");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date || !formData.time) return;

    setIsSubmitting(true);
    // Simulate booking API call
    setTimeout(() => {
      // Generate a random confirmation code
      const randomCode = "BLM-" + Math.floor(1000 + Math.random() * 9000);
      setBookingCode(randomCode);
      setIsSubmitting(false);
      setIsBooked(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      guests: "2",
      date: "",
      time: "10:00 AM",
      requests: "",
    });
    setIsBooked(false);
    onClose();
  };

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Dark overlay backdrop with blur */}
      <div className="fixed inset-0 bg-coffee-dark/60 backdrop-blur-sm transition-opacity" onClick={handleReset} />

      {/* Modal Box */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-coffee-accent/15 z-10 transform transition-all animate-fade-in my-8">
        
        {/* Modal Header */}
        <div className="bg-coffee-dark text-white px-6 py-5 flex items-center justify-between relative">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-coffee-accent" />
            <h3 className="font-display font-extrabold text-lg tracking-tight">Reserve a Table</h3>
          </div>
          <button
            onClick={handleReset}
            className="text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors outline-none cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isBooked ? (
            /* Success State */
            <div className="text-center py-6 flex flex-col items-center">
              <div className="bg-green-500 text-white p-4 rounded-full mb-6 shadow-inner animate-bounce">
                <Check className="h-10 w-10" />
              </div>
              <h4 className="font-display font-bold text-2xl text-coffee-dark mb-2">
                Booking Confirmed!
              </h4>
              <p className="font-sans text-xs uppercase tracking-widest text-coffee-primary font-bold mb-6 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-coffee-accent" />
                Confirmation Code: <span className="bg-coffee-light/50 px-2 py-0.5 rounded text-coffee-dark border border-coffee-accent/25">{bookingCode}</span>
              </p>

              {/* Booking Summary Box */}
              <div className="bg-coffee-light/20 border border-coffee-accent/15 rounded-2xl p-5 w-full space-y-3.5 mb-8 text-sm text-left">
                <div className="flex justify-between border-b border-coffee-accent/10 pb-2">
                  <span className="text-coffee-dark/60 font-sans">Name:</span>
                  <span className="text-coffee-dark font-semibold font-sans">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-coffee-accent/10 pb-2">
                  <span className="text-coffee-dark/60 font-sans">Guests:</span>
                  <span className="text-coffee-dark font-semibold font-sans">{formData.guests} people</span>
                </div>
                <div className="flex justify-between border-b border-coffee-accent/10 pb-2">
                  <span className="text-coffee-dark/60 font-sans">Date:</span>
                  <span className="text-coffee-dark font-semibold font-sans">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-dark/60 font-sans">Time:</span>
                  <span className="text-coffee-dark font-semibold font-sans">{formData.time}</span>
                </div>
              </div>

              <p className="font-sans text-xs text-coffee-dark/50 text-center max-w-sm mb-6 leading-relaxed">
                A reservation summary and digital receipt have been dispatched to <span className="font-medium text-coffee-dark">{formData.email}</span>. Please display this screen to our host on arrival.
              </p>

              <button
                onClick={handleReset}
                className="w-full bg-coffee-primary text-white hover:bg-coffee-primary/90 py-3.5 rounded-xl font-display font-bold text-sm shadow-md transition-colors duration-200 cursor-pointer"
              >
                Wonderful, Thank you!
              </button>
            </div>
          ) : (
            /* Form Entry State */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Email Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-coffee-dark/60 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g. Clara Oswald"
                    className="w-full bg-coffee-light/20 border border-coffee-accent/15 focus:border-coffee-primary focus:ring-1 focus:ring-coffee-primary rounded-xl px-4 py-2.5 text-sm text-coffee-dark outline-none transition-all placeholder-coffee-dark/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-coffee-dark/60 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="clara@example.com"
                    className="w-full bg-coffee-light/20 border border-coffee-accent/15 focus:border-coffee-primary focus:ring-1 focus:ring-coffee-primary rounded-xl px-4 py-2.5 text-sm text-coffee-dark outline-none transition-all placeholder-coffee-dark/30"
                  />
                </div>
              </div>

              {/* Guests Selector */}
              <div>
                <label htmlFor="modal-guests" className="block text-xs font-semibold text-coffee-dark/60 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Users className="h-3.5 w-3.5 text-coffee-primary" />
                  Number of Guests
                </label>
                <select
                  id="modal-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-coffee-light/20 border border-coffee-accent/15 focus:border-coffee-primary focus:ring-1 focus:ring-coffee-primary rounded-xl px-4 py-2.5 text-sm text-coffee-dark outline-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num.toString()}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-date" className="block text-xs font-semibold text-coffee-dark/60 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-coffee-primary" />
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    id="modal-date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-coffee-light/20 border border-coffee-accent/15 focus:border-coffee-primary focus:ring-1 focus:ring-coffee-primary rounded-xl px-4 py-2.5 text-sm text-coffee-dark outline-none cursor-pointer"
                  />
                </div>

                <div>
                  <label htmlFor="modal-time" className="block text-xs font-semibold text-coffee-dark/60 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-coffee-primary" />
                    Preferred Time
                  </label>
                  <select
                    id="modal-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-coffee-light/20 border border-coffee-accent/15 focus:border-coffee-primary focus:ring-1 focus:ring-coffee-primary rounded-xl px-4 py-2.5 text-sm text-coffee-dark outline-none cursor-pointer"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="modal-requests" className="block text-xs font-semibold text-coffee-dark/60 uppercase tracking-wider mb-1.5">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="modal-requests"
                  name="requests"
                  rows={2}
                  value={formData.requests}
                  onChange={handleChange}
                  placeholder="E.g., Window seat, wheelchair accessibility, allergic to nuts..."
                  className="w-full bg-coffee-light/20 border border-coffee-accent/15 focus:border-coffee-primary focus:ring-1 focus:ring-coffee-primary rounded-xl px-4 py-2 text-sm text-coffee-dark outline-none resize-none placeholder-coffee-dark/30"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-coffee-primary text-white hover:bg-coffee-primary/95 font-display font-semibold px-6 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? "Processing Reservation..." : "Confirm Booking"}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
