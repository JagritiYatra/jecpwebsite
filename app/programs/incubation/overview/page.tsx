'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// Stats data
const statsData = [
  { value: 403, suffix: '+', label: 'Enterprises Incubated' },
  { value: 25.89, suffix: 'K', prefix: '~', label: 'Livelihoods Impacted' },
  { value: 2050, suffix: '', label: 'Jobs Created' },
  { value: 98.5, suffix: 'Cr', prefix: '~₹', label: 'Revenue Generated' },
  { value: 85, suffix: '', label: 'Industry Mentors' },
];

// Journey roadmap steps
const journeySteps = [
  'Induction And Orientation',
  'Personalized Mentorship',
  'Subject Matter Experts',
  'Business Planning',
  'Business Model Refinement',
  'Market Readiness Capacity Building',
  'Digital Capacity Building',
  'Miscellaneous Services',
  'Networking And Collaboration',
  'Demo Days',
  'Progress Tracking',
  'Graduation',
];

// Sectors in focus
const sectors = [
  'Handicrafts and Apparel',
  'Women',
  'Healthcare',
  'Agro-Processing',
  'Digital Innovation',
];

// Incubation facilities accordion
const facilitiesData = [
  { title: 'Incubation Programs', content: 'Tailored to various stages of the entrepreneurial journey, from idea validation to scale-up.' },
  { title: 'Training & Capacity Building', content: 'Workshops and training programs to enhance skills in business development, technology, and management.' },
  { title: 'JECP Membership', content: 'Access to exclusive member benefits including networking events, resources, and ongoing support.' },
  { title: 'Co-Working Spaces', content: 'Modern, well-equipped spaces designed for collaboration and productivity.' },
  { title: 'Business Support Services', content: 'Comprehensive support for business planning, marketing, compliance, and operations.' },
];

// Incubation journey cards
const incubationJourneyCards = [
  'Induction & Orientation',
  'Personalized Mentorship',
  'Subject Matter Expertise',
  'Business Model Refinement',
  'Market Readiness And Digital Capacity Building',
  'Networking And Collaboration',
  'Access To Funding Opportunities',
];

// Milestones data
const milestonesData = [
  { title: 'High-Intensity Support (Months 2-4)', content: 'Intensive mentoring and resource allocation during the critical early months of incubation.' },
  { title: 'Monthly Meetups', content: 'Regular networking sessions with fellow entrepreneurs, mentors, and local influencers.' },
  { title: 'Product/Service Demo Days', content: 'Opportunity to showcase your offerings to potential customers and partners.' },
  { title: 'Investor Demo Day', content: 'Pitch your startup to a curated panel of investors and funding partners.' },
  { title: 'Graduation Ceremony', content: 'Celebrate your achievements and join the JECP alumni network.' },
];

// Animated counter component
function AnimatedCounter({ value, suffix, prefix = '' }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  const displayValue = value % 1 === 0 ? Math.floor(count).toLocaleString() : count.toFixed(2);

  return (
    <span ref={ref} className="font-bold text-[var(--primary-navy)]">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function IncubationOverviewPage() {
  const [openFacility, setOpenFacility] = useState<number | null>(0);
  const [openMilestone, setOpenMilestone] = useState<number | null>(0);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Incubation Overview Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Overview</h1>
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
            <span className="text-[var(--primary-navy)]">Incubation Overview</span>
          </nav>
        </div>
      </div>

      {/* Data Dashboard - Compact Horizontal Stats */}
      <section className="py-8 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Udyami Journey Roadmap - Flow Design */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[var(--primary-navy)]">
          <Image
            src="/images/programs/incubation/jagriti-bg.png"
            alt=""
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Udyami Journey Roadmap</h2>
            <div className="w-16 h-0.5 bg-[var(--primary-orange)] mx-auto"></div>
          </div>

          {/* Journey Flow - Circular Path */}
          <div className="relative">
            {/* Desktop: Continuous Flow */}
            <div className="hidden lg:block">
              {/* Top Row (1-6) */}
              <div className="flex justify-between items-stretch mb-2">
                {journeySteps.slice(0, 6).map((step, i) => (
                  <div key={i} className="flex items-center">
                    <div className="bg-white rounded-lg px-3 py-2 shadow-md w-[145px] text-center flex items-center justify-center min-h-[52px]">
                      <span className="text-[var(--primary-orange)] font-bold text-sm">{i + 1}.</span>
                      <span className="text-[var(--primary-navy)] text-xs font-medium ml-1">{step}</span>
                    </div>
                    {i < 5 && (
                      <svg className="w-6 h-6 text-[var(--primary-orange)] mx-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              {/* Connector Down */}
              <div className="flex justify-end pr-16 py-2">
                <svg className="w-6 h-6 text-[var(--primary-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Bottom Row (7-12) - Reversed */}
              <div className="flex justify-between items-stretch flex-row-reverse">
                {journeySteps.slice(6, 12).map((step, i) => (
                  <div key={i} className="flex items-center flex-row-reverse">
                    <div className="bg-white rounded-lg px-3 py-2 shadow-md w-[145px] text-center flex items-center justify-center min-h-[52px]">
                      <span className="text-[var(--primary-orange)] font-bold text-sm">{i + 7}.</span>
                      <span className="text-[var(--primary-navy)] text-xs font-medium ml-1">{step}</span>
                    </div>
                    {i < 5 && (
                      <svg className="w-6 h-6 text-[var(--primary-orange)] mx-1 flex-shrink-0 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              {/* Alumni Arrow */}
              <div className="flex items-center justify-start pl-4 mt-3">
                <svg className="w-6 h-6 text-[var(--primary-orange)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="text-white font-semibold text-sm">Alumni</span>
              </div>
            </div>

            {/* Tablet: 2 Columns */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-3">
              {journeySteps.map((step, i) => (
                <div key={i} className="bg-white rounded-lg px-4 py-3 shadow-md flex items-center">
                  <span className="w-7 h-7 bg-[var(--primary-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">{i + 1}</span>
                  <span className="text-[var(--primary-navy)] text-sm font-medium">{step}</span>
                </div>
              ))}
              <div className="col-span-2 flex justify-center mt-2">
                <div className="bg-[var(--primary-orange)] text-white rounded-full px-6 py-2 font-semibold text-sm">
                  → Alumni Network
                </div>
              </div>
            </div>

            {/* Mobile: Single Column */}
            <div className="md:hidden space-y-2">
              {journeySteps.map((step, i) => (
                <div key={i} className="bg-white rounded-lg px-4 py-3 shadow flex items-center">
                  <span className="w-6 h-6 bg-[var(--primary-orange)] rounded-full flex items-center justify-center text-white font-bold text-xs mr-3 flex-shrink-0">{i + 1}</span>
                  <span className="text-[var(--primary-navy)] text-sm font-medium">{step}</span>
                </div>
              ))}
              <div className="flex justify-center mt-3">
                <div className="bg-[var(--primary-orange)] text-white rounded-full px-5 py-2 font-semibold text-sm">
                  → Alumni
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors In Focus */}
      <section className="py-12 md:py-16 px-4 bg-[#f8f6f3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] mb-2">Sectors In Focus</h2>
            <div className="w-16 h-0.5 bg-[var(--primary-orange)] mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm md:text-base font-medium text-[var(--primary-navy)] hover:bg-[var(--primary-navy)] hover:text-white hover:border-[var(--primary-navy)] transition-all duration-300 cursor-default"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Facilities - Accordion */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] mb-2">Incubation Facilities</h2>
            <div className="w-16 h-0.5 bg-[var(--primary-orange)] mx-auto"></div>
          </div>

          <div className="space-y-2">
            {facilitiesData.map((facility, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFacility(openFacility === index ? null : index)}
                  className={`w-full px-5 py-3.5 flex items-center justify-between text-left transition-all duration-200 ${
                    openFacility === index
                      ? 'bg-[var(--primary-orange)] text-white'
                      : 'bg-[#faf8f5] text-[var(--primary-navy)] hover:bg-[#f5f2ed]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold">{openFacility === index ? '−' : '+'}</span>
                    <span className="font-medium">{facility.title}</span>
                  </div>
                </button>
                {openFacility === index && (
                  <div className="bg-white px-5 py-4 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{facility.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Journey Cards */}
      <section className="py-12 md:py-16 px-4 bg-[var(--primary-navy)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Incubation Journey</h2>
            <div className="w-16 h-0.5 bg-[var(--primary-orange)] mx-auto"></div>
          </div>

          {/* First row - 4 items */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-3 md:mb-4">
            {incubationJourneyCards.slice(0, 4).map((card, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <div className="w-10 h-10 mx-auto mb-2 bg-[var(--primary-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-white text-sm font-medium leading-tight">{card}</h3>
              </div>
            ))}
          </div>

          {/* Second row - 3 items centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-3xl w-full">
              {incubationJourneyCards.slice(4, 7).map((card, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-200 ${index === 2 ? 'col-span-2 lg:col-span-1 max-w-[260px] mx-auto w-full' : ''}`}
                >
                  <div className="w-10 h-10 mx-auto mb-2 bg-[var(--primary-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 5}
                  </div>
                  <h3 className="text-white text-sm font-medium leading-tight">{card}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones and Key Events */}
      <section className="py-12 md:py-16 px-4 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] mb-2">Milestones and Key Events</h2>
            <div className="w-16 h-0.5 bg-[var(--primary-orange)] mx-auto"></div>
          </div>

          <div className="space-y-2">
            {milestonesData.map((milestone, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenMilestone(openMilestone === index ? null : index)}
                  className={`w-full px-5 py-3.5 flex items-center justify-between text-left transition-all duration-200 ${
                    openMilestone === index
                      ? 'bg-[var(--primary-orange)] text-white'
                      : 'bg-white text-[var(--primary-navy)] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold">{openMilestone === index ? '−' : '+'}</span>
                    <span className="font-medium">{milestone.title}</span>
                  </div>
                </button>
                {openMilestone === index && (
                  <div className="bg-white px-5 py-4 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{milestone.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
