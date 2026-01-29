'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@/lib/supabase';

export default function NewsletterPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    profession_interest: '',
    city_state: '',
    content_programs_events: false,
    content_success_stories: false,
    content_resources_tools: false,
    content_internship_opportunities: false,
    content_workshops_trainings: false,
    frequency: 'monthly',
    consent_given: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('jecp_newsletter_subscribers')
        .insert([formData]);

      if (error) {
        if (error.code === '23505') {
          throw new Error('This email is already subscribed to our newsletter.');
        }
        throw error;
      }

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        email: '',
        profession_interest: '',
        city_state: '',
        content_programs_events: false,
        content_success_stories: false,
        content_resources_tools: false,
        content_internship_opportunities: false,
        content_workshops_trainings: false,
        frequency: 'monthly',
        consent_given: false,
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Newsletter Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Subscribe to Newsletter</h1>
            <div className="w-16 h-1 bg-[var(--primary-orange)] mt-2 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[var(--primary-orange)]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/get-involved" className="hover:text-[var(--primary-orange)]">Get Involved</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--primary-navy)]">Newsletter</span>
          </nav>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-12 md:py-16 px-4 bg-[var(--background-cream)]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] mb-2">
                Stay Connected
              </h2>
              <p className="text-gray-600">
                Subscribe to receive updates on our programs, success stories, and opportunities
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                Thank you for subscribing! You will now receive updates from JECP.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {errorMessage || 'Something went wrong. Please try again.'}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Profession / Area of Interest
                  </label>
                  <input
                    type="text"
                    name="profession_interest"
                    value={formData.profession_interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    name="city_state"
                    value={formData.city_state}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Preferred Content Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Content Type
                </label>
                <div className="space-y-2">
                  {[
                    { name: 'content_programs_events', label: 'Programs & Events' },
                    { name: 'content_success_stories', label: 'Success Stories' },
                    { name: 'content_resources_tools', label: 'Resources & Tools' },
                    { name: 'content_internship_opportunities', label: 'Internship Opportunities' },
                    { name: 'content_workshops_trainings', label: 'Workshops & Trainings' },
                  ].map((item) => (
                    <label key={item.name} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name={item.name}
                        checked={formData[item.name as keyof typeof formData] as boolean}
                        onChange={handleChange}
                        className="w-4 h-4 text-[var(--primary-orange)] border-gray-300 rounded focus:ring-[var(--primary-orange)]"
                      />
                      <span className="text-gray-700">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Frequency of Updates
                </label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { value: 'monthly', label: 'Monthly' },
                    { value: 'quarterly', label: 'Quarterly' },
                    { value: 'special-announcements', label: 'Special Announcements Only' },
                  ].map((item) => (
                    <label key={item.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="frequency"
                        value={item.value}
                        checked={formData.frequency === item.value}
                        onChange={handleChange}
                        className="w-4 h-4 text-[var(--primary-orange)] border-gray-300 focus:ring-[var(--primary-orange)]"
                      />
                      <span className="text-gray-700">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent_given"
                    checked={formData.consent_given}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 mt-1 text-[var(--primary-orange)] border-gray-300 rounded focus:ring-[var(--primary-orange)]"
                  />
                  <span className="text-sm text-gray-700">
                    I consent to receiving newsletter updates from JECP. I understand I can unsubscribe at any time. <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-[var(--primary-orange)] text-white font-semibold rounded-lg hover:bg-[var(--primary-orange-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
