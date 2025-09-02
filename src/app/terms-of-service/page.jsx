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
        url: "https://trendingstori.com/logo.png", // ✅ Replace with actual OG image/banner
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
    images: ["https://trendingstori.com/logo.png"], // ✅ Replace with actual image
    site: "@trendingstori", // ✅ Update with real handle if available
    creator: "@trendingstori",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        These Terms govern your use of <strong>trendingstori</strong>. By
        accessing or using our site, you agree to abide by them.
      </p>
      <p className="mb-2">
        Please review these terms carefully before continuing to use the
        website.
      </p>
    </main>
  );
}
