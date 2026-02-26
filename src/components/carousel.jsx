import React, { useState, useEffect, useRef, useCallback } from "react";
import slider1 from "../assets/img1.png";
import slider2 from "../assets/img2.jpg";
import slider3 from "../assets/img3.png";
import slider4 from "../assets/img4.png";
import slider5 from "../assets/img5.png";
import slider6 from "../assets/img6.png";

/* ─── All logos flat list ──────────────────────────────────────
   Replace src URLs with your actual partner logo images.
──────────────────────────────────────────────────────────────── */
const logos = [
  {
    id: "logo-lgh",
    name: "Lahore General Hospital",
    src: slider1,
  },
  {
    id: "logo-skmt",
    name: "Shaukat Khanum Memorial Trust",
    src: slider2,
  },
  { id: "logo-ittefaq", name: "Ittefaq Hospital Trust", src: slider3 },
  { id: "logo-pmdc", name: "Pakistan Medical Association", src: slider4 },
  { id: "logo-pims", name: "PIMS Hospital", src: slider5 },
  { id: "logo-pims", name: "PIMS Hospital", src: slider6 },
];

const stats = [
  { id: "stat-clients", value: 1000, suffix: "+", label: "Happy Clients" },
  { id: "stat-vehicles", value: 30, suffix: "+", label: "Vehicles" },
  { id: "stat-hospitals", value: 100, suffix: "+", label: "Hospitals In Contact" },
];

/* ─── Helper: chunk array ──────────────────────────────────── */
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/* ─── Animated Counter ─────────────────────────────────────── */
function AnimatedCounter({ target, suffix, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── Component ────────────────────────────────────────────── */
function Carousel() {
  const containerRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  // Derive responsive items-per-page from container width
  const updateItemsPerPage = useCallback(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    if (width < 480) setItemsPerPage(1);
    else if (width < 768) setItemsPerPage(2);
    else setItemsPerPage(3);
  }, []);

  useEffect(() => {
    updateItemsPerPage();
    const ro = new ResizeObserver(updateItemsPerPage);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [updateItemsPerPage]);

  const slides = chunkArray(logos, itemsPerPage);
  const total = slides.length;

  // Reset to first slide if itemsPerPage changes and current is out of bounds
  useEffect(() => {
    setCurrent((prev) => Math.min(prev, Math.max(0, total - 1)));
  }, [total]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [total]);

  const goTo = (idx) => {
    clearInterval(timerRef.current);
    setCurrent(idx);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
  };

  return (
    <section id='trusted-by' className='bg-white py-16 sm:py-24'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Heading */}
        <div className='text-center mb-10'>
          <h2 className='text-4xl sm:text-5xl font-extrabold text-[#ef4444]'>Trusted By</h2>
          <p className='mt-3 text-gray-400 text-base sm:text-lg'>Proud partners of leading hospitals and healthcare institutions</p>
        </div>

        {/* Carousel wrapper — measured by ResizeObserver */}
        <div ref={containerRef} className='relative overflow-hidden rounded-2xl'>
          {/* Sliding track */}
          <div className='flex transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((slide, slideIdx) => (
              <div
                key={slideIdx}
                /* Each slide takes exactly 100% of the container width */
                className='w-full flex-shrink-0 flex py-8 gap-4 px-2'
                style={{ minWidth: "100%" }}
              >
                {slide.map((logo) => (
                  <div
                    key={logo.id}
                    id={logo.id}
                    className='flex-1 flex items-center justify-center p-4 rounded-xl cursor-pointer transition-colors duration-200 min-w-0'
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className='max-h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-75 hover:opacity-100'
                      loading='lazy'
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "flex";
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className='flex justify-center gap-2 mt-2 pb-2'>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`rounded-full transition-all duration-300 ${idx === current ? "bg-[#ef4444] w-5 h-2.5" : "bg-gray-300 w-2.5 h-2.5"}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center'>
          {stats.map((stat) => (
            <div key={stat.id} id={stat.id} className='flex flex-col items-start sm:items-center'>
              <p className='text-5xl sm:text-6xl font-extrabold text-[#ef4444] leading-none'>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className='mt-2 text-gray-700 font-bold text-base sm:text-lg'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
