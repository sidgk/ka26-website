import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, Target, Eye, MapPin, Lightbulb, Users,
  Globe, Sparkles, Heart, Rocket
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import GlassCard from '@/components/GlassCard';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn why ಕೆA-26 exists — building digital infrastructure for local communities in North Karnataka. Our story, vision, and the meaning behind the name.',
};

export default function AboutPage() {
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
                Why we exist
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
                Building digital{' '}
                <span className="gradient-text">
                  infrastructure
                </span>{' '}
                for local communities
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Not another app. A foundation — so that local businesses, services,
                and people can thrive without leaving the places they call home.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 sm:py-28 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#9B1B1B]/10 text-[#9B1B1B] flex items-center justify-center">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A18] tracking-tight">
                  The story behind ಕೆA-26
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6 text-gray-500 text-base sm:text-lg leading-relaxed">
                <p>
                  In towns across North Karnataka, people are resourceful. Shopkeepers know
                  their customers by name. Restaurants serve food that has been perfected over
                  generations. Pharmacies stay open late because someone might need medicine at
                  midnight.
                </p>
                <p>
                  But these businesses have no digital presence. A family grocery store
                  cannot compete with aggregator platforms. A local restaurant has no way
                  to reach people beyond word of mouth. When someone needs a specific product,
                  they drive to the nearest city — not because their town does not have it,
                  but because they cannot find it.
                </p>
                <p className="text-[#1A1A18] font-medium">
                  ಕೆA-26 was built to fix that gap.
                </p>
                <p>
                  Not by replacing what already works, but by giving local businesses
                  the tools to reach the people around them. A single platform where
                  consumers, stores, restaurants, pharmacies, and delivery partners all
                  connect — without anyone needing to leave their town to access
                  what they need.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission — Dark */}
      <section className="relative py-20 sm:py-28 bg-[#111] grain">
        <div className="absolute inset-0 pattern-bg-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Where we are headed
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <FadeIn>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#9B1B1B] to-[#7A1515] text-white p-8 sm:p-10 shadow-xl shadow-black/20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Vision</h3>
                  <p className="text-white/85 leading-relaxed">
                    Build a unified digital ecosystem that empowers local communities,
                    simplifies everyday life, and brings essential services into one
                    seamless platform.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Mission */}
            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl text-white p-8 sm:p-10 shadow-xl shadow-black/20">
                <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-3xl" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Mission</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Create meaningful employment across North Karnataka, enable local
                    businesses to thrive digitally, and provide easy access to services
                    without people needing to leave their hometowns.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why North Karnataka — Dark */}
      <section className="relative py-20 sm:py-28 bg-[#0D0D0C] grain">
        <div className="absolute inset-0 pattern-bg-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#9B1B1B]/20 text-red-400 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      Why North Karnataka
                    </h2>
                  </div>
                  <div className="space-y-5 text-gray-400 leading-relaxed">
                    <p>
                      This region has talent, determination, and hardworking people.
                      What it has lacked is the digital infrastructure to match.
                      While metro cities get every new app and platform on day one,
                      towns like Gadag, Hubli, Dharwad, and Bagalkot are still waiting.
                    </p>
                    <p>
                      We are not building ಕೆA-26 for North Karnataka because it is an
                      underserved market. We are building it because this is home.
                      Because the people here deserve the same access to technology
                      that anyone in Bengaluru has.
                    </p>
                    <p className="text-white font-medium">
                      The potential was always here. The platform was not. Now it is.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Local Stores', desc: 'Going digital for the first time' },
                    { label: 'Delivery Jobs', desc: 'Flexible work, fair pay' },
                    { label: 'Health Access', desc: 'Records on your phone' },
                    { label: 'Community', desc: 'Connected, not isolated' },
                  ].map((item) => (
                    <GlassCard key={item.label} variant="dark" className="p-5">
                      <h4 className="font-bold text-sm text-white mb-1">{item.label}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </GlassCard>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* The Identity Section — Dark */}
      <section className="relative py-20 sm:py-28 bg-[#111] grain">
        <div className="absolute inset-0 pattern-bg-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                What{' '}
                <span style={{ color: '#CC0000' }}>&#x0C95;&#x0CC6;</span>A26 means
              </h2>
              <p className="mt-4 text-gray-400 text-lg">
                Every part of the name carries a piece of who we are.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Ka */}
            <FadeIn>
              <GlassCard variant="dark" className="p-8 text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-black" style={{ color: '#FFD700' }}>&#x0C95;&#x0CC6;</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  &#x0C95;&#x0CC6; — Our Roots
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The Kannada letter &ldquo;&#x0C95;&#x0CC6;&rdquo; (Ka) is where it starts.
                  It represents the language, the culture, and the identity
                  of Karnataka — the foundation everything is built on.
                </p>
              </GlassCard>
            </FadeIn>

            {/* A */}
            <FadeIn delay={0.1}>
              <GlassCard variant="dark" className="p-8 text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#CC0000]/10 border border-[#CC0000]/20 flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-black" style={{ color: '#CC0000' }}>A</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  A — Forward Motion
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The Latin &ldquo;A&rdquo; stands for accessibility, modernity, and
                  progress. Local roots meeting global technology — making
                  advanced tools available to every community.
                </p>
              </GlassCard>
            </FadeIn>

            {/* 26 */}
            <FadeIn delay={0.2}>
              <GlassCard variant="dark" className="p-8 text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-black text-white">26</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  26 — Our Region
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  ಕೆA-26 is the RTO code for Gadag district — where this
                  project was born. It is a stamp of origin, a reminder
                  that this platform belongs to the region it serves.
                </p>
              </GlassCard>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <p className="mt-12 text-center text-gray-500 text-sm max-w-lg mx-auto">
              Together, &#x0C95;&#x0CC6;A26 is not just a name. It is local identity meeting
              modern ambition — built right where it matters.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Team */}
      <section className="relative py-20 sm:py-28 bg-[#FAFAF7]">
        <div className="absolute inset-0 pattern-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="w-14 h-14 rounded-2xl bg-[#9B1B1B]/10 text-[#9B1B1B] flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A18] tracking-tight">
                Small team, big mission
              </h2>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                We are a lean team building from Gadag. No massive office, no VC
                playbook — just a group of people who believe that technology
                should work for small towns, not just metros.
              </p>
              <p className="mt-6 text-gray-500 leading-relaxed max-w-2xl mx-auto">
                Every line of code, every feature, every delivery route is shaped
                by real conversations with shopkeepers, restaurant owners, delivery
                partners, and everyday users in our community.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#9B1B1B] text-white font-semibold rounded-2xl hover:bg-[#7A1515] transition-all hover:shadow-lg hover:shadow-[#9B1B1B]/20"
                >
                  <Rocket className="w-4 h-4" />
                  Join the Team
                </Link>
                <a
                  href="https://ka26.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 text-[#1A1A18] font-semibold rounded-2xl hover:bg-white transition-all border border-[#E5E2DA]"
                >
                  See What We Built
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
