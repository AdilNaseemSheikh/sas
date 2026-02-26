import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background image placeholder — replace src when ready */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/hero-bg.jpg')" }}
        aria-hidden="true"
      />

      {/* Dark overlay for readability over the future background image */}
      <div
        className="absolute inset-0 bg-[#7a0a0a]/85"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 lg:px-16 max-w-5xl mx-auto py-24">

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
          Sargodha
          <br />
          Ambulance Service
        </h1>

        {/* Divider */}
        <div className="mt-6 mb-6 w-20 h-1 rounded-full bg-[#f87171]/50" />

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl font-semibold text-white/90 mb-3">
          Life-Saving Care at Your Doorstep
        </p>
        <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-2xl leading-relaxed">
          Swift, Reliable, and Professional Ambulance Services 24/7. Our
          dedicated team is here to provide immediate medical assistance and
          transport, ensuring your safety and comfort in critical moments.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="#contact"
            id="hero-contact-btn"
            className="inline-block px-10 py-3.5 rounded-full bg-[#ef4444] hover:bg-[#dc2626] active:scale-95 text-white font-semibold text-base sm:text-lg shadow-lg shadow-red-900/50 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-red-400/50"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Floating WhatsApp / Chat Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="https://wa.me/"
          id="hero-chat-btn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95 text-white font-semibold text-sm shadow-xl transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300/50"
        >
          {/* WhatsApp Icon (inline SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 shrink-0"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.928a.75.75 0 0 0 .916.964l6.284-1.646A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 0 1-4.95-1.35l-.355-.211-3.68.964.981-3.585-.231-.368A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
          </svg>
          Chat with Us
        </a>
      </div>
    </section>
  );
}

export default Hero;
