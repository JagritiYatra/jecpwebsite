import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'JECP Network Offices | JECP',
  description: 'Find JECP offices across Purvanchal - Deoria, Kushinagar, Gorakhpur, Ballia, Mau, Sant Kabir Nagar, Maharajganj',
};

const offices = [
  {
    name: 'DEORIA',
    address: 'Jagriti Enterprise Centre-Purvanchal, Vill-Araipar, Post-Barpar, Dist-Deoria, U.P.-274201',
    mapLink: 'https://www.google.com/maps/search/Jagriti+Enterprise+Centre+Purvanchal+Araipar+Barpar+Deoria+274201',
  },
  {
    name: 'KUSHINAGAR',
    address: 'Jagriti Udyam Kendra, Maharana Pratap Chowk, Agency Road SEWARHI, Tamkuhi Road, Kushinagar, UP 274406',
    mapLink: 'https://www.google.com/maps/search/Jagriti+Udyam+Kendra+Maharana+Pratap+Chowk+Sewarhi+Kushinagar+274406',
  },
  {
    name: 'GORAKHPUR',
    address: 'Jagriti Network Office, Near Sport college Behind Big Bachat Bazar, Ramjanki Nagar Gorakhpur, Uttar Pradesh 273004',
    mapLink: 'https://www.google.com/maps/search/Ramjanki+Nagar+Gorakhpur+273004',
  },
  {
    name: 'BALLIA',
    address: 'Near T.D. College Chauraha, between Rudra and Axis Bank, Above Sai Cyber Café, 1st Floor, 277001',
    mapLink: 'https://www.google.com/maps/search/TD+College+Chauraha+Ballia+277001',
  },
  {
    name: 'MAU',
    address: 'Jagriti Udyam Kendra, H.No-15/2-A,Kalpanath Nagar Bakawal,Beside Saraiyiakhansi Police Station, Mau- 275101',
    mapLink: 'https://www.google.com/maps/search/Kalpanath+Nagar+Bakawal+Mau+275101',
  },
  {
    name: 'SANT KABIR NAGAR',
    address: 'Jagriti Enterprise Centre – Purvanchal, Near Harikunj Marriage Hall, Mehandawal Bypass, Khalilabad, Mohaddipur, Uttar Pradesh 272175',
    mapLink: 'https://www.google.com/maps/search/Mehandawal+Bypass+Khalilabad+Sant+Kabir+Nagar+272175',
  },
  {
    name: 'MAHARAJGANJ',
    address: 'Jagriti Entrprise Centre Maharajganj, Jaiprakash Nagar, Gorakhpur Road, Nagarpalika, Ward No. 7, Near city Montessori School, PIN code: 273303',
    mapLink: 'https://www.google.com/maps/search/Jaiprakash+Nagar+Gorakhpur+Road+Maharajganj+273303',
  },
];

export default function NetworkOfficesPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Network Offices Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">JECP Network Offices</h1>
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
            <span className="text-[var(--primary-navy)]">Network Offices</span>
          </nav>
        </div>
      </div>

      {/* Office Cards Section */}
      <section className="py-16 px-4 bg-[var(--background-cream)]">
        <div className="max-w-7xl mx-auto">
          {/* Top Row - 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {offices.slice(0, 4).map((office, index) => (
              <div
                key={index}
                className="bg-[var(--primary-navy)] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-[var(--primary-orange)] mb-4">
                  {office.name}
                </h3>
                <div className="mb-4">
                  <p className="text-[var(--primary-orange)] text-sm font-semibold mb-1">
                    Address:
                  </p>
                  <p className="text-white text-sm leading-relaxed">
                    {office.address}
                  </p>
                </div>
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[var(--primary-orange)] text-sm font-semibold hover:underline"
                >
                  Google Map Location
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 cards centered */}
          <div className="flex flex-wrap justify-center gap-6">
            {offices.slice(4).map((office, index) => (
              <div
                key={index + 4}
                className="bg-[var(--primary-navy)] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <h3 className="text-xl font-bold text-[var(--primary-orange)] mb-4">
                  {office.name}
                </h3>
                <div className="mb-4">
                  <p className="text-[var(--primary-orange)] text-sm font-semibold mb-1">
                    Address:
                  </p>
                  <p className="text-white text-sm leading-relaxed">
                    {office.address}
                  </p>
                </div>
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[var(--primary-orange)] text-sm font-semibold hover:underline"
                >
                  Google Map Location
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
