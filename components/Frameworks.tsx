'use client';

import Image from 'next/image';

const frameworks = [
  {
    name: 'JECP 3xI (2E) Framework',
    description:
      "JECP's 3xI framework is a beacon of transformation, centering on Incubation, Innovation, and Inspiration, all rooted in sustainability.",
    image: '/images/frameworks/3xi-framework.png',
  },
  {
    name: 'JECP 7M Framework',
    description:
      'The 7M framework works a lighthouse for Udyamis, guiding them through Mobilization, Mentorship, Market Connect, Money, Miscellaneous Services, Mahol (creating an inspiring environment), and Mitra (partners with complementary skills).',
    image: '/images/frameworks/7m-framework.png',
  },
];

export default function Frameworks() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with tree image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/images/footer/footer-bg.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text-dark)] mb-12">
          Our Udyamita Frameworks
        </h2>

        {/* Framework Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[var(--primary-orange)]"
            >
              <div className="relative h-64 md:h-80 bg-white p-4">
                <Image
                  src={framework.image}
                  alt={framework.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[var(--primary-navy)] mb-3">
                  {framework.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {framework.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
