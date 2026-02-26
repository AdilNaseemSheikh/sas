import React from "react";

/* ─── Data ────────────────────────────────────────────────────── */

const services = [
  {
    id: "emergency-medical-transport",
    title: "Emergency Medical Transport",
    description:
      "Immediate response and transport to the nearest hospital.",
    image:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80",
    alt: "Paramedics loading a patient into an ambulance",
  },
  {
    id: "long-distance-ambulance",
    title: "Long-Distance Ambulance Service",
    description:
      "Ensuring patient comfort and continuity of care over long distances.",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&q=80",
    alt: "Ambulance on a highway",
  },
  {
    id: "ambulance-repatriation",
    title: "Ambulance Repatriation Services",
    description:
      "Handling all logistical details to bring loved ones home safely.",
    image:
      "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=600&q=80",
    alt: "Medical equipment inside an ambulance",
  },
  {
    id: "pediatric-neonatal-transport",
    title: "Pediatric And Neonatal Transport",
    description:
      "Safe and gentle transport for infants and children requiring medical care.",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f5?w=600&q=80",
    alt: "Neonatal care transport",
  },
];

const reasons = [
  {
    id: "experienced-professionals",
    title: "Experienced Professionals",
    description:
      "With extensive experience in emergency care and medical transport, we provide trustworthy, reliable service.",
  },
  {
    id: "advanced-medical-gear",
    title: "Advanced Medical Gear",
    description:
      "Our ambulances are equipped with the latest medical technology.",
  },
  {
    id: "rapid-response-time",
    title: "Rapid Response Time",
    description:
      "We are available around the clock to respond to emergencies.",
  },
  {
    id: "comfort-and-safety",
    title: "Comfort And Safety",
    description:
      "Prioritizing patient comfort and safety during all stages of transport.",
  },
];

/* ─── Component ───────────────────────────────────────────────── */

function Services() {
  return (
    <section id="services" className="bg-white">

      {/* ── Our Services ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#ef4444] mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover Our Comprehensive Ambulance Services: Quick Response,
            Advanced Medical Care, and Compassionate Support.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="group flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="pt-4 pb-2 flex flex-col gap-2">
                <h3 className="text-[#ef4444] font-bold text-base sm:text-lg leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <div className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#ef4444]">
              Why Choose Us
            </h2>
          </div>

          {/* Reason Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                id={reason.id}
                className="bg-[#f1f5f9] rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
              >
                {/* Title */}
                <h3 className="text-[#ef4444] font-bold text-base sm:text-lg leading-snug mb-3">
                  {reason.title}
                </h3>

                {/* Divider */}
                <div className="w-10 h-0.5 bg-[#ef4444]/40 rounded-full mb-4" />

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export default Services;
