'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';

// Gallery cards shown on top (matched to live site photos & captions)
const galleryCards = [
  { title: 'Jagriti 25th Foundation Day', image: '/images/life-at-jagriti/foundation-day-thumb.png' },
  { title: '1st Cohort Graduation Ceremony', image: '/images/life-at-jagriti/graduation-thumb.jpg' },
  { title: 'Accounting Professionals Program Launch', image: '/images/life-at-jagriti/accounting-thumb.jpg' },
  { title: 'Green Incubation Program Launch', image: '/images/life-at-jagriti/green-incubation-thumb.jpg' },
  { title: 'Induction Program', image: '/images/life-at-jagriti/induction-thumb.jpg' },
  { title: 'Jagriti Yuva Samvad with Shiv Khera', image: '/images/life-at-jagriti/yuva-samvad-thumb.jpg' },
  { title: 'Tech Shakti Sri Cohort Launch', image: '/images/life-at-jagriti/tech-shakti-thumb.jpg' },
];

// ALL gallery images combined into one single gallery
const allGalleryImages: string[] = [
  // Foundation Day (22)
  ...Array.from({ length: 22 }, (_, i) => `/images/life-at-jagriti/foundation-day/${i + 1}.jpg`),
  // Graduation Ceremony (6)
  ...Array.from({ length: 6 }, (_, i) => `/images/life-at-jagriti/graduation/${i + 1}.jpg`),
  // Accounting Program (24)
  ...Array.from({ length: 24 }, (_, i) => `/images/life-at-jagriti/accounting/${i + 1}.jpg`),
  // Green Incubation (7)
  ...Array.from({ length: 7 }, (_, i) => `/images/life-at-jagriti/green-incubation/${i + 1}.jpg`),
  // Induction Program (8)
  ...Array.from({ length: 8 }, (_, i) => `/images/life-at-jagriti/induction/${i + 1}.jpg`),
  // Yuva Samvad (12)
  ...Array.from({ length: 12 }, (_, i) => `/images/life-at-jagriti/yuva-samvad/${i + 1}.jpg`),
  // Tech Shakti (11)
  ...Array.from({ length: 11 }, (_, i) => `/images/life-at-jagriti/tech-shakti/${i + 1}.jpg`),
];

// YouTube video data
const videos = [
  { id: '1Lr19su6SFc', title: 'Jagriti 25 Years Journey' },
  { id: 'FnHnUBy5Apw', title: 'Catalysing Sustainability' },
  { id: 'ah1RHRTvJXY', title: 'Jagriti Ki Dekhbhal' },
  { id: 'lNsDV40Wdmc', title: 'Jagriti Udyam Kendra' },
  { id: 'T9IPYm5zTeg', title: 'Tech Shakti Rural Women' },
  { id: 'Mqs53HY09BM', title: 'DM Divya Mittal Visit' },
  { id: 'V3vYJQ6hfjo', title: 'Women of Purvanchal' },
];

function GalleryCard({ item, onClick }: { item: typeof galleryCards[0]; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${isHovered ? 'opacity-50' : 'opacity-0'}`} />
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-[var(--primary-navy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
      <h3 className="mt-3 text-center text-sm md:text-base font-medium text-white">
        {item.title}
      </h3>
    </div>
  );
}

function GalleryLightbox({ images, onClose }: { images: string[]; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(true);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col" onClick={onClose}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-black/50" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-white font-medium text-sm md:text-base">Life@Jagriti Gallery</h3>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-white/70 text-sm">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            className="text-white/60 hover:text-white text-sm transition-colors"
            onClick={() => setShowThumbnails(!showThumbnails)}
          >
            {showThumbnails ? 'Hide' : 'Show'} Thumbnails
          </button>
          <button
            className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
      </div>

      {/* Main Image Area */}
      <div className="flex-1 relative flex items-center justify-center min-h-0 px-12 md:px-16" onClick={onClose}>
        <button
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="relative w-full h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
          <Image
            src={images[currentIndex]}
            alt={`Gallery Photo ${currentIndex + 1}`}
            fill
            className="object-contain"
            quality={95}
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

      {/* Thumbnail Strip */}
      {showThumbnails && (
        <div className="bg-black/70 px-4 py-3 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
          <div className="flex gap-2 justify-start max-w-5xl mx-auto">
            {images.map((img, index) => (
              <button
                key={index}
                className={`relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded overflow-hidden transition-all duration-200 ${
                  index === currentIndex
                    ? 'ring-2 ring-[var(--primary-orange)] opacity-100'
                    : 'opacity-50 hover:opacity-80'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function VideoCard({ video }: { video: typeof videos[0] }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative">
      {showVideo ? (
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      ) : (
        <div
          className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
          onClick={() => setShowVideo(true)}
        >
          <Image
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-black/60 to-transparent">
            <p className="text-white text-xs md:text-sm font-medium truncate">{video.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LifeAtJagritiPage() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Life@Jagriti Banner"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Life@Jagriti</h1>
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
            <span className="text-[var(--primary-navy)]">Life@Jagriti</span>
          </nav>
        </div>
      </div>

      {/* Our Gallery Section */}
      <section className="py-12 md:py-16 px-4 bg-[var(--primary-navy)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Our Gallery
          </h2>
          <p className="text-white/50 text-center text-sm mb-10">
            {allGalleryImages.length} photos &bull; Click any image to browse
          </p>

          {/* First Row - 4 items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
            {galleryCards.slice(0, 4).map((item, index) => (
              <GalleryCard key={index} item={item} onClick={() => setGalleryOpen(true)} />
            ))}
          </div>

          {/* Second Row - 3 items centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl">
              {galleryCards.slice(4, 7).map((item, index) => (
                <GalleryCard key={index} item={item} onClick={() => setGalleryOpen(true)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Single Gallery Lightbox for ALL photos */}
      {galleryOpen && (
        <GalleryLightbox
          images={allGalleryImages}
          onClose={() => setGalleryOpen(false)}
        />
      )}

      {/* Our Videos Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] text-center mb-10">
            Our Videos
          </h2>

          {/* First Row - 4 videos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
            {videos.slice(0, 4).map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>

          {/* Second Row - 3 videos centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl">
              {videos.slice(4, 7).map((video, index) => (
                <VideoCard key={index} video={video} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
