// pages/privacy-terms.tsx
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="text-white">
      <div className="container mx-auto mt-32 backdrop-blur-xl bg-transparent p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">Privacy Policy & Terms of Use</h1>

        {/* Privacy Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            Your privacy is important to us at Mystery Mice. This Privacy Policy outlines how we handle and protect your information when you use our services. By accessing Mystery Mice, you agree to this Privacy Policy. If you disagree, please refrain from using the platform.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h3>
          <p className="mb-4">
            We collect and use your information for the following purposes:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>To provide, maintain, and improve the Mystery Mice platform.</li>
            <li>To communicate with you and respond to your questions or feedback.</li>
            <li>To analyze trends and enhance user experience.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">How We Share Your Information</h3>
          <p className="mb-4">
            Mystery Mice does not sell your personal information. However, we may share it in the following cases:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>With trusted service providers to manage hosting, analytics, or communication tools.</li>
            <li>When required by law to comply with legal obligations.</li>
          </ul>
        </section>

        {/* Terms of Use */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          <p className="mb-4">
            By accessing Mystery Mice, you agree to adhere to these Terms of Use. If you do not agree to these terms, you may not use the platform.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Copyrights</h3>
          <p className="mb-4">
            All content, features, and visuals within Mystery Mice are the property of the developers or their licensors. Unauthorized use of this material is strictly prohibited.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">User Conduct</h3>
          <p className="mb-4">
            You agree to use Mystery Mice solely for lawful purposes. Activities such as attempting unauthorized access, disrupting functionality, or sharing malicious content are strictly forbidden.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h3>
          <p className="mb-4">
            Mystery Mice is provided &apos;as is&apos; and &apos;as available&apos;. We do not guarantee that the platform will be free of errors or interruptions, nor do we provide warranties of any kind.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h3>
          <p className="mb-4">
            We are not responsible for any damages, direct or indirect, resulting from the use of Mystery Mice, including loss of data or interruptions in service.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Privacy Policy or Terms of Use, please feel free to contact us:
          </p>
          <ul className="list-inside">
            <li>Email: support@mysterymice.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Page;
