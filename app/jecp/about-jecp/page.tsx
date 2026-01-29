'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

export default function AboutJECPPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="About JECP Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">About JECP</h1>
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
            <span className="text-[var(--primary-navy)]">About JECP</span>
          </nav>
        </div>
      </div>

      {/* About The Center Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/jecp/jecp-about.png"
                alt="JECP Building"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Right */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-4">
                About The Center
              </h2>
              <p className="text-xl text-[var(--primary-orange)] font-semibold mb-6">
                Jagriti Enterprise Center, Purvanchal: The Pulse of Rural Innovation
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At the heart of Purvanchal, the Jagriti Enterprise Center (JECP) stands as a beacon of rural enterprise transformation. As India&apos;s premier rural incubation hub, it empowers local entrepreneurs with cutting-edge resources and mentorship, creating a thriving ecosystem where tradition meets innovation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                JECP connects ambitious enterprises with mentors, markets, and on-ground support, driving sustainable growth through tailored guidance. It is not just an incubation center; it&apos;s a catalyst for rural revitalization, fueling community-driven prosperity and setting new benchmarks for nation-building through enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-[var(--background-cream)]">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
            onMouseEnter={() => setIsPlaying(true)}
            onMouseLeave={() => setIsPlaying(false)}
          >
            {!isPlaying ? (
              <>
                {/* Thumbnail with play button */}
                <Image
                  src="/images/jecp/jecp-about.png"
                  alt="JECP Video Thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-20 h-20 bg-[var(--primary-orange)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    JAGRITI Enterprise Centre
                  </h3>
                  <p className="text-white/80 mt-2">Hover to play</p>
                </div>
              </>
            ) : (
              <iframe
                ref={videoRef}
                src="https://www.youtube.com/embed/lNsDV40Wdmc?autoplay=1&mute=1&loop=1&playlist=lNsDV40Wdmc"
                title="JECP Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
