import React from "react";

/* ─── Data ────────────────────────────────────────────────────── */

const testimonials = [
  {
    id: "testimonial-aysha",
    quote:
      "I am extremely grateful to Sargodha Ambulance Service for their compassionate care during a difficult time. They ensured my father reached the hospital safely and comfortably.",
    name: "Dr Aysha Khan",
    role: "Patient's Family",
  },
  {
    id: "testimonial-bilal",
    quote:
      "We have been relying on Sargodha Ambulance Service for years. Their dedication to service and well-maintained fleet give us confidence in their ability to handle any medical transport need.",
    name: "Bilal Jamal",
    role: "Hospital Administrator",
  },
  {
    id: "testimonial-ahmed",
    quote:
      "Sargodha Ambulance Service has been our go-to partner for patient transportation. Their professionalism and timely response have made a significant difference in emergency situations.",
    name: "Ahmed Raza",
    role: "Medical Professional",
  },
];

/* ─── Avatar placeholder icon ────────────────────────────────── */

function AvatarPlaceholder() {
  return (
    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  );
}

/* ─── Component ───────────────────────────────────────────────── */

function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#ef4444]/80 uppercase mb-3">What Clients Say</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#ef4444]">
            Client Testimonials
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              id={t.id}
              className="flex flex-col justify-between gap-6 p-6 rounded-2xl border border-gray-100 bg-[#f8fafc] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Large decorative quote mark */}
              <div>
                <span
                  className="block text-[#ef4444]/20 text-7xl font-serif leading-none select-none -mb-4"
                  aria-hidden="true"
                >
                  "
                </span>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* Author row */}
              <div className="flex items-center gap-3">
                <AvatarPlaceholder />
                <div className="flex flex-col">
                  <span className="text-gray-900 font-semibold italic text-sm sm:text-base">
                    {t.name}
                  </span>
                  <span className="text-gray-400 text-xs">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
