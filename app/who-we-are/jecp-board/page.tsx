import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'JECP Board | JECP',
  description: 'Meet the Governing Board, Advisory Board, and CoE Chairs of JECP.',
};

const governingBoard = [
  { name: 'Sharat Bansal', role: 'Chairman', image: '/images/board/Sharat.png' },
  { name: 'Shashi Tripathi', role: 'Secretary', image: '/images/board/Shashi.png' },
  { name: 'Shipra Tripathi', role: 'Treasurer', image: '/images/board/shipra-1.png' },
  { name: 'Shesha Giri Gudipudi', role: 'Member of Society', image: '/images/board/Sheshagiri.png' },
  { name: 'Madhusudan Gopinath', role: 'Member of Society', image: '/images/board/Madhu.png' },
  { name: 'Surendra Singh', role: 'Member of Society', image: '/images/board/Surendra.png' },
  { name: 'Pranjal Modi', role: 'Member of Society', image: '/images/board/Pranjal.png' },
  { name: 'Mrigank Tripathi', role: 'Member of Society', image: '/images/board/Mrigank.png' },
  { name: 'Neha Tripathi', role: 'Member of Society', image: '/images/board/neha.jpg' },
  { name: 'Sanjeev Kumar Singh', role: 'Member of Society', image: '/images/board/sanjeev-1.png' },
  { name: 'Gauri Tripathi', role: 'Member of Society', image: '/images/board/GauriT.png' },
];

const advisoryBoard = [
  {
    name: 'Sharat Bansal',
    role: 'Chairman - Jagriti Board; Retired Partner PricewaterhouseCoopers Pvt Ltd',
    image: '/images/board/Sharat.png',
  },
  {
    name: 'Dr. Ashwin Naik',
    role: 'Founder, Manah Wellness; Board Member, Independent Director & Author YGL of WEF, Ashoka Fellow and TED Fellow',
    image: '/images/board/AshwinN.png',
  },
  {
    name: 'Sunil Pangarkar',
    role: 'Executive Board Chair | CEO | Entrepreneur | Angel Investor',
    image: '/images/board/SunilP.png',
  },
  {
    name: 'Vanita Viswanath',
    role: 'Chairperson, Aajeevika Bureau; Advisor, Sattva Media and Consulting, Ex-CEO, Udyogini',
    image: '/images/board/VanitaV.png',
  },
  {
    name: 'Nikhil Bhatia',
    role: 'Independent Director, Aarti Industries Ltd; Senior Corporate Advisor and Partner',
    image: '/images/board/NikhilB.png',
  },
];

const coeChairs = [
  {
    name: 'Vanita Viswanath',
    role: 'Chairperson - Women CoE',
    description: 'Senior Advisor and Development Leader, Ex-World Bank',
    image: '/images/board/VanitaV.png',
  },
  {
    name: 'Shoaib Ahmed',
    role: 'Chairperson - Digital CoE',
    description: 'Technology Thought Leader, Ex-President, Tally Solutions',
    image: '/images/board/Shoaib-Ahmed.png',
  },
  {
    name: 'Dr. Toolika Gupta',
    role: 'Chairperson - Handicraft & Apparel CoE',
    description: 'Director, IICD, Jaipur Former HoD, Design Education at NIFT',
    image: '/images/board/toolika.jpg',
  },
  {
    name: 'Dr. Rajiv B Lall',
    role: 'Chairperson - Bioregional CoE',
    description: 'Veteran Economist and Business Leader, Founder & Ex-Chairman IDFC Bank',
    image: '/images/board/Rajiv-B-Lall.png',
  },
  {
    name: 'Manish Agarwal',
    role: 'Chairperson - Rurbanization CoE',
    description: 'Leading Advisor & Senior Partner, Infrastructure, PwC',
    image: '/images/board/Manish-Agarwal.png',
  },
  {
    name: 'Annaswamy Vaidheesh',
    role: 'Chairperson - Healthcare CoE',
    description: 'Senior Healthcare Thought Leader, MD, GSK India (Retd.)',
    image: '/images/board/Annaswamy-Vaidheesh.png',
  },
  {
    name: 'Hemendra Mathur',
    role: 'Chairperson - Agro CoE',
    description: 'Venture Partner, Bharat Innovation Fund and ThinkAg',
    image: '/images/board/Hemendra-Mathur.png',
  },
];

function MemberCard({ name, role, image, description }: {
  name: string;
  role: string;
  image: string;
  description?: string;
  variant?: 'default' | 'premium' | 'chair';
}) {
  return (
    <div className="group relative w-[calc(50%-10px)] sm:w-[200px]">
      {/* Elegant outer frame */}
      <div className={`
        relative rounded-2xl overflow-hidden
        bg-gradient-to-b from-white via-white to-gray-50
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
        transition-all duration-500
        border border-gray-100
        hover:border-[var(--primary-orange)]/30
        hover:-translate-y-2
        h-full flex flex-col
      `}>
        {/* Golden accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-orange)] via-[var(--primary-orange-light)] to-[var(--primary-orange)]" />

        {/* Image container with premium frame */}
        <div className="p-4 pb-3">
          <div className="relative">
            {/* Decorative corner accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-[var(--primary-orange)]/40 rounded-tl" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-[var(--primary-orange)]/40 rounded-tr" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-[var(--primary-orange)]/40 rounded-bl" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-[var(--primary-orange)]/40 rounded-br" />

            {/* Image with elegant border */}
            <div className="relative overflow-hidden rounded-xl h-[160px] sm:h-[220px] ring-2 ring-gray-100 group-hover:ring-[var(--primary-orange)]/20 transition-all duration-500">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="px-4 pb-5 text-center flex-1 flex flex-col justify-center">
          <h3 className="text-base font-bold text-[var(--primary-navy)] mb-1 leading-tight">
            {name}
          </h3>
          <p className="text-sm text-[var(--primary-orange)] font-semibold leading-snug">
            {role}
          </p>
          {description && (
            <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[var(--primary-orange)]/20 to-transparent" />
      </div>
    </div>
  );
}

export default function JECPBoardPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="JECP Board Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">JECP Board</h1>
            <p className="text-sm md:text-base text-white/80 mt-1">Meet our distinguished leaders guiding the vision of JECP</p>
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
            <span className="text-[var(--primary-navy)] font-medium">JECP Board</span>
          </nav>
        </div>
      </div>

      {/* Governing Board */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-3">
              Governing Board
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-light)] mx-auto rounded-full" />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {governingBoard.map((member, index) => (
              <MemberCard key={index} name={member.name} role={member.role} image={member.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 px-4 bg-gradient-to-b from-[var(--background-cream)] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-3">
              Advisory Board
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-light)] mx-auto rounded-full" />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {advisoryBoard.map((member, index) => (
              <MemberCard key={index} name={member.name} role={member.role} image={member.image} variant="premium" />
            ))}
          </div>
        </div>
      </section>

      {/* CoE Chairs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-3">
              CoE Chairs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-light)] mx-auto rounded-full" />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {coeChairs.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                description={member.description}
                variant="chair"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
