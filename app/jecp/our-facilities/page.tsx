'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const accordionData = [
  {
    title: 'Versatile Event Spaces',
    content: [
      { label: 'Multi-Purpose Hall:', desc: '300-seater venue for community events, conferences, and large gatherings' },
      { label: 'Conference Room:', desc: '12-seater space with LED screens and high-speed Wi-Fi' },
      { label: 'Co-Working Spaces:', desc: 'Five modern, state-of-the-art 3-seater office spaces' },
    ],
  },
  {
    title: 'Elite Hospitality and Comfort',
    content: [
      { label: 'Reception Area:', desc: 'Professional welcome desk for guests' },
      { label: 'VIP Green Room/Guest Waiting Room:', desc: 'Comfortable space for guests' },
      { label: 'Healing & Meditation Zone:', desc: 'Peaceful space for reflection' },
      { label: 'Housekeeping Services:', desc: 'Regular maintenance and cleaning' },
      { label: '24×7 Security:', desc: 'Round-the-clock security services' },
    ],
  },
  {
    title: 'Advanced Technology and Infrastructure',
    content: [
      { label: 'Dedicated AV and IT Support:', desc: 'Casting screens, projectors, microphones, speakers, stage lighting, podium setups' },
      { label: 'Media Gallery Space:', desc: 'Dedicated space for media and exhibitions' },
      { label: 'Printing Facility:', desc: 'On-site printing services' },
      { label: '24×7 Power Backup:', desc: 'Uninterrupted power supply' },
    ],
  },
  {
    title: 'Accessibility and Comfort',
    content: [
      { label: 'Large Parking Area:', desc: 'Ample on-site parking for guests.' },
      { label: 'Handicap-Friendly Washrooms:', desc: 'Inclusive and accessible facilities.' },
      { label: 'Water Cooler with RO:', desc: 'Ideal for exhibitions and visual presentations.' },
      { label: 'Green Patch Walking Area:', desc: 'A serene environment for strolls and reflection.' },
      { label: 'First Aid:', desc: 'Ready assistance for emergencies.' },
    ],
  },
  {
    title: 'Local Support & Services',
    content: [
      { label: 'Vendor Support:', desc: 'For catering, decor, fabrication, and transportation' },
    ],
  },
];

const facilityImages = [
  '/images/facilities/facility-1.png',
  '/images/facilities/facility-2.png',
  '/images/facilities/facility-3.png',
  '/images/facilities/facility-4.png',
  '/images/facilities/facility-5.png',
  '/images/facilities/facility-6.png',
  '/images/facilities/facility-7.png',
  '/images/facilities/facility-8.png',
  '/images/facilities/conference-room.png',
  '/images/facilities/coworking-spaces.png',
];

export default function OurFacilitiesPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(3);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Our Facilities Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Our Facilities</h1>
            <div className="w-16 h-1 bg-[var(--primary-orange)] mt-2 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[var(--primary-orange)]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--primary-navy)]">Our Facilities</span>
          </nav>
        </div>
      </div>

      {/* Title Section - Navy Blue Background */}
      <section className="py-12 px-4 bg-[var(--primary-navy)] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            JECP Deoria
          </h2>
          <h3 className="text-xl text-[var(--primary-orange)] font-semibold mb-6">
            A Fully Equipped Modern Hub for Every Occasion
          </h3>
          <p className="text-white/90 leading-relaxed">
            JECP Deoria stands as a thoughtfully crafted, state-of-the-art space that seamlessly adapts to a spectrum of needs - be it community celebrations, cultural exchanges, or professional engagements. It embodies a rare balance of functionality and comfort, creating an environment where purpose meets possibility, and every gathering finds its ideal home.
          </p>
        </div>
      </section>

      {/* Accordion Section - Cream Background */}
      <section className="py-8 px-4 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto space-y-2">
          {accordionData.map((item, index) => (
            <div key={index} className="overflow-hidden">
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors ${
                  openAccordion === index
                    ? 'bg-[var(--primary-orange)] text-white'
                    : 'bg-[#ebe5db] text-[var(--primary-navy)] hover:bg-[#e0d9cf]'
                }`}
              >
                <div className="flex items-center">
                  <span className={`mr-4 text-lg font-bold ${openAccordion === index ? 'text-white' : 'text-[var(--primary-navy)]'}`}>
                    {openAccordion === index ? '−' : '+'}
                  </span>
                  <span className="font-semibold">{item.title}</span>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openAccordion === index ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Accordion Content */}
              {openAccordion === index && (
                <div className="bg-white px-6 py-6">
                  <ul className="space-y-3">
                    {item.content.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start text-gray-700">
                        <span className="text-gray-800 mr-2">•</span>
                        <span>
                          <strong className="text-gray-900">{point.label}</strong> {point.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* View Facilities Button Section - Navy Blue Background */}
      <section className="py-12 px-4 bg-[var(--primary-navy)] text-center">
        <a
          href="/images/facilities/rural-immersion-program.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-10 py-4 bg-[var(--primary-orange)] text-white font-semibold rounded-full hover:bg-[var(--primary-orange-hover)] transition-colors shadow-lg"
        >
          View Our Facilities
        </a>
      </section>

      {/* Image Gallery Section - White Background */}
      <section className="py-16 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] text-center">
            Gallery
          </h2>
        </div>

        {/* Image Carousel */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Images */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...facilityImages, ...facilityImages, ...facilityImages].map((img, index) => (
                <div key={index} className="flex-shrink-0 mx-3">
                  <div className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={img}
                      alt={`Facility ${(index % facilityImages.length) + 1}`}
                      width={400}
                      height={280}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }

          .animate-scroll-left:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </main>
  );
}
