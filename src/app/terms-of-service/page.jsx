// app/terms-of-service/page.tsx

export const metadata = {
  title: "Terms of Service | trendingstori",
  description:
    "Read the Terms of Service for trendingstori. Understand your rights, responsibilities, and conditions of using our platform.",
  alternates: {
    canonical: "https://trendingstori.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | trendingstori",
    description:
      "Review the Terms of Service for trendingstori to understand your rights and responsibilities while using our platform.",
    url: "https://trendingstori.com/terms-of-service",
    siteName: "trendingstori",
    images: [
      {
        url: "https://trendingstori.com/logo.png",
        width: 1200,
        height: 630,
        alt: "trendingstori Terms of Service",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | trendingstori",
    description:
      "Read the Terms of Service for trendingstori. Learn about the conditions, rights, and responsibilities of our users.",
    images: ["https://trendingstori.com/logo.png"],
    site: "@trendingstori",
    creator: "@trendingstori",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 prose prose-lg prose-headings:font-semibold prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:underline">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

      <p>
        These <strong>Terms of Service</strong> govern your use of{" "}
        <strong>trendingstori.com</strong>. By accessing or using our website,
        you agree to abide by these terms. Please read them carefully before
        continuing.
      </p>

      <h2>1. Description and Acceptance of Services</h2>
      <p>
        Trendingstori provides access to news, insights, and information about
        various products & services across categories such as
        <strong>
          {" "}
          Health, Technology, Education, Travel, Sports, Fashion, and Food
        </strong>
        . Services are provided on a commercially reasonable effort basis, and
        your participation is entirely voluntary.
      </p>
      <p>
        You also agree to receive communications from Trendingstori or its
        partners via <strong>email, phone, or SMS</strong>, even if your number
        is on the DND/NCPR list, for updates, promotions, or announcements.
      </p>

      <h2>2. License and Website Access</h2>
      <p>
        All content and services on this website are{" "}
        <strong>owned or licensed</strong> by Trendingstori and protected by
        intellectual property laws. You are granted a limited license to access
        and use the website for personal, non-commercial purposes only.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>No commercial use or redistribution without written permission.</li>
        <li>No reverse engineering, copying, or creating derivative works.</li>
        <li>
          No automated access, scraping, or other bots without prior consent.
        </li>
        <li>Do not bypass security measures or robot exclusion headers.</li>
      </ul>

      <h2>3. Privacy Policy</h2>
      <p>
        By using our website, you consent to the collection and use of your
        information as described in our
        <a href="/privacy-policy"> Privacy Policy</a>.
      </p>

      <h2>4. Your Registration/Account</h2>
      <p>
        You must be of legal age and provide{" "}
        <strong>accurate, current, and complete information</strong> when
        registering. You are responsible for maintaining the confidentiality of
        your account credentials and for all activity under your account.
      </p>

      <h2>5. Eligibility</h2>
      <p>
        You must be an <strong>Indian resident</strong>, 18+ years old, and
        legally capable of entering into binding contracts.
      </p>

      <h2>6. Third-Party Links</h2>
      <p>
        The website may contain links to third-party sites. We do not control
        these sites and are not responsible for their content, services, or any
        resulting damages. Your interactions with third parties are at your own
        risk.
      </p>

      <h2>7. Disclaimer of Warranty</h2>
      <p>
        All services and content are provided <strong>“as is”</strong> and{" "}
        <strong>“as available”</strong>. Trendingstori makes no guarantees
        regarding the accuracy, reliability, or completeness of information or
        services.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        Trendingstori, its affiliates, and partners are not liable for any{" "}
        <strong>direct, indirect, incidental, or consequential damages</strong>{" "}
        arising from your use of the website or its content. If any liability is
        proven, it shall be limited to the service fees you paid, if applicable.
      </p>

      <h2>9. Site-Provided Email and Postings</h2>
      <p>
        Users may send emails or post messages. You must not post unlawful,
        abusive, misleading, false, or copyrighted content. Trendingstori may
        monitor, remove, or restrict postings at its discretion.
      </p>

      <h2>10. Indemnity</h2>
      <p>
        You agree to <strong>indemnify and hold harmless</strong> Trendingstori,
        its affiliates, officers, and employees from any claims or losses
        arising from your violation of these Terms or use of the website.
      </p>

      <h2>11. Additional Terms and Conditions</h2>
      <p>
        Trendingstori reserves the right to modify the website, services, and
        Terms at any time. Continued use constitutes acceptance of these
        changes. Promotional offers are governed by these Terms plus any
        additional conditions specified.
      </p>

      <p className="mt-8 text-gray-600">
        <strong>Last updated:</strong> September 2025
      </p>
    </main>
  );
}
