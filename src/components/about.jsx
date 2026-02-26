import React from "react";
import about from "../assets/about.png";

function About() {
  return (
    <section id="about" className="relative bg-white py-16 sm:py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#fef2f2] to-transparent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Two-column grid: image left, text right */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Image ───────────────────────────────── */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={about}
                alt="Sargodha Ambulance Service team"
                className="w-full h-72 sm:h-96 lg:h-[480px] object-cover"
                loading="lazy"
              />
              {/* Image gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" aria-hidden="true" />

              {/* Decorative experience badge */}
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm text-[#ef4444] rounded-xl px-5 py-3 shadow-lg border border-red-100">
                <p className="text-3xl font-extrabold leading-none">10+</p>
                <p className="text-sm font-semibold mt-0.5 tracking-wide">Years of Service</p>
              </div>
            </div>
          </div>

          {/* ── Right: Text Content ───────────────────────── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">

            {/* Tag line */}
            <span className="inline-block text-[#ef4444]/80 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Who We Are
            </span>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#ef4444] leading-tight mb-4">
              About Our <br className="hidden sm:block" /> Company
            </h2>

            {/* Body */}
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
              Sargodha Ambulance Service has been a trusted name in medical
              transportation for over 10 years. Serving all of Pakistan, we
              specialize in patient and deceased transport. Partnered with
              numerous hospitals, our skilled team and state-of-the-art
              equipment ensure reliable, compassionate care.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "50+", label: "Hospitals Partnered" },
                { value: "24/7", label: "Always Available" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-[#f8fafc] border border-gray-100">
                  <span className="text-2xl font-extrabold text-gray-900">{stat.value}</span>
                  <span className="text-xs text-gray-500 mt-1 leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#contact"
                id="about-contact-btn"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#ef4444] hover:bg-[#dc2626] active:scale-95 text-white font-semibold text-base shadow-md shadow-red-200 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-300/50"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/923012718576?text=Hello%20Sargodha%20Ambulance%20Service%2C%20I%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-[#25D366] border border-green-300 hover:bg-green-50 font-semibold text-base shadow-sm transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300/40"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
