import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShoppingBag, UtensilsCrossed, Pill, Heart, MessageSquare,
  Video, Store, Truck, ArrowRight, Sparkles
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore everything ಕೆA-26 offers — shop from local stores, order food, access pharmacy, manage health records, post community requests, discover via reels, and more.',
};

const FEATURES = [
  {
    id: 'shop',
    icon: ShoppingBag,
    title: 'Shop',
    tagline: 'Your neighborhood stores, now online',
    accent: 'blue',
    iconBg: 'bg-blue-50 text-blue-600',
    iconBgDark: 'bg-blue-500/10 text-blue-400',
    accentBorder: 'border-blue-200/60',
    accentBg: 'bg-blue-50/80',
    accentText: 'text-blue-700',
    accentTextDark: 'text-blue-400',
    stepDot: 'bg-blue-600',
    description:
      'Browse local stores — grocery, electronics, pharmacy, clothing — and order what you need. Get it delivered to your door or pick it up at your convenience. No more driving to the next town for things your own town already has.',
    steps: [
      'Browse stores near you',
      'Add items to your cart',
      'Choose delivery or pickup',
      'Pay with COD or UPI',
      'Get it delivered to your door',
    ],
  },
  {
    id: 'eats',
    icon: UtensilsCrossed,
    title: 'Eats',
    tagline: 'Local food, delivered with care',
    accent: 'orange',
    iconBg: 'bg-orange-50 text-orange-600',
    iconBgDark: 'bg-orange-500/10 text-orange-400',
    accentBorder: 'border-orange-200/60',
    accentBg: 'bg-orange-50/80',
    accentText: 'text-orange-700',
    accentTextDark: 'text-orange-400',
    stepDot: 'bg-orange-600',
    description:
      'Order food from the restaurants you already love. Browse full menus, customize your order, and track it in real time as it makes its way to you. From the biryani place around the corner to the chaat stall two streets over.',
    steps: [
      'Pick a restaurant',
      'Browse the full menu',
      'Customize and order',
      'Track your order live',
      'Enjoy your meal',
    ],
  },
  {
    id: 'pharmacy',
    icon: Pill,
    title: 'Pharmacy',
    tagline: 'Medicines when you need them',
    accent: 'emerald',
    iconBg: 'bg-emerald-50 text-emerald-600',
    iconBgDark: 'bg-emerald-500/10 text-emerald-400',
    accentBorder: 'border-emerald-200/60',
    accentBg: 'bg-emerald-50/80',
    accentText: 'text-emerald-700',
    accentTextDark: 'text-emerald-400',
    stepDot: 'bg-emerald-600',
    description:
      'Order medicines from trusted local pharmacies. Search by medicine name or filter by symptoms like fever, cough, headache, or cold. No more guessing which pharmacy has what you need — find it, order it, get it delivered.',
    steps: [
      'Find a pharmacy near you',
      'Search by name or filter by symptom',
      'Add medicines to your order',
      'Choose delivery',
      'Receive your medicines safely',
    ],
  },
  {
    id: 'health',
    icon: Heart,
    title: 'Health Records',
    tagline: 'Your medical history, always accessible',
    accent: 'red',
    iconBg: 'bg-red-50 text-red-600',
    iconBgDark: 'bg-red-500/10 text-red-400',
    accentBorder: 'border-red-200/60',
    accentBg: 'bg-red-50/80',
    accentText: 'text-red-700',
    accentTextDark: 'text-red-400',
    stepDot: 'bg-red-600',
    description:
      'Doctors upload prescriptions directly to your profile through the doctor app. Access your medical records anytime from your phone. Track records for your whole family — parents, kids, spouse — all linked to one account. A QR code connects doctor and patient instantly.',
    steps: [
      'Doctor writes your prescription',
      'Uploads it via the doctor app',
      'You receive it on your phone instantly',
      'Access anytime, anywhere',
      'Manage records for your whole family',
    ],
  },
  {
    id: 'requests',
    icon: MessageSquare,
    title: 'Community Requests',
    tagline: 'Ask your community, get answers',
    accent: 'purple',
    iconBg: 'bg-purple-50 text-purple-600',
    iconBgDark: 'bg-purple-500/10 text-purple-400',
    accentBorder: 'border-purple-200/60',
    accentBg: 'bg-purple-50/80',
    accentText: 'text-purple-700',
    accentTextDark: 'text-purple-400',
    stepDot: 'bg-purple-600',
    description:
      'Looking for a specific product? Need a service recommendation? Post a request and let the community respond. Others can reply with offers, information, or just helpful advice. Each request has its own thread for discussion.',
    steps: [
      'Post what you need',
      'Your community sees the request',
      'People respond with offers or info',
      'Discuss in threads',
      'Find what you were looking for',
    ],
  },
  {
    id: 'reels',
    icon: Video,
    title: 'Reels',
    tagline: 'Discover local businesses through short videos',
    accent: 'pink',
    iconBg: 'bg-pink-50 text-pink-600',
    iconBgDark: 'bg-pink-500/10 text-pink-400',
    accentBorder: 'border-pink-200/60',
    accentBg: 'bg-pink-50/80',
    accentText: 'text-pink-700',
    accentTextDark: 'text-pink-400',
    stepDot: 'bg-pink-600',
    description:
      'Short videos from local businesses — discover new products, restaurants, deals, and what is happening around you. Swipe through engaging content and tap to shop directly from any reel. A familiar format, but rooted in your local economy.',
    steps: [
      'Open the Reels tab',
      'Swipe through local content',
      'Discover products and restaurants',
      'Tap to view or shop directly',
      'Support local businesses',
    ],
  },
  {
    id: 'sellers',
    icon: Store,
    title: 'For Sellers',
    tagline: 'Take your store online in minutes',
    accent: 'teal',
    iconBg: 'bg-teal-50 text-teal-600',
    iconBgDark: 'bg-teal-500/10 text-teal-400',
    accentBorder: 'border-teal-200/60',
    accentBg: 'bg-teal-50/80',
    accentText: 'text-teal-700',
    accentTextDark: 'text-teal-400',
    stepDot: 'bg-teal-600',
    description:
      'Register your store in minutes and start receiving orders the same day. Manage products, prices, and availability from a simple dashboard. Get real-time notifications when orders come in, track deliveries, and manage pickups. Analytics and insights are coming soon.',
    steps: [
      'Register your store',
      'Add your products and prices',
      'Receive orders with live notifications',
      'Manage deliveries and pickups',
      'Grow with insights (coming soon)',
    ],
  },
  {
    id: 'delivery',
    icon: Truck,
    title: 'For Delivery Partners',
    tagline: 'Earn on your own terms',
    accent: 'amber',
    iconBg: 'bg-amber-50 text-amber-600',
    iconBgDark: 'bg-amber-500/10 text-amber-400',
    accentBorder: 'border-amber-200/60',
    accentBg: 'bg-amber-50/80',
    accentText: 'text-amber-700',
    accentTextDark: 'text-amber-400',
    stepDot: 'bg-amber-600',
    description:
      'Flexible earning opportunities with no fixed hours — work when it suits you. Orders are assigned based on your proximity, so you spend less time traveling and more time earning. Real-time tracking keeps everyone informed.',
    steps: [
      'Sign up as a delivery partner',
      'Go online when you want to work',
      'Receive orders near your location',
      'Deliver and earn',
      'Track everything in real time',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero — Dark */}
      <section className="relative overflow-hidden bg-[#0D0D0C] grain">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(40,30,20,0.5)_0%,_transparent_70%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(200,169,81,0.05)_0%,_transparent_60%)] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute inset-0 pattern-bg-dark" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.08] border border-white/[0.08] rounded-full text-xs font-semibold text-gray-400 mb-8 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Platform Features
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
                Built for how{' '}
                <span className="gradient-text">
                  people actually live
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Not a feature dump — a set of tools designed around daily life
                in North Karnataka. Shop, eat, get medicines, manage health,
                connect with your community, and more.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Feature sections — alternating warm tones */}
      {FEATURES.map((feature, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? 'bg-[#FAFAF7]' : 'bg-[#F3F2EE]';

        return (
          <section key={feature.id} id={feature.id} className={`relative py-20 sm:py-28 ${bgClass}`}>
            <div className="absolute inset-0 pattern-bg" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  !isEven ? 'lg:direction-rtl' : ''
                }`}>
                  {/* Text side */}
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A18] tracking-tight">
                          {feature.title}
                        </h2>
                      </div>
                    </div>
                    <p className={`text-sm font-semibold ${feature.accentText} mb-4`}>
                      {feature.tagline}
                    </p>
                    <p className="text-gray-500 leading-relaxed text-base sm:text-lg">
                      {feature.description}
                    </p>
                  </div>

                  {/* Steps side */}
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className={`rounded-2xl border ${feature.accentBorder} bg-white/70 backdrop-blur-sm p-6 sm:p-8 shadow-sm`}>
                      <h3 className={`text-sm font-semibold ${feature.accentText} mb-5`}>
                        How it works
                      </h3>
                      <div className="space-y-4">
                        {feature.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                              <div className={`w-6 h-6 rounded-full ${feature.stepDot} text-white flex items-center justify-center`}>
                                <span className="text-xs font-bold">{stepIndex + 1}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-700 font-medium leading-relaxed">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}

      {/* CTA — Dark */}
      <section className="relative py-20 sm:py-28 bg-[#0D0D0C] grain">
        <div className="absolute inset-0 pattern-bg-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Ready to get started?
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you want to shop, sell, deliver, or just explore what your
              community has to offer — ಕೆA-26 is ready for you.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://ka26.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8A951] text-[#0D0D0C] font-semibold rounded-2xl hover:bg-[#d4b85e] transition-all hover:shadow-lg hover:shadow-[#C8A951]/20"
              >
                Open ಕೆA-26
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.06] text-gray-300 font-semibold rounded-2xl hover:bg-white/[0.1] transition-all border border-white/[0.1]"
              >
                Learn Our Story
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
