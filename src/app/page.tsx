import Link from 'next/link';
import {
  ShoppingBag, UtensilsCrossed, Pill, Heart, MessageSquare,
  Video, Store, Truck, Users, ArrowRight, MapPin, Briefcase,
  Shield, Zap, Globe, Smartphone
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import GlassCard from '@/components/GlassCard';

const FEATURES = [
  {
    icon: ShoppingBag,
    title: 'Shop Local',
    description: 'Browse and order from neighborhood stores — groceries, electronics, clothing, and more. Delivered to your doorstep.',
    color: 'bg-blue-500/10 text-blue-400',
    colorLight: 'bg-blue-50 text-blue-600',
  },
  {
    icon: UtensilsCrossed,
    title: 'Order Food',
    description: 'Discover local restaurants, explore menus, and get your favorite meals delivered fresh — or pick them up.',
    color: 'bg-orange-500/10 text-orange-400',
    colorLight: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description: 'Order medicines online from trusted local pharmacies. Browse by symptoms, find what you need, delivered safely.',
    color: 'bg-emerald-500/10 text-emerald-400',
    colorLight: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Heart,
    title: 'Health Records',
    description: 'Your prescriptions and medical records, all in one place. Doctors upload directly — you access anytime on your phone.',
    color: 'bg-red-500/10 text-red-400',
    colorLight: 'bg-red-50 text-red-600',
  },
  {
    icon: MessageSquare,
    title: 'Community Requests',
    description: 'Need something specific? Post a request and let the community respond. Find what you need through people around you.',
    color: 'bg-purple-500/10 text-purple-400',
    colorLight: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Video,
    title: 'Discover via Reels',
    description: 'Watch short videos from local businesses. Discover new products, restaurants, and deals in a familiar, engaging way.',
    color: 'bg-pink-500/10 text-pink-400',
    colorLight: 'bg-pink-50 text-pink-600',
  },
];

const STAKEHOLDERS = [
  {
    icon: Users,
    title: 'For Consumers',
    description: 'Everything you need, from the stores you trust. One app to shop, eat, and manage your daily life.',
    cta: 'Start Using ಕೆA-26',
    href: 'https://ka26.shop',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    icon: Store,
    title: 'For Sellers',
    description: 'Take your store online in minutes. Receive orders, manage inventory, and reach customers across the region.',
    cta: 'Register Your Store',
    href: 'https://ka26.shop/seller',
    gradient: 'from-emerald-600 to-emerald-800',
  },
  {
    icon: Truck,
    title: 'For Delivery Partners',
    description: 'Earn flexibly by delivering in your area. No fixed hours, no pressure — work on your own terms.',
    cta: 'Join as Partner',
    href: 'https://ka26.shop/delivery_partner',
    gradient: 'from-amber-600 to-amber-800',
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
      {/* Hero — Light, warm, premium */}
      <section className="relative overflow-hidden bg-[#FAFAF7] grain">
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,169,81,0.06)_0%,_transparent_70%)]" />
        {/* Warm edge glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(200,169,81,0.08)_0%,_transparent_60%)] -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(155,27,27,0.05)_0%,_transparent_60%)] translate-y-1/4 -translate-x-1/4" />
        <div className="absolute inset-0 pattern-bg" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 border border-[#E5E2DA] rounded-full text-xs font-semibold text-gray-500 mb-8">
                <Globe className="w-3.5 h-3.5" />
                Serving North Karnataka
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-[#1A1A18] leading-[1.1]">
                Your community,{' '}
                <span className="gradient-text">connected.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                One platform where local stores, restaurants, pharmacies, and delivery partners
                come together — making everyday life simpler for everyone.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/download"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#9B1B1B] text-white font-semibold rounded-2xl hover:bg-[#7A1515] transition-all hover:shadow-lg hover:shadow-[#9B1B1B]/20 active:scale-[0.98]"
                >
                  <Smartphone className="w-4 h-4" />
                  Download Android App
                </Link>
                <a
                  href="https://ka26.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1A1A18] font-semibold rounded-2xl hover:bg-[#F3F2EE] transition-all border border-[#E5E2DA]"
                >
                  Open in Browser
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="mt-3 text-xs text-gray-400">
                Free · Android 7+ · Play Store coming soon
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 sm:py-28 bg-[#FAFAF7]">
        <div className="absolute inset-0 pattern-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A18] tracking-tight">
                Everything your town needs, in one place
              </h2>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                From ordering groceries to finding a medicine at midnight — ಕೆA-26 brings local commerce
                and services together so you never have to look far.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <GlassCard variant="light" hover className="p-6 h-full">
                  <div className={`w-12 h-12 rounded-xl ${feature.colorLight} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A18] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-12 text-center">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#9B1B1B] hover:text-[#7A1515] transition-colors"
              >
                See all features in detail
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="py-20 sm:py-28 bg-[#F3F2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A18] tracking-tight">
                Built for everyone in the ecosystem
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Whether you buy, sell, or deliver — there is a place for you here.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {STAKEHOLDERS.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <div
                  className={`relative overflow-hidden rounded-3xl text-white p-8 flex flex-col bg-gradient-to-br ${s.gradient} shadow-xl shadow-black/10`}
                >
                  {/* Inner depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent" />
                  <div className="relative flex-1">
                    <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-5">
                      <s.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-6">{s.description}</p>
                  </div>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-xl text-sm font-semibold transition-colors border border-white/10"
                  >
                    {s.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values — Light warm section */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="absolute inset-0 pattern-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A18]">
                More than technology
              </h2>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                Every decision we make is guided by a simple question — does this make life better
                for people in our communities?
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <GlassCard variant="light" hover className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-[#9B1B1B]/10 text-[#9B1B1B] flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#1A1A18]">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Identity — Brand red background */}
      <section className="relative py-20 sm:py-28 bg-[#9B1B1B] grain">
        <div className="absolute inset-0 pattern-bg-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-1 mb-8">
              <span className="text-6xl sm:text-8xl font-black tracking-tight" style={{ textShadow: '0 0 60px rgba(255,215,0,0.15)' }}>
                <span style={{ color: '#FFD700' }}>&#x0C95;&#x0CC6;</span>
                <span className="text-white">A</span>
                <span className="text-white">-26</span>
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-[#FFD700]/20 border border-[#FFD700]/30" style={{ color: '#FFD700' }}>&#x0C95;&#x0CC6;</span>
                <span className="text-white/80">Roots &amp; belonging</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-white/15 border border-white/20 text-white">A</span>
                <span className="text-white/80">Progress &amp; accessibility</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-white/15 border border-white/20 text-white flex items-center justify-center text-xs font-bold">26</span>
                <span className="text-white/80">Regional identity</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-white/70 text-sm max-w-lg mx-auto">
              Local roots, forward thinking. A symbol of building something meaningful — right where we belong.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 bg-[#F3F2EE]">
        <div className="absolute inset-0 pattern-bg" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A18] tracking-tight">
              This is just the beginning
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              We are building something that lasts. A platform that grows with its communities,
              creates opportunities, and makes this region a place people are proud to call home.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://ka26.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#9B1B1B] text-white font-semibold rounded-2xl hover:bg-[#7A1515] transition-all hover:shadow-lg hover:shadow-[#9B1B1B]/20"
              >
                Explore ಕೆA-26
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/careers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 text-[#1A1A18] font-semibold rounded-2xl hover:bg-white transition-all border border-[#E5E2DA]"
              >
                <Briefcase className="w-4 h-4" />
                Join the Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
