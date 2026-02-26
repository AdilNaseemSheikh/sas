import React, { useState } from "react";

/* ─── Data ─────────────────────────────────────────────────────
   Replace these src URLs with your own vehicle images.
   Each entry supports: id, src, alt
──────────────────────────────────────────────────────────────── */
const vehicles = [
  {
    id: "vehicle-1",
    src: "/src/assets/gallery-1.jpeg",
    alt: "Ambulance parked outside ICU",
  },
  {
    id: "vehicle-2",
    src: "/src/assets/gallery-2.jpeg",
    alt: "Black ambulance front view",
  },
  {
    id: "vehicle-3",
    src: "/src/assets/gallery-3.jpeg",
    alt: "White ambulance van at night",
  },
  {
    id: "vehicle-4",
    src: "/src/assets/gallery-4.jpeg",
    alt: "Ambulance interior medical equipment",
  },
  {
    id: "vehicle-5",
    src: "/src/assets/gallery-5.jpeg",
    alt: "Ambulance front view at street",
  },
  {
    id: "vehicle-6",
    src: "/src/assets/gallery-6.jpeg",
    alt: "White AC ambulance at petrol station",
  },
];

/* ─── Lightbox ─────────────────────────────────────────────── */
function Lightbox({ image, onClose }) {
  if (!image) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-white text-4xl font-light leading-none hover:text-red-400 transition-colors"
        aria-label="Close preview"
      >
        &times;
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

/* ─── Component ────────────────────────────────────────────── */
function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#ef4444]">
            Our Vehicles
          </h2>
          <p className="mt-3 text-gray-400 text-base sm:text-lg">
            A fleet equipped and ready for every emergency
          </p>
        </div>

        {/* 3 × 2 Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map((vehicle) => (
            <button
              key={vehicle.id}
              id={vehicle.id}
              onClick={() => setLightbox(vehicle)}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-red-300/50 cursor-zoom-in"
              aria-label={`View ${vehicle.alt}`}
            >
              <img
                src={vehicle.src}
                alt={vehicle.alt}
                loading="lazy"
                className="w-full h-56 sm:h-60 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#ef4444]/0 group-hover:bg-[#ef4444]/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                  {/* Zoom icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}

export default Gallery;
