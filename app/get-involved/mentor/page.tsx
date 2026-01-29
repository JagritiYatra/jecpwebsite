'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@/lib/supabase';

export default function MentorPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    organization: '',
    email: '',
    phone: '',
    expertise_business_development: false,
    expertise_finance: false,
    expertise_technology: false,
    expertise_marketing: false,
    expertise_operations: false,
    expertise_legal: false,
    expertise_sustainability: false,
    expertise_other: false,
    expertise_other_text: '',
    mentoring_one_on_one: false,
    mentoring_group_sessions: false,
    mentoring_virtual: false,
    mentoring_in_person: false,
    availability_days: '',
    availability_times: '',
    brief_introduction: '',
    why_mentor: '',
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
        .from('jecp_mentor_applications')
        .insert([formData]);

      if (error) throw error;

      // Send confirmation email
      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'mentor',
          name: formData.full_name,
          email: formData.email,
        }),
      });

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        organization: '',
        email: '',
        phone: '',
        expertise_business_development: false,
        expertise_finance: false,
        expertise_technology: false,
        expertise_marketing: false,
        expertise_operations: false,
        expertise_legal: false,
        expertise_sustainability: false,
        expertise_other: false,
        expertise_other_text: '',
        mentoring_one_on_one: false,
        mentoring_group_sessions: false,
        mentoring_virtual: false,
        mentoring_in_person: false,
        availability_days: '',
        availability_times: '',
        brief_introduction: '',
        why_mentor: '',
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
          alt="Mentor With Us Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Mentor With Us</h1>
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
            <span className="text-[var(--primary-navy)]">Mentor</span>
          </nav>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-12 md:py-16 px-4 bg-[var(--background-cream)]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] mb-2">
                Mentor Application
              </h2>
              <p className="text-gray-600">
                Share your expertise and guide the next generation of entrepreneurs
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                Thank you for your interest in mentoring with JECP! We will review your application and contact you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {errorMessage || 'Something went wrong. Please try again.'}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    Organization / Affiliation
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Areas of Expertise */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Areas of Expertise
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { name: 'expertise_business_development', label: 'Business Development' },
                    { name: 'expertise_finance', label: 'Finance' },
                    { name: 'expertise_technology', label: 'Technology' },
                    { name: 'expertise_marketing', label: 'Marketing' },
                    { name: 'expertise_operations', label: 'Operations' },
                    { name: 'expertise_legal', label: 'Legal' },
                    { name: 'expertise_sustainability', label: 'Sustainability' },
                    { name: 'expertise_other', label: 'Other' },
                  ].map((item) => (
                    <label key={item.name} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name={item.name}
                        checked={formData[item.name as keyof typeof formData] as boolean}
                        onChange={handleChange}
                        className="w-4 h-4 text-[var(--primary-orange)] border-gray-300 rounded focus:ring-[var(--primary-orange)]"
                      />
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </label>
                  ))}
                </div>
                {formData.expertise_other && (
                  <input
                    type="text"
                    name="expertise_other_text"
                    value={formData.expertise_other_text}
                    onChange={handleChange}
                    placeholder="Please specify"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                )}
              </div>

              {/* Preferred Mode of Mentoring */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Mode of Mentoring
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { name: 'mentoring_one_on_one', label: 'One-on-one' },
                    { name: 'mentoring_group_sessions', label: 'Group Sessions' },
                    { name: 'mentoring_virtual', label: 'Virtual' },
                    { name: 'mentoring_in_person', label: 'In-person' },
                  ].map((item) => (
                    <label key={item.name} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name={item.name}
                        checked={formData[item.name as keyof typeof formData] as boolean}
                        onChange={handleChange}
                        className="w-4 h-4 text-[var(--primary-orange)] border-gray-300 rounded focus:ring-[var(--primary-orange)]"
                      />
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Availability (Days)
                  </label>
                  <input
                    type="text"
                    name="availability_days"
                    value={formData.availability_days}
                    onChange={handleChange}
                    placeholder="e.g., Weekdays, Weekends, Mon-Wed"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Availability (Times)
                  </label>
                  <input
                    type="text"
                    name="availability_times"
                    value={formData.availability_times}
                    onChange={handleChange}
                    placeholder="e.g., Morning, Afternoon, 6-8 PM"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Brief Introduction */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brief Introduction
                </label>
                <textarea
                  name="brief_introduction"
                  value={formData.brief_introduction}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  placeholder="Tell us about yourself and your professional background..."
                />
              </div>

              {/* Why Mentor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Why You Want to Mentor with JECP
                </label>
                <textarea
                  name="why_mentor"
                  value={formData.why_mentor}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  placeholder="Share your motivation for wanting to mentor rural entrepreneurs..."
                />
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
                    I consent to JECP contacting me for mentorship opportunities and related initiatives. <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-[var(--primary-orange)] text-white font-semibold rounded-lg hover:bg-[var(--primary-orange-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
