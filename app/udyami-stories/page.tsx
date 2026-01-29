import Image from 'next/image';
import Link from 'next/link';
import udyamiData from '@/data/udyami-stories.json';

export const metadata = {
  title: 'Udyami Stories | JECP - Inspiring Entrepreneurial Journeys',
  description: 'Showcasing inspiring journeys of rural entrepreneurs transforming challenges into opportunities with JECP support. Read stories of courage, grit, and hope.',
};

const categories = ['All', 'Food & Spices', 'Agriculture', 'Innovation & Technology', 'Agro Products', 'Religious Products', 'Handicrafts'];

export default function UdyamiStoriesPage() {
  const featuredStory = udyamiData.stories[0];
  const otherStories = udyamiData.stories.slice(1);

  return (
    <div className="min-h-screen bg-[var(--background-cream)]">
      {/* Hero Section */}
      <div className="relative bg-[var(--primary-navy)] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--primary-orange)] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary-orange)] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[var(--primary-orange)]/20 text-[var(--primary-orange)] text-sm font-semibold rounded-full mb-6">
              Inspiring Journeys
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Udyami Stories
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Showcasing inspiring journeys of rural entrepreneurs transforming challenges
              into opportunities with JECP&apos;s support. Every face here is a story of
              courage, grit, and hope.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { value: '7+', label: 'Success Stories' },
              { value: '100+', label: 'Jobs Created' },
              { value: '600+', label: 'Women Empowered' },
              { value: '₹5Cr+', label: 'Revenue Generated' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--primary-orange)]">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Story */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <Link
          href={`/udyami-stories/${featuredStory.slug}`}
          className="block bg-white rounded-3xl shadow-2xl overflow-hidden group"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative h-72 md:h-auto">
              <Image
                src={featuredStory.cardImage}
                alt={featuredStory.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[var(--primary-orange)] text-white text-xs font-semibold rounded-full">
                  Featured Story
                </span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-[var(--primary-orange)] text-sm font-semibold mb-2">
                {featuredStory.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] mb-2">
                {featuredStory.name}
              </h2>
              <p className="text-lg text-gray-600 mb-2">{featuredStory.company}</p>
              <p className="text-gray-500 mb-4 line-clamp-3">
                {featuredStory.shortDescription}
              </p>
              <blockquote className="border-l-4 border-[var(--primary-orange)] pl-4 italic text-gray-600 mb-6">
                &ldquo;{featuredStory.quote}&rdquo;
              </blockquote>
              <div className="flex items-center text-[var(--primary-orange)] font-semibold group-hover:gap-3 transition-all">
                Read Full Story
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                category === 'All'
                  ? 'bg-[var(--primary-navy)] text-white'
                  : 'bg-white text-gray-600 hover:bg-[var(--primary-navy)] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherStories.map((story, index) => (
            <Link
              key={story.id}
              href={`/udyami-stories/${story.slug}`}
              className="group"
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={story.cardImage}
                    alt={story.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-navy)]/80 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-[var(--primary-navy)] text-xs font-semibold rounded-full">
                      {story.category}
                    </span>
                  </div>

                  {/* Tagline */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/90 text-sm font-medium">
                      {story.tagline}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Small Profile Image */}
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--primary-orange)] flex-shrink-0">
                      <Image
                        src={story.cardImage}
                        alt={story.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[var(--primary-navy)] group-hover:text-[var(--primary-orange)] transition-colors">
                        {story.name}
                      </h3>
                      <p className="text-sm text-gray-500">{story.company}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {story.shortDescription}
                  </p>

                  {/* Stats Preview */}
                  <div className="flex gap-4 mt-4 pt-4 border-t">
                    {story.stats.slice(0, 2).map((stat, i) => (
                      <div key={i} className="text-center flex-1">
                        <div className="text-lg font-bold text-[var(--primary-navy)]">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="mt-4 flex items-center text-[var(--primary-orange)] font-semibold text-sm">
                    Read Story
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[var(--primary-navy)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/footer/footer-bg.png"
            alt=""
            fill
            className="object-contain object-center"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Story Could Be Next
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Are you an aspiring entrepreneur with a dream? JECP is here to help you
            transform your vision into reality. Join our community of changemakers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mis.jecp.in/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[var(--primary-orange)] text-white font-semibold rounded-lg hover:bg-[var(--primary-orange-hover)] transition-colors inline-flex items-center justify-center gap-2"
            >
              Apply for Incubation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[var(--primary-navy)] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
