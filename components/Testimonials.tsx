'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    speaker: 'Dr R. A. Mashelkar',
    title: 'Padma Vibhushan, Padma Bhushan, Padma Shri',
    quote:
      "The JECP is founded on Jagriti's decade long understanding of enterprise and innovation in the real India. The ecosystem it is creating will take forward ideas of Gandhian Engineering to the masses.",
    image: '/images/testimonials/dr-mashelkar.jpg',
  },
  {
    speaker: 'R. Gopalakrishnan',
    title: 'CEO - Mindworks, Former Director - Tata Sons',
    quote:
      'If in 2008 Jagriti Yatra was at its Gangotri; with the architecture, location and objectives of the JECP, Jagriti is poised at the Sangam...',
    image: '/images/testimonials/r-gopalakrishnan.jpg',
  },
  {
    speaker: 'Dr. Kiran Bedi',
    title: 'IPS, Former Governor',
    quote:
      "Jagriti Enterprise Centre will lead to women empowerment. Till the time our women are self-reliant, the country can't move to self-reliance.",
    image: '/images/testimonials/dr-kiran-bedi.jpg',
  },
  {
    speaker: 'Shri Ram Nath Kovind',
    title: "Hon. President of India 2017",
    quote:
      'This is a great start. Jagriti must continue this enterprise movement and lead it at the national scale.',
    image: '/images/testimonials/president-kovind.jpg',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 bg-[var(--background-cream)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-3">
            Wisdom That Guides Us
          </h2>
          <p className="text-gray-600">Here&apos;s What Our Clients Say</p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Image */}
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--primary-orange)]">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.speaker}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center md:text-left">
                        <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <h4 className="font-bold text-[var(--primary-navy)] text-lg">
                          {testimonial.speaker}
                        </h4>
                        <p className="text-[var(--primary-orange)] text-sm">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[var(--primary-navy)] hover:bg-[var(--primary-navy)] hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[var(--primary-navy)] hover:bg-[var(--primary-navy)] hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[var(--primary-orange)] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
