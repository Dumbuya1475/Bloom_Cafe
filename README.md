# ☕ Bloom Café - Modern Artisanal Coffee Shop Landing Page

Bloom Café is a modern, responsive, and aesthetically designed single-page web application representing a fictional high-end neighborhood coffee sanctuary. Crafted with **React (Vite)**, **Tailwind CSS**, and **Lucide Icons**, the landing page features a cozy coffee-themed palette, high-contrast display typography, fluid layout structures, and intuitive user experiences including an interactive table reservation system.

---

## ✨ Features

- **🎨 Curated Aesthetics**: Built around a luxurious coffee-themed color palette with organic off-whites (`#FFFDF8`), warm accents (`#D4A373`), and rich coffee primary tones (`#8B5E3C`).
- **📱 Responsive Layout**: Fully optimized and pixel-perfect across all screen sizes (mobile, tablet, desktop) using fluid grid grids and flex layouts.
- **🗺️ Interactive Sticky Navigation**: Smooth-scrolling sidebar and header menu with scroll-spying dynamic high-contrast active-state indicators.
- **✨ Cozy Hero Showcase**: Immersive dark-overlay full-screen background showcasing key CTAs with smooth hovering micro-transitions.
- **📖 Heritage Storytelling**: Warm two-column layout highlighting the café's background, organic sourcing, and sustainability credentials.
- **🧁 Curated Coffee & Bites Menu**: Beautiful interactive pricing grid featuring 6 core artisanal items with interactive filtering (Coffee vs. Sweet & Savory) and subtle card-lift animations.
- **🌟 Community Reviews**: Highly polished user testimonials showing verified customer ratings with warm display formatting.
- **📅 Interactive Booking Engine**: Interactive overlay modal allowing guests to seamlessly reserve tables (guests count, date, timeslots, and custom requests) complete with animated successful state confirmations.
- **✉️ Seamless Contact & Messaging**: Complete functional contact form with immediate validation, loading indicators, and submission feedback.

---

## 🛠️ Tech Stack & Design Tokens

- **Framework**: [React 18+](https://react.dev/) (Vite bundler)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: 
  - *Headings*: **Poppins** (Elegant Display Sans)
  - *Body Text*: **Inter** (Symmetric & Readable Sans)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Color Variables**:
  - `Primary`: `#8B5E3C` (Rich Espresso)
  - `Accent`: `#D4A373` (Golden Cream)
  - `Background`: `#FFFDF8` (Warm Off-White)
  - `Dark Text`: `#2C1E12` (Midnight Cocoa)

---

## 🚀 Getting Started

### 1. Installation

Installs the required base dependencies from the workspace:

```bash
npm install
```

### 2. Development Mode

Runs the applet locally in interactive hot-reloading development mode:

```bash
npm run dev
```

### 3. Build & Production Compilation

Statically compiles and bundles the client applet files into a optimized production payload:

```bash
npm run build
```

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── About.tsx            # Short story & heritage narrative
│   ├── BookingModal.tsx     # Animated reservation system
│   ├── Contact.tsx          # Café info & feedback message form
│   ├── Features.tsx         # Highlights (Wi-Fi, staff, organic roast)
│   ├── Footer.tsx           # Copyright, secondary links & social links
│   ├── Hero.tsx             # Responsive display banner & entry actions
│   ├── Menu.tsx             # Category-filtered menu items grid
│   ├── Navbar.tsx           # Fixed header with mobile responsive controls
│   └── Testimonials.tsx     # Customer reviews and star ratings
├── App.tsx                  # Main layout Orchestrator
├── index.css                # Tailwind base variables & Google Fonts setup
└── main.tsx                 # Core Application Entry Point
```

---

*Crafted with 🤎 and passion for exquisite coffee moments.*
