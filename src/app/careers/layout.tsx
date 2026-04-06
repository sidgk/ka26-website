import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join ಕೆA-26 and help build the future of local commerce in North Karnataka. Explore open positions or send us your interest.',
  openGraph: {
    title: 'Careers | ಕೆA-26',
    description: 'Build the future with ಕೆA-26. Explore open positions and join our mission to empower local communities.',
    url: 'https://ka-26.com/careers',
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
