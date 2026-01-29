import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import udyamiData from '@/data/udyami-stories.json';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return udyamiData.stories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const story = udyamiData.stories.find((s) => s.slug === slug);

  if (!story) {
    return { title: 'Story Not Found | JECP' };
  }

  return {
    title: `${story.name} - ${story.company} | JECP Udyami Stories`,
    description: story.shortDescription,
  };
}

export default async function UdyamiStoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = udyamiData.stories.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  // Get related stories (excluding current)
  const relatedStories = udyamiData.stories
    .filter((s) => s.id !== story.id)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] bg-[var(--primary-navy)]">
        <div className="absolute inset-0">
          <Image
            src={story.image}
            alt={story.name}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-navy)] via-[var(--primary-navy)]/80 to-transparent" />
        </div>

        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-end pb-16">
          <div className="grid md:grid-cols-3 gap-8 items-end w-full">
            {/* Profile Image */}
            <div className="hidden md:block">
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-4 border-[var(--primary-orange)] shadow-2xl">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Title Content */}
            <div className="md:col-span-2 text-white">
              <Link
                href="/udyami-stories"
                className="inline-flex items-center gap-2 text-[var(--primary-orange)] hover:text-white mb-4 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Udyami Stories
              </Link>

              <span className="inline-block px-3 py-1 bg-[var(--primary-orange)] text-white text-xs font-semibold rounded-full mb-4">
                {story.category}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {story.name}
              </h1>

              <p className="text-xl md:text-2xl text-[var(--primary-orange)] font-medium mb-4">
                {story.company}
              </p>

              <div className="flex items-center gap-4 text-gray-300">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {story.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[var(--background-cream)] border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {story.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)]">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            {/* Story Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-8">
              {story.story.title}
            </h2>

            {/* Quote Block */}
            <blockquote className="relative bg-gradient-to-r from-[var(--primary-navy)] to-[var(--primary-navy-dark)] text-white p-8 rounded-2xl mb-12 shadow-xl">
              <svg className="absolute top-4 left-4 w-10 h-10 text-[var(--primary-orange)] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg md:text-xl italic leading-relaxed pl-8">
                {story.quote}
              </p>
              <div className="mt-4 pl-8 text-[var(--primary-orange)] font-semibold">
                — {story.name}
              </div>
            </blockquote>

            {/* Story Sections */}
            <div className="prose prose-lg max-w-none">
              {story.story.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  {section.heading && (
                    <h3 className="text-2xl font-bold text-[var(--primary-navy)] mb-4 mt-12 first:mt-0">
                      {section.heading}
                    </h3>
                  )}
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Image Gallery */}
            {story.gallery && story.gallery.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-[var(--primary-navy)] mb-6">
                  Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {story.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <Image
                        src={img}
                        alt={`${story.name} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Mobile Profile Image */}
            <div className="md:hidden mb-8">
              <div className="relative w-full aspect-square max-w-xs mx-auto rounded-2xl overflow-hidden border-4 border-[var(--primary-orange)] shadow-2xl">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Achievements Card */}
            <div className="bg-[var(--background-cream)] rounded-2xl p-6 mb-8 sticky top-24">
              <h3 className="text-xl font-bold text-[var(--primary-navy)] mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[var(--primary-orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Key Achievements
              </h3>
              <ul className="space-y-3">
                {story.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--primary-orange)] text-white flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Share Card */}
            <div className="bg-white border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[var(--primary-navy)] mb-4">
                Share this Story
              </h3>
              <div className="flex gap-3">
                <button className="flex-1 py-2 px-4 bg-[#1877F2] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Facebook
                </button>
                <button className="flex-1 py-2 px-4 bg-[#1DA1F2] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Twitter
                </button>
                <button className="flex-1 py-2 px-4 bg-[#25D366] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Stories */}
      <div className="bg-[var(--background-cream)] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--primary-navy)] mb-8 text-center">
            More Inspiring Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedStories.map((related) => (
              <Link
                key={related.id}
                href={`/udyami-stories/${related.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="relative h-48">
                  <Image
                    src={related.cardImage}
                    alt={related.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--primary-orange)]" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-xs text-white/80">{related.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-[var(--primary-navy)] mb-1">
                    {related.name}
                  </h3>
                  <p className="text-[var(--primary-orange)] text-sm mb-2">
                    {related.company}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {related.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[var(--primary-navy)] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Entrepreneurial Journey
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join JECP and transform your dreams into reality with our support and mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mis.jecp.in/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[var(--primary-orange)] text-white font-semibold rounded-lg hover:bg-[var(--primary-orange-hover)] transition-colors"
            >
              Apply for Incubation
            </a>
            <Link
              href="/udyami-stories"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[var(--primary-navy)] transition-colors"
            >
              View All Stories
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
