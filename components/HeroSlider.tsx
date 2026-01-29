'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/hero/home-banner.png',
    subtitle: 'BUILDING INDIA THROUGH ENTERPRISE',
    title: 'Every small idea can carry the weight of a nation!',
  },
  {
    image: '/images/sections/incubation-center.png',
    subtitle: 'THE INCUBATION GROUND',
    title: 'Where local dreams find roots and grow into enterprises!',
  },
  {
    image: '/images/sections/banyan-revolution.jpeg',
    subtitle: 'THE BANYAN REVOLUTION',
    title: 'One shade many branches - A movement of grassroots prosperity!',
  },
  {
    image: '/images/sections/udyamis-pride.png',
    subtitle: 'OUR UDYAMIS, OUR PRIDE',
    title: 'Every face here is a story of courage, grit, and hope!',
  },
  {
    image: '/images/sections/get-involved.png',
    subtitle: 'JOIN THE JOURNEY',
    title: 'Together we nurture the enterprise of a rising Bharat!',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden hero-section">
      {/* CSS for dynamic viewport height */}
      <style jsx>{`
        .hero-section {
          height: 100vh;
          height: 100dvh;
          min-height: 500px;
          max-height: 1200px;
        }

        @media (max-width: 640px) {
          .hero-section {
            height: calc(100vh - 60px);
            height: calc(100dvh - 60px);
            min-height: 400px;
            max-height: 800px;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .hero-section {
            height: 80vh;
            height: 80dvh;
            min-height: 500px;
            max-height: 900px;
          }
        }

        @media (min-width: 1025px) and (max-width: 1440px) {
          .hero-section {
            height: 90vh;
            height: 90dvh;
            min-height: 600px;
            max-height: 1000px;
          }
        }

        @media (min-width: 1441px) {
          .hero-section {
            height: 85vh;
            height: 85dvh;
            min-height: 700px;
            max-height: 1100px;
          }
        }

        @media (max-height: 500px) and (orientation: landscape) {
          .hero-section {
            height: 100vh;
            height: 100dvh;
            min-height: 300px;
          }
        }
      `}</style>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
            sizes="100vw"
            quality={90}
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6 md:px-8 lg:px-12 w-full max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
              {/* Subtitle */}
              <p className="text-[var(--primary-orange)] text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-[0.15em] sm:tracking-[0.2em] mb-2 sm:mb-3 md:mb-4 lg:mb-5 uppercase drop-shadow-lg">
                {slide.subtitle}
              </p>
              {/* Title */}
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug drop-shadow-xl">
                {slide.title}
              </h1>
            </div>
          </div>
        </div>
      ))}

      {/* Arrow Navigation - Hidden on small mobile, visible on larger screens */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group hidden sm:flex"
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group hidden sm:flex"
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[var(--primary-orange)] w-6 sm:w-7 md:w-8'
                : 'bg-white/50 hover:bg-white/80 w-2 sm:w-2.5 md:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter - Mobile only */}
      <div className="absolute bottom-4 right-4 z-20 sm:hidden">
        <span className="text-white/80 text-xs font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </section>
  );
}
