'use client';

import Image from 'next/image';

const partnerLogos = [
  { src: '/images/partners/partner-1.png', alt: 'Partner 1' },
  { src: '/images/partners/partner-2.png', alt: 'Partner 2' },
  { src: '/images/partners/partner-3.png', alt: 'Partner 3' },
  { src: '/images/partners/partner-4.png', alt: 'Partner 4' },
  { src: '/images/partners/partner-5.png', alt: 'Partner 5' },
  { src: '/images/partners/partner-6.png', alt: 'Partner 6' },
  { src: '/images/partners/partner-7.png', alt: 'Partner 7' },
  { src: '/images/partners/partner-8.png', alt: 'Partner 8' },
  { src: '/images/partners/partner-9.png', alt: 'Partner 9' },
  { src: '/images/partners/partner-10.png', alt: 'Partner 10' },
  { src: '/images/partners/partner-11.png', alt: 'Partner 11' },
  { src: '/images/partners/partner-12.png', alt: 'Partner 12' },
  { src: '/images/partners/partner-13.png', alt: 'Partner 13' },
  { src: '/images/partners/partner-14.png', alt: 'Partner 14' },
];

const row1 = partnerLogos.slice(0, 7);
const row2 = partnerLogos.slice(7);

export default function Partners() {
  return (
    <section className="py-10 md:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-4 md:mb-0">
            Our Partners
          </h2>
          <p className="text-gray-600 max-w-md md:text-right">
            Strengthening Our Mission through Collaboration, Innovation, and a Shared
            Commitment to Growth!
          </p>
        </div>
      </div>

      {/* Two Row Infinite Scroll */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Scrolls Left */}
        <div className="flex overflow-hidden mb-4">
          <div className="flex animate-scroll-left">
            {[...row1, ...row1, ...row1].map((logo, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0 mx-3 md:mx-5">
                <div className="w-32 h-16 md:w-40 md:h-20 bg-gray-50 rounded-lg flex items-center justify-center p-3 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[var(--primary-orange)]/30">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={70}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Right */}
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll-right">
            {[...row2, ...row2, ...row2, ...row2].map((logo, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0 mx-3 md:mx-5">
                <div className="w-32 h-16 md:w-40 md:h-20 bg-gray-50 rounded-lg flex items-center justify-center p-3 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[var(--primary-orange)]/30">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={70}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
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

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
