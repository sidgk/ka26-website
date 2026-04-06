import Link from 'next/link';

const FOOTER_LINKS = {
  Platform: [
    { href: 'https://ka26.shop', label: 'Consumer App', external: true },
    { href: 'https://ka26.shop/seller', label: 'Seller Dashboard', external: true },
    { href: 'https://ka26.shop/delivery_partner', label: 'Delivery Partner', external: true },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/features', label: 'Features' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ],
  Legal: [
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/refund-policy', label: 'Refund Policy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A18] text-gray-400">
      {/* Warm gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A951]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-black tracking-tight mb-4">
              <span style={{ color: '#FFD700' }}>&#x0C95;&#x0CC6;</span>
              <span style={{ color: '#CC0000' }}>A</span>
              <span className="text-white">-26</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Building the digital backbone of local communities across North Karnataka.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918197363421"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-green-600/80 transition-colors text-sm"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href="mailto:support@ka-26.com"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-[#9B1B1B]/80 transition-colors text-sm"
                aria-label="Email"
              >
                ✉️
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} ಕೆA-26. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Made with purpose in North Karnataka
          </p>
        </div>
      </div>
    </footer>
  );
}
