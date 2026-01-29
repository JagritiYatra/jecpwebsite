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
  FormSelect,
  FormConsent,
  FormSubmitButton,
  FormSuccess,
  FormError,
} from '@/components/forms/FormElements';

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

  const facilityTypeOptions = [
    { value: '', label: 'Select an option' },
    { value: 'rural-immersion', label: 'Rural Immersion Program' },
    { value: 'corporate-retreat', label: 'Corporate Retreat' },
    { value: 'conference', label: 'Conference' },
    { value: 'workshop', label: 'Workshop' },
    { value: 'other', label: 'Other' },
  ];

  const heardAboutOptions = [
    { value: '', label: 'Select an option' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'website', label: 'Website' },
    { value: 'referral', label: 'Referral' },
    { value: 'event', label: 'Event' },
    { value: 'news', label: 'News/Media' },
    { value: 'other', label: 'Other' },
  ];

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
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-navy)]/90 to-[var(--primary-navy)]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Use Our Facilities</h1>
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
            <span className="text-[var(--primary-navy)] font-medium">Facilities</span>
          </nav>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-[var(--background-cream)]">
        <div className="max-w-3xl mx-auto">
          {/* Info Banner */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-6 mb-8 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">World-Class Facilities</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Book our state-of-the-art facilities for your programs, retreats, conferences,
                  and workshops. Experience rural India while having access to modern amenities.
                </p>
              </div>
            </div>
          </div>

          <FormContainer
            title="Facility Inquiry"
            subtitle="Book our facilities for your programs and events"
            icon={
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          >
            {submitStatus === 'success' && (
              <FormSuccess message="Thank you for your inquiry! Our team will review your request and get back to you shortly." />
            )}

            {submitStatus === 'error' && (
              <FormError message={errorMessage || 'Something went wrong. Please try again.'} />
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <FormSection title="Contact Information">
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
                    label="Organization / Institution"
                    name="organization_name"
                    value={formData.organization_name}
                    onChange={handleChange}
                    placeholder="If applicable"
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
                    required
                    placeholder="+91 XXXXX XXXXX"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    }
                  />
                </div>
              </FormSection>

              <FormSection title="Facility Requirements">
                <FormSelect
                  label="Type of Facility Use"
                  name="facility_type"
                  value={formData.facility_type}
                  onChange={handleChange}
                  required
                  options={facilityTypeOptions}
                />
                {formData.facility_type === 'other' && (
                  <FormInput
                    label="Please Specify"
                    name="facility_type_other"
                    value={formData.facility_type_other}
                    onChange={handleChange}
                    placeholder="Describe your facility requirement"
                  />
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    label="Intended Dates / Duration"
                    name="intended_dates"
                    value={formData.intended_dates}
                    onChange={handleChange}
                    required
                    placeholder="e.g., March 15-17, 2025"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    }
                  />
                  <FormInput
                    label="Number of Participants"
                    name="number_of_participants"
                    type="number"
                    value={formData.number_of_participants}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 25"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    }
                  />
                </div>
              </FormSection>

              <FormSection title="Program Details">
                <FormTextarea
                  label="Purpose / Objectives"
                  name="purpose_objectives"
                  value={formData.purpose_objectives}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Describe the purpose and objectives of your program/event..."
                />
              </FormSection>

              <FormSection title="Additional Information">
                <FormSelect
                  label="How Did You Hear About JECP?"
                  name="heard_about"
                  value={formData.heard_about}
                  onChange={handleChange}
                  options={heardAboutOptions}
                />
                {formData.heard_about === 'other' && (
                  <FormInput
                    label="Please Specify"
                    name="heard_about_other"
                    value={formData.heard_about_other}
                    onChange={handleChange}
                    placeholder="How did you hear about us?"
                  />
                )}
              </FormSection>

              <FormConsent
                name="consent_given"
                checked={formData.consent_given}
                onChange={handleChange}
              >
                I consent to JECP contacting me regarding my inquiry and providing relevant support and information.
                <span className="text-[var(--primary-orange)]"> *</span>
              </FormConsent>

              <FormSubmitButton
                isSubmitting={isSubmitting}
                label="Submit Inquiry"
                loadingLabel="Submitting..."
              />
            </form>
          </FormContainer>
        </div>
      </section>
    </main>
  );
}
