'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/features', label: 'Features' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E5E2DA]/80">
      {/* Subtle warm border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E2DA] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 group">
            <span className="text-2xl font-black tracking-tight">
              <span style={{ color: '#FFD700' }}>&#x0C95;&#x0CC6;</span>
              <span style={{ color: '#CC0000' }}>A</span>
              <span className="text-[#1A1A18]">-26</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#1A1A18] rounded-lg hover:bg-[#F3F2EE] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://ka26.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-[#9B1B1B] text-white text-sm font-semibold rounded-full hover:bg-[#7A1515] transition-colors"
            >
              Open App
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#1A1A18] hover:bg-[#F3F2EE] transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E5E2DA]/80 bg-white/95 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-[#1A1A18] hover:bg-[#F3F2EE] rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://ka26.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-2 px-4 py-3 bg-[#9B1B1B] text-white text-sm font-semibold rounded-xl hover:bg-[#7A1515] transition-colors"
            >
              Open App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
