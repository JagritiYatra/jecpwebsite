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
  FormRadioGroup,
  FormConsent,
  FormSubmitButton,
  FormSuccess,
  FormError,
} from '@/components/forms/FormElements';

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

  const partnershipOptions = [
    { name: 'partnership_program_support_funding', label: 'Program Support Funding' },
    { name: 'partnership_knowledge_sharing', label: 'Knowledge Sharing' },
    { name: 'partnership_infrastructure_support', label: 'Infrastructure Support' },
    { name: 'partnership_research_collaboration', label: 'Research Collaboration' },
    { name: 'partnership_other', label: 'Other' },
  ];

  const focusOptions = [
    { name: 'focus_udyami_support', label: 'Udyami Support Program' },
    { name: 'focus_skill_training', label: 'Skill Training Support' },
    { name: 'focus_infrastructure', label: 'Infrastructure Support' },
    { name: 'focus_coe_endorsement', label: 'CoE Endorsement' },
    { name: 'focus_event_sponsorship', label: 'Event Sponsorship' },
    { name: 'focus_other', label: 'Other' },
  ];

  const engagementOptions = [
    { value: 'long-term', label: 'Long-term' },
    { value: 'short-term', label: 'Short-term' },
    { value: 'project-based', label: 'Project-based' },
  ];

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
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-navy)]/90 to-[var(--primary-navy)]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Partner With Us</h1>
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
            <span className="text-[var(--primary-navy)] font-medium">Partner</span>
          </nav>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-[var(--background-cream)]">
        <div className="max-w-3xl mx-auto">
          {/* Info Banner */}
          <div className="bg-gradient-to-r from-[var(--primary-navy)] to-[#2a4a6d] rounded-2xl p-6 mb-8 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Become a Partner</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Join us in empowering grassroots entrepreneurs across Middle India.
                  Your partnership can make a lasting impact on rural entrepreneurship.
                </p>
              </div>
            </div>
          </div>

          <FormContainer
            title="Partnership Application"
            subtitle="Fill out the form to explore collaboration opportunities"
            icon={
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          >
            {submitStatus === 'success' && (
              <FormSuccess message="Thank you for your interest in partnering with JECP! We will review your application and get back to you soon." />
            )}

            {submitStatus === 'error' && (
              <FormError message={errorMessage || 'Something went wrong. Please try again.'} />
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <FormSection title="Organization Details">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    label="Organization / Institution Name"
                    name="organization_name"
                    value={formData.organization_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter organization name"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    }
                  />
                  <FormInput
                    label="Contact Person"
                    name="contact_person"
                    value={formData.contact_person}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
                    placeholder="email@organization.com"
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

              <FormSection title="Partnership Interests">
                <FormCheckboxGroup
                  label="Type of Partnership Interested In"
                  options={partnershipOptions}
                  values={formData as unknown as Record<string, boolean>}
                  onChange={handleChange}
                />
                {formData.partnership_other && (
                  <FormInput
                    label="Please Specify Other Partnership Type"
                    name="partnership_other_text"
                    value={formData.partnership_other_text}
                    onChange={handleChange}
                    placeholder="Describe other partnership type"
                  />
                )}
              </FormSection>

              <FormSection title="Collaboration Details">
                <FormTextarea
                  label="Brief Description of Proposed Collaboration"
                  name="collaboration_description"
                  value={formData.collaboration_description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe how you would like to collaborate with JECP..."
                />
              </FormSection>

              <FormSection title="Areas of Focus">
                <FormCheckboxGroup
                  label="Which areas would you like to focus on?"
                  options={focusOptions}
                  values={formData as unknown as Record<string, boolean>}
                  onChange={handleChange}
                />
                {formData.focus_other && (
                  <FormInput
                    label="Please Specify Other Focus Area"
                    name="focus_other_text"
                    value={formData.focus_other_text}
                    onChange={handleChange}
                    placeholder="Describe other focus area"
                  />
                )}
              </FormSection>

              <FormSection title="Engagement Preference">
                <FormRadioGroup
                  label="Preferred Mode of Engagement"
                  name="engagement_mode"
                  options={engagementOptions}
                  value={formData.engagement_mode}
                  onChange={handleChange}
                />
              </FormSection>

              <FormConsent
                name="consent_given"
                checked={formData.consent_given}
                onChange={handleChange}
              >
                I consent to sharing this information with JECP for partnership discussions.
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
