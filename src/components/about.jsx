import React from "react";

function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-column grid: image left, text right */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Image ───────────────────────────────── */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* Replace this src with your own image when ready */}
              <img
                src="src/assets/about.png"
                alt="Sargodha Ambulance Service team"
                className="w-full h-72 sm:h-96 lg:h-[480px] object-cover"
                loading="lazy"
              />

              {/* Decorative experience badge */}
              <div className="absolute bottom-5 left-5 bg-[#ef4444] text-white rounded-xl px-5 py-3 shadow-lg">
                <p className="text-3xl font-extrabold leading-none">10+</p>
                <p className="text-sm font-medium mt-0.5 opacity-90">Years of Service</p>
              </div>
            </div>
          </div>

          {/* ── Right: Text Content ───────────────────────── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">

            {/* Tag line */}
            <span className="inline-block text-[#ef4444] font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </span>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#ef4444] leading-tight mb-6">
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
                <div key={stat.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-[#f1f5f9]">
                  <span className="text-2xl font-extrabold text-[#ef4444]">{stat.value}</span>
                  <span className="text-xs text-gray-500 mt-1 leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contact"
                id="about-contact-btn"
                className="inline-block px-8 py-3 rounded-full bg-[#ef4444] hover:bg-[#dc2626] active:scale-95 text-white font-semibold text-base shadow-md shadow-red-200 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-300/50"
              >
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
