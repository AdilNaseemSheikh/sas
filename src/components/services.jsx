import React from "react";

import services1 from "../assets/services-1.jpg";
import services2 from "../assets/services-2.jpg";
import services3 from "../assets/services-3.jpg";
import services4 from "../assets/services-4.jpg";

/* ─── Data ────────────────────────────────────────────────────── */

const services = [
  {
    id: "emergency-medical-transport",
    title: "Emergency Medical Transport",
    description: "Immediate response and transport to the nearest hospital.",
    image: services1,
    alt: "Paramedics loading a patient into an ambulance",
  },
  {
    id: "long-distance-ambulance",
    title: "Long-Distance Ambulance Service",
    description: "Ensuring patient comfort and continuity of care over long distances.",
    image: services2,
    alt: "Ambulance on a highway",
  },
  {
    id: "ambulance-repatriation",
    title: "Ambulance Repatriation Services",
    description: "Handling all logistical details to bring loved ones home safely.",
    image: services3,
    alt: "Medical equipment inside an ambulance",
  },
  {
    id: "pediatric-neonatal-transport",
    title: "Pediatric And Neonatal Transport",
    description: "Safe and gentle transport for infants and children requiring medical care.",
    image: services4,
    alt: "Neonatal care transport",
  },
];

const reasons = [
  {
    id: "experienced-professionals",
    title: "Experienced Professionals",
    description: "With extensive experience in emergency care and medical transport, we provide trustworthy, reliable service.",
  },
  {
    id: "advanced-medical-gear",
    title: "Advanced Medical Gear",
    description: "Our ambulances are equipped with the latest medical technology.",
  },
  {
    id: "rapid-response-time",
    title: "Rapid Response Time",
    description: "We are available around the clock to respond to emergencies.",
  },
  {
    id: "comfort-and-safety",
    title: "Comfort And Safety",
    description: "Prioritizing patient comfort and safety during all stages of transport.",
  },
];

/* ─── Component ───────────────────────────────────────────────── */

function Services() {
  return (
    <section id='services' className='bg-white'>
      {/* ── Our Services ─────────────────────────────────────── */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <span className='inline-block text-xs font-semibold tracking-[0.2em] text-[#ef4444]/80 uppercase mb-3'>What We Offer</span>
          <h2 className='text-4xl sm:text-5xl font-extrabold text-[#ef4444] mb-3'>Our Services</h2>
          <p className='text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed'>
            Discover comprehensive ambulance solutions: rapid response, advanced care, and compassionate support.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className='group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5'
            >
              {/* Image */}
              <div className='relative h-48 overflow-hidden bg-gray-100'>
                <img
                  src={service.image}
                  alt={service.alt}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-white/90 text-[#ef4444] shadow-sm'>24/7</div>
              </div>

              {/* Text */}
              <div className='pt-4 py-4 px-6 flex flex-col gap-2'>
                <h3 className='text-gray-900 font-bold text-base sm:text-lg leading-snug'>{service.title}</h3>
                <p className='text-gray-500 text-sm leading-relaxed'>{service.description}</p>
                <div className='mt-2 h-1 w-0 bg-[#ef4444] rounded-full transition-all duration-300 group-hover:w-16' />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <div className='bg-white py-16 sm:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <div className='text-center mb-12'>
            <span className='inline-block text-xs font-semibold tracking-[0.2em] text-[#ef4444]/80 uppercase mb-3'>Why SAS</span>
            <h2 className='text-4xl sm:text-5xl font-extrabold text-[#ef4444]'>Why Choose Us</h2>
          </div>

          {/* Reason Cards Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {reasons.map((reason) => (
              <div
                key={reason.id}
                id={reason.id}
                className='bg-[#f8fafc] border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all duration-300 hover:-translate-y-0.5'
              >
                {/* Title */}
                <h3 className='text-gray-900 font-bold text-base sm:text-2xl leading-snug mb-2'>{reason.title}</h3>

                {/* Divider */}
                <div className='w-12 h-1 bg-[#ef4444]/60 rounded-full mb-4' />

                {/* Description */}
                <p className='text-gray-600 text-sm leading-relaxed'>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
