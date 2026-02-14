'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const mentors = [
  {
    name: 'Manish Agrawal',
    role: 'Partner Leader: Capital & Infrastructure Projects, PwC CoE Urbanization, JEC-P',
    image: '/images/mentors/Manish-Aggarwal.png',
  },
  {
    name: 'Prashant Iyer',
    role: 'Director: Ecosystem Development, Wadhwani Foundation Strategic Leader in Startup & SMB Growth',
    image: '/images/mentors/Prashant-Iyer.png',
  },
  {
    name: 'Lalith Kumar Vemali',
    role: 'Founding Member, Head of Product Innovation & Customer Experience, SSK EMart (Kirana Commerce Innovation)',
    image: '/images/mentors/Lalit-Kumar-Vemali.png',
  },
  {
    name: 'Dr. Debasish Mohapatra',
    role: 'Associate Professor of Practice, KIIT School of Rural Management, Bhubaneswar',
    image: '/images/mentors/Debashish-M.png',
  },
  {
    name: 'Pooja Tendulkar',
    role: 'Business Coach Founder, Leminion Green Solution Pvt. Ltd.',
    image: '/images/mentors/Pooja-Tendulkar.png',
  },
  {
    name: 'Sandeep Achantani',
    role: 'CEO Africa Region, Innovis Telecom Services Pvt. Ltd. Entrepreneur',
    image: '/images/mentors/Sandeep-Achantani.png',
  },
  {
    name: 'Ashish Kolarkar',
    role: 'Head of Operations, Madhya Pradesh, Haselfre Foundation Founder & CEO, DATATRACK',
    image: '/images/mentors/Ashish-Kolarkar.png',
  },
  {
    name: 'Sushank Arora',
    role: 'Founder & CEO, Nyra Kitchenware',
    image: '/images/mentors/Sushank-Arora.png',
  },
  {
    name: 'Sachin Kumar',
    role: 'Co-Founder, Qtopia Ex-Product Head, PagarBook',
    image: '/images/mentors/Sachin-Kumar.png',
  },
  {
    name: 'Umesh Kumar',
    role: 'Head of Product, India, Branch International',
    image: '/images/mentors/Umesh-Kumar.png',
  },
  {
    name: 'Apurva Mehra',
    role: 'Senior Product Manager, Microsoft',
    image: '/images/mentors/Apurv-Mehra.png',
  },
  {
    name: 'Md Nashim Akhtar',
    role: 'Program Lead, Log 9 Materials',
    image: '/images/mentors/Md.-Nasim-Akhtar.png',
  },
  {
    name: 'Ankur Shrivastava',
    role: 'Co-Founder, Qitech.in | QiMedia.in Mentor, Digiplus Academy',
    image: '/images/mentors/Ankur-Srivastava.png',
  },
  {
    name: 'Iranna Rotte',
    role: 'HO Rural Entrepreneurial Development, KrishiKalpa Foundation Advisory Board Member, Project Baala & SEED',
    image: '/images/mentors/Iranna-Rotte.png',
  },
  {
    name: 'Satyanarayana G',
    role: 'AVP: Growth & Marketing Mentor, Institute of Product Leadership',
    image: '/images/mentors/Satyanarayan-G.png',
  },
  {
    name: 'Rajesh Kachroo',
    role: 'Business Head - University Relations, TeamLease Edtech',
    image: '/images/mentors/Rajesh-Kachroo.png',
  },
  {
    name: 'Harsh Diwedi',
    role: 'Mentor at Multiple Start-ups & Empaneled Mentor with StartInUp Initiative',
    image: '/images/mentors/test-1.jpg',
  },
  {
    name: 'Abhishek Sonavane',
    role: 'Research Scholar, IIM Lucknow',
    image: '/images/mentors/Abhishek-Sonawane.png',
  },
  {
    name: 'Ravish Vasan',
    role: 'Founder, Sattvam (Agri Startup) Career Coach, Career Design Hub',
    image: '/images/mentors/Ravish-Vasan.png',
  },
  {
    name: 'Devang Patel',
    role: 'Founder, Vantage Point Executive Performance Coaching Mentor, CII Centre for Innovation and Entrepreneurship Studies',
    image: '/images/mentors/Devang-Patel.png',
  },
];

function MentorCard({ mentor, index }: { mentor: typeof mentors[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            className={`object-cover object-top transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />

          {/* Gradient Overlay on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-[var(--primary-navy)] via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-80' : 'opacity-0'}`} />

          {/* Index Badge */}
          <div className="absolute top-3 left-3 w-8 h-8 bg-[var(--primary-orange)] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
            {index + 1}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5 text-center relative">
          {/* Top Accent Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-navy)] rounded-full" />

          <h3 className="font-bold text-[var(--primary-navy)] text-sm md:text-base mt-2 mb-2 line-clamp-1">
            {mentor.name}
          </h3>

          <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 min-h-[3rem]">
            {mentor.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OurMentorsPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Our Mentors Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Our Mentors</h1>
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
            <span className="text-[var(--primary-navy)]">Our Mentors</span>
          </nav>
        </div>
      </div>

      {/* Section Header */}
      <section className="py-10 md:py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--primary-orange)] font-semibold text-sm uppercase tracking-wider mb-2">Expert Guidance</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--primary-navy)] mb-4">
            Meet Our Industry Mentors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mentors bring decades of combined experience across various industries,
            providing invaluable guidance to help entrepreneurs navigate their journey to success.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 px-4 bg-[var(--primary-navy)]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">20+</div>
              <div className="text-white/70 text-sm">Industry Mentors</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
              <div className="text-white/70 text-sm">Industries Covered</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-white/70 text-sm">Hours of Mentorship</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-[#f8f6f3] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {mentors.map((mentor, index) => (
              <MentorCard key={index} mentor={mentor} index={index} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
