'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@/lib/supabase';
import {
  FormContainer,
  FormSection,
  FormInput,
  FormCheckboxGroup,
  FormRadioGroup,
  FormConsent,
  FormSubmitButton,
  FormSuccess,
  FormError,
} from '@/components/forms/FormElements';

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

      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'newsletter',
          name: formData.full_name,
          email: formData.email,
        }),
      });

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

  const contentOptions = [
    { name: 'content_programs_events', label: 'Programs & Events' },
    { name: 'content_success_stories', label: 'Success Stories' },
    { name: 'content_resources_tools', label: 'Resources & Tools' },
    { name: 'content_internship_opportunities', label: 'Internship Opportunities' },
    { name: 'content_workshops_trainings', label: 'Workshops & Trainings' },
  ];

  const frequencyOptions = [
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'special-announcements', label: 'Special Only' },
  ];

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
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-navy)]/90 to-[var(--primary-navy)]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Subscribe to Newsletter</h1>
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
            <span className="text-[var(--primary-navy)] font-medium">Newsletter</span>
          </nav>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-[var(--background-cream)]">
        <div className="max-w-2xl mx-auto">
          {/* Feature Banner */}
          <div className="bg-gradient-to-r from-[var(--primary-orange)] to-[#d4823f] rounded-2xl p-6 mb-8 text-white shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Stay Connected with JECP</h3>
                <p className="text-white/90 text-sm">Get updates on programs, success stories, and opportunities</p>
              </div>
            </div>
          </div>

          <FormContainer
            title="Subscribe to Our Newsletter"
            subtitle="Join our community of entrepreneurs and supporters"
            icon={
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            }
          >
            {submitStatus === 'success' && (
              <FormSuccess message="Thank you for subscribing! You will now receive updates from JECP." />
            )}

            {submitStatus === 'error' && (
              <FormError message={errorMessage || 'Something went wrong. Please try again.'} />
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <FormSection title="Your Information">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    label="Profession / Interest"
                    name="profession_interest"
                    value={formData.profession_interest}
                    onChange={handleChange}
                    placeholder="e.g., Entrepreneur, Student"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                  />
                  <FormInput
                    label="City / State"
                    name="city_state"
                    value={formData.city_state}
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

              <FormSection title="Content Preferences">
                <FormCheckboxGroup
                  label="What content interests you?"
                  options={contentOptions}
                  values={formData as unknown as Record<string, boolean>}
                  onChange={handleChange}
                />
              </FormSection>

              <FormSection title="Email Frequency">
                <FormRadioGroup
                  label="How often would you like to hear from us?"
                  name="frequency"
                  options={frequencyOptions}
                  value={formData.frequency}
                  onChange={handleChange}
                />
              </FormSection>

              <FormConsent
                name="consent_given"
                checked={formData.consent_given}
                onChange={handleChange}
              >
                I consent to receiving newsletter updates from JECP. I understand I can unsubscribe at any time.
                <span className="text-[var(--primary-orange)]"> *</span>
              </FormConsent>

              <FormSubmitButton
                isSubmitting={isSubmitting}
                label="Subscribe Now"
                loadingLabel="Subscribing..."
              />
            </form>
          </FormContainer>
        </div>
      </section>
    </main>
  );
}
