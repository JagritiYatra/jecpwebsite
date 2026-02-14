'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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

function LightboxGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Split images into rows
  const itemsPerRow = 12;
  const rows: string[][] = [];
  for (let i = 0; i < newsGalleryImages.length; i += itemsPerRow) {
    rows.push(newsGalleryImages.slice(i, i + itemsPerRow));
  }

  // Duplicate images for seamless loop
  const duplicatedRows = rows.map(row => [...row, ...row]);

  return (
    <>
      {/* Infinite Scroll Gallery */}
      <div
        className="space-y-4 overflow-hidden relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredImage(null);
        }}
      >
        {duplicatedRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="relative overflow-hidden"
          >
            <div
              className={`flex gap-3 w-max ${isPaused ? '' : rowIndex % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'}`}
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {row.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative w-28 h-36 md:w-32 md:h-44 flex-shrink-0 cursor-pointer group overflow-visible"
                  onMouseEnter={() => setHoveredImage(img)}
                  onMouseLeave={() => setHoveredImage(null)}
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="relative w-full h-full rounded border-2 border-[var(--primary-navy)] shadow-md overflow-hidden bg-white">
                    <Image
                      src={`/images/media-resources/news-gallery/${img}`}
                      alt={`News ${imgIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 112px, 128px"
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Zoomed Image Preview on Hover */}
        {hoveredImage && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-lg border-4 border-[var(--primary-orange)] shadow-2xl overflow-hidden bg-white animate-fade-in">
              <Image
                src={`/images/media-resources/news-gallery/${hoveredImage}`}
                alt="Preview"
                fill
                sizes="320px"
                className="object-contain"
                quality={100}
                priority
              />
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full">
            <Image
              src={`/images/media-resources/news-gallery/${selectedImage}`}
              alt="News Gallery"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            Click anywhere to close
          </p>
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
      <section className="py-12 md:py-16 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-3">
            News Gallery
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">Hover to pause • Click any image to view full size</p>

          <LightboxGallery />
        </div>
      </section>
    </main>
  );
}
