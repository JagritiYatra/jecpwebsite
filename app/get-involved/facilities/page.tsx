'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@/lib/supabase';

export default function FacilitiesPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    organization_name: '',
    email: '',
    phone: '',
    facility_type: '',
    facility_type_other: '',
    intended_dates: '',
    number_of_participants: '',
    purpose_objectives: '',
    heard_about: '',
    heard_about_other: '',
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
        .from('jecp_facility_inquiries')
        .insert([{
          ...formData,
          number_of_participants: parseInt(formData.number_of_participants) || 0,
        }]);

      if (error) throw error;

      // Send confirmation email
      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'facilities',
          name: formData.full_name,
          email: formData.email,
        }),
      });

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        organization_name: '',
        email: '',
        phone: '',
        facility_type: '',
        facility_type_other: '',
        intended_dates: '',
        number_of_participants: '',
        purpose_objectives: '',
        heard_about: '',
        heard_about_other: '',
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
          alt="Use Our Facilities Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Use Our Facilities</h1>
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
            <span className="text-[var(--primary-navy)]">Facilities</span>
          </nav>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-12 md:py-16 px-4 bg-[var(--background-cream)]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] mb-2">
                Facility Inquiry
              </h2>
              <p className="text-gray-600">
                Book our world-class facilities for your programs and events
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                Thank you for your inquiry! Our team will review your request and get back to you shortly.
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
                    Organization / Institution (if applicable)
                  </label>
                  <input
                    type="text"
                    name="organization_name"
                    value={formData.organization_name}
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
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Type of Facility Use */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Facility Use <span className="text-red-500">*</span>
                </label>
                <select
                  name="facility_type"
                  value={formData.facility_type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="rural-immersion">Rural Immersion Program</option>
                  <option value="corporate-retreat">Corporate Retreat</option>
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="other">Other</option>
                </select>
                {formData.facility_type === 'other' && (
                  <input
                    type="text"
                    name="facility_type_other"
                    value={formData.facility_type_other}
                    onChange={handleChange}
                    placeholder="Please specify"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                )}
              </div>

              {/* Dates and Participants */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Intended Dates / Duration <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="intended_dates"
                    value={formData.intended_dates}
                    onChange={handleChange}
                    required
                    placeholder="e.g., March 15-17, 2025"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Participants <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="number_of_participants"
                    value={formData.number_of_participants}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Purpose */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Purpose / Objectives <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="purpose_objectives"
                  value={formData.purpose_objectives}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  placeholder="Describe the purpose and objectives of your program/event..."
                />
              </div>

              {/* How did you hear about us */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How Did You Hear About JECP?
                </label>
                <select
                  name="heard_about"
                  value={formData.heard_about}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="social-media">Social Media</option>
                  <option value="website">Website</option>
                  <option value="referral">Referral</option>
                  <option value="event">Event</option>
                  <option value="news">News/Media</option>
                  <option value="other">Other</option>
                </select>
                {formData.heard_about === 'other' && (
                  <input
                    type="text"
                    name="heard_about_other"
                    value={formData.heard_about_other}
                    onChange={handleChange}
                    placeholder="Please specify"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                )}
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
                    I consent to JECP contacting me regarding my inquiry and providing relevant support and information. <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-[var(--primary-orange)] text-white font-semibold rounded-lg hover:bg-[var(--primary-orange-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
