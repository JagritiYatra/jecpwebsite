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

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    location: '',
    interest_event_support: false,
    interest_workshop_facilitation: false,
    interest_community_outreach: false,
    interest_documentation: false,
    interest_media_support: false,
    interest_other: false,
    interest_other_text: '',
    availability: '',
    skills_experience: '',
    why_volunteer: '',
    consent_given: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        .from('jecp_volunteer_applications')
        .insert([formData]);

      if (error) throw error;

      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'volunteer',
          name: formData.full_name,
          email: formData.email,
        }),
      });

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        location: '',
        interest_event_support: false,
        interest_workshop_facilitation: false,
        interest_community_outreach: false,
        interest_documentation: false,
        interest_media_support: false,
        interest_other: false,
        interest_other_text: '',
        availability: '',
        skills_experience: '',
        why_volunteer: '',
        consent_given: false,
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const interestOptions = [
    { name: 'interest_event_support', label: 'Event Support' },
    { name: 'interest_workshop_facilitation', label: 'Workshop Facilitation' },
    { name: 'interest_community_outreach', label: 'Community Outreach' },
    { name: 'interest_documentation', label: 'Documentation' },
    { name: 'interest_media_support', label: 'Media Support' },
    { name: 'interest_other', label: 'Other' },
  ];

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/images/about/innerpgbanner.png"
          alt="Volunteer With Us Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-navy)]/90 to-[var(--primary-navy)]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Volunteer With Us</h1>
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
            <span className="text-[var(--primary-navy)] font-medium">Volunteer</span>
          </nav>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-[var(--background-cream)]">
        <div className="max-w-3xl mx-auto">
          {/* Info Banner */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 mb-8 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Make a Difference</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Join our community of changemakers. Your time and skills can help transform
                  lives and build sustainable businesses in rural India.
                </p>
              </div>
            </div>
          </div>

          <FormContainer
            title="Volunteer Application"
            subtitle="Join our community of changemakers"
            icon={
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          >
            {submitStatus === 'success' && (
              <FormSuccess message="Thank you for your interest in volunteering with JECP! We will contact you soon with upcoming opportunities." />
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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <FormInput
                    label="Location (City/State)"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., Deoria, UP"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    }
                  />
                </div>
              </FormSection>

              <FormSection title="Areas of Interest">
                <FormCheckboxGroup
                  label="Select your areas of interest"
                  options={interestOptions}
                  values={formData as unknown as Record<string, boolean>}
                  onChange={handleChange}
                />
                {formData.interest_other && (
                  <FormInput
                    label="Please Specify Other Interest"
                    name="interest_other_text"
                    value={formData.interest_other_text}
                    onChange={handleChange}
                    placeholder="Describe your interest"
                  />
                )}
              </FormSection>

              <FormSection title="Availability & Skills">
                <FormInput
                  label="Availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder="e.g., Weekends, 10 hours/week, Flexible"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                />
                <FormTextarea
                  label="Skills / Experience"
                  name="skills_experience"
                  value={formData.skills_experience}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your skills and any relevant experience..."
                />
              </FormSection>

              <FormSection title="About You">
                <FormTextarea
                  label="Why You Want to Volunteer"
                  name="why_volunteer"
                  value={formData.why_volunteer}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Share your motivation for wanting to volunteer with JECP..."
                />
              </FormSection>

              <FormConsent
                name="consent_given"
                checked={formData.consent_given}
                onChange={handleChange}
              >
                I consent to JECP contacting me for volunteer opportunities and related initiatives.
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
