import Image from 'next/image';
import Link from 'next/link';
import udyamiData from '@/data/udyami-stories.json';

export const metadata = {
  title: 'Udyami Stories | JECP',
  description: 'Showcasing inspiring journeys of rural entrepreneurs transforming challenges into opportunities with JECP support.',
};

export default function UdyamiStoriesPage() {
  return (
    <div className="min-h-screen bg-[var(--background-cream)]">
      {/* Hero Section */}
      <div className="bg-[var(--primary-navy)] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Udyami Stories</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Showcasing inspiring journeys of rural entrepreneurs transforming challenges
            into opportunities with JECP&apos;s support!
          </p>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {udyamiData.stories.map((story) => (
            <Link
              key={story.id}
              href={`/udyami-stories/${story.slug}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              <div className="relative h-64">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--primary-orange)]" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-[var(--primary-navy)] mb-2">
                  {story.name}
                </h3>
                <p className="text-[var(--primary-orange)] text-sm mb-3">
                  {story.company}
                </p>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {story.shortDescription}
                </p>
                <span className="inline-block mt-4 text-[var(--primary-orange)] font-semibold text-sm">
                  Read More &raquo;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
