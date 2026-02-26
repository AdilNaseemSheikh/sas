import React, { useState } from "react";

import gallery1 from "../assets/gallery-1.jpeg";
import gallery2 from "../assets/gallery-2.jpeg";
import gallery3 from "../assets/gallery-3.jpeg";
import gallery4 from "../assets/gallery-4.jpeg";
import gallery5 from "../assets/gallery-5.jpeg";
import gallery6 from "../assets/gallery-6.jpeg";

/* ─── Data ─────────────────────────────────────────────────────
   Replace these src URLs with your own vehicle images.
   Each entry supports: id, src, alt
──────────────────────────────────────────────────────────────── */
const vehicles = [
  {
    id: "vehicle-1",
    src: gallery1,
    alt: "Ambulance parked outside ICU",
  },
  {
    id: "vehicle-2",
    src: gallery2,
    alt: "Black ambulance front view",
  },
  {
    id: "vehicle-3",
    src: gallery3,
    alt: "White ambulance van at night",
  },
  {
    id: "vehicle-4",
    src: gallery4,
    alt: "Ambulance interior medical equipment",
  },
  {
    id: "vehicle-5",
    src: gallery5,
    alt: "Ambulance front view at street",
  },
  {
    id: "vehicle-6",
    src: gallery6,
    alt: "White AC ambulance at petrol station",
  },
];

/* ─── Lightbox ─────────────────────────────────────────────── */
function Lightbox({ image, onClose, onPrev, onNext }) {
  if (!image) return null;

  // Keyboard controls: Esc to close, arrows to navigate
  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-label='Image preview'
    >
      <button
        onClick={onClose}
        className='absolute top-5 right-6 text-white text-4xl font-light leading-none hover:text-red-400 transition-colors'
        aria-label='Close preview'
      >
        &times;
      </button>

      {/* Arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev && onPrev(); }}
        aria-label='Previous image'
        className='absolute left-6 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-[#ef4444] shadow-md'
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'>
          <path d='m15 18-6-6 6-6' />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext && onNext(); }}
        aria-label='Next image'
        className='absolute right-6 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-[#ef4444] shadow-md'
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'>
          <path d='m9 18 6-6-6-6' />
        </svg>
      </button>

      <img
        src={image.src}
        alt={image.alt}
        className='max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain'
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

/* ─── Component ────────────────────────────────────────────── */
function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const idx = lightbox ? vehicles.findIndex((v) => v.id === lightbox.id) : -1;
  const prev = () => {
    if (idx < 0) return;
    const nextIdx = (idx - 1 + vehicles.length) % vehicles.length;
    setLightbox(vehicles[nextIdx]);
  };
  const next = () => {
    if (idx < 0) return;
    const nextIdx = (idx + 1) % vehicles.length;
    setLightbox(vehicles[nextIdx]);
  };

  return (
    <section id='gallery' className='bg-white py-16 sm:py-24'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-10'>
          <span className='inline-block text-xs font-semibold tracking-[0.2em] text-[#ef4444]/80 uppercase mb-3'>Fleet</span>
          <h2 className='text-4xl sm:text-5xl font-extrabold text-[#ef4444]'>Our Vehicles</h2>
          <p className='mt-3 text-gray-400 text-base sm:text-lg'>A fleet equipped and ready for every emergency</p>
        </div>

        {/* 3 × 2 Image Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {vehicles.map((vehicle) => (
            <button
              key={vehicle.id}
              id={vehicle.id}
              onClick={() => setLightbox(vehicle)}
              className='group relative rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-red-300/50 cursor-zoom-in'
              aria-label={`View ${vehicle.alt}`}
            >
              <img
                src={vehicle.src}
                alt={vehicle.alt}
                loading='lazy'
                className='w-full h-56 sm:h-60 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500'
              />
              {/* Hover overlay */}
              <div className='absolute inset-0 bg-[#ef4444]/0 group-hover:bg-[#ef4444]/15 transition-colors duration-300 flex items-center justify-center'>
                <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 rounded-full p-3 shadow-lg'>
                  {/* Zoom icon */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#ef4444'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                    aria-hidden='true'
                  >
                    <circle cx='11' cy='11' r='8' />
                    <line x1='21' y1='21' x2='16.65' y2='16.65' />
                    <line x1='11' y1='8' x2='11' y2='14' />
                    <line x1='8' y1='11' x2='14' y2='11' />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox image={lightbox} onClose={() => setLightbox(null)} onPrev={prev} onNext={next} />
    </section>
  );
}

export default Gallery;
