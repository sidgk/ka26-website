'use client';

import { useState } from 'react';
import {
  MessageCircle, Mail, MapPin, Send, ChevronDown, ChevronUp,
  CheckCircle2, AlertCircle, Phone, Loader2
} from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://ka26.shop';

const CONTACT_METHODS = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+91 81973 63421',
    href: 'https://wa.me/918197363421',
    color: 'bg-green-50 text-green-600',
    description: 'Chat with us directly',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'support@ka-26.com',
    href: 'mailto:support@ka-26.com',
    color: 'bg-blue-50 text-blue-600',
    description: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'Gadag-Betageri, Karnataka 582101',
    href: 'https://maps.google.com/?q=Gadag-Betageri,Karnataka,582101',
    color: 'bg-red-50 text-red-600',
    description: 'Our home base',
  },
];

const INQUIRY_TYPES = [
  'General Inquiry',
  'Support',
  'Partnership',
  'Feedback',
];

const FAQS = [
  {
    question: 'How do I create an account?',
    answer: 'Visit ka26.shop and sign up with your phone number. It only takes a minute.',
  },
  {
    question: 'How do I register my store?',
    answer: 'Go to ka26.shop/seller and register as a seller. You can list your products and start receiving orders.',
  },
  {
    question: 'How do I become a delivery partner?',
    answer: 'Visit ka26.shop/delivery_partner to join our delivery network. Flexible hours and fair pay.',
  },
  {
    question: 'Is the service available in my area?',
    answer: 'We currently serve Gadag and surrounding areas in North Karnataka. We are expanding soon to more towns and cities.',
  },
  {
    question: 'How do refunds work?',
    answer: 'Please see our Refund Policy page for full details on how refunds are processed.',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'General Inquiry',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);

    try {
      const res = await fetch(`${API_URL}/api/website/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Request failed');

      setResult({ ok: true, message: 'Thank you! We received your message and will get back to you soon.' });
      setForm({ name: '', email: '', phone: '', type: 'General Inquiry', subject: '', message: '' });
    } catch {
      setResult({
        ok: false,
        message: 'Something went wrong submitting your message. You can also reach us directly at support@ka-26.com',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            We&apos;re here to help. Whether you have a question, feedback, or want to partner with us &mdash; reach out.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="max-w-5xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CONTACT_METHODS.map((m) => (
            <a
              key={m.title}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className={`p-3 rounded-xl ${m.color}`}>
                <m.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{m.title}</p>
                <p className="text-sm text-gray-600">{m.value}</p>
                <p className="text-xs text-gray-400 mt-1">{m.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              Fill out the form and our team will get back to you within 24 hours. For urgent issues, reach out via WhatsApp for a faster response.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
              <Phone className="w-4 h-4 text-red-600" />
              <span>+91 81973 63421</span>
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
              <Mail className="w-4 h-4 text-red-600" />
              <span>support@ka-26.com</span>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="+91 ..."
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  id="type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
                >
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                placeholder="Tell us more..."
              />
            </div>

            {result && (
              <div className={`flex items-start gap-3 rounded-xl p-4 text-sm ${result.ok ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {result.ok ? <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" /> : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />}
                <span>{result.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-red-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-center mt-2 text-sm">Quick answers to common questions</p>

          <div className="mt-10 space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
