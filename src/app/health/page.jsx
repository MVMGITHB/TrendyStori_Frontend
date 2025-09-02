// app/health/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "trendingstorie Health – Trusted Health News & Wellness Tips",
  description:
    "Get the latest health insights, medical news, wellness advice, and fitness tips to support your well-being on trendingstorie.",
  alternates: {
    canonical: "https://trendingstori.com/health",
  },
  openGraph: {
    title: "trendingstorie Health – Trusted Health News & Wellness Tips",
    description:
      "Get the latest health insights, medical news, wellness advice, and fitness tips to support your well-being on trendingstorie.",
    url: "https://trendingstori.com/health",
    siteName: "trendingstorie",
    images: [
      {
        url: "https://trendingstori.com/logo.png", // ✅ Replace with a health-related OG image if possible
        width: 1200,
        height: 630,
        alt: "trendingstorie Health News",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "trendingstorie Health – Trusted Health News & Wellness Tips",
    description:
      "Get the latest health insights, medical news, wellness advice, and fitness tips to support your well-being on trendingstorie.",
    images: ["https://trendingstori.com/logo.png"], // ✅ Replace with health-related image if available
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
