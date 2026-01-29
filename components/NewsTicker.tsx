'use client';

const announcements = [
  "Green Enterprise Cohort 3.0 launched with 22 New Enterprises.",
  "Azeedo Pvt. Ltd. wins ₹5 Lakh in Impact Quest 2.0.",
  "Earth Rakshak diverts 40 kg of Waste to Sales.",
  "Chaimitra wins Best Newcomer – Tea Café (North), 2025.",
  "MoU with CRB supporting 25 FPOs and ~15,000 farmers.",
  "Women CoE exposure visit to Jharkhand.",
];

export default function NewsTicker() {
  return (
    <div className="bg-[var(--primary-navy)] py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...announcements, ...announcements].map((item, index) => (
          <span
            key={index}
            className="text-white text-sm mx-8 inline-flex items-center"
          >
            <span className="text-[var(--primary-orange)] mr-2">&quot;</span>
            {item}
            <span className="text-[var(--primary-orange)] ml-2">&quot;</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
