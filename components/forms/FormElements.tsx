'use client';

import { ReactNode } from 'react';

// Form Container with gradient accent
export function FormContainer({
  children,
  title,
  subtitle,
  icon
}: {
  children: ReactNode;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-[var(--primary-navy)] to-[#2a4a6d] p-6 md:p-8">
        <div className="flex items-center gap-4">
          {icon && (
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              {icon}
            </div>
          )}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
            {subtitle && <p className="text-gray-300 text-sm mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>
      {/* Form Content */}
      <div className="p-6 md:p-8">
        {children}
      </div>
    </div>
  );
}

// Section Header for form sections
export function FormSection({
  title,
  children,
  className = ''
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      {title && (
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <div className="w-1 h-5 bg-[var(--primary-orange)] rounded-full"></div>
          <h3 className="text-sm font-semibold text-[var(--primary-navy)] uppercase tracking-wide">
            {title}
          </h3>
        </div>
      )}
      {children}
    </div>
  );
}

// Enhanced Input Field
export function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  icon,
  disabled = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  icon?: ReactNode;
  disabled?: boolean;
}) {
  return (
    <div className="group">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-[var(--primary-orange)]">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--primary-orange)] transition-colors">
            {icon}
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
            focus:bg-white focus:border-[var(--primary-orange)] focus:ring-2 focus:ring-[var(--primary-orange)]/20
            transition-all duration-200 outline-none
            disabled:bg-gray-100 disabled:cursor-not-allowed`}
        />
      </div>
    </div>
  );
}

// Enhanced Textarea
export function FormTextarea({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder,
  rows = 4,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-[var(--primary-orange)]">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
          focus:bg-white focus:border-[var(--primary-orange)] focus:ring-2 focus:ring-[var(--primary-orange)]/20
          transition-all duration-200 outline-none resize-none"
      />
    </div>
  );
}

// Enhanced Select
export function FormSelect({
  label,
  name,
  value,
  onChange,
  required = false,
  options,
  placeholder = 'Select an option',
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-[var(--primary-orange)]">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
          focus:bg-white focus:border-[var(--primary-orange)] focus:ring-2 focus:ring-[var(--primary-orange)]/20
          transition-all duration-200 outline-none appearance-none cursor-pointer
          bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')]
          bg-[length:12px] bg-[right_16px_center] bg-no-repeat"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Enhanced Checkbox Group
export function FormCheckboxGroup({
  label,
  options,
  values,
  onChange,
}: {
  label: string;
  options: { name: string; label: string }[];
  values: Record<string, boolean>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">{label}</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((option) => (
          <label
            key={option.name}
            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200
              ${values[option.name]
                ? 'bg-[var(--primary-orange)]/5 border-[var(--primary-orange)] shadow-sm'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
          >
            <input
              type="checkbox"
              name={option.name}
              checked={values[option.name] || false}
              onChange={onChange}
              className="w-4 h-4 text-[var(--primary-orange)] border-gray-300 rounded
                focus:ring-[var(--primary-orange)] focus:ring-offset-0"
            />
            <span className={`text-sm ${values[option.name] ? 'text-[var(--primary-navy)] font-medium' : 'text-gray-600'}`}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

// Enhanced Radio Group
export function FormRadioGroup({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer transition-all duration-200
              ${value === option.value
                ? 'bg-[var(--primary-orange)] border-[var(--primary-orange)] text-white shadow-md'
                : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'}`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="sr-only"
            />
            <span className="text-sm font-medium">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

// Consent Checkbox
export function FormConsent({
  name,
  checked,
  onChange,
  children,
}: {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
}) {
  return (
    <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200
      ${checked
        ? 'bg-green-50 border-green-300'
        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        required
        className="w-5 h-5 mt-0.5 text-green-600 border-gray-300 rounded
          focus:ring-green-500 focus:ring-offset-0"
      />
      <span className="text-sm text-gray-600 leading-relaxed">{children}</span>
    </label>
  );
}

// Submit Button
export function FormSubmitButton({
  isSubmitting,
  label = 'Submit',
  loadingLabel = 'Submitting...',
}: {
  isSubmitting: boolean;
  label?: string;
  loadingLabel?: string;
}) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full py-4 px-6 bg-gradient-to-r from-[var(--primary-orange)] to-[#d4823f]
        text-white font-semibold rounded-xl shadow-lg shadow-[var(--primary-orange)]/25
        hover:shadow-xl hover:shadow-[var(--primary-orange)]/30 hover:-translate-y-0.5
        active:translate-y-0 transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg
        flex items-center justify-center gap-2"
    >
      {isSubmitting ? (
        <>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          {loadingLabel}
        </>
      ) : (
        <>
          {label}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </>
      )}
    </button>
  );
}

// Success Message
export function FormSuccess({ message }: { message: string }) {
  return (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 animate-fadeIn">
      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-green-800">Success!</h4>
        <p className="text-green-700 text-sm">{message}</p>
      </div>
    </div>
  );
}

// Error Message
export function FormError({ message }: { message: string }) {
  return (
    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-fadeIn">
      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-red-800">Error</h4>
        <p className="text-red-700 text-sm">{message}</p>
      </div>
    </div>
  );
}
