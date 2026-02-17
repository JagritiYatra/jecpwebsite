'use client';

import Image from 'next/image';
import Link from 'next/link';

// Impact stats
const impactStats = [
  { value: '7,000+', label: 'Women Mobilized' },
  { value: '1,200+', label: 'Women Trained' },
  { value: '55+', label: 'Enterprises Incubated' },
  { value: '600+', label: 'Women Digitally Integrated' },
  { value: '13', label: 'Business Models Piloted' },
  { value: '70+', label: 'Women Entrepreneurs Innovating' },
];

// 3 Pillars
const pillars = [
  {
    title: 'Shakti for Enterprise',
    description: 'Sector-specific strategies to support women-led enterprises from local to global levels.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Confidence with Culture',
    description: 'Culturally rooted enterprises in heritage, food, and crafts that align with women\'s strengths and balance-sheet growth.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Digital for Dignity',
    description: 'Digital-first enterprises leveraging smartphone access to build women\'s agency with family and community backing.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// Core Focus Areas
const focusAreas = [
  {
    title: 'Scaling Udyamita for Women',
    points: [
      'Focus on high-employment sectors',
      'Bridge skill gaps & linkages',
      'Enable grassroots-to-leadership journeys',
      'Build market, tech & finance partnerships',
    ],
  },
  {
    title: 'Scaling Women in Value Chains',
    points: [
      'Value-chain assessments',
      'Connect women to sectoral opportunities',
      'Partner ecosystem with govt. & private players',
    ],
  },
  {
    title: 'Gender Equity & Integration',
    points: [
      'Inclusion in innovation & tech',
      'Research on gender, mobility & safety',
      'Gender equity metrics for accountability',
      'Incubate women leaders',
    ],
  },
];

// Business Models
const businessModels = [
  'Digital Photography',
  'Common Service Centres',
  'Graphic Designing',
  'Digital Library',
  'IT Coaching Centres',
  'Drone-based Applications',
  'Gaming Zone',
  'Soil Health Testing',
  'Virtual Reality Business',
  'Common Service Points',
];

// Team data
const leadership = [
  { name: 'Vanita Vishwanath', role: 'Chairperson', subtitle: 'Senior Advisor and Development Leader, Ex-World Bank', image: '/images/programs/innovation/women-coe/team/vanita-vishwanath.png' },
];

const management = [
  { name: 'Shilpi Singh', role: 'Manager', image: '/images/programs/innovation/women-coe/team/shilpi-singh.png' },
  { name: 'Surya Rai', role: 'Project Manager', image: '/images/programs/innovation/women-coe/team/surya-rai.png' },
];

const udyamCorps = [
  { name: 'Saurabh Jaiswal', image: '/images/programs/innovation/women-coe/team/saurabh-jaiswal.png' },
  { name: 'Nandita Giri', image: '/images/programs/innovation/women-coe/team/nandita-giri.png' },
  { name: 'Saddam Ansari', image: '/images/programs/innovation/women-coe/team/saddam-ansari.png' },
  { name: 'Durgesh Rai', image: '/images/programs/innovation/women-coe/team/durgesh-rai.png' },
];

const udyamMitra = [
  { name: 'Rekha Sharma', image: '/images/programs/innovation/women-coe/team/rekha-sharma.png' },
  { name: 'Sadhana Singh', image: '/images/programs/innovation/women-coe/team/sadhana-singh.png' },
  { name: 'Divya Pandey', image: '/images/programs/innovation/women-coe/team/divya-pandey.png' },
  { name: 'Sangya Yadav', image: '/images/programs/innovation/women-coe/team/sangya-yadav.png' },
];

const fieldAssociates = [
  { name: 'Laxmi Pandey', image: '/images/programs/innovation/women-coe/team/laxmi-pandey.png' },
  { name: 'Manisha Madhesiya', image: '/images/programs/innovation/women-coe/team/manisha-madhesiya.jpg' },
];

// Tech Shakti stats
const techShaktiStats = [
  { value: '7,000', label: 'Women Mobilized' },
  { value: '1,200', label: 'Women Trained' },
  { value: '55', label: 'Enterprises Incubated' },
  { value: '600', label: 'Women Digitally Integrated' },
  { value: '30', label: 'Digital Business Models Researched' },
  { value: '13', label: 'Business Models Piloted' },
];

const techShaktiSriStats = [
  { value: '1,200', label: 'Women Mobilized' },
  { value: '600', label: 'Women Trained' },
  { value: '42', label: 'Women-led Enterprises Incubated' },
  { value: '\u20B950,000', label: 'Per Woman Grant Support' },
  { value: '650', label: 'Women Directly Supported' },
];

function TeamCard({ person }: { person: { name: string; role?: string; subtitle?: string; image: string } }) {
  return (
    <div className="text-center">
      <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 rounded-full overflow-hidden bg-gray-100 border-3 border-[var(--primary-orange)]">
        <Image src={person.image} alt={person.name} fill className="object-cover" />
      </div>
      <h4 className="font-semibold text-sm text-[var(--primary-navy)]">{person.name}</h4>
      {person.role && <p className="text-xs text-[var(--primary-orange)]">{person.role}</p>}
      {person.subtitle && <p className="text-xs text-gray-500 mt-0.5">{person.subtitle}</p>}
    </div>
  );
}

export default function WomenCoEPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Women CoE Banner"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Women Centre of Excellence</h1>
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
            <Link href="/programs/innovation" className="hover:text-[var(--primary-orange)]">Innovation</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--primary-navy)]">Women CoE</span>
          </nav>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--primary-orange)] mb-6">
            Women Centre of Excellence (CoE) @ JECP
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Women Center of Excellence at JECP is shaping an ecosystem where women can thrive as entrepreneurs, leaders, and changemakers. It equips them with access to skills, technology, finance, and markets, while building the confidence and networks needed to scale their enterprises and impact.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Grounded in Jagriti&apos;s mission to inspire and enable India&apos;s growth through Udyamita (entrepreneurship), the Centre nurtures purpose-driven enterprises, creates livelihoods, and strengthens local ecosystems in Tier 2 &amp; 3 districts &ndash; the heart of Middle India.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 md:py-14 px-4 bg-[var(--primary-navy)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactStats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[var(--primary-orange)]">{stat.value}</p>
                <p className="text-white/80 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-16 px-4 bg-[#f8f6f3]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border-t-4 border-[var(--primary-orange)]">
              <h3 className="text-xl font-bold text-[var(--primary-navy)] mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed italic">
                &ldquo;Women are natural balance-sheet builders &ndash; our vision at the CoE is to promote Udyamita to power women&apos;s balance-sheet-building capabilities.&rdquo;
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border-t-4 border-[var(--primary-navy)]">
              <h3 className="text-xl font-bold text-[var(--primary-navy)] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To nurture one million women entrepreneurs towards Udyamita over the next 10 years &ndash; through gig work, innovative entrepreneurship models, and scalable livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-10">
            3 Pillars of Women&apos;s CoE
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-[var(--primary-navy)] rounded-xl p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-[var(--primary-orange)] rounded-full flex items-center justify-center text-white">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--primary-orange)] mb-3">{pillar.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-12 md:py-16 px-4 bg-[#f8f6f3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-3">
            Core Focus Areas
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">We enable transformation through key focus areas</p>
          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((area, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-[var(--primary-orange)] mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[var(--primary-orange)] mt-0.5 flex-shrink-0">&bull;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Shakti */}
      <section className="py-12 md:py-16 px-4 bg-[var(--primary-navy)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">Tech Shakti</h2>
          <p className="text-[var(--primary-orange)] text-center text-sm mb-8">Supported by Bill &amp; Melinda Gates Foundation</p>
          <p className="text-white/80 text-center text-sm mb-8 max-w-2xl mx-auto">
            Establish innovative digital-led business models, narrow gender digital divide, empower rural women entrepreneurs
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techShaktiStats.map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-xl md:text-2xl font-bold text-[var(--primary-orange)]">{stat.value}</p>
                <p className="text-white/70 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Shakti Sri */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-2">Tech Shakti Sri</h2>
          <p className="text-[var(--primary-orange)] text-center text-sm mb-8">Supported by Cisco CSR India Grant</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {techShaktiSriStats.map((stat, i) => (
              <div key={i} className="bg-[#f8f6f3] rounded-lg p-4 text-center">
                <p className="text-xl md:text-2xl font-bold text-[var(--primary-navy)]">{stat.value}</p>
                <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Models Under Pilot */}
      <section className="py-12 md:py-16 px-4 bg-[#f8f6f3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-3">
            Business Models Under Pilot
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">Over 70+ women entrepreneurs adopted and drove innovations</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {businessModels.map((model, i) => (
              <div key={i} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 mx-auto mb-3 bg-[var(--primary-navy)] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--primary-orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-800">{model}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-10">Our Team</h2>

          {/* Leadership */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-[var(--primary-orange)] text-center mb-6">Leadership</h3>
            <div className="flex justify-center">
              {leadership.map((person, i) => (
                <TeamCard key={i} person={person} />
              ))}
            </div>
          </div>

          {/* Management */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-[var(--primary-orange)] text-center mb-6">Management</h3>
            <div className="flex justify-center gap-8">
              {management.map((person, i) => (
                <TeamCard key={i} person={person} />
              ))}
            </div>
          </div>

          {/* Udyam Corps */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-[var(--primary-orange)] text-center mb-6">Udyam Corps</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {udyamCorps.map((person, i) => (
                <TeamCard key={i} person={person} />
              ))}
            </div>
          </div>

          {/* Udyam Mitra */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-[var(--primary-orange)] text-center mb-6">Udyam Mitra</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {udyamMitra.map((person, i) => (
                <TeamCard key={i} person={person} />
              ))}
            </div>
          </div>

          {/* Field Associates */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--primary-orange)] text-center mb-6">Field Associates</h3>
            <div className="flex justify-center gap-8">
              {fieldAssociates.map((person, i) => (
                <TeamCard key={i} person={person} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 md:py-14 px-4 bg-[var(--primary-navy)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">Our Partners</h2>
          <div className="flex justify-center gap-8 items-center">
            <div className="bg-white rounded-xl p-4 w-40 h-24 flex items-center justify-center">
              <Image
                src="/images/programs/innovation/women-coe/partners/gates-foundation.png"
                alt="Bill & Melinda Gates Foundation"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white rounded-xl p-4 w-40 h-24 flex items-center justify-center">
              <Image
                src="/images/programs/innovation/women-coe/partners/cisco.png"
                alt="Cisco"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
