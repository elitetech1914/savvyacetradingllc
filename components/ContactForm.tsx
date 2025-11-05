import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export default function Example() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="contact">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-balance text-[#483953] sm:text-5xl bg-gradient-to-r from-[#483953] to-[#6d5b7a] bg-clip-text text-transparent">
          Contact Us
        </h2>
        <p className="mt-4 text-lg/8 text-gray-600 max-w-md mx-auto">
          Get in touch with us for any inquiries or support. We&apos;re here to help!
        </p>
      </div>

      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div className="group">
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-[#483953] mb-2 transition-colors duration-200 group-focus-within:text-indigo-600">
              First name
            </label>
            <div className="mt-2.5 relative">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-lg bg-white px-4 py-3 text-base text-[#483953] border border-gray-200 shadow-sm transition-all duration-200 
                          placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none
                          shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)] focus:shadow-[inset_0_2px_12px_rgba(99,102,241,0.1)]"
                placeholder="John"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="group">
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-[#483953] mb-2 transition-colors duration-200 group-focus-within:text-indigo-600">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-lg bg-white px-4 py-3 text-base text-[#483953] border border-gray-200 shadow-sm transition-all duration-200 
                          placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none
                          shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)] focus:shadow-[inset_0_2px_12px_rgba(99,102,241,0.1)]"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Company */}
          <div className="sm:col-span-2 group">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-[#483953] mb-2 transition-colors duration-200 group-focus-within:text-indigo-600">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-lg bg-white px-4 py-3 text-base text-[#483953] border border-gray-200 shadow-sm transition-all duration-200 
                          placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none
                          shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)] focus:shadow-[inset_0_2px_12px_rgba(99,102,241,0.1)]"
                placeholder="Your company name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2 group">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-[#483953] mb-2 transition-colors duration-200 group-focus-within:text-indigo-600">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-lg bg-white px-4 py-3 text-base text-[#483953] border border-gray-200 shadow-sm transition-all duration-200 
                          placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none
                          shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)] focus:shadow-[inset_0_2px_12px_rgba(99,102,241,0.1)]"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="sm:col-span-2 group">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-[#483953] mb-2 transition-colors duration-200 group-focus-within:text-indigo-600">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-lg bg-white border border-gray-200 shadow-sm transition-all duration-200 
                           shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)] focus-within:shadow-[inset_0_2px_12px_rgba(99,102,241,0.1)]
                           focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-l-lg py-3 pr-8 pl-4 text-base text-gray-700 bg-transparent focus:outline-none"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow py-3 pr-4 pl-3 text-base text-[#483953] placeholder:text-gray-400 focus:outline-none border-l border-gray-200 bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2 group">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-[#483953] mb-2 transition-colors duration-200 group-focus-within:text-indigo-600">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={5}
                className="block w-full rounded-lg bg-white px-4 py-3 text-base text-[#483953] border border-gray-200 shadow-sm transition-all duration-200 
                          placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none resize-none
                          shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)] focus:shadow-[inset_0_2px_12px_rgba(99,102,241,0.1)]"
                placeholder="Tell us how we can help you..."
              />
            </div>
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="flex gap-x-4 sm:col-span-2 group">
            <div className="flex h-6 items-center">
              <button
                type="button"
                onClick={() => setIsChecked(!isChecked)}
                className={`relative inline-flex w-11 h-6 shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                  isChecked ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    isChecked ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <input
                id="agree-to-policies"
                name="agree-to-policies"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="sr-only"
                aria-label="Agree to policies"
              />
            </div>
            <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600 flex-1">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold whitespace-nowrap text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                privacy policy
              </a>
              {' '}and{' '}
              <a href="#" className="font-semibold whitespace-nowrap text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                terms of service
              </a>
              .
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            disabled={!isChecked}
            className="group relative block w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 text-center text-lg font-semibold text-white shadow-lg transition-all duration-200 
                      hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl hover:scale-[1.02] 
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                      disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:shadow-none disabled:scale-100
                      overflow-hidden"
          >
            <span className="relative z-10">Let&apos;s talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
        </div>
      </form>
    </div>
  );
}