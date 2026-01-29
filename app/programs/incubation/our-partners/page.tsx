'use client';

import Image from 'next/image';
import Link from 'next/link';

const partners = [
  { name: 'Bill & Melinda Gates Foundation', image: '/images/partners/9-1.png' },
  { name: 'Accenture', image: '/images/partners/6-1.png' },
  { name: 'SBI Foundation', image: '/images/partners/1-1.png' },
  { name: 'Zoho', image: '/images/partners/8-1.png' },
  { name: 'Cisco CSR', image: '/images/partners/7-1.png' },
  { name: 'Rainmatter Foundation', image: '/images/partners/jecp-homepage-logos-1.png' },
  { name: 'Bajaj Beyond', image: '/images/partners/5-1.png' },
  { name: 'LIC HFL CSR', image: '/images/partners/jecp-homepage-logos.png' },
  { name: 'ATE Chandra Foundation', image: '/images/partners/2-1.png' },
  { name: 'Yes Foundation', image: '/images/partners/3-1.png' },
  { name: 'ACIC Jagriti', image: '/images/partners/4-1.png' },
  { name: 'StartInUp', image: '/images/partners/Jagriti-clients-logos-9.png' },
  { name: 'ORIX', image: '/images/partners/orix.png' },
  { name: 'Adecco', image: '/images/partners/Jagriti-clients-logos-4.png' },
];

export default function OurPartnersPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Our Partners Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Our Partners</h1>
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
            <Link href="/programs/incubation/overview" className="hover:text-[var(--primary-orange)]">Incubation</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--primary-navy)]">Our Partners</span>
          </nav>
        </div>
      </div>

      {/* Section Header */}
      <section className="py-10 md:py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider mb-2">Collaboration & Impact</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--primary-navy)] mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to partner with leading organizations committed to driving
            entrepreneurship and sustainable development across India.
          </p>
        </div>
      </section>

      {/* Partners Grid - Premium Design */}
      <section className="py-16 md:py-20 px-4 bg-[#f8f6f3]">
        <div className="max-w-6xl mx-auto">
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-navy)]/5 to-[var(--primary-orange)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-orange)] via-[var(--primary-navy)] to-[var(--primary-orange)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Logo Container */}
                <div className="relative aspect-[3/2] flex items-center justify-center">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
