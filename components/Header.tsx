'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const menuItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Who We Are',
    href: '/who-we-are',
    submenu: ['About Us', 'JECP Board', 'JECP Team', 'Future Roadmap']
  },
  {
    label: 'JECP',
    href: '/jecp',
    submenu: ['About JECP', 'Our Approach', 'Our Facilities', 'Network Offices']
  },
  {
    label: 'Our Programs',
    href: '/programs',
    submenu: ['Incubation', 'Innovation', 'Inspiration']
  },
  { label: 'Our Impact', href: '/impact' },
  { label: 'Life@Jagriti', href: '/life-at-jagriti' },
  { label: 'Media & Resources', href: '/media' },
  {
    label: 'Get Involved',
    href: '/get-involved',
    submenu: ['Partner', 'Mentor', 'Volunteer', 'Facilities', 'Apply', 'Newsletter', 'Contact']
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/jecp-logo.png"
              alt="JECP - Jagriti Enterprise Centre Purvanchal"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1
                    ${item.label === 'Home' ? 'text-[var(--primary-orange)]' : 'text-gray-700 hover:text-[var(--primary-orange)]'}`}
                >
                  {item.label}
                  {item.submenu && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 border border-gray-100">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem}
                        href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--background-cream)] hover:text-[var(--primary-orange)]"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-[var(--primary-orange)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
