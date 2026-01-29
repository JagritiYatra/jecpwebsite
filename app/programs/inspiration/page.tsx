import Image from 'next/image';
import Link from 'next/link';

// Program 1: Cultural Experiences
const culturalPrograms = [
  {
    title: 'Bargad Aarti',
    description: 'A soulful spiritual gathering under the 300-year-old banyan tree, celebrating gratitude, purpose, and collective harmony.',
  },
  {
    title: 'Bargad Dhyan',
    description: 'Guided meditation sessions amidst nature, fostering inner clarity and emotional balance for thoughtful leadership.',
  },
  {
    title: 'Cultural Programs & Heritage Showcases',
    description: 'Events that celebrate folk music, rural crafts, and stories of local entrepreneurs, highlighting the cultural roots of enterprise.',
  },
];

// Program 2: Awareness Programs
const awarenessPrograms = [
  {
    title: 'Entrepreneurship Awareness Programs',
    description: 'Inspiring youth and women across Purvanchal to explore innovation, start-ups, and self-employment opportunities.',
  },
  {
    title: 'Financial Awareness Sessions',
    description: 'Conducted with experts from the Bombay Stock Exchange (BSE) to promote financial literacy and smart money management.',
  },
  {
    title: 'Content Creation Workshop',
    description: 'Led by YouTuber Satish Kushwaha, guiding young creators to turn digital storytelling into entrepreneurial ventures.',
  },
  {
    title: 'The Science Show',
    description: 'An interactive science event with BHU Scholar Mr. Manohar Kumar, making learning fun through live experiments and discovery.',
  },
];

// Program 3: Rural Immersion
const ruralImmersionFeatures = [
  'Entrepreneurship & Rural Livelihood Exposure',
  'Farm-Based Learning Activities',
  'Interactive Sessions With Local Innovators And Udyamis',
];

export default function InspirationPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Inspiration Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Inspiration</h1>
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
            <Link href="/programs" className="hover:text-[var(--primary-orange)]">Our Programs</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--primary-navy)]">Inspiration</span>
          </nav>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-12 md:py-16 px-4 bg-[var(--primary-navy)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--primary-orange)] mb-6">
            Experiential Learning, Cultural Immersion, and Awareness for an Inspired Entrepreneurial Ecosystem
          </h2>
          <p className="text-white/90 leading-relaxed mb-4">
            JECP is dedicated to creating opportunities for people to learn, reflect, and grow through experience-based learning. We design and host a range of immersive, knowledge-driven, and culture-rooted programs that engage entrepreneurs, students, corporates, and communities alike.
          </p>
          <p className="text-white/80 leading-relaxed">
            These programs are envisioned and conducted to offer a holistic platform where learning merges with inspiration – cultivating entrepreneurial thinking that is empathetic, aware, and deeply rooted in India&apos;s social and cultural fabric.
          </p>
        </div>
      </section>

      {/* Our Programs Heading */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)]">Our Programs</h2>
        </div>
      </section>

      {/* Program 1: Cultural Experiences */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-[var(--primary-navy)] mb-2">
              1. Cultural Experiences & Local Heritage Promotion
            </h3>
            <p className="text-[var(--primary-orange)] italic">
              Reviving Traditions, Reimagining Entrepreneurship
            </p>
          </div>

          <p className="text-gray-700 text-center mb-4 max-w-4xl mx-auto">
            At JECP, we believe that entrepreneurship is not just about enterprise - it&apos;s about identity, community, and connection. Our cultural experiences are designed to reconnect participants with the rich heritage, art, and spiritual ethos of India, emphasizing that creativity and mindfulness are as integral to entrepreneurship as innovation and business acumen.
          </p>
          <p className="text-gray-600 text-center mb-10 max-w-4xl mx-auto">
            These programs provide a space for reflection, grounding, and appreciation of India&apos;s living traditions, nurturing a sense of balance between progress and values.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culturalPrograms.map((program, index) => (
              <div key={index} className="bg-[var(--primary-navy)] rounded-lg p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-[var(--primary-orange)] font-bold text-lg mb-3">{program.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program 2: Awareness Programs */}
      <section className="py-12 px-4 bg-[var(--primary-navy)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              2. Awareness Programs
            </h3>
            <p className="text-[var(--primary-orange)] italic">
              Empowering Minds through Knowledge and Exposure
            </p>
          </div>

          <p className="text-white/90 text-center mb-4 max-w-4xl mx-auto">
            Awareness is the first step toward transformation. JECP&apos;s awareness initiatives aim to empower youth, women, and communities by expanding their understanding of entrepreneurship, financial literacy, digital innovation, and scientific curiosity.
          </p>
          <p className="text-white/70 text-center mb-10 max-w-4xl mx-auto">
            Through engaging formats, real-world interactions, and expert-led sessions, these programs create awareness that translates into aspiration - helping participants envision new pathways of growth and self-reliance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awarenessPrograms.map((program, index) => (
              <div key={index} className="bg-[#3d3a6d] rounded-lg p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-[var(--primary-orange)] font-bold text-base mb-3">{program.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program 3: Rural Immersion */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-[var(--primary-navy)] mb-2">
              3. Rural Immersion Programs
            </h3>
            <p className="text-[var(--primary-orange)] italic">
              Learning from the Roots of India
            </p>
          </div>

          <p className="text-gray-700 text-center mb-4 max-w-4xl mx-auto">
            JECP&apos;s Rural Immersion Programs provide an experiential gateway into the realities of rural life and enterprise. Set amidst the serene JECP campus, surrounded by farmlands and the historic banyan tree, these 3–5-day programs immerse participants from colleges, universities, and schools into the rhythm of rural India.
          </p>
          <p className="text-gray-600 text-center mb-10 max-w-4xl mx-auto">
            Participants interact with farmers, artisans, and entrepreneurs to understand how innovation, sustainability, and community coexist at the grassroots. The experience transforms perspectives - shaping future leaders who appreciate the value of empathy, sustainability, and inclusive growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {ruralImmersionFeatures.map((feature, index) => (
              <div key={index} className="bg-[var(--primary-navy)] rounded-lg p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-[var(--primary-orange)] font-bold text-base">{feature}</h4>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/pdfs/rural-immersion-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gray-100 text-[var(--primary-navy)] font-semibold rounded-lg hover:bg-gray-200 transition-colors border border-gray-300"
            >
              Rural Immersion Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Program 4: Corporate Retreat */}
      <section className="py-12 px-4 bg-[#f8f6f3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-[var(--primary-navy)] mb-2">
              4. Corporate Retreat Programs
            </h3>
            <p className="text-[var(--primary-orange)] italic">
              Where Teams Unwind, Reflect, and Reconnect
            </p>
          </div>

          <p className="text-gray-700 text-center mb-4">
            JECP&apos;s Corporate Retreats offer organizations a rare blend of tranquility, teamwork, and transformation. Designed for teams seeking rejuvenation and creative recharge, these retreats combine mindfulness with meaningful engagement.
          </p>
          <p className="text-gray-600 text-center">
            Amidst nature&apos;s calm, participants can take part in meditation sessions, team-building exercises, and market immersion activities that spark creativity and collective purpose. These retreats help organizations rediscover balance and align their people with values of sustainability and empathy - the same principles that drive responsible enterprise.
          </p>
        </div>
      </section>

      {/* Program 5: Space Rental */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-[var(--primary-navy)] mb-2">
              5. Space Rental & Event Facilities
            </h3>
            <p className="text-[var(--primary-orange)] italic">
              An Inspiring Venue for Learning, Collaboration, and Growth
            </p>
          </div>

          <p className="text-gray-700 text-center mb-4">
            The JECP campus doubles as a serene and well-equipped multi-purpose event venue, offering the ideal environment for training programs, conferences, workshops, and retreats. With its peaceful ambience and modern infrastructure, the campus has become a preferred destination for institutions and organizations looking to host purposeful gatherings.
          </p>
          <p className="text-gray-600 text-center mb-10">
            Whether it&apos;s a corporate offsite, an academic conclave, or a community event - JECP provides the setting and spirit to make every gathering meaningful.
          </p>

          <div className="text-center">
            <a
              href="/pdfs/jecp-facility-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-[var(--primary-navy)] text-white font-semibold rounded-lg hover:bg-[var(--primary-navy-dark)] transition-colors"
            >
              View Our Facilities
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
