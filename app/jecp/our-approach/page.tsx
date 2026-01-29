import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Approach | JECP',
  description: 'Middle of Diamond India Theory, Udyamita Framework, 7M Incubation Process, and Hub-Spoke Model',
};

export default function OurApproachPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Our Approach Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Our Approach</h1>
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
            <span className="text-[var(--primary-navy)]">Our Approach</span>
          </nav>
        </div>
      </div>

      {/* Section 1: Middle of Diamond India Theory - White Background */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/approach/middle-diamond.jpg"
                alt="Middle of Diamond India Theory"
                fill
                className="object-contain"
              />
            </div>

            {/* Content Right */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-6">
                Middle of Diamond India Theory
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                India&apos;s greatest strength lies in its people - and at the heart of it is Middle India: nearly 800 million individuals living in Tier 2 and Tier 3 districts. This is a region rich in talent, energy, and aspiration. Yet, much of it remains unseen and unsupported. These are not people lacking potential - they are people waiting to be seen, heard, and given the chance to grow.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Middle India stands at the edge of transformation. With the right exposure, tools, and opportunities, this vast population can shape the next chapter of India&apos;s progress. By nurturing their ambitions and bridging the gap between talent and opportunity, we&apos;re not just uplifting individuals - we&apos;re creating a more inclusive, purpose-driven India, powered by the dreams of millions who are ready to rise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Udyamita Framework - Navy Blue Background */}
      <section className="py-16 px-4 bg-[var(--primary-navy)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The Udyamita Framework
              </h2>
              <h3 className="text-xl text-[var(--primary-orange)] font-semibold mb-4">
                3xI (2E) Framework
              </h3>
              <p className="text-white/90 leading-relaxed">
                Our 3xI (2E) framework focuses on Incubation, Innovation and Inspiration with sustainability at the core.
              </p>
            </div>

            {/* Image Right */}
            <div className="relative h-[350px] md:h-[400px]">
              <Image
                src="/images/approach/udyamita-framework.png"
                alt="Udyamita Framework - 3xI (2E)"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The 7M Incubation Process - White/Cream Background */}
      <section className="py-16 px-4 bg-[var(--background-cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/approach/7m-process.png"
                alt="7M Incubation Process"
                fill
                className="object-contain"
              />
            </div>

            {/* Content Right */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-6">
                The 7M Incubation Process
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At JECP, our 7M Incubation Process nurtures grassroots entrepreneurs through a hands-on, local-first approach. We start with Mobilization, identifying potential through field networks. Mentorship and Market Connect refine strategy and unlock real revenue. Money ensures financial readiness, while Misc. Services offer support in branding, compliance, and systems. A strong Mahol of peer learning keeps energy alive, and our Mitra model grounds everything in daily execution. Together, the 7Ms create an ecosystem where no entrepreneur builds alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Hub and Spoke Model - White Background */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-4">
                Hub and Spoke Model
              </h2>
              <h3 className="text-xl text-[var(--primary-orange)] font-semibold mb-4">
                Scaling Impact Through a Hub-and-Spoke Model
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Building on our presence in 4 districts, JECP is set to expand to 10 districts across Purvanchal, using a hub-and-spoke model that strengthens local ecosystems while maintaining a unified support structure.
              </p>

              <h4 className="text-lg font-semibold text-[var(--primary-navy)] mb-3">
                District Udyam Upkendra (Entrepreneurship Centers):
              </h4>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[var(--primary-orange)] mr-2">•</span>
                  Dedicated physical spaces offering co-working, training, and incubation facilities
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary-orange)] mr-2">•</span>
                  Anchored by local outreach teams for community engagement and support
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary-orange)] mr-2">•</span>
                  Each center staffed with 1 Udyam Corps lead and 2 Udyam Mitras for grassroots implementation
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary-orange)] mr-2">•</span>
                  Serves as a vibrant node for entrepreneurial activity and community gatherings
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                This model ensures deep local presence while staying connected to the larger Jagriti ecosystem, enabling scalable and sustainable rural enterprise development.
              </p>
            </div>

            {/* Image Right */}
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/approach/hub-spoke.png"
                alt="Hub and Spoke Model - Purvanchal Districts"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
