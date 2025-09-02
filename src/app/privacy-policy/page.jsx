export const metadata = {
  title: "Privacy Policy | trendingstorie",
  description:
    "Learn how trendingstorie collects, uses, and protects your personal data. Your privacy is important to us.",
  alternates: {
    canonical: "https://trendingstori.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is our priority. Learn how we protect your data.
      </p>
      <p className="mb-4">
        Welcome to <strong>trendingstori.com</strong> (referred to as "we,"
        "us," or "our"). We are committed to protecting your privacy and
        providing a safe online experience for all our users. This Privacy
        Policy explains the information we collect, how we use it, and the
        choices you have regarding your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-2">
        We may collect different types of personal information, including:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Name</li>
        <li>Email address</li>
        <li>IP Address</li>
        <li>Phone number</li>
        <li>Queries or messages submitted via forms</li>
        <li>
          Any details & requirements shared by users on lead forms or contact
          pages
        </li>
      </ul>
      <p className="mb-4">
        Additionally, we use cookies and similar tracking technologies to
        enhance your browsing experience and gather information about your
        preferences.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p className="mb-2">
        We may use the information we collect for purposes such as:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Providing and improving our services</li>
        <li>Responding to your queries and support requests</li>
        <li>Communicating updates, news, and promotions</li>
        <li>Analyzing usage patterns and user behavior</li>
        <li>Customizing content and advertising</li>
        <li>Preventing fraudulent or malicious activities</li>
        <li>
          Contacting you via Email, SMS, WhatsApp, or other channels (with your
          consent)
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
      <p className="mb-4">
        We implement reasonable safeguards to protect your personal information
        from unauthorized access or disclosure. However, no method of online
        transmission or storage is completely secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Changes to this Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        effective immediately upon posting the updated version on this page.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal
        information. To exercise these rights, please contact us.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, reach
        out to us at{" "}
        <a
          href="mailto:contact@trendingstori.com"
          className="text-blue-600 underline"
        >
          contact@trendingstori.com
        </a>
        .
      </p>

      <p className="mt-6 font-semibold">
        Thank you for choosing trendingstori.com!
      </p>
    </main>
  );
}
