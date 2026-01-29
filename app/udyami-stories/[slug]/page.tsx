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

  return (
    <div className="min-h-screen bg-[var(--background-cream)]">
      {/* Hero Section */}
      <div className="relative bg-[var(--primary-navy)] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Link
            href="/udyami-stories"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Stories
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden border-4 border-[var(--primary-orange)]">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{story.name}</h1>
              <p className="text-[var(--primary-orange)] text-xl mb-4">{story.company}</p>
              <p className="text-gray-300 mb-4">
                <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {story.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Quote */}
        {story.quote && (
          <blockquote className="bg-white rounded-lg p-8 shadow-lg mb-12 border-l-4 border-[var(--primary-orange)]">
            <p className="text-xl italic text-gray-700">
              &ldquo;{story.quote}&rdquo;
            </p>
          </blockquote>
        )}

        {/* Full Story */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-[var(--primary-navy)] mb-6">The Journey</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {story.fullStory}
          </p>
        </div>

        {/* Achievements */}
        {story.achievements && story.achievements.length > 0 && (
          <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-[var(--primary-navy)] mb-6">Key Achievements</h2>
            <ul className="space-y-4">
              {story.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--primary-orange)] text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/udyami-stories"
            className="btn-primary inline-block"
          >
            View More Stories
          </Link>
        </div>
      </div>
    </div>
  );
}
