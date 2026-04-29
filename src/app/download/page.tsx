import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Smartphone,
  Settings,
  ShieldCheck,
  PlayCircle,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Download KA26 App | Get the Android App",
  description:
    "Download the KA26 Android app to shop local, post requests, watch reels, and discover Gadag's best stores — all in one place.",
  openGraph: {
    title: "Download KA26 App",
    description:
      "Get KA26 on Android — shop, requests, reels, all in one app.",
    url: "https://ka-26.com/download",
  },
};

const APK_URL = "/downloads/ka26-latest.apk";
const APK_SIZE_MB = 89;
const APK_VERSION = "v23";

const STEPS = [
  {
    icon: Download,
    title: "1. Tap Download",
    body: "Tap the big blue Download button below. The APK file (~84 MB) will start downloading to your phone.",
  },
  {
    icon: AlertTriangle,
    title: "2. Allow the download",
    body: "Chrome will ask if you trust this file because it isn't from the Play Store yet (we're submitting in parallel). Tap \"Download anyway\".",
  },
  {
    icon: Settings,
    title: "3. Enable install from this source",
    body: "Open the downloaded file. Android will ask for permission — tap Settings, toggle on \"Allow from this source\", then go back.",
  },
  {
    icon: PlayCircle,
    title: "4. Install & open",
    body: "Tap Install. In ~10 seconds the KA26 app icon will appear on your home screen. Open it and sign up with your phone.",
  },
];

const FAQ = [
  {
    q: "Why is my browser warning me about this file?",
    a: "Android Chrome warns about all APKs not downloaded from the Play Store — even from trusted sources. Our app is fully safe (we built it ourselves), and our Play Store submission is in review. Once Play Store approves us, we'll redirect this page to the official Play Store install.",
  },
  {
    q: "Will I lose my data when the Play Store version comes out?",
    a: "No. Your account is tied to your phone number, not the app. When Play Store goes live, install it from there, sign in with the same number, and everything (orders, addresses, reels) is right where you left it.",
  },
  {
    q: "Is there an iOS app?",
    a: "Coming soon. iOS users can use the website at ka26.shop — every feature works in mobile Safari, including push notifications (iOS 16.4+).",
  },
  {
    q: "How big is the app?",
    a: `Around ${APK_SIZE_MB} MB to download. After install it takes about 150 MB of phone storage — similar to most shopping apps.`,
  },
  {
    q: "Which Android versions are supported?",
    a: "Android 7 (Nougat) and above. Tested on Samsung, Xiaomi, Realme, OnePlus, Vivo, and Oppo devices.",
  },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-16 pt-20 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              <Smartphone className="h-3.5 w-3.5" /> Android · {APK_VERSION}
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Get KA26 on your phone
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Shop local, watch reels, post community requests — Gadag&apos;s
              everyday super-app, in your pocket.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={APK_URL}
                download="ka26-latest.apk"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:shadow-xl"
              >
                <Download className="h-5 w-5" />
                Download APK ({APK_SIZE_MB} MB)
              </a>
              <span className="text-sm text-gray-500">
                Free · Android 7+ · No account required to install
              </span>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Play Store submission is in review. Once approved, this page
              will redirect there automatically.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Install Steps */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-gray-900">
              How to install (4 quick steps)
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
              Because we&apos;re sideloading (not from Play Store yet), Android
              will ask for one extra permission. Total time: under 60 seconds.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {STEPS.map((step, i) => (
              <FadeIn key={i} delay={i * 80}>
                <GlassCard className="h-full p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {step.body}
                  </p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <GlassCard className="p-6 sm:p-8">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:gap-8 sm:text-left">
                <ShieldCheck className="h-12 w-12 shrink-0 text-emerald-600" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Built by us. Safe to install.
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    KA26 is a registered Indian company. Our APK is signed
                    with our developer key and contains the same code that
                    runs on{" "}
                    <Link
                      href="https://ka26.shop"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      ka26.shop
                    </Link>
                    . The Chrome warning shows for every non-Play-Store APK
                    — it doesn&apos;t mean the file is unsafe.
                  </p>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Common questions
            </h2>
          </FadeIn>

          <div className="mt-10 space-y-4">
            {FAQ.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <details className="group rounded-2xl border border-gray-200 bg-white p-5 open:bg-blue-50/30 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-start justify-between gap-4">
                    <span className="text-base font-semibold text-gray-900">
                      {item.q}
                    </span>
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition group-open:rotate-45">
                      <ArrowRight className="h-4 w-4 -rotate-45 transition group-open:rotate-0" />
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {item.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-24 pt-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <GlassCard className="p-8 sm:p-12">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
              <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                Ready to give it a try?
              </h2>
              <p className="mt-3 text-gray-600">
                ~60 seconds to install. Free forever. No card required to
                sign up.
              </p>
              <a
                href={APK_URL}
                download="ka26-latest.apk"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:shadow-xl"
              >
                <Download className="h-5 w-5" />
                Download APK ({APK_SIZE_MB} MB)
              </a>
              <p className="mt-4 text-xs text-gray-500">
                By downloading, you agree to our{" "}
                <Link
                  href="/terms"
                  className="text-blue-600 hover:underline"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </GlassCard>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
