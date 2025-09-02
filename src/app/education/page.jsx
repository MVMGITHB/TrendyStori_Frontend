// app/education/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "trendingstorie Education – Learning, Policy & Study Insights",
  description:
    "Stay updated with trendingstorie Education: news, policies, study tips, and academic trends that matter for learners of all ages.",
  alternates: {
    canonical: "https://trendingstori.com/education",
  },
  openGraph: {
    title: "trendingstorie Education – Learning, Policy & Study Insights",
    description:
      "Stay updated with trendingstorie Education: news, policies, study tips, and academic trends that matter for learners of all ages.",
    url: "https://trendingstori.com/education",
    siteName: "trendingstorie",
    images: [
      {
        url: "https://trendingstori.com/logo.png", // ✅ Replace with actual OG image for education
        width: 1200,
        height: 630,
        alt: "trendingstorie Education",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "trendingstorie Education – Learning, Policy & Study Insights",
    description:
      "Stay updated with trendingstorie Education: news, policies, study tips, and academic trends that matter for learners of all ages.",
    images: ["https://trendingstori.com/logo.png"], // ✅ Replace with actual image
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
