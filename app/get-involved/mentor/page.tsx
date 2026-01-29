'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@/lib/supabase';
import {
  FormContainer,
  FormSection,
  FormInput,
  FormTextarea,
  FormCheckboxGroup,
  FormConsent,
  FormSubmitButton,
  FormSuccess,
  FormError,
} from '@/components/forms/FormElements';

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

  const expertiseOptions = [
    { name: 'expertise_business_development', label: 'Business Development' },
    { name: 'expertise_finance', label: 'Finance' },
    { name: 'expertise_technology', label: 'Technology' },
    { name: 'expertise_marketing', label: 'Marketing' },
    { name: 'expertise_operations', label: 'Operations' },
    { name: 'expertise_legal', label: 'Legal' },
    { name: 'expertise_sustainability', label: 'Sustainability' },
    { name: 'expertise_other', label: 'Other' },
  ];

  const mentoringOptions = [
    { name: 'mentoring_one_on_one', label: 'One-on-one' },
    { name: 'mentoring_group_sessions', label: 'Group Sessions' },
    { name: 'mentoring_virtual', label: 'Virtual' },
    { name: 'mentoring_in_person', label: 'In-person' },
  ];

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
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-navy)]/90 to-[var(--primary-navy)]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Mentor With Us</h1>
            <div className="w-16 h-1 bg-[var(--primary-orange)] mt-2 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-600 flex items-center gap-2">
            <Link href="/" className="hover:text-[var(--primary-orange)] transition-colors">Home</Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/get-involved" className="hover:text-[var(--primary-orange)] transition-colors">Get Involved</Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[var(--primary-navy)] font-medium">Mentor</span>
          </nav>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-[var(--background-cream)]">
        <div className="max-w-3xl mx-auto">
          {/* Info Banner */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 mb-8 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Share Your Expertise</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Guide the next generation of entrepreneurs. Your experience can help
                  transform lives and build sustainable businesses in rural India.
                </p>
              </div>
            </div>
          </div>

          <FormContainer
            title="Mentor Application"
            subtitle="Join our network of experienced mentors"
            icon={
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
          >
            {submitStatus === 'success' && (
              <FormSuccess message="Thank you for your interest in mentoring with JECP! We will review your application and contact you soon." />
            )}

            {submitStatus === 'error' && (
              <FormError message={errorMessage || 'Something went wrong. Please try again.'} />
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <FormSection title="Personal Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    label="Full Name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    }
                  />
                  <FormInput
                    label="Organization / Affiliation"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Company or institution"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    }
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                  />
                  <FormInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    }
                  />
                </div>
              </FormSection>

              <FormSection title="Areas of Expertise">
                <FormCheckboxGroup
                  label="Select your areas of expertise"
                  options={expertiseOptions}
                  values={formData as unknown as Record<string, boolean>}
                  onChange={handleChange}
                />
                {formData.expertise_other && (
                  <FormInput
                    label="Please Specify Other Expertise"
                    name="expertise_other_text"
                    value={formData.expertise_other_text}
                    onChange={handleChange}
                    placeholder="Describe your expertise"
                  />
                )}
              </FormSection>

              <FormSection title="Mentoring Preferences">
                <FormCheckboxGroup
                  label="Preferred mode of mentoring"
                  options={mentoringOptions}
                  values={formData as unknown as Record<string, boolean>}
                  onChange={handleChange}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    label="Availability (Days)"
                    name="availability_days"
                    value={formData.availability_days}
                    onChange={handleChange}
                    placeholder="e.g., Weekdays, Mon-Wed"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    }
                  />
                  <FormInput
                    label="Availability (Times)"
                    name="availability_times"
                    value={formData.availability_times}
                    onChange={handleChange}
                    placeholder="e.g., Morning, 6-8 PM"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    }
                  />
                </div>
              </FormSection>

              <FormSection title="About You">
                <FormTextarea
                  label="Brief Introduction"
                  name="brief_introduction"
                  value={formData.brief_introduction}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about yourself and your professional background..."
                />
                <FormTextarea
                  label="Why You Want to Mentor with JECP"
                  name="why_mentor"
                  value={formData.why_mentor}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Share your motivation for wanting to mentor rural entrepreneurs..."
                />
              </FormSection>

              <FormConsent
                name="consent_given"
                checked={formData.consent_given}
                onChange={handleChange}
              >
                I consent to JECP contacting me for mentorship opportunities and related initiatives.
                <span className="text-[var(--primary-orange)]"> *</span>
              </FormConsent>

              <FormSubmitButton
                isSubmitting={isSubmitting}
                label="Submit Application"
                loadingLabel="Submitting..."
              />
            </form>
          </FormContainer>
        </div>
      </section>
    </main>
  );
}
