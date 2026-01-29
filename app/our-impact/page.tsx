'use client';

import Image from 'next/image';
import Link from 'next/link';

// Enterprise Overview Data
const enterpriseStats = [
  { label: 'Total Enterprises Supported So Far', value: '259', highlight: true },
  { label: 'Graduated', value: '121', highlight: false },
  { label: 'Currently Under Incubation', value: '115', highlight: false },
  { label: 'Women Led Enterprises', value: '47%', highlight: false },
  { label: 'Green Enterprises', value: '41.5%', highlight: false },
];

// Mentorship & Support Data
const mentorshipStats = [
  { label: 'Mentors', value: '85' },
  { label: 'Partnerships', value: '29' },
  { label: 'Inter Cohort Connects', value: '53' },
  { label: 'Awards & Recognitions', value: '33' },
  { label: 'Mentor Calls', value: '637' },
  { label: 'Knowledge Sessions', value: '30' },
];

// Livelihood Impact Data
const livelihoodStats = [
  { label: 'Farmers Impacted', value: '8,310' },
  { label: 'Women Impacted', value: '8,931' },
  { label: 'Students Impacted', value: '6,600' },
  { label: 'Total Livelihoods Impacted', value: '~25.89K' },
];

// Funds Raised Data
const fundsData = [
  { label: 'Total Funds Raised', value: '5.07Cr', highlight: true },
  { label: 'Value Of Partner Incubates Benefits', value: '98 Lakhs', highlight: false },
  { label: 'Funds Raised Through External Sources', value: '4.29 Cr By 67', subtext: 'Enterprises', highlight: false },
  { label: 'Occasions Of Fundraising', value: '168', highlight: false },
];

// Sector-Wise Distribution Data
const sectorStats = [
  { label: 'Agri & Allied', value: '39.7%' },
  { label: 'Digital / Ecommerce', value: '19%' },
  { label: 'Handicrafts & Apparels', value: '14.3%' },
  { label: 'FMCG', value: '7.9%' },
  { label: 'Manufacturing', value: '7.9%' },
  { label: 'Services', value: '7.9%' },
  { label: 'Education', value: '3.2%' },
];

// Regional Presence Data
const regionalData = [
  { district: 'Kushinagar', enterprises: 29 },
  { district: 'Deoria', enterprises: 27 },
  { district: 'Gorakhpur', enterprises: 26 },
  { district: 'Sant Kabirnagar', enterprises: 10 },
  { district: 'Maharajganj', enterprises: 8 },
  { district: 'Ballia', enterprises: 8 },
  { district: 'Mau', enterprises: 7 },
];

// Check Icon Component
function CheckIcon() {
  return (
    <div className="w-10 h-10 mx-auto mb-3 bg-[var(--primary-orange)] rounded-full flex items-center justify-center">
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export default function OurImpactPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Our Impact Banner"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Our Impact</h1>
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
            <span className="text-[var(--primary-navy)]">Our Impact</span>
          </nav>
        </div>
      </div>

      {/* Enterprise Overview */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-10">
            Enterprise Overview
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {enterpriseStats.map((stat, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 md:p-5 text-center ${
                  stat.highlight
                    ? 'bg-[var(--primary-navy)] text-white'
                    : 'bg-[var(--primary-orange)]'
                }`}
              >
                <p className={`text-xs md:text-sm mb-2 ${stat.highlight ? 'text-[var(--primary-orange)]' : 'text-white'}`}>
                  {stat.label}
                </p>
                <p className={`text-2xl md:text-3xl font-bold ${stat.highlight ? 'text-white' : 'text-[var(--primary-navy)]'}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship & Support */}
      <section className="relative py-12 md:py-16 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/innerpgbanner.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Mentorship & Support
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
            {mentorshipStats.map((stat, index) => (
              <div key={index} className="text-center">
                <CheckIcon />
                <p className="text-2xl md:text-3xl font-bold text-[var(--primary-orange)] mb-1">
                  {stat.value}
                </p>
                <p className="text-white/80 text-xs md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employment Impact */}
      <section className="py-12 md:py-16 px-4 bg-[#f8f6f3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-10">
            Employment Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--primary-navy)] rounded-lg p-6 md:p-8 text-center">
              <p className="text-[var(--primary-orange)] font-semibold mb-2">Total Jobs Created</p>
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">2000+</p>
              <p className="text-white/70 text-sm">(27.2 % Jobs for Women)</p>
            </div>

            <div className="bg-[var(--primary-orange)] rounded-lg p-6 md:p-8 text-center">
              <p className="text-white font-semibold mb-2">Growth In Employment Generation</p>
              <p className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)]">58.1%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Livelihood Impact */}
      <section className="relative py-12 md:py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--primary-navy)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Livelihood Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {livelihoodStats.map((stat, index) => (
              <div key={index} className="text-center">
                <CheckIcon />
                <p className="text-2xl md:text-3xl font-bold text-[var(--primary-orange)] mb-1">
                  {stat.value}
                </p>
                <p className="text-white/80 text-xs md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-12 md:py-16 px-4 bg-[#f8f6f3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-10">
            Economic Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Total Revenue Card */}
            <div className="relative rounded-lg overflow-hidden h-48 md:h-56">
              <Image
                src="/images/about/innerpgbanner.png"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--primary-navy)]/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <p className="text-[var(--primary-orange)] font-semibold text-sm md:text-base mb-2">
                  Total Revenue (All Enterprises)
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white">~ ₹ 98.5 Cr</p>
              </div>
            </div>

            {/* Growth In Revenue Card */}
            <div className="relative rounded-lg overflow-hidden h-48 md:h-56">
              <Image
                src="/images/about/innerpgbanner.png"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--primary-navy)]/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <p className="text-[var(--primary-orange)] font-semibold text-sm md:text-base mb-2">
                  Growth In Revenue
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white">~71.96%</p>
              </div>
            </div>

            {/* Cohort-Wise Revenue Card */}
            <div className="relative rounded-lg overflow-hidden h-48 md:h-56">
              <Image
                src="/images/about/innerpgbanner.png"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--primary-navy)]/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <p className="text-[var(--primary-orange)] font-semibold text-sm md:text-base mb-3">
                  Cohort-Wise Revenue
                </p>
                <div className="text-white text-xs md:text-sm space-y-1">
                  <p>Green Enterprises: <span className="font-semibold">22.83Cr</span></p>
                  <p>Tech Shakti Sri: <span className="font-semibold">42.52 Lacs</span></p>
                  <p>General Incubation: <span className="font-semibold">72.11 Cr</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* District-Wise Revenue Generated */}
      <section className="relative py-12 md:py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--primary-navy)]" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-orange)] text-center mb-10">
            District-Wise Revenue Generated
          </h2>

          <div className="flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              <Image
                src="/images/impact/district-map.png"
                alt="District-Wise Revenue Map"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Funds Raised */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-10">
            Funds Raised
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {fundsData.map((item, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 md:p-6 text-center ${
                  item.highlight
                    ? 'bg-[var(--primary-navy)]'
                    : 'bg-[var(--primary-orange)]'
                }`}
              >
                <p className={`text-xs md:text-sm mb-2 ${item.highlight ? 'text-[var(--primary-orange)]' : 'text-white'}`}>
                  {item.label}
                </p>
                <p className={`text-xl md:text-2xl font-bold ${item.highlight ? 'text-white' : 'text-[var(--primary-navy)]'}`}>
                  {item.value}
                </p>
                {item.subtext && (
                  <p className={`text-xs mt-1 ${item.highlight ? 'text-white/70' : 'text-[var(--primary-navy)]/70'}`}>
                    {item.subtext}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector-Wise Enterprise Distribution */}
      <section className="relative py-12 md:py-16 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/programs/incubation/jagriti-bg.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Sector-Wise Enterprise Distribution
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 md:gap-6">
            {sectorStats.map((stat, index) => (
              <div key={index} className="text-center">
                <CheckIcon />
                <p className="text-xl md:text-2xl font-bold text-[var(--primary-orange)] mb-1">
                  {stat.value}
                </p>
                <p className="text-white/80 text-[10px] md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-12 md:py-16 px-4 bg-[#f8f6f3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-2">
            Regional Presence
          </h2>
          <p className="text-[var(--primary-orange)] text-center mb-10">
            Operating in 7 districts of Eastern UP
          </p>

          {/* First Row - 4 items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {regionalData.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden h-28 md:h-32"
              >
                <Image
                  src="/images/about/innerpgbanner.png"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--primary-navy)]/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                  <p className="text-[var(--primary-orange)] font-semibold text-sm md:text-base">
                    {item.district}
                  </p>
                  <p className="text-white font-bold text-lg md:text-xl">
                    {item.enterprises} Enterprises
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 items centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl w-full">
              {regionalData.slice(4, 7).map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden h-28 md:h-32"
                >
                  <Image
                    src="/images/about/innerpgbanner.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[var(--primary-navy)]/60" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                    <p className="text-[var(--primary-orange)] font-semibold text-sm md:text-base">
                      {item.district}
                    </p>
                    <p className="text-white font-bold text-lg md:text-xl">
                      {item.enterprises} Enterprises
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
