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
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-black tracking-tight mb-4">
              <span className="text-primary">KA</span>
              <span className="text-gray-600 font-light">-</span>
              <span className="text-white">26</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Building the digital backbone of local communities across North Karnataka.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918197363421"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition-colors text-sm"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href="mailto:support@ka-26.com"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors text-sm"
                aria-label="Email"
              >
                ✉️
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
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
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} KA-26. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Made with purpose in North Karnataka
          </p>
        </div>
      </div>
    </footer>
  );
}
