'use client';

import Image from 'next/image';

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
  return (
    <section className="py-10 md:py-12 px-4 bg-[var(--primary-navy)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
            Wisdom That Guides Us
          </h2>
          <p className="text-white/60 text-xs sm:text-base">Here&apos;s What Our Clients Say</p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1 flex flex-col border border-white/10"
            >
              {/* Image */}
              <div className="flex justify-center mb-2 sm:mb-4">
                <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 sm:border-3 border-[var(--primary-orange)] shadow-lg">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.speaker}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Quote */}
              <p className="text-white/70 text-[10px] sm:text-sm italic leading-relaxed text-center flex-1 mb-2 sm:mb-4 line-clamp-4 sm:line-clamp-none">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Name & Title */}
              <div className="text-center border-t border-white/10 pt-2 sm:pt-4">
                <h4 className="font-bold text-white text-[10px] sm:text-sm">
                  {testimonial.speaker}
                </h4>
                <p className="text-[var(--primary-orange)] text-[8px] sm:text-xs mt-0.5 sm:mt-1 leading-tight">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
