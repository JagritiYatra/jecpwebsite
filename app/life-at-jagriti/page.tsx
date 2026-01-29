'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Gallery data
const galleryItems = [
  {
    title: 'Jagriti 25th Foundation Day',
    image: '/images/life-at-jagriti/foundation-day.jpg',
  },
  {
    title: '1st Cohort Graduation Ceremony',
    image: '/images/life-at-jagriti/graduation-ceremony.jpg',
  },
  {
    title: 'Accounting Professionals Program Launch',
    image: '/images/life-at-jagriti/accounting-program.jpg',
  },
  {
    title: 'Green Incubation Program Launch',
    image: '/images/life-at-jagriti/green-incubation.jpg',
  },
  {
    title: 'Induction Program',
    image: '/images/life-at-jagriti/induction-program.jpg',
  },
  {
    title: 'Jagriti Yuva Samvad with Shiv Khera',
    image: '/images/life-at-jagriti/yuva-samvad.jpg',
  },
  {
    title: 'Tech Shakti Sri Cohort Launch',
    image: '/images/life-at-jagriti/tech-shakti.jpg',
  },
];

// YouTube video data
const videos = [
  {
    id: '1Lr19su6SFc',
    title: 'Jagriti 25 Years Journey',
  },
  {
    id: 'FnHnUBy5Apw',
    title: 'Catalysing Sustainability',
  },
  {
    id: 'ah1RHRTvJXY',
    title: 'Jagriti Ki Dekhbhal',
  },
  {
    id: 'lNsDV40Wdmc',
    title: 'Jagriti Udyam Kendra',
  },
  {
    id: 'T9IPYm5zTeg',
    title: 'Tech Shakti Rural Women',
  },
  {
    id: 'Mqs53HY09BM',
    title: 'DM Divya Mittal Visit',
  },
  {
    id: 'V3vYJQ6hfjo',
    title: 'Women of Purvanchal',
  },
];

function GalleryCard({ item, darkBg = false }: { item: typeof galleryItems[0]; darkBg?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${isHovered ? 'opacity-50' : 'opacity-0'}`} />
      </div>
      <h3 className={`mt-3 text-center text-sm md:text-base font-medium ${darkBg ? 'text-white' : 'text-[var(--primary-navy)]'}`}>
        {item.title}
      </h3>
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
          {/* YouTube Thumbnail */}
          <Image
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-black/60 to-transparent">
            <p className="text-white text-xs md:text-sm font-medium truncate">{video.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LifeAtJagritiPage() {
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
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Our Gallery
          </h2>

          {/* First Row - 4 items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
            {galleryItems.slice(0, 4).map((item, index) => (
              <GalleryCard key={index} item={item} darkBg={true} />
            ))}
          </div>

          {/* Second Row - 3 items centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl">
              {galleryItems.slice(4, 7).map((item, index) => (
                <GalleryCard key={index} item={item} darkBg={true} />
              ))}
            </div>
          </div>
        </div>
      </section>

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
