'use client';

import Image from 'next/image';
import { useState } from 'react';

const partnerLogos = [
  '/images/partners/partner-logos-1.png',
  '/images/partners/partner-logos-2.png',
  '/images/partners/jagriti-clients-4.png',
  '/images/partners/jagriti-clients-9.png',
  '/images/partners/orix.png',
];

export default function Partners() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600 max-w-md text-right">
            Strengthening Our Mission through Collaboration, Innovation, and a Shared
            Commitment to Growth!
          </p>
        </div>

        {/* Logos Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[var(--primary-navy)] hover:text-[var(--primary-navy)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentPage ? 'bg-[var(--primary-orange)]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(5, prev + 1))}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[var(--primary-navy)] hover:text-[var(--primary-navy)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
