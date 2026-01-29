import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Jagriti - Building India Through Enterprise | JECP',
  description: 'Welcome to Jagriti! A Movement-Led Ecosystem where Enterprise is Hope and Middle India is the Future.',
};

const pillars = [
  {
    title: 'JECP',
    subtitle: 'Jagriti Enterprise Centre – Purvanchal',
    description: 'An enterprise incubation model rewriting India\'s development narrative',
    image: '/images/about/jecp.png',
    link: '/jecp/about-jecp',
    external: false,
  },
  {
    title: 'Jagriti Yatra',
    subtitle: 'Train Journey of Transformation',
    description: 'World\'s Largest Train Journey of Entrepreneurial Transformation',
    image: '/images/about/jagriti-yatra.png',
    link: 'https://www.jagritiyatra.com',
    external: true,
  },
  {
    title: 'JADE',
    subtitle: 'Jagriti Ambassadors for District Entrepreneurship',
    description: 'A grassroots leadership force of Jagriti\'s Yatris and alumni catalyzing local impact',
    image: '/images/about/jade.png',
    link: '#',
    external: false,
  },
];

export default function AboutUsPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="About Jagriti Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">About Jagriti</h1>
            <p className="text-sm md:text-base text-white/80 mt-1">Building India Through Enterprise</p>
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
            <span className="text-[var(--primary-navy)]">About Jagriti</span>
          </nav>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-6">
                Welcome to Jagriti!
              </h2>
              <p className="text-xl text-[var(--primary-orange)] font-semibold mb-6">
                A Movement – Led Ecosystem where Enterprise is Hope and Middle India is the Future.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jagriti was founded on a single but powerful belief: that Udyamita – the spirit of entrepreneurship has the quiet potential to transform individuals, communities, and entire nations. For over 17 years, Jagriti has worked silently, persistently, and purposefully to spark a movement rooted in connection, branching into lives, livelihoods, and local enterprise across the heart of Bharat.
              </p>
              <p className="text-gray-700 leading-relaxed">
                India&apos;s strength lies not just in its metros, but in the 800 million people living in Tier 2 and Tier 3 districts – the Middle India. This vast segment is young, aspirational, and brimming with talent, yet often overlooked in policy and opportunity.
              </p>
            </div>
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/DSC_9462.jpg"
                alt="Jagriti Community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 px-4 bg-[var(--background-cream)]">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[var(--primary-navy)] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[var(--primary-orange)] font-medium mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-gray-600 mb-4">{pillar.description}</p>
                  <Link
                    href={pillar.link}
                    target={pillar.external ? '_blank' : undefined}
                    rel={pillar.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center text-[var(--primary-navy)] font-semibold hover:text-[var(--primary-orange)] transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-8">
            Message from the Founder
          </h2>
          <div className="relative">
            {/* Founder Image - Floated */}
            <div className="float-left mr-8 mb-4 w-full sm:w-auto">
              <div className="relative h-[350px] w-[280px] mx-auto sm:mx-0 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/shash.jpg"
                  alt="Shashank Mani - Founder, Jagriti"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-center sm:text-left">
                <h3 className="text-xl font-bold text-[var(--primary-navy)]">Shashank Mani</h3>
                <p className="text-[var(--primary-orange)]">Founder, Jagriti</p>
              </div>
            </div>

            {/* Founder's Message - Wraps around image */}
            <div className="text-gray-700 leading-relaxed">
              <p className="text-lg italic text-[var(--primary-navy)] mb-4">
                &ldquo;At the heart of Bharat, in its districts and towns, a quiet transformation is unfolding.&rdquo;
              </p>
              <p className="mb-4">
                Jagriti is the reflection of a belief we have carried for years, that the energy of enterprise lies deep within our people, and that when nurtured, this energy can reshape not just lives but the destiny of a nation.
              </p>
              <p className="mb-4">
                Jagriti was never imagined as just an organization. It is a movement, a collective force, where entrepreneurs dream boldly, communities rise together, and enterprise becomes a vehicle of dignity and self-reliance. This is where ideas take root not in isolation, but in the shared soil of Middle India. We have witnessed young men and women revive local traditions through innovation, farmers embracing enterprise to turn struggle into opportunity, and women-led ventures breathing new life into entire villages. These are not scattered stories. They are sparks in a growing fire of grassroots change, each one carrying the promise of a better tomorrow.
              </p>
              <p className="mb-4">
                Through Jagriti Yatra, we have journeyed across the nation to inspire; through JECP, we have built platforms that enable; and through JADE, we have seeded leadership at the grassroots. Together, they form an ecosystem of Udyamita - where enterprise becomes hope, and hope becomes action.
              </p>
              <p className="mb-4">
                This is more than economic growth. It is about building confidence, pride, and ownership in one&apos;s place and people. It is about giving rise to a Bharat that grows from within - steady, resilient, and full of promise.
              </p>
              <p className="mb-4">
                Every entrepreneur we inspire, every community we strengthen, is a step towards this vision. The ripple they create carries forward Jagriti&apos;s mission to build India through enterprise.
              </p>
              <p className="mb-4">
                If you believe in the strength of Middle India, in the quiet determination of its people, then you are already part of this journey.
              </p>
              <p className="font-medium text-[var(--primary-navy)]">
                Jagriti is a home for such belief. It is where change begins - grounded, enduring, and deeply human.
              </p>
            </div>
            {/* Clear float */}
            <div className="clear-both"></div>
          </div>
        </div>
      </section>

      {/* Journey/Milestone Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <Image
              src="/images/about/Jagriti-milestone-1.png"
              alt="Jagriti Journey Milestones"
              width={2375}
              height={1354}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
