'use client';

import Image from 'next/image';

const frameworks = [
  {
    name: 'JECP 3xI (2E) Framework',
    description:
      "JECP's 3xI framework is a beacon of transformation, centering on Incubation, Innovation, and Inspiration, all rooted in sustainability.",
    image: '/images/frameworks/3xi-framework-hd.png',
  },
  {
    name: 'JECP 7M Framework',
    description:
      'The 7M framework works as a lighthouse for Udyamis, guiding them through Mobilization, Mentorship, Market Connect, Money, Miscellaneous Services, Mahol (creating an inspiring environment), and Mitra (partners with complementary skills).',
    image: '/images/frameworks/7m-framework-hd.png',
  },
];

export default function Frameworks() {
  return (
    <section className="py-10 md:py-12 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-3">
            Our Udyamita Frameworks
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Structured approaches that empower rural entrepreneurs to build sustainable enterprises
          </p>
        </div>

        {/* Framework Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-[var(--primary-orange)] hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative bg-gradient-to-b from-gray-50 to-white p-6">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={framework.image}
                    alt={framework.name}
                    fill
                    className="object-contain"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center border-t border-gray-100">
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
