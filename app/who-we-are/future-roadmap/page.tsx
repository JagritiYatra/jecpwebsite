import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Future Roadmap | JECP',
  description: 'Building Naya Bharat through Enterprise - A Vision for Impact',
};

const enterpriseCentres = [
  {
    location: 'Deoria',
    state: 'Uttar Pradesh',
    districts: '15 districts',
    population: '50 Million People',
  },
  {
    location: 'Ganjam',
    state: 'Odisha',
    districts: '15 districts',
    population: '22 Million People',
  },
  {
    location: 'Nagpur',
    state: 'Maharashtra',
    districts: '15 districts',
    population: '26 Million People',
  },
  {
    location: 'Kanyakumari',
    state: 'Tamil Nadu',
    districts: '15 districts',
    population: '26 Million People',
  },
];

export default function FutureRoadmapPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Future Roadmap Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Future Roadmap</h1>
            <p className="text-sm md:text-base text-white/80 mt-1">Building Naya Bharat through Enterprise</p>
            <div className="w-16 h-1 bg-[var(--primary-orange)] mt-2 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[var(--primary-orange)] transition-colors">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[var(--primary-navy)] font-medium">Future Roadmap</span>
          </nav>
        </div>
      </div>

      {/* The Road Ahead Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--primary-orange)]/50" />
            <div className="w-3 h-3 rotate-45 border-2 border-[var(--primary-orange)]/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--primary-orange)]/50" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-navy)] mb-6">
            The Road Ahead
          </h2>
          <p className="text-xl md:text-2xl text-[var(--primary-orange)] font-semibold tracking-wide">
            Building Naya Bharat through Enterprise
          </p>

          {/* Decorative underline */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-[var(--primary-orange)] via-[var(--primary-orange-light)] to-[var(--primary-orange)] rounded-full" />
          </div>
        </div>
      </section>

      {/* Bridging Heritage and Innovation - Chaar Dham Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Premium torn paper effect background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #f5ebe0 0%, #efe5d8 50%, #f0e6d9 100%)',
          }}
        />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Top torn edge */}
        <div
          className="absolute top-0 left-0 right-0 h-10"
          style={{
            background: 'white',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 98% 75%, 95% 40%, 92% 85%, 88% 35%, 85% 65%, 80% 25%, 75% 70%, 70% 40%, 65% 80%, 60% 30%, 55% 75%, 50% 45%, 45% 65%, 40% 35%, 35% 70%, 30% 50%, 25% 80%, 20% 40%, 15% 75%, 10% 45%, 5% 65%, 2% 50%, 0 70%)',
          }}
        />
        {/* Bottom torn edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10"
          style={{
            background: 'white',
            clipPath: 'polygon(0 100%, 100% 100%, 100% 50%, 97% 25%, 94% 55%, 90% 15%, 86% 65%, 82% 30%, 78% 60%, 74% 20%, 70% 50%, 66% 25%, 62% 55%, 58% 35%, 54% 60%, 50% 20%, 46% 55%, 42% 30%, 38% 65%, 34% 40%, 30% 60%, 26% 25%, 22% 55%, 18% 35%, 14% 65%, 10% 45%, 6% 60%, 3% 30%, 0 50%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary-navy)] mb-4">
              Bridging Heritage and Innovation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-light)] mx-auto rounded-full" />
          </div>

          {/* Chaar Dham Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map Image with premium frame */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary-orange)]/20 via-[var(--primary-orange-light)]/20 to-[var(--primary-orange)]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <Image
                  src="/images/roadmap/chaar-dham-map.png"
                  alt="Chaar Dham Model - India Map"
                  width={600}
                  height={700}
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="relative">
              {/* Decorative quote mark */}
              <div className="absolute -top-6 -left-4 text-8xl text-[var(--primary-orange)]/10 font-serif leading-none">
                "
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] mb-8 relative">
                Chaar Dham Model
                <div className="mt-3 w-16 h-1 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-light)] rounded-full" />
              </h3>

              <div className="space-y-5 text-gray-700 leading-relaxed text-justify relative">
                <p className="text-lg">
                  In your transformative journey through the Banyan Revolution, you will find yourself at the heart of the Char Dhaam Renaissance, where the vibrant essence of this movement radiates from strategic hubs in Deoria, Nagpur, Kanyakumari, and Ganjam.
                </p>
                <p>
                  These epicenters are the anchors of a vast network of innovation, each pulsating with the promise of a brighter, more connected future. As you navigate through this renaissance, you will witness and contribute to the revitalization of our shared heritage, propelling us towards a horizon filled with endless possibilities.
                </p>
                <p className="font-medium text-[var(--primary-navy)]">
                  Your participation is not just a part of this revolution; it is the very force that will drive it forward, illuminating the path for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Udyamita Movement Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary-navy)] mb-4">
              National Udyamita Movement
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-light)] mx-auto rounded-full mb-6" />
            <p className="text-lg md:text-xl text-[var(--primary-orange)] font-medium">
              We seek to impact 240 districts with 470 million population
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-orange)] mt-8">
              4 Jagriti Enterprise Centres
            </h3>
          </div>

          {/* Enterprise Centres Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseCentres.map((centre, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Hover glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-light)] rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500" />

                <div className="relative bg-gradient-to-br from-[var(--primary-navy)] to-[var(--primary-navy-dark)] rounded-xl p-6 text-white overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="relative flex items-start gap-4">
                    {/* Location Icon */}
                    <div className="flex-shrink-0 p-2 bg-[var(--primary-orange)]/20 rounded-lg">
                      <svg
                        className="w-8 h-8 text-[var(--primary-orange)]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-[var(--primary-orange)] font-bold text-lg leading-tight">
                        {centre.location}
                        <span className="block text-sm font-medium mt-0.5">({centre.state})</span>
                      </h4>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Impact</p>
                        <p className="font-semibold text-white/90">{centre.districts};</p>
                        <p className="font-bold text-lg text-white">{centre.population}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[var(--primary-navy)]/30" />
            <div className="w-2 h-2 rotate-45 bg-[var(--primary-orange)]" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[var(--primary-navy)]/30" />
          </div>
        </div>
      </section>
    </main>
  );
}
