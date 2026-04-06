import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with KA-26. Reach us via WhatsApp, email, or our contact form. We are here to help with questions, support, partnerships, and feedback.',
  openGraph: {
    title: 'Contact Us | KA-26',
    description: 'Reach out to the KA-26 team for support, partnerships, or general inquiries.',
    url: 'https://ka-26.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
