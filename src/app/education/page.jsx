// app/education/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "Trendingstorie Education – Learning, Policy & Study Insights",
  description:
    "Stay updated with Trendingstorie Education: news, policies, study tips, and academic trends that matter for learners of all ages.",
  alternates: {
    canonical: "https://Trendingstori.com/education",
  },
  openGraph: {
    title: "Trendingstorie Education – Learning, Policy & Study Insights",
    description:
      "Stay updated with Trendingstorie Education: news, policies, study tips, and academic trends that matter for learners of all ages.",
    url: "https://Trendingstori.com/education",
    siteName: "Trendingstorie",
    images: [
      {
        url: "https://Trendingstori.com/logo.png", // ✅ Replace with actual OG image for education
        width: 1200,
        height: 630,
        alt: "Trendingstorie Education",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trendingstorie Education – Learning, Policy & Study Insights",
    description:
      "Stay updated with Trendingstorie Education: news, policies, study tips, and academic trends that matter for learners of all ages.",
    images: ["https://Trendingstori.com/logo.png"], // ✅ Replace with actual image
    site: "@trendingstorie", // ✅ update with your real Twitter handle if available
    creator: "@trendingstorie",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="education" />
    </div>
  );
};

export default Page;
