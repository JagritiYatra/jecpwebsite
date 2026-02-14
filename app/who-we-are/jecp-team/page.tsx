import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'JECP Team | JECP',
  description: 'Meet the dedicated team behind JECP.',
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamSection {
  title: string;
  members: TeamMember[];
}

const teamSections: TeamSection[] = [
  {
    title: 'CEO',
    members: [
      { name: 'Ashutosh Kumar', role: 'CEO', image: '/images/team/ashutosh-1.png' },
    ],
  },
  {
    title: 'Incubation',
    members: [
      { name: 'Vishwas Pandey', role: 'Director - Incubation', image: '/images/team/vishwas-pandey-1.png' },
    ],
  },
  {
    title: 'Deoria Network Office',
    members: [
      { name: 'Markandey Dayal', role: 'Udyam Corps', image: '/images/team/markandey.png' },
      { name: 'Naina Verma', role: 'Udyam Mitra', image: '/images/team/naina.png' },
      { name: 'Nihal Mishra', role: 'Udyam Mitra', image: '/images/team/nihal-mishra.png' },
      { name: 'Dhirendra Yadav', role: 'Udyam Mitra', image: '/images/team/dhirendra.png' },
    ],
  },
  {
    title: 'Gorakhpur Network Office',
    members: [
      { name: 'Lata Verma', role: 'Udyam Corps', image: '/images/team/lata.png' },
      { name: 'Ujjawal Shrivastava', role: 'Udyam Mitra', image: '/images/team/ujjwal.png' },
      { name: 'Prashant Yadav', role: 'Udyam Mitra', image: '/images/team/prashant-yadav.png' },
      { name: 'Vijayalakshmi Chaudhury', role: 'Udyam Mitra', image: '/images/team/vijayalakshmi.png' },
    ],
  },
  {
    title: 'Tamkuhi Network Office',
    members: [
      { name: 'Ajay Kumar', role: 'Udyam Corps', image: '/images/team/ajaykumar.png' },
      { name: 'Abhishek Kumar', role: 'Udyam Corps', image: '/images/team/abhishek-kumar.png' },
      { name: 'Saurabh Mishra', role: 'Udyam Corps', image: '/images/team/saurabh-mishra.png' },
      { name: 'Sushmita Patel', role: 'Udyam Mitra', image: '/images/team/Sushmita.png' },
      { name: 'Manish Tiwari', role: 'Udyam Mitra', image: '/images/team/manish-tiwari.png' },
      { name: 'Tiankal Paswan', role: 'Receptionist', image: '/images/team/tiankal.png' },
    ],
  },
  {
    title: 'Maharajganj Network Office',
    members: [
      { name: 'Shahzaib Ali', role: 'Udyam Corps', image: '/images/team/shahz.png' },
      { name: 'Pushkar Anand', role: 'Udyam Corps', image: '/images/team/pushkar-1.png' },
      { name: 'Ajay Kumar Verma', role: 'Udyam Mitra', image: '/images/team/ajay-1.png' },
      { name: 'Satyam Chaubey', role: 'Udyam Mitra', image: '/images/team/satyam.png' },
    ],
  },
  {
    title: 'SK Nagar Network Office',
    members: [
      { name: 'Pooja Chaudhary', role: 'Udyam Corps', image: '/images/team/pooja.png' },
      { name: 'Ravi Yadav', role: 'Udyam Corps', image: '/images/team/ravi.png' },
      { name: 'Maroot Nandan', role: 'Udyam Mitra', image: '/images/team/marut.png' },
      { name: 'Indrajeet', role: 'Udyam Mitra', image: '/images/team/indrajeet.png' },
    ],
  },
  {
    title: 'Mau Network Office',
    members: [
      { name: 'Ajay Shukla', role: 'Udyam Corps', image: '/images/team/ajay.png' },
      { name: 'Nitya Singh', role: 'Udyam Corps', image: '/images/team/nitya.png' },
      { name: 'Bhisham Singh', role: 'Udyam Mitra', image: '/images/team/bhisam.png' },
      { name: 'Dhananjay Vishwakarma', role: 'Udyam Mitra', image: '/images/team/dhananjay.png' },
    ],
  },
  {
    title: 'Ballia Network Office',
    members: [
      { name: 'Durgesh Singh', role: 'Udyam Corps', image: '/images/team/durgesh.png' },
      { name: 'Praveen Singh', role: 'Udyam Mitra', image: '/images/team/praveen.png' },
      { name: 'Deepak Singh', role: 'Udyam Mitra', image: '/images/team/deepak-s.png' },
    ],
  },
  {
    title: 'CoEs - Bioregional',
    members: [
      { name: 'Rajalakshmi Deshpande', role: 'Director', image: '/images/team/rajlakshmi.png' },
      { name: 'Anand Kumar Singh', role: 'Operations Manager', image: '/images/team/anand-singh.png' },
      { name: 'Sujay H', role: 'Research Manager', image: '/images/team/sujay.png' },
      { name: 'Shrija', role: 'Research Associate', image: '/images/team/shrija.png' },
      { name: 'Manoj Tiwari', role: 'Operations Associate', image: '/images/team/manoj-tiwari.png' },
    ],
  },
  {
    title: 'Women CoE',
    members: [
      { name: 'Shilpi Singh', role: 'Manager', image: '/images/team/shilpi.png' },
      { name: 'Surya Rai', role: 'Project Manager - Techshakti Sri', image: '/images/team/Surya-Rai.png' },
      { name: 'Piyush Anand', role: 'Udyam Corps', image: '/images/team/piyush-anand.png' },
      { name: 'Saurabh Jaiswal', role: 'Udyam Corps', image: '/images/team/saurabh-j.png' },
      { name: 'Mrinmay Kumar Dey', role: 'Udyam Corps', image: '/images/team/mrinmay-dey.png' },
      { name: 'Nandita Giri', role: 'Udyam Mitra', image: '/images/team/nandita-giri.png' },
      { name: 'Saddam Ansari', role: 'Udyam Mitra', image: '/images/team/saddam-ansari.png' },
      { name: 'Durgesh Rai', role: 'Udyam Mitra', image: '/images/team/durgesh-rai2.png' },
      { name: 'Rekha Sharma', role: 'Udyam Mitra', image: '/images/team/reeta-sharma.png' },
      { name: 'Sadhana Singh', role: 'Udyam Mitra', image: '/images/team/sadhana-singh.png' },
      { name: 'Divya Pandey', role: 'Udyam Mitra', image: '/images/team/divya-pandey.png' },
      { name: 'Sangya Yadav', role: 'Udyam Mitra', image: '/images/team/sangya.png' },
      { name: 'Laxmi Pandey', role: 'Field Associate', image: '/images/team/laxmi.png' },
    ],
  },
  {
    title: 'Digital CoE',
    members: [
      { name: 'Abhishek Bharadwaj', role: 'Manager', image: '/images/team/abhishek.png' },
      { name: 'Ambikesh Chaubey', role: 'Operations Associate', image: '/images/team/ambikesh.png' },
    ],
  },
  {
    title: 'Handicraft & Apparel CoE',
    members: [
      { name: 'Satyasha Rajput', role: 'Manager', image: '/images/team/satyasha.png' },
      { name: 'Priti Pandey', role: 'Udyam Mitra', image: '/images/team/priti-pandey.png' },
    ],
  },
  {
    title: 'Agro CoE',
    members: [
      { name: 'Manoj Verma', role: 'Udyam Corps', image: '/images/team/manoj.png' },
    ],
  },
  {
    title: 'Program Team',
    members: [
      { name: 'Manish Bajaj', role: 'Programs Manager', image: '/images/team/manishb.png' },
      { name: 'Anurag Tiwari', role: 'Program Associate', image: '/images/team/anurag.png' },
      { name: 'Abhishek Singh', role: 'Program Associate', image: '/images/team/abhishek-singh.png' },
      { name: 'Babish Chaturvedi', role: 'Facility Manager', image: '/images/team/babish.png' },
      { name: 'Abhinav Tripathi', role: 'Udyam Mitra', image: '/images/team/abhinav-tripathi.png' },
      { name: 'Sharmila Upadhyay', role: 'Front Desk Associate', image: '/images/team/sharmila.png' },
    ],
  },
  {
    title: 'Finance',
    members: [
      { name: 'Ashwini Kumar Tiwari', role: 'Finance Director', image: '/images/team/AshwiniTiwari-1.png' },
      { name: 'Abhishek Bajaj', role: 'Manager - Accounts', image: '/images/team/placeholder.png' },
      { name: 'Ganesh Singh', role: 'Manager - Finance', image: '/images/team/placeholder.png' },
      { name: 'Himanshu Dubey', role: 'Asst. Manager - Accounts', image: '/images/team/himanshu-pandey.png' },
      { name: 'Navneet Pandey', role: 'Accountant', image: '/images/team/navneet-pandey.png' },
    ],
  },
  {
    title: 'Marketing',
    members: [
      { name: 'Meenal Lall', role: 'Marketing Director', image: '/images/team/minal.png' },
      { name: 'Rajeev Rai', role: 'Manager Communication', image: '/images/team/rajiv-rai.png' },
      { name: 'Baikunth Nath Shukla', role: 'PR Lead', image: '/images/team/baikunth-nath.png' },
      { name: 'Pradeep Gond', role: 'Multi-Media Executive', image: '/images/team/pradeep-gond.png' },
      { name: 'Vivek Vishwakarma', role: 'Udyam Mitra', image: '/images/team/placeholder.png' },
    ],
  },
  {
    title: 'HR & Admin',
    members: [
      { name: 'Shahana Hussain', role: 'People (HR & L&D) Manager', image: '/images/team/shahana.png' },
      { name: 'Reetu Maddheshiya', role: 'HR Associate', image: '/images/team/ritu.png' },
      { name: 'Vikash Shahi', role: 'Udyam Mitra-Admin', image: '/images/team/vikas-shahi.png' },
    ],
  },
  {
    title: 'Partnerships & Fundraising',
    members: [
      { name: 'Anusuya Das', role: 'Associate Director - Strategic Partnerships and Fundraising', image: '/images/team/anusuya.png' },
      { name: 'Cheshta Naval Jain', role: 'Associate - Strategic Partnerships and Fundraising', image: '/images/team/cheshta-naval.png' },
    ],
  },
  {
    title: 'Impact',
    members: [
      { name: 'Dr. Khushboo Sharma', role: 'Manager Impact', image: '/images/team/khushboo.png' },
      { name: 'Ravi Pandey', role: 'Research Associate', image: '/images/team/ravi-pandey.png' },
    ],
  },
  {
    title: 'IT',
    members: [
      { name: 'Amit Kumar', role: 'IT Manager', image: '/images/team/amit-kumar.png' },
      { name: 'Suraj Kumar', role: 'IT Operator', image: '/images/team/suraj-kumar.png' },
    ],
  },
  {
    title: 'JECP Project',
    members: [
      { name: 'Zuber Tomar', role: 'Project Manager', image: '/images/team/zuber-tomer.png' },
      { name: 'Saqib Hussain', role: 'MEP Manager', image: '/images/team/saqib-hussain.png' },
    ],
  },
];

function TeamMemberCard({ name, role, image }: TeamMember) {
  return (
    <div className="group w-[140px] sm:w-[180px]">
      {/* Premium card */}
      <div className={`
        relative rounded-lg sm:rounded-xl overflow-hidden
        bg-gradient-to-b from-white via-white to-gray-50
        shadow-[0_2px_15px_rgba(0,0,0,0.06)]
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        transition-all duration-500
        border border-gray-100
        hover:border-[var(--primary-orange)]/30
        hover:-translate-y-1.5
        h-full flex flex-col
      `}>
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--primary-orange)] via-[var(--primary-orange-light)] to-[var(--primary-orange)]" />

        {/* Image container */}
        <div className="p-1.5 sm:p-3 pb-1 sm:pb-2">
          <div className="relative">
            {/* Corner accents - hidden on mobile */}
            <div className="hidden sm:block absolute -top-0.5 -left-0.5 w-3 h-3 border-l-[1.5px] border-t-[1.5px] border-[var(--primary-orange)]/30 rounded-tl" />
            <div className="hidden sm:block absolute -top-0.5 -right-0.5 w-3 h-3 border-r-[1.5px] border-t-[1.5px] border-[var(--primary-orange)]/30 rounded-tr" />
            <div className="hidden sm:block absolute -bottom-0.5 -left-0.5 w-3 h-3 border-l-[1.5px] border-b-[1.5px] border-[var(--primary-orange)]/30 rounded-bl" />
            <div className="hidden sm:block absolute -bottom-0.5 -right-0.5 w-3 h-3 border-r-[1.5px] border-b-[1.5px] border-[var(--primary-orange)]/30 rounded-br" />

            {/* Image */}
            <div className="relative h-[140px] sm:h-[190px] overflow-hidden rounded-md sm:rounded-lg ring-1 ring-gray-100 group-hover:ring-[var(--primary-orange)]/20 transition-all duration-500">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-1.5 sm:px-3 pb-2 sm:pb-4 text-center flex-1 flex flex-col justify-center">
          <h3 className="text-xs sm:text-sm font-bold text-[var(--primary-navy)] mb-0.5 leading-tight line-clamp-2">
            {name}
          </h3>
          <p className="text-[10px] sm:text-xs text-[var(--primary-orange)] font-medium leading-snug line-clamp-2">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function JECPTeamPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="JECP Team Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">JECP Team</h1>
            <p className="text-sm md:text-base text-white/80 mt-1">Meet our dedicated team driving impact across Purvanchal</p>
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
            <span className="text-[var(--primary-navy)] font-medium">JECP Team</span>
          </nav>
        </div>
      </div>

      {/* Team Sections */}
      {teamSections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`py-14 px-4 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-[var(--background-cream)] to-[var(--background-cream)]/50'}`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] mb-3">
                {section.title}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-light)] mx-auto rounded-full" />
            </div>

            {/* Members - centered flex container */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-5">
              {section.members.map((member, memberIndex) => (
                <TeamMemberCard key={memberIndex} {...member} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
