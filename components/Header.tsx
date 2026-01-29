'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface SubMenuItem {
  label: string;
  href: string;
  nestedSubmenu?: { label: string; href: string }[];
}

interface MenuItem {
  label: string;
  href: string;
  submenu?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Who We Are',
    href: '/who-we-are',
    submenu: [
      { label: 'About Us', href: '/who-we-are/about-us' },
      { label: 'JECP Board', href: '/who-we-are/jecp-board' },
      { label: 'JECP Team', href: '/who-we-are/jecp-team' },
      { label: 'Future Roadmap', href: '/who-we-are/future-roadmap' },
    ]
  },
  {
    label: 'JECP',
    href: '/jecp',
    submenu: [
      { label: 'About JECP', href: '/jecp/about-jecp' },
      { label: 'Our Approach', href: '/jecp/our-approach' },
      { label: 'Our Facilities', href: '/jecp/our-facilities' },
      { label: 'Network Offices', href: '/jecp/network-offices' },
    ]
  },
  {
    label: 'Our Programs',
    href: '/programs',
    submenu: [
      {
        label: 'Incubation',
        href: '/programs/incubation',
        nestedSubmenu: [
          { label: 'Overview', href: '/programs/incubation/overview' },
          { label: 'Our Mentors', href: '/programs/incubation/our-mentors' },
          { label: 'Our Partners', href: '/programs/incubation/our-partners' },
        ]
      },
      { label: 'Innovation', href: '/programs/innovation' },
      { label: 'Inspiration', href: '/programs/inspiration' },
    ]
  },
  { label: 'Our Impact', href: '/our-impact' },
  { label: 'Life@Jagriti', href: '/life-at-jagriti' },
  { label: 'Media & Resources', href: '/media-resources' },
  {
    label: 'Get Involved',
    href: '/get-involved',
    submenu: [
      { label: 'Partner', href: '/get-involved/partner' },
      { label: 'Mentor', href: '/get-involved/mentor' },
      { label: 'Volunteer', href: '/get-involved/volunteer' },
      { label: 'Facilities', href: '/get-involved/facilities' },
      { label: 'Apply', href: 'https://mis.jecp.in/apply' },
      { label: 'Newsletter', href: '/get-involved/newsletter' },
      { label: 'Contact', href: '/get-involved/contact' },
    ]
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState<string | null>(null);

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
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveNestedDropdown(null);
                }}
              >
                {item.submenu ? (
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 cursor-default
                      ${item.label === 'Home' ? 'text-[var(--primary-orange)]' : 'text-gray-700 hover:text-[var(--primary-orange)]'}`}
                  >
                    {item.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1
                      ${item.label === 'Home' ? 'text-[var(--primary-orange)]' : 'text-gray-700 hover:text-[var(--primary-orange)]'}`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-48 bg-[var(--primary-navy)] rounded-md shadow-lg py-1">
                    {item.submenu.map((subItem) => (
                      <div
                        key={subItem.label}
                        className="relative"
                        onMouseEnter={() => subItem.nestedSubmenu && setActiveNestedDropdown(subItem.label)}
                        onMouseLeave={() => !subItem.nestedSubmenu && setActiveNestedDropdown(null)}
                      >
                        {subItem.nestedSubmenu ? (
                          <div className="flex items-center justify-between px-4 py-2 text-sm text-white hover:bg-[var(--primary-orange)] cursor-pointer">
                            <span>{subItem.label}</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        ) : subItem.href.startsWith('http') ? (
                          <a
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-white hover:bg-[var(--primary-orange)]"
                          >
                            {subItem.label}
                          </a>
                        ) : (
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-[var(--primary-orange)]"
                          >
                            {subItem.label}
                          </Link>
                        )}

                        {/* Nested Submenu */}
                        {subItem.nestedSubmenu && activeNestedDropdown === subItem.label && (
                          <div className="absolute top-0 left-full w-48 bg-[var(--primary-navy)] rounded-md shadow-lg py-1 ml-0">
                            {subItem.nestedSubmenu.map((nestedItem) => (
                              <Link
                                key={nestedItem.label}
                                href={nestedItem.href}
                                className="block px-4 py-2 text-sm text-white hover:bg-[var(--primary-orange)]"
                              >
                                {nestedItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
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
          <div className="lg:hidden py-4 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <div className="px-4 py-2 text-sm font-medium text-gray-700">
                      {item.label}
                    </div>
                    <div className="pl-6">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.label}>
                          {subItem.nestedSubmenu ? (
                            <>
                              <div className="px-4 py-2 text-sm text-gray-600 font-medium">
                                {subItem.label}
                              </div>
                              <div className="pl-4">
                                {subItem.nestedSubmenu.map((nestedItem) => (
                                  <Link
                                    key={nestedItem.label}
                                    href={nestedItem.href}
                                    className="block px-4 py-2 text-sm text-gray-500 hover:text-[var(--primary-orange)]"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {nestedItem.label}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : subItem.href.startsWith('http') ? (
                            <a
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-[var(--primary-orange)]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-[var(--primary-orange)]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-[var(--primary-orange)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
