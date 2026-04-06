import Link from 'next/link';
import {
  ShoppingBag, UtensilsCrossed, Pill, Heart, MessageSquare,
  Video, Store, Truck, Users, ArrowRight, MapPin, Briefcase,
  Shield, Zap, Globe
} from 'lucide-react';

const FEATURES = [
  {
    icon: ShoppingBag,
    title: 'Shop Local',
    description: 'Browse and order from neighborhood stores — groceries, electronics, clothing, and more. Delivered to your doorstep.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: UtensilsCrossed,
    title: 'Order Food',
    description: 'Discover local restaurants, explore menus, and get your favorite meals delivered fresh — or pick them up.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description: 'Order medicines online from trusted local pharmacies. Browse by symptoms, find what you need, delivered safely.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Heart,
    title: 'Health Records',
    description: 'Your prescriptions and medical records, all in one place. Doctors upload directly — you access anytime on your phone.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: MessageSquare,
    title: 'Community Requests',
    description: 'Need something specific? Post a request and let the community respond. Find what you need through people around you.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Video,
    title: 'Discover via Reels',
    description: 'Watch short videos from local businesses. Discover new products, restaurants, and deals in a familiar, engaging way.',
    color: 'bg-pink-50 text-pink-600',
  },
];

const STAKEHOLDERS = [
  {
    icon: Users,
    title: 'For Consumers',
    description: 'Everything you need, from the stores you trust. One app to shop, eat, and manage your daily life.',
    cta: 'Start Using ಕೆA-26',
    href: 'https://ka26.shop',
    gradient: 'from-blue-600 to-blue-700',
  },
  {
    icon: Store,
    title: 'For Sellers',
    description: 'Take your store online in minutes. Receive orders, manage inventory, and reach customers across the region.',
    cta: 'Register Your Store',
    href: 'https://ka26.shop/seller',
    gradient: 'from-emerald-600 to-emerald-700',
  },
  {
    icon: Truck,
    title: 'For Delivery Partners',
    description: 'Earn flexibly by delivering in your area. No fixed hours, no pressure — work on your own terms.',
    cta: 'Join as Partner',
    href: 'https://ka26.shop/delivery_partner',
    gradient: 'from-amber-600 to-amber-700',
  },
];

const VALUES = [
  {
    icon: MapPin,
    title: 'Rooted Locally',
    description: 'Every feature is designed for real needs in North Karnataka — not imported from a different context.',
  },
  {
    icon: Briefcase,
    title: 'Creating Livelihoods',
    description: 'From delivery partners to on-ground roles, we are building sustainable work opportunities across the region.',
  },
  {
    icon: Shield,
    title: 'Trust First',
    description: 'Local pharmacies, neighborhood stores, familiar restaurants — people and businesses you already know.',
  },
  {
    icon: Zap,
    title: 'Simple by Design',
    description: 'No complexity. No learning curve. Built so that anyone can use it — from a student to a grandparent.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-red-50 via-transparent to-transparent rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-50 via-transparent to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 border border-red-100 rounded-full text-xs font-semibold text-red-700 mb-8">
              <Globe className="w-3.5 h-3.5" />
              Serving North Karnataka
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
              Your community,{' '}
              <span className="gradient-text">connected.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              One platform where local stores, restaurants, pharmacies, and delivery partners
              come together — making everyday life simpler for everyone.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://ka26.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-700 text-white font-semibold rounded-2xl hover:bg-red-800 transition-all hover:shadow-lg hover:shadow-red-700/20 active:scale-[0.98]"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 text-gray-700 font-semibold rounded-2xl hover:bg-gray-100 transition-all border border-gray-200"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Everything your town needs, in one place
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              From ordering groceries to finding a medicine at midnight — ಕೆA-26 brings local commerce
              and services together so you never have to look far.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800 transition-colors"
            >
              See all features in detail
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Built for everyone in the ecosystem
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Whether you buy, sell, or deliver — there is a place for you here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {STAKEHOLDERS.map((s) => (
              <div
                key={s.title}
                className={`relative overflow-hidden rounded-2xl text-white p-8 flex flex-col bg-gradient-to-br ${s.gradient}`}
              >
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-6">{s.description}</p>
                </div>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-sm font-semibold transition-colors"
                >
                  {s.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              More than technology
            </h2>
            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
              Every decision we make is guided by a simple question — does this make life better
              for people in our communities?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <div className="w-10 h-10 rounded-lg bg-red-900/30 text-red-400 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1 mb-8">
            <span className="text-6xl sm:text-8xl font-black tracking-tight">
              <span style={{ color: '#FFD700' }}>&#x0C95;&#x0CC6;</span>
              <span style={{ color: '#CC0000' }}>A</span>
              <span className="text-gray-900">-26</span>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#FFF8DC', color: '#DAA520' }}>&#x0C95;&#x0CC6;</span>
              <span>Roots &amp; belonging</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#FFF0F0', color: '#CC0000' }}>A</span>
              <span>Progress &amp; accessibility</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center text-xs font-bold">26</span>
              <span>Regional identity</span>
            </div>
          </div>
          <p className="mt-8 text-gray-400 text-sm max-w-lg mx-auto">
            Local roots, forward thinking. A symbol of building something meaningful — right where we belong.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            This is just the beginning
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We are building something that lasts. A platform that grows with its communities,
            creates opportunities, and makes this region a place people are proud to call home.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://ka26.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-700 text-white font-semibold rounded-2xl hover:bg-red-800 transition-all hover:shadow-lg hover:shadow-red-700/20"
            >
              Explore ಕೆA-26
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/careers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl hover:bg-gray-50 transition-all border border-gray-200"
            >
              <Briefcase className="w-4 h-4" />
              Join the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
