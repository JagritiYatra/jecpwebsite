'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@/lib/supabase';

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    organization_name: '',
    contact_person: '',
    email: '',
    phone: '',
    partnership_program_support_funding: false,
    partnership_knowledge_sharing: false,
    partnership_infrastructure_support: false,
    partnership_research_collaboration: false,
    partnership_other: false,
    partnership_other_text: '',
    collaboration_description: '',
    focus_udyami_support: false,
    focus_skill_training: false,
    focus_infrastructure: false,
    focus_coe_endorsement: false,
    focus_event_sponsorship: false,
    focus_other: false,
    focus_other_text: '',
    engagement_mode: '',
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
        .from('jecp_partner_applications')
        .insert([formData]);

      if (error) throw error;

      // Send confirmation email
      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'partner',
          name: formData.contact_person,
          email: formData.email,
        }),
      });

      setSubmitStatus('success');
      setFormData({
        organization_name: '',
        contact_person: '',
        email: '',
        phone: '',
        partnership_program_support_funding: false,
        partnership_knowledge_sharing: false,
        partnership_infrastructure_support: false,
        partnership_research_collaboration: false,
        partnership_other: false,
        partnership_other_text: '',
        collaboration_description: '',
        focus_udyami_support: false,
        focus_skill_training: false,
        focus_infrastructure: false,
        focus_coe_endorsement: false,
        focus_event_sponsorship: false,
        focus_other: false,
        focus_other_text: '',
        engagement_mode: '',
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
          alt="Partner With Us Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--primary-navy)]/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Partner With Us</h1>
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
            <span className="text-[var(--primary-navy)]">Partner</span>
          </nav>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-12 md:py-16 px-4 bg-[var(--background-cream)]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] mb-2">
                Partnership Application
              </h2>
              <p className="text-gray-600">
                Join us in empowering grassroots entrepreneurs across Middle India
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                Thank you for your interest in partnering with JECP! We will review your application and get back to you soon.
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
                    Individual / Organization / Institution <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="organization_name"
                    value={formData.organization_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contact_person"
                    value={formData.contact_person}
                    onChange={handleChange}
                    required
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

              {/* Type of Partnership */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Partnership Interested In
                </label>
                <div className="space-y-2">
                  {[
                    { name: 'partnership_program_support_funding', label: 'Program Support Funding' },
                    { name: 'partnership_knowledge_sharing', label: 'Knowledge Sharing' },
                    { name: 'partnership_infrastructure_support', label: 'Support for Infrastructure' },
                    { name: 'partnership_research_collaboration', label: 'Research Collaboration' },
                    { name: 'partnership_other', label: 'Other' },
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
                {formData.partnership_other && (
                  <input
                    type="text"
                    name="partnership_other_text"
                    value={formData.partnership_other_text}
                    onChange={handleChange}
                    placeholder="Please specify"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                )}
              </div>

              {/* Brief Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brief Description of Proposed Collaboration
                </label>
                <textarea
                  name="collaboration_description"
                  value={formData.collaboration_description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  placeholder="Describe how you would like to collaborate with JECP..."
                />
              </div>

              {/* Areas of Focus */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Areas of Focus
                </label>
                <div className="space-y-2">
                  {[
                    { name: 'focus_udyami_support', label: 'Udyami Support Program Funding' },
                    { name: 'focus_skill_training', label: 'Skill Training Support' },
                    { name: 'focus_infrastructure', label: 'Support for Infrastructure' },
                    { name: 'focus_coe_endorsement', label: 'CoE Endorsement' },
                    { name: 'focus_event_sponsorship', label: 'Event Sponsorship' },
                    { name: 'focus_other', label: 'Other' },
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
                {formData.focus_other && (
                  <input
                    type="text"
                    name="focus_other_text"
                    value={formData.focus_other_text}
                    onChange={handleChange}
                    placeholder="Please specify"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
                  />
                )}
              </div>

              {/* Preferred Mode of Engagement */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Mode of Engagement
                </label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { value: 'long-term', label: 'Long-term' },
                    { value: 'short-term', label: 'Short-term' },
                    { value: 'project-based', label: 'Project-based' },
                  ].map((item) => (
                    <label key={item.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="engagement_mode"
                        value={item.value}
                        checked={formData.engagement_mode === item.value}
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
                    I consent to sharing this information with JECP for partnership discussions. <span className="text-red-500">*</span>
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
