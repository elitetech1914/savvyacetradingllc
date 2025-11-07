"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-3xl p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-md ring-1 ring-slate-100 dark:ring-slate-800">
      <header>
        <h1 id="privacy-heading" className="text-2xl sm:text-3xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Privacy Policy</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">ERS Technologies</p>
        <p className="text-sm text-slate-600 dark:text-slate-400">At ERS Technologies, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.</p>
      </header>

      <section className="mt-6">
        <h2 className="text-lg font-medium text-slate-800 dark:text-slate-100">1. Information We Collect</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">We may collect personal information from you, such as:</p>
        <ul className="list-disc list-inside mt-2 text-slate-600 dark:text-slate-300 space-y-1">
          <li>Your name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Address</li>
          <li>Other information you provide in connection with our services</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium text-slate-800 dark:text-slate-100">2. Use of Information</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">We use your information solely to:</p>
        <ul className="list-disc list-inside mt-2 text-slate-600 dark:text-slate-300 space-y-1">
          <li>Communicate with you</li>
          <li>Provide our services</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Improve our services</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium text-slate-800 dark:text-slate-100">3. No Sharing With Third Parties</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. Your information is used exclusively within ERS Technologies for the purpose of providing and improving our services.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium text-slate-800 dark:text-slate-100">4. Data Security</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">We implement strong security measures to protect your data from unauthorized access, disclosure, alteration, or destruction.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium text-slate-800 dark:text-slate-100">5. Your Rights</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">You have the right to access, update, or delete your personal information at any time. You may contact us directly to make such requests.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium text-slate-800 dark:text-slate-100">6. Changes to This Policy</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">ERS Technologies may update this policy periodically. We will notify you of any significant changes by posting the revised policy on our website.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium text-slate-800 dark:text-slate-100">7. Contact Us</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <p className="mt-3">
          <a
            className="inline-block text-sm font-medium underline text-sky-600 dark:text-sky-400"
            href="https://erstechnologiesllc.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            ERS Technologies — Contact Page
          </a>
        </p>
      </section>

      <footer className="mt-6 text-xs text-slate-500 dark:text-slate-400">Last updated on: {new Date().toLocaleDateString()}</footer>
    </article>
  );
}
