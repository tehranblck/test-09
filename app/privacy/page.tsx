// pages/privacy-terms.tsx
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen   text-white">
      <div className="layer -z-10"></div>
      <div className="  pt-32 backdrop-blur-xl mx-auto bg-transparent p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">Privacy Policy & Terms of Use</h1>

        {/* Privacy Policy Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. By accessing or using our website, you agree to this Privacy Policy. If you do not agree, please do not use our website.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h3>
          <p className="mb-4">
            We may collect both personal and non-personal information from you. Personal information includes details that can be used to identify you, such as:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Contact Information: Email address, phone number, or mailing address.</li>
            <li>Usage Data: Information about how you use our website, including IP addresses, browser type, and page views.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h3>
          <p className="mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>To operate and maintain our website.</li>
            <li>To communicate with you and respond to inquiries.</li>
            <li>To analyze usage trends and improve our services.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">How We Share Your Information</h3>
          <p className="mb-4">
            We do not sell your personal information. We may share it with:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Service providers for email, hosting, or analytics services.</li>
            <li>Public authorities, if required by law.</li>
          </ul>
        </section>

        {/* Terms of Use Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          <p className="mb-4">
            By accessing and using our website, you agree to be bound by these Terms of Use. If you do not agree, you must not use our website.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Intellectual Property Rights</h3>
          <p className="mb-4">
            All content, features, and functionality on this website are owned by us or our licensors and are protected by intellectual property rights.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">User Conduct</h3>
          <p className="mb-4">
            You agree to use our website only for lawful purposes. Prohibited activities include unauthorized access, transmitting harmful content, and disrupting the website's functionality.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h3>
          <p className="mb-4">
            Our website is provided "as is" and "as available," without any warranties. We do not guarantee that the website will be error-free or secure.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h3>
          <p className="mb-4">
            We will not be liable for any damages resulting from your use of our website, including indirect or consequential damages.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns regarding our Privacy Policy or Terms of Use, please contact us at:
          </p>
          <ul className="list-inside">
            <li>Email: contact@yourgamedestination.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Page;
