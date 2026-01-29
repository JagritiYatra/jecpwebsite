'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Core Pillars data
const corePillars = [
  {
    number: '1',
    title: 'Innovation',
    items: [
      {
        title: 'Innovation across Value Chains',
        content: 'Driving innovation through research and on-ground implementation across practices, technology, demonstrations, markets, ecosystems, and intellectual property. Metric: Number of innovations introduced.',
      },
      {
        title: 'Innovation Partnerships',
        content: 'Building partnerships with industry and academia to co-create scalable, high-impact innovations.',
      },
    ],
  },
  {
    number: '2',
    title: 'Incubation',
    items: [
      {
        title: '7M Incubation Support',
        content: 'Comprehensive support for sector-specific enterprises across growth stages:\n• L0: Up to ₹10 lakh annual revenue\n• L1: ₹10–50 lakh annual revenue\n• L2: ₹50 lakh–₹5 crore annual revenue\n• L3: Above ₹5 crore annual revenue',
      },
      {
        title: 'Focus on Women & Youth',
        content: 'Emphasizing women and youth as key beneficiaries and growth leaders.',
      },
    ],
  },
  {
    number: '3',
    title: 'Development Programs',
    items: [
      {
        title: 'Private Sector & Philanthropy Collaboration',
        content: 'Implementing programs focused on sustainability and income enhancement. Metrics: Funds raised | Beneficiaries impacted.',
      },
      {
        title: 'Government Partnerships',
        content: 'Aligning CoE objectives with national and regional growth agendas.',
      },
    ],
  },
];

// Centres of Excellence data
const centresOfExcellence = [
  { name: 'Women', image: '/images/programs/innovation/women-coe.jpg' },
  { name: 'Bioregional', image: '/images/programs/innovation/bioregional-coe.jpg' },
  { name: 'Digital', image: '/images/programs/innovation/digital-coe.png' },
  { name: 'Handicrafts & Apparel', image: '/images/programs/innovation/handicrafts-coe.png' },
  { name: 'Agro', image: '/images/programs/innovation/agro-coe.png' },
  { name: 'Healthcare', image: '/images/programs/innovation/healthcare-coe.png' },
  { name: 'Urbanization', image: '/images/programs/innovation/urbanization-coe.png' },
];

function PillarAccordion({ pillar }: { pillar: typeof corePillars[0] }) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl md:text-2xl font-bold text-[var(--primary-orange)] mb-4">
        {pillar.number}. {pillar.title}
      </h3>
      <div className="space-y-2">
        {pillar.items.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-[var(--primary-orange)]">+</span>
                <span className="font-medium text-gray-800">{item.title}</span>
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform ${openItems.includes(index) ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {openItems.includes(index) && (
              <div className="px-5 pb-4 pt-2 bg-gray-50 border-t border-gray-100">
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InnovationPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Innovation Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Innovation</h1>
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
            <Link href="/programs" className="hover:text-[var(--primary-orange)]">Our Programs</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--primary-navy)]">Innovation</span>
          </nav>
        </div>
      </div>

      {/* Building Sectoral Growth Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--primary-orange)] mb-6">
            Building Sectoral Growth through Innovation and Incubation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            JECP&apos;s Centres of Excellence (CoE) are designed to drive sector-based growth in Tier 2 and Tier 3 cities of India, with an early focus on Eastern Uttar Pradesh.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Each CoE serves as a hub for innovation, incubation, and enterprise development, fostering sustainable growth through collaboration, research, and implementation.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-16 md:py-20 px-4 bg-[var(--primary-navy)] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/programs/incubation/jagriti-bg.png"
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Vision Icon */}
          <div className="w-14 h-14 mx-auto mb-4 bg-[var(--primary-orange)] rounded-full flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-orange)] mb-6">Vision</h2>

          <p className="text-white text-lg md:text-xl leading-relaxed">
            To drive incubation - and innovation - led sectoral growth through Middle India Enterprises, enabling Economic Transformation from the Grassroots.
          </p>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-12 md:py-16 px-4 bg-[#f8f6f3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-10">
            Core Pillars of the Centres of Excellence
          </h2>

          {corePillars.map((pillar, index) => (
            <PillarAccordion key={index} pillar={pillar} />
          ))}
        </div>
      </section>

      {/* Our Centres of Excellence Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-10">
            Our Centres of Excellence
          </h2>

          {/* First Row - 4 items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            {centresOfExcellence.slice(0, 4).map((coe, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-3 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Image
                  src={coe.image}
                  alt={coe.name}
                  width={300}
                  height={150}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Second Row - 3 items centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl">
              {centresOfExcellence.slice(4, 7).map((coe, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-3 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Image
                    src={coe.image}
                    alt={coe.name}
                    width={300}
                    height={150}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
