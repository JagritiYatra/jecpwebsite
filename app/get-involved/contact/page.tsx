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
  FormSubmitButton,
  FormSuccess,
  FormError,
} from '@/components/forms/FormElements';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('jecp_contact_submissions')
        .insert([formData]);

      if (error) throw error;

      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          name: `${formData.first_name} ${formData.last_name}`,
          email: formData.email,
        }),
      });

      setSubmitStatus('success');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: '',
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
          alt="Contact Us Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-navy)]/90 to-[var(--primary-navy)]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Contact Us</h1>
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
            <span className="text-[var(--primary-navy)] font-medium">Contact</span>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-[var(--background-cream)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <div className="sticky top-24">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-navy)] mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We would love to hear from you. Reach out to us with any questions,
                  suggestions, or collaboration opportunities.
                </p>

                <div className="space-y-4">
                  {/* Address Card */}
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-navy)] to-[#2a4a6d] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--primary-navy)] mb-1">Address</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Jagriti Enterprise Centre – Purvanchal<br />
                          Vill – Araipar, PO – Barpar, Baitalpur<br />
                          Deoria, UP – 274201
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-orange)] to-[#d4823f] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--primary-navy)] mb-1">Phone</h3>
                        <a href="tel:+918887052172" className="text-gray-600 text-sm hover:text-[var(--primary-orange)] transition-colors">
                          +91 8887052172
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--primary-navy)] mb-1">Email</h3>
                        <a href="mailto:support@jagriti.org" className="text-[var(--primary-orange)] text-sm hover:underline">
                          support@jagriti.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-6 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.8887654817396!2d83.98051!3d26.5011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993d0ecbbffffff%3A0x8fa7b0c7ece8b5bf!2sJagriti%20Enterprise%20Centre%20Purvanchal!5e0!3m2!1sen!2sin!4v1706520000000!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <FormContainer
                title="Send us a Message"
                subtitle="We'll get back to you within 2-3 business days"
                icon={
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                }
              >
                {submitStatus === 'success' && (
                  <FormSuccess message="Thank you for your message! We will get back to you soon." />
                )}

                {submitStatus === 'error' && (
                  <FormError message={errorMessage || 'Something went wrong. Please try again.'} />
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <FormSection title="Your Information">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormInput
                        label="First Name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        placeholder="John"
                        icon={
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        }
                      />
                      <FormInput
                        label="Last Name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        placeholder="Doe"
                        icon={
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        }
                      />
                    </div>
                    <FormInput
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john.doe@example.com"
                      icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      }
                    />
                  </FormSection>

                  <FormSection title="Your Message">
                    <FormInput
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      }
                    />
                    <FormTextarea
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Write your message here..."
                    />
                  </FormSection>

                  <FormSubmitButton
                    isSubmitting={isSubmitting}
                    label="Send Message"
                    loadingLabel="Sending..."
                  />
                </form>
              </FormContainer>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
