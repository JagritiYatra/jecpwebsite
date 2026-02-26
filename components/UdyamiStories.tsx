'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const udyamis = [
  {
    id: 'sachin-verma',
    name: 'SACHIN VERMA',
    title: '(Founder, Santosh Masala Udyog)',
    image: '/images/udyamis/sachin-verma.png',
  },
  {
    id: 'sacchidanand-shahi',
    name: 'SACCHIDANAND SHAHI',
    title: '(Founder, Sarvdev Agro Pvt. Ltd)',
    image: '/images/udyamis/sacchidanand-shahi.png',
  },
  {
    id: 'abhishek-kushwaha',
    name: 'ABHISHEK KUSHWAHA',
    title: '(Founder, Abonics India Pvt. Ltd.)',
    image: '/images/udyamis/abhishek-kushwaha.png',
  },
  {
    id: 'anita-rai',
    name: 'ANITA RAI',
    title: '(Founder, Shree Mythili Enterprises)',
    image: '/images/udyamis/anita-rai.png',
  },
  {
    id: 'poonam',
    name: 'POONAM',
    title: '(Founder, Drone Didi)',
    image: '/images/udyamis/poonam.png',
  },
  {
    id: 'deepika-singh',
    name: 'DEEPIKA SINGH',
    title: '(Founder, Atrangi Kalakari)',
    image: '/images/udyamis/deepika.png',
  },
  {
    id: 'kiran-sharma',
    name: 'KIRAN SHARMA',
    title: '(Founder, Matri Shakti Moonj Craft)',
    image: '/images/udyamis/kiran-sharma.png',
  },
];

export default function UdyamiStories() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(udyamis.length / itemsPerPage);

  const visibleUdyamis = udyamis.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-10 md:py-12 px-4 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--text-dark)]">
              Our Udyami<br />Stories
            </h2>
            <p className="text-gray-600 text-xs sm:text-base max-w-md mt-2 hidden sm:block">
              Showcasing inspiring journeys of rural entrepreneurs transforming challenges
              into opportunities with JECP&apos;s support!
            </p>
          </div>
          <Link
            href="/udyami-stories"
            className="btn-primary inline-block text-xs sm:text-sm shrink-0"
          >
            View All
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
          {visibleUdyamis.map((udyami) => (
            <div
              key={udyami.id}
              className="card-navy group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-36 sm:h-48 md:h-64 overflow-hidden">
                <Image
                  src={udyami.image}
                  alt={udyami.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--primary-orange)]" />
              </div>
              <div className="p-2 sm:p-4 text-center">
                <h3 className="font-bold text-[10px] sm:text-sm mb-0.5 sm:mb-1 leading-tight">{udyami.name}</h3>
                <p className="text-[8px] sm:text-xs text-gray-300 mb-1.5 sm:mb-3 leading-tight">{udyami.title}</p>
                <Link
                  href={`/udyami-stories/${udyami.id}`}
                  className="text-[var(--primary-orange)] text-[9px] sm:text-xs font-semibold hover:underline"
                >
                  READ MORE &raquo;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="text-gray-600 hover:text-[var(--primary-navy)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
          >
            &laquo; Previous
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className="text-gray-600 hover:text-[var(--primary-navy)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </section>
  );
}
