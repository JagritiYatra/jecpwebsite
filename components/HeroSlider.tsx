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

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <p className="text-[var(--primary-orange)] text-sm md:text-base font-semibold tracking-wider mb-4 uppercase">
                {slide.subtitle}
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {slide.title}
              </h1>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-[var(--primary-orange)] w-8'
                : 'bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
