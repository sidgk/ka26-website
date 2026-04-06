import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, Target, Eye, MapPin, Lightbulb, Users,
  Globe, Sparkles, Heart, Rocket
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn why ಕೆA-26 exists — building digital infrastructure for local communities in North Karnataka. Our story, vision, and the meaning behind the name.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero — Why we exist */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-red-50 via-transparent to-transparent rounded-full -translate-y-1/2 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 border border-red-100 rounded-full text-xs font-semibold text-red-700 mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Why we exist
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
              Building digital{' '}
              <span className="bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
                infrastructure
              </span>{' '}
              for local communities
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Not another app. A foundation — so that local businesses, services,
              and people can thrive without leaving the places they call home.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                The story behind ಕೆA-26
              </h2>
            </div>

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
              <p className="text-gray-900 font-medium">
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
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Where we are headed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-700 to-red-800 text-white p-8 sm:p-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
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

            {/* Mission */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-950 text-white p-8 sm:p-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
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
          </div>
        </div>
      </section>

      {/* Why North Karnataka */}
      <section className="py-20 sm:py-28 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-900/40 text-red-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
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

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Local Stores', desc: 'Going digital for the first time' },
                  { label: 'Delivery Jobs', desc: 'Flexible work, fair pay' },
                  { label: 'Health Access', desc: 'Records on your phone' },
                  { label: 'Community', desc: 'Connected, not isolated' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-gray-900 rounded-2xl p-5 border border-gray-800"
                  >
                    <h4 className="font-bold text-sm text-white mb-1">{item.label}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Identity Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              What{' '}
              <span className="text-red-700">&#x0C95;&#x0CC6;</span>A26 means
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Every part of the name carries a piece of who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Ka */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-black">&#x0C95;&#x0CC6;</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                &#x0C95;&#x0CC6; — Our Roots
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                The Kannada letter &ldquo;&#x0C95;&#x0CC6;&rdquo; (Ka) is where it starts.
                It represents the language, the culture, and the identity
                of Karnataka — the foundation everything is built on.
              </p>
            </div>

            {/* A */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-black">A</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                A — Forward Motion
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                The Latin &ldquo;A&rdquo; stands for accessibility, modernity, and
                progress. Local roots meeting global technology — making
                advanced tools available to every community.
              </p>
            </div>

            {/* 26 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-black">26</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                26 — Our Region
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                ಕೆA-26 is the RTO code for Gadag district — where this
                project was born. It is a stamp of origin, a reminder
                that this platform belongs to the region it serves.
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-gray-400 text-sm max-w-lg mx-auto">
            Together, &#x0C95;&#x0CC6;A26 is not just a name. It is local identity meeting
            modern ambition — built right where it matters.
          </p>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center mx-auto mb-6">
              <Users className="w-7 h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
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

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-700 text-white font-semibold rounded-2xl hover:bg-red-800 transition-all hover:shadow-lg hover:shadow-red-700/20"
              >
                <Rocket className="w-4 h-4" />
                Join the Team
              </Link>
              <a
                href="https://ka26.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl hover:bg-gray-50 transition-all border border-gray-200"
              >
                See What We Built
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
