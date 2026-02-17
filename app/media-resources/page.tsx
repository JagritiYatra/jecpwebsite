'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';

// Books by Founder
const books = [
  { title: 'Middle of Diamond India', image: '/images/media-resources/books/book-1.png', link: 'https://amzn.in/d/7gIxsGk' },
  { title: 'Amrit Kaal Ka Bharat', image: '/images/media-resources/books/book-2.png', link: 'https://amzn.in/d/7NalJs0' },
  { title: 'India - A Journey Through a Healing Civilisation', image: '/images/media-resources/books/book-3.png', link: 'https://amzn.in/d/aQAKEOx' },
  { title: 'Bharat Ek Swarnim Yatra', image: '/images/media-resources/books/book-4.png', link: 'https://amzn.in/d/52fdF6G' },
];

// Publications
const publications = [
  { title: 'Jagriti Coffee Table Book', image: '/images/media-resources/publications/coffee-table-book.png', pdf: '/pdfs/media-resources/jagriti-coffee-table-book.pdf' },
  { title: 'Roots to Wings', image: '/images/media-resources/publications/roots-to-wings.png', pdf: null },
  { title: 'The Banyan Revolution', image: '/images/media-resources/publications/banyan-revolution.png', pdf: '/pdfs/media-resources/banyan-revolution-case-study.pdf' },
  { title: 'Digital For Dignity', image: '/images/media-resources/publications/digital-for-dignity.png', pdf: '/pdfs/media-resources/digital-for-dignity.pdf' },
  { title: 'Business Incubation Units', image: '/images/media-resources/publications/business-incubation.png', pdf: '/pdfs/media-resources/business-incubation-units.pdf' },
];

// Newsletters
const newsletters = [
  { title: "Jagriti's Quarterly Digest Oct to Dec 2024", image: '/images/media-resources/newsletters/oct-dec-2024.png', pdf: '/pdfs/media-resources/newsletter-oct-dec-2024.pdf' },
  { title: "Jagriti's Quarterly Digest Jan to Mar 2025", image: '/images/media-resources/newsletters/jan-mar-2025.png', pdf: '/pdfs/media-resources/newsletter-jan-mar-2025.pdf' },
  { title: "Jagriti's Quarterly Digest Apr-Jun 2025", image: '/images/media-resources/newsletters/apr-jun-2025.png', pdf: '/pdfs/media-resources/newsletter-apr-jun-2025.pdf' },
];

// Annual Reports
const annualReports = [
  { year: '2021-22', image: '/images/media-resources/annual-reports/2021-22.png', pdf: '/pdfs/media-resources/annual-report-2021-22.pdf' },
  { year: '2022-23', image: '/images/media-resources/annual-reports/2022-23.png', pdf: '/pdfs/media-resources/annual-report-2022-23.pdf' },
  { year: '2023-24', image: '/images/media-resources/annual-reports/2023-24.png', pdf: '/pdfs/media-resources/annual-report-2023-24.pdf' },
];

// News Gallery Images - All 73 images
const newsGalleryImages = [
  'office-lens-1.jpg', 'office-lens-2.jpg', 'office-lens-3.jpg', 'office-lens-4.jpg', 'office-lens-5.jpg',
  'abhishek-abonics.jpg', 'adecco-partnership.jpeg', 'bargad-chaupal.jpg',
  'coe-launch.jpg', 'coelaunch.jpg', 'coe-launch1.jpg',
  'img-20231107.jpg', 'img-20240105.jpg', 'img-20240720-wa.jpg', 'jagriti-yatra.jpeg', 'img-20240720.jpg',
  'kisan-chaupal.jpg', 'kisan-chaupal1.jpg', 'kisan2.jpg',
  'labharti-samwad.jpeg', 'labharti-samwad1.jpeg',
  'police-public-samwad.jpeg', 'police-public-samwad1.jpeg',
  'y20-talks2.jpg', 'y20talks.jpg',
  'wa-mar02-1.jpeg', 'wa-mar02-2.jpeg', 'wa-mar02-3.jpeg', 'wa-mar02-4.jpeg', 'wa-mar02-5.jpeg',
  'wa-mar02-6.jpeg', 'wa-mar02-6b.jpeg', 'wa-mar02-7.jpeg', 'wa-mar02-8.jpeg', 'wa-mar02-8b.jpeg',
  'wa-mar02-8c.jpeg', 'wa-mar02-9.jpeg', 'wa-mar02-10.jpeg', 'wa-mar02-10b.jpeg', 'wa-mar02-11.jpeg',
  'wa-mar02-11b.jpeg', 'wa-mar02-11c.jpeg', 'wa-mar02-12.jpeg', 'wa-mar02-12b.jpeg', 'wa-mar02-12c.jpeg',
  'wa-mar02-13.jpeg', 'wa-mar02-13b.jpeg',
  'wa-jun16.jpeg', 'wa-jun21-1.jpeg', 'wa-jun21-2.jpeg', 'wa-jun21-3.jpeg',
  'wa-jun25-1.jpeg', 'wa-jun25-2.jpeg', 'wa-jun25-2b.jpeg', 'wa-jun25-3.jpeg', 'wa-jun25-3b.jpeg',
  'wa-jun25-3c.jpeg', 'wa-jun25-4.jpeg', 'wa-jun25-4b.jpeg', 'wa-jun25-5.jpeg', 'wa-jun25-5b.jpeg',
  'wa-jun25-6.jpeg', 'wa-jun25-6b.jpeg', 'wa-jun25-6c.jpeg', 'wa-jun25-7.jpeg', 'wa-jun25-7b.jpeg',
  'wa-jun25-7c.jpeg', 'wa-jun25-8.jpeg', 'wa-jun25-8b.jpeg', 'wa-jun25-9.jpeg',
  'wa-oct16.jpeg', 'wa-oct20-1.jpeg', 'wa-oct20-2.jpeg',
];

const IMAGES_PER_PAGE = 12;

function NewsGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(newsGalleryImages.length / IMAGES_PER_PAGE);
  const currentImages = newsGalleryImages.slice(
    currentPage * IMAGES_PER_PAGE,
    (currentPage + 1) * IMAGES_PER_PAGE
  );

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % newsGalleryImages.length);
  }, [selectedIndex]);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + newsGalleryImages.length) % newsGalleryImages.length);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goNext, goPrev]);

  return (
    <>
      {/* Static Grid Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {currentImages.map((img, idx) => {
          const globalIndex = currentPage * IMAGES_PER_PAGE + idx;
          return (
            <div
              key={img}
              className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group bg-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              onClick={() => setSelectedIndex(globalIndex)}
            >
              <Image
                src={`/images/media-resources/news-gallery/${img}`}
                alt={`News Gallery ${globalIndex + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--primary-navy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <button
          className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 0}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
              i === currentPage
                ? 'bg-[var(--primary-navy)] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages - 1}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <p className="text-center text-gray-400 text-xs mt-3">
        Showing {currentPage * IMAGES_PER_PAGE + 1}-{Math.min((currentPage + 1) * IMAGES_PER_PAGE, newsGalleryImages.length)} of {newsGalleryImages.length} photos
      </p>

      {/* Lightbox with Slider */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-black/50" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-white font-medium text-sm md:text-base">News Gallery</h3>
            <div className="flex items-center gap-3">
              <span className="text-white/70 text-sm">
                {selectedIndex + 1} / {newsGalleryImages.length}
              </span>
              <button
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl transition-colors"
                onClick={() => setSelectedIndex(null)}
              >
                &times;
              </button>
            </div>
          </div>

          {/* Main Image */}
          <div className="flex-1 relative flex items-center justify-center min-h-0 px-12 md:px-16" onClick={() => setSelectedIndex(null)}>
            <button
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="relative w-full h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <Image
                src={`/images/media-resources/news-gallery/${newsGalleryImages[selectedIndex]}`}
                alt={`News Gallery ${selectedIndex + 1}`}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>

            <button
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom info */}
          <div className="bg-black/50 px-4 py-2 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-white/50 text-xs">Use arrow keys to navigate &bull; Press Esc to close</p>
          </div>
        </div>
      )}
    </>
  );
}

export default function MediaResourcesPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Media & Resources Banner"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Media & Resources</h1>
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
            <span className="text-[var(--primary-navy)]">Media & Resources</span>
          </nav>
        </div>
      </div>

      {/* Resources & Publications - Books By Founder */}
      <section className="py-12 md:py-16 px-4 bg-[#f8f6f3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-orange)] text-center mb-2">
            Resources & Publications
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary-navy)] text-center mb-10">
            Books By Our Founder
          </h3>

          <div className="bg-[var(--primary-navy)] rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {books.map((book, index) => (
                <a
                  key={index}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Publications */}
      <section className="py-12 md:py-16 px-4 bg-[var(--primary-navy)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Our Publications
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {publications.map((pub, index) => (
              <a
                key={index}
                href={pub.pdf || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-center"
              >
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-white">
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-[var(--primary-orange)] text-sm font-medium group-hover:underline">
                  {pub.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Our Newsletter */}
      <section className="py-12 md:py-16 px-4 bg-[#f8f6f3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-10">
            Our Newsletter
          </h2>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl">
              {newsletters.map((newsletter, index) => (
                <a
                  key={index}
                  href={newsletter.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-center"
                >
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-white border border-gray-200">
                    <Image
                      src={newsletter.image}
                      alt={newsletter.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-[var(--primary-orange)] text-sm font-medium group-hover:underline">
                    {newsletter.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-12 md:py-16 px-4 bg-[var(--primary-navy)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-orange)] text-center mb-10">
            Annual Reports
          </h2>

          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl">
              {annualReports.map((report, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Report Card with Year Overlay */}
                  <div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden shadow-lg border-4 border-[#1a1a4e] group hover:border-[var(--primary-orange)] transition-colors">
                    <Image
                      src={report.image}
                      alt={`Annual Report ${report.year}`}
                      fill
                      className="object-cover"
                    />
                    {/* Year Badge */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a4e] to-transparent pt-8 pb-3">
                      <p className="text-white text-center text-sm font-medium">{report.year}</p>
                    </div>
                  </div>

                  {/* Download Button */}
                  <a
                    href={report.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B0000] text-white rounded-lg hover:bg-[#a00000] transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Gallery */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-2">
            News Gallery
          </h2>
          <p className="text-gray-400 text-center text-sm mb-8">Click any image to view full size</p>

          <NewsGallery />
        </div>
      </section>
    </main>
  );
}
