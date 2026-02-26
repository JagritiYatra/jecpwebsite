'use client';

import { useEffect } from 'react';

export default function TogetherWeRise() {
  useEffect(() => {
    // Load Instagram embed
    if (typeof window !== 'undefined' && !document.getElementById('instagram-embed')) {
      const igScript = document.createElement('script');
      igScript.id = 'instagram-embed';
      igScript.src = 'https://www.instagram.com/embed.js';
      igScript.async = true;
      document.body.appendChild(igScript);
    }

    // Load LinkedIn embed
    if (typeof window !== 'undefined' && !document.getElementById('linkedin-embed')) {
      const liScript = document.createElement('script');
      liScript.id = 'linkedin-embed';
      liScript.src = 'https://platform.linkedin.com/in.js';
      liScript.type = 'text/javascript';
      liScript.innerHTML = 'lang: en_US';
      document.body.appendChild(liScript);
    }
  }, []);

  return (
    <section className="py-10 md:py-12 px-4 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-4 md:mb-0 italic">
            Together We Rise
          </h2>
          <p className="text-gray-600 max-w-md md:text-right">
            Empowering Communities, Building Enterprises, and Shaping a Stronger Tomorrow!
          </p>
        </div>

        {/* Social Media Embeds - 3 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {/* Instagram Embed */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-500 overflow-hidden">
            <div className="h-[400px] overflow-hidden flex flex-col">
              {/* Instagram Header */}
              <a
                href="https://www.instagram.com/jecpurvanchal/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-b flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E4405F] to-[#FCAF45] p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">jecpurvanchal</p>
                    <p className="text-xs text-gray-500">Jagriti Enterprise Centre</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#E4405F] bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] bg-clip-text text-transparent">Follow</span>
              </a>
              <div className="flex-1 overflow-hidden">
                <iframe
                  src="https://www.instagram.com/jecpurvanchal/embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>

          {/* YouTube Video Embed */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-500 overflow-hidden">
            <div className="h-[400px] overflow-hidden">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/84u0tfym7PE"
                title="JECP YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* LinkedIn Post Embed */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-500 overflow-hidden">
            <div className="h-[400px] overflow-y-auto p-4">
              {/* LinkedIn Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Jagriti Enterprise Centre</p>
                    <p className="text-xs text-gray-500">6,842 followers • 4mo</p>
                  </div>
                </div>
                <svg className="w-20 h-5" viewBox="0 0 84 21" fill="#0A66C2">
                  <path d="M12.5 2.75h-2.125v14.5h2.125v-14.5zM11.438 0c-.75 0-1.313.563-1.313 1.25s.563 1.25 1.313 1.25c.75 0 1.312-.563 1.312-1.25S12.188 0 11.438 0zM18.75 6.5c-1.75 0-2.875.875-3.25 1.75h-.063V6.75h-2v10.5h2.125v-5.125c0-1.375.25-2.688 1.938-2.688 1.625 0 1.687 1.563 1.687 2.75v5.063h2.125V11.5c0-2.875-.625-5-3.563-5z"/>
                  <text x="28" y="15" fontSize="12" fontWeight="bold">Linked</text>
                  <rect x="68" y="3" width="14" height="14" rx="2" fill="#0A66C2"/>
                  <text x="71" y="14" fontSize="10" fill="white" fontWeight="bold">in</text>
                </svg>
              </div>

              {/* Post Content */}
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="font-semibold mb-2">Sahjeevan Samvaad – An initiative of the Bioregional Center of Excellence, JECP</p>
                <p className="mb-2">– convened diverse stakeholders to deliberate on the challenge of human–wildlife interactions (HWI) in Purvanchal.</p>
                <p className="mb-2">The two-day dialogue generated:</p>
                <ul className="text-xs space-y-1 text-gray-600">
                  <li>&gt; Ground-level perspectives from farmers on the everyday impact of HWI.</li>
                  <li>&gt; A media roundtable on responsible and constructive reporting of HWI.</li>
                  <li>&gt; Expert inputs on ecological and policy dimensions.</li>
                  <li>&gt; Collaborative strategies, co-created with stakeholders, including community wildlife response teams, solar fencing...</li>
                </ul>
              </div>

              {/* View on LinkedIn Button */}
              <a
                href="https://www.linkedin.com/company/jecpurvanchal"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center py-2 px-4 bg-[#0A66C2] text-white text-sm font-semibold rounded-full hover:bg-[#004182] transition-all duration-300 hover:shadow-md"
              >
                View on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
