import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Smartphone,
  Settings,
  ShieldCheck,
  PlayCircle,
  AlertTriangle,
  Stethoscope,
  ArrowLeft,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import GlassCard from "@/components/GlassCard";

/**
 * Doctor app download page — separate from the main consumer /download page.
 * The consumer page (ka-26.com/download) ships the KA26 app for end users.
 * This page (ka-26.com/download/doctor) ships the KA26 Doctor app for doctors.
 *
 * Why separate?
 * - Doctors and consumers download different APKs (different package names,
 *   different feature sets, different brand colors)
 * - Keeps the consumer download flow clean — no decision fork on the main page
 * - Easy to share a direct doctor-only URL when onboarding a doctor
 */

export const metadata: Metadata = {
  title: "Download KA26 Doctor App | For Healthcare Providers",
  description:
    "Download the KA26 Doctor mobile app — manage prescriptions, patients, and broadcasts from your phone. Android first, iOS coming soon.",
  openGraph: {
    title: "Download KA26 Doctor App",
    description:
      "KA26 Doctor on Android — prescriptions, patient lists, push alerts, all on your phone.",
    url: "https://ka-26.com/download/doctor",
  },
};

const APK_URL = "/downloads/ka26-doctor-latest.apk";
const APK_SIZE_MB = 100;
const APK_VERSION = "v0.3.1";

const STEPS = [
  {
    icon: Download,
    title: "1. Tap Download",
    body: `The APK file (~${APK_SIZE_MB} MB) will start downloading to your phone.`,
  },
  {
    icon: AlertTriangle,
    title: "2. Allow the download",
    body: 'Chrome may warn that this file isn\'t from the Play Store. Tap "Download anyway".',
  },
  {
    icon: Settings,
    title: "3. Enable install from this source",
    body: 'Open the downloaded file. Android will ask for permission — tap Settings, toggle on "Allow from this source", then go back.',
  },
  {
    icon: PlayCircle,
    title: "4. Install & sign in",
    body: "Tap Install. Once it opens, sign in with the same email + password you use on the KA26 doctor web app.",
  },
];

export default function DoctorDownloadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50/50">
      <div className="max-w-3xl mx-auto px-5 py-10 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 text-sm font-medium mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back home
        </Link>

        <FadeIn>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center shadow-md shadow-emerald-200">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
                KA26 Doctor
              </h1>
              <p className="text-sm text-emerald-700">For doctors and healthcare providers</p>
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            Download the KA26 Doctor mobile app to manage prescriptions, patients, and broadcasts
            from your phone. Sign in with the same account you use on the doctor web app at{" "}
            <a href="https://ka26.shop/doctor" className="text-emerald-700 underline">
              ka26.shop/doctor
            </a>
            .
          </p>
        </FadeIn>

        <FadeIn>
          <GlassCard className="mt-8 p-6 md:p-8 border-emerald-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-emerald-700 font-semibold mb-1">
                  Latest version
                </p>
                <p className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-emerald-600" /> Android · {APK_VERSION}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  ~{APK_SIZE_MB} MB · iOS via TestFlight coming soon
                </p>
              </div>
              <a
                href={APK_URL}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold px-6 py-3 rounded-xl shadow-lg shadow-emerald-200 transition-colors"
              >
                <Download className="h-4 w-4" /> Download APK
              </a>
            </div>
          </GlassCard>
        </FadeIn>

        <FadeIn>
          <h2 className="text-lg font-bold text-gray-900 mt-12 mb-4">
            How to install (one-time setup)
          </h2>
          <div className="grid gap-3">
            {STEPS.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl border border-emerald-100 p-4 flex gap-3"
              >
                <div className="shrink-0 w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <s.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{s.title}</p>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
            <p className="text-sm text-emerald-900 font-semibold mb-2 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Is this safe?
            </p>
            <p className="text-xs text-emerald-800 leading-relaxed">
              Yes. The APK is signed by KA26 and ships from our website. We're publishing to the
              Play Store in parallel — for now, sideloading is the fastest way to test the doctor
              experience.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-6 text-xs text-gray-500 text-center">
            Issues? Email{" "}
            <a href="mailto:support@ka-26.com" className="text-emerald-700 underline">
              support@ka-26.com
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
