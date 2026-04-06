'use client';

import { useState, useEffect } from 'react';
import {
  Heart, TrendingUp, Clock, MapPin, Briefcase, X,
  Send, CheckCircle2, AlertCircle, Loader2, ChevronDown, ChevronUp,
  DollarSign
} from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://ka26.shop';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary?: string;
  description?: string;
  requirements?: string[];
}

const WHY_JOIN = [
  {
    icon: Heart,
    title: 'Impact',
    description: 'Your work directly improves lives in your community. Every feature you build, every delivery you make, helps a local business grow.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: "We're at the ground floor. Grow with the platform. Early team members shape the culture, the product, and the future.",
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Clock,
    title: 'Flexibility',
    description: 'Remote-friendly, flexible hours, work from your hometown. We care about outcomes, not where you sit.',
    color: 'bg-blue-50 text-blue-600',
  },
];

const DEPT_COLORS: Record<string, string> = {
  Operations: 'bg-blue-100 text-blue-700',
  Technology: 'bg-purple-100 text-purple-700',
  Marketing: 'bg-green-100 text-green-700',
  Delivery: 'bg-amber-100 text-amber-700',
  Design: 'bg-pink-100 text-pink-700',
  Sales: 'bg-cyan-100 text-cyan-700',
};

function getDeptColor(dept: string) {
  return DEPT_COLORS[dept] || 'bg-gray-100 text-gray-700';
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  // Application modal
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  const [applyForm, setApplyForm] = useState({ name: '', email: '', phone: '', coverLetter: '' });
  const [applySubmitting, setApplySubmitting] = useState(false);
  const [applyResult, setApplyResult] = useState<{ ok: boolean; message: string } | null>(null);

  // General application
  const [generalForm, setGeneralForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [generalSubmitting, setGeneralSubmitting] = useState(false);
  const [generalResult, setGeneralResult] = useState<{ ok: boolean; message: string } | null>(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch(`${API_URL}/api/website/jobs`);
        if (!res.ok) throw new Error('Failed');
        const data = await res.json();
        setJobs(data.jobs || []);
      } catch {
        setFetchError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  async function handleApply(e: React.FormEvent) {
    e.preventDefault();
    if (!applyJob) return;
    setApplySubmitting(true);
    setApplyResult(null);

    try {
      const res = await fetch(`${API_URL}/api/website/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: applyForm.name,
          email: applyForm.email,
          phone: applyForm.phone,
          coverLetter: applyForm.coverLetter || undefined,
          jobId: applyJob.id,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setApplyResult({ ok: true, message: 'Application submitted! We will review and get back to you.' });
      setApplyForm({ name: '', email: '', phone: '', coverLetter: '' });
    } catch {
      setApplyResult({
        ok: false,
        message: 'Could not submit your application. Please try again or email us at support@ka-26.com',
      });
    } finally {
      setApplySubmitting(false);
    }
  }

  async function handleGeneral(e: React.FormEvent) {
    e.preventDefault();
    setGeneralSubmitting(true);
    setGeneralResult(null);

    try {
      const res = await fetch(`${API_URL}/api/website/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: generalForm.name,
          email: generalForm.email,
          phone: generalForm.phone,
          message: generalForm.message,
          type: 'general',
          subject: 'General Career Interest',
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setGeneralResult({ ok: true, message: 'Thank you! We will reach out when something opens up.' });
      setGeneralForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setGeneralResult({
        ok: false,
        message: 'Something went wrong. You can also reach us at support@ka-26.com',
      });
    } finally {
      setGeneralSubmitting(false);
    }
  }

  function closeModal() {
    setApplyJob(null);
    setApplyForm({ name: '', email: '', phone: '', coverLetter: '' });
    setApplyResult(null);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Build the future with us
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Join a mission to empower local communities. Not just a job &mdash; a chance to shape how your region grows.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="max-w-5xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {WHY_JOIN.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-xl ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900">Open Positions</h2>
        <p className="mt-2 text-gray-500 text-sm">Find a role that fits you</p>

        <div className="mt-8 space-y-4">
          {loading && (
            <>
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 animate-pulse">
                  <div className="h-5 w-48 bg-gray-200 rounded" />
                  <div className="mt-3 flex gap-2">
                    <div className="h-5 w-20 bg-gray-100 rounded-full" />
                    <div className="h-5 w-24 bg-gray-100 rounded-full" />
                    <div className="h-5 w-16 bg-gray-100 rounded-full" />
                  </div>
                </div>
              ))}
            </>
          )}

          {!loading && (fetchError || jobs.length === 0) && (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <Briefcase className="w-10 h-10 text-gray-300 mx-auto" />
              <p className="mt-4 text-gray-600 font-medium">No open positions right now</p>
              <p className="mt-2 text-sm text-gray-400 max-w-md mx-auto">
                But we&apos;re always looking for passionate people. Send your details below and we&apos;ll reach out when something opens up.
              </p>
            </div>
          )}

          {!loading && !fetchError && jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getDeptColor(job.department)}`}>
                        {job.department}
                      </span>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 text-gray-600">
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      {job.salary && (
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                          <DollarSign className="w-3 h-3" />
                          {job.salary}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                      className="text-sm text-gray-500 hover:text-gray-700 inline-flex items-center gap-1"
                    >
                      {expandedJob === job.id ? 'Less' : 'Details'}
                      {expandedJob === job.id ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => { setApplyJob(job); setApplyResult(null); }}
                      className="bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-red-800 transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>

                {expandedJob === job.id && (
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    {job.description && (
                      <p className="text-sm text-gray-600 leading-relaxed">{job.description}</p>
                    )}
                    {job.requirements && job.requirements.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700">Requirements:</p>
                        <ul className="mt-2 space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-red-600 mt-1">&#8226;</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General Application */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Don&apos;t see the right role?</h2>
          <p className="mt-2 text-gray-500 text-center text-sm">
            Send us your details and tell us what you&apos;re interested in. We&apos;ll reach out when something fits.
          </p>

          <form onSubmit={handleGeneral} className="mt-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="gen-name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  id="gen-name"
                  type="text"
                  required
                  value={generalForm.name}
                  onChange={(e) => setGeneralForm((p) => ({ ...p, name: e.target.value }))}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="gen-email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  id="gen-email"
                  type="email"
                  required
                  value={generalForm.email}
                  onChange={(e) => setGeneralForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="gen-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <input
                id="gen-phone"
                type="tel"
                required
                value={generalForm.phone}
                onChange={(e) => setGeneralForm((p) => ({ ...p, phone: e.target.value }))}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="+91 ..."
              />
            </div>

            <div>
              <label htmlFor="gen-message" className="block text-sm font-medium text-gray-700 mb-1">What are you interested in? *</label>
              <textarea
                id="gen-message"
                required
                rows={4}
                value={generalForm.message}
                onChange={(e) => setGeneralForm((p) => ({ ...p, message: e.target.value }))}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                placeholder="Tell us about yourself and what kind of role you're looking for..."
              />
            </div>

            {generalResult && (
              <div className={`flex items-start gap-3 rounded-xl p-4 text-sm ${generalResult.ok ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {generalResult.ok ? <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" /> : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />}
                <span>{generalResult.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={generalSubmitting}
              className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-red-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {generalSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Interest
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Application Modal */}
      {applyJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-gray-900">Apply for this role</h3>
                <p className="text-sm text-gray-500 mt-0.5">{applyJob.title} &mdash; {applyJob.department}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleApply} className="p-6 space-y-5">
              <div>
                <label htmlFor="apply-name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  id="apply-name"
                  type="text"
                  required
                  value={applyForm.name}
                  onChange={(e) => setApplyForm((p) => ({ ...p, name: e.target.value }))}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="apply-email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  id="apply-email"
                  type="email"
                  required
                  value={applyForm.email}
                  onChange={(e) => setApplyForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="apply-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input
                  id="apply-phone"
                  type="tel"
                  required
                  value={applyForm.phone}
                  onChange={(e) => setApplyForm((p) => ({ ...p, phone: e.target.value }))}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="+91 ..."
                />
              </div>

              <div>
                <label htmlFor="apply-cover" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                <textarea
                  id="apply-cover"
                  rows={4}
                  value={applyForm.coverLetter}
                  onChange={(e) => setApplyForm((p) => ({ ...p, coverLetter: e.target.value }))}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  placeholder="Tell us why you're interested in this role..."
                />
              </div>

              {applyResult && (
                <div className={`flex items-start gap-3 rounded-xl p-4 text-sm ${applyResult.ok ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {applyResult.ok ? <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" /> : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />}
                  <span>{applyResult.message}</span>
                </div>
              )}

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={applySubmitting}
                  className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-red-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {applySubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Application
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-sm text-gray-500 hover:text-gray-700 px-4 py-2.5"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
