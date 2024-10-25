// pages/privacy-terms.tsx
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen text-white">
      <div className="layer -z-10"></div>
      <div className="container mx-auto mt-32 backdrop-blur-xl bg-transparent p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">Privacy Policy & Terms of Use</h1>

        {/* Privacy Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            Your privacy is important to us. This Privacy Policy explains how we protect your information when you visit our website. By accessing our website, you agree to this Privacy Policy. If you do not agree, please do not use our website.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h3>
          <p className="mb-4">
            We use your information for various purposes, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>To operate and maintain our website.</li>
            <li>To communicate with you and respond to inquiries.</li>
            <li>To improve our services.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">How We Share Your Information</h3>
          <p className="mb-4">
            We do not sell your personal information. However, we may share it with the following parties:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Service providers for email, hosting, or analytics services.</li>
            <li>Public authorities, when required by law.</li>
          </ul>
        </section>

        {/* Terms of Use */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          <p className="mb-4">
            By accessing and using our website, you agree to these Terms of Use. If you do not agree, you are not permitted to use our website.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Copyrights</h3>
          <p className="mb-4">
            All content, features, and functionality on this website are our property or that of our licensors and are protected by copyright laws.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">User Conduct</h3>
          <p className="mb-4">
            You agree to use our website only for lawful purposes. Prohibited activities include unauthorized access, transmitting harmful content, and disrupting the functionality of the website.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h3>
          <p className="mb-4">
            Our website is provided &apos;as is&apos; and &apos;as available&apos; without any warranties. We do not guarantee that the website will be error-free or secure.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h3>
          <p className="mb-4">
            We are not liable for damages resulting from the use of our website, including indirect or consequential damages.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about our Privacy Policy or Terms of Use, please contact us at:
          </p>
          <ul className="list-inside">
            <li>Email: contact@slotpanfi.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Page;
