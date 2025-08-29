// app/health/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "Trendingstorie Health – Trusted Health News & Wellness Tips",
  description:
    "Get the latest health insights, medical news, wellness advice, and fitness tips to support your well-being on Trendingstorie.",
  alternates: {
    canonical: "https://Trendingstori.com/health",
  },
  openGraph: {
    title: "Trendingstorie Health – Trusted Health News & Wellness Tips",
    description:
      "Get the latest health insights, medical news, wellness advice, and fitness tips to support your well-being on Trendingstorie.",
    url: "https://Trendingstori.com/health",
    siteName: "Trendingstorie",
    images: [
      {
        url: "https://Trendingstori.com/logo.png", // ✅ Replace with a health-related OG image if possible
        width: 1200,
        height: 630,
        alt: "Trendingstorie Health News",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trendingstorie Health – Trusted Health News & Wellness Tips",
    description:
      "Get the latest health insights, medical news, wellness advice, and fitness tips to support your well-being on Trendingstorie.",
    images: ["https://Trendingstori.com/logo.png"], // ✅ Replace with health-related image if available
    site: "@trendingstorie", // ✅ Update with your actual Twitter/X handle
    creator: "@trendingstorie",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="health" />
    </div>
  );
};

export default Page;
