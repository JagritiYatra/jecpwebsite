'use client';

import Image from 'next/image';

const events = [
  {
    day: '20',
    month: 'September 2025',
    title: 'The Science Show',
    image: '/images/events/event-1.png',
  },
  {
    day: '5',
    month: 'July 2025',
    title: 'Green Cohort Launch 2025',
    image: '/images/events/event-2.png',
  },
  {
    day: '15',
    month: 'Aug 2025',
    title: 'Independence Day Celebration',
    image: '/images/events/event-3.png',
  },
  {
    day: '20',
    month: 'Aug 2025',
    title: 'Film Making Workshop',
    image: '/images/events/event-4.png',
  },
  {
    day: '25',
    month: 'Aug 2025',
    title: 'Content Creator Workshop with Satish Kushwaha',
    image: '/images/events/event-5.png',
  },
  {
    day: '28',
    month: 'Aug 2025',
    title: 'Sahjeevan Samvaad',
    image: '/images/events/event-6.png',
  },
];

export default function RecentHappenings() {
  return (
    <section className="py-10 md:py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-4 md:mb-0">
            Recent<br />Happenings
          </h2>
          <p className="text-gray-600 max-w-md md:text-right">
            Empowering Entrepreneurs with Knowledge, Skills and Tools for Sustainable Growth!
          </p>
        </div>

        {/* Events Grid - 3x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative h-56 md:h-64 rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

              {/* Date Badge - Top Left */}
              <div className="absolute top-4 left-4 text-white">
                <div className="text-4xl md:text-5xl font-bold leading-none">{event.day}</div>
                <div className="text-sm opacity-90">{event.month}</div>
              </div>

              {/* Title - Bottom Left */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
