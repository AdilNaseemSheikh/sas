import React from "react";

/* ─── Contact items data ───────────────────────────────────── */
const contactItems = [
  {
    id: "contact-email",
    label: "Email",
    description: "Send us an email for any question.",
    value: "shang03012718576@gmail.com",
    href: "mailto:shang03012718576@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="w-6 h-6" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: "contact-phone",
    label: "Phone",
    description: "Click below to call us for any inquiry.",
    value: "+92 301 718576",
    href: "tel:+92301718576",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="w-6 h-6" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.77 12 19.79 19.79 0 0 1 1.77 3.38 2 2 0 0 1 3.74 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: "contact-address",
    label: "Address",
    description: null,
    value: "DHQ Sargodha, Pakistan",
    href: "https://maps.google.com/?q=DHQ+Sargodha+Pakistan",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="w-6 h-6" aria-hidden="true">
        <rect width="18" height="14" x="3" y="5" rx="2" />
        <path d="M3 10h4m10 0h4M7 5V3m10 2V3" />
        <circle cx="12" cy="13" r="2" />
      </svg>
    ),
  },
];

/* ─── Component ───────────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-white">
      {/* Top accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#fef2f2] to-transparent" aria-hidden="true" />

      {/* ── Main Contact + Map row ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left — Contact Info */}
          <div className="w-full lg:w-2/5 flex flex-col justify-start">

            {/* Section heading */}
            <div className="mb-6">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#ef4444]/80 uppercase mb-2">Get In Touch</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#ef4444]">Contact Us</h2>
            </div>

            {/* Quick actions */}
            <div className="mb-8 grid grid-cols-2 gap-3">
              <a href="tel:+923012718576" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-md transition-all duration-200">
                Call Now
              </a>
              <a href="https://wa.me/923012718576?text=Hello%20Sargodha%20Ambulance%20Service%2C%20I%20need%20assistance." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold shadow-md transition-all duration-200">
                WhatsApp
              </a>
            </div>

            {/* Contact items */}
            <div className="flex flex-col gap-8">
              {contactItems.map((item) => (
                <div key={item.id} id={item.id} className="flex flex-col gap-1">

                  {/* Icon + label row */}
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#ef4444]/10 text-[#ef4444] border border-red-100">
                      {item.icon}
                    </div>
                    <span className="text-gray-900 font-bold text-lg">
                      {item.label}
                    </span>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  )}

                  {/* Clickable value */}
                  <a
                    href={item.href}
                    target={item.id === "contact-address" ? "_blank" : undefined}
                    rel={item.id === "contact-address" ? "noopener noreferrer" : undefined}
                    className="text-gray-700 hover:text-[#ef4444] text-sm transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Google Maps Embed */}
          <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden shadow-lg min-h-[380px]">
            <iframe
              title="Sargodha Ambulance Service Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.7!2d72.6606!3d32.0836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ead047a2b42d5%3A0xcbfd1f5d38ef2e8c!2sDHQ%20Hospital%20Sargodha!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ minHeight: "380px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>

      {/* ── Bottom copyright bar ───────────────────────────── */}
      <div className="border-t border-gray-100 bg-[#7a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/80 text-sm">
            © {year} Sargodha Ambulance Service. All rights reserved.
          </p>
          <p className="text-white/50 text-xs">
            Available 24/7 — Call us anytime
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
