// app/sports/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "trendingstori Sports – Cricket, Football & Global Sports News",
  description:
    "Stay updated with live scores, match highlights, sports news, and expert analysis across Cricket, Football, and international sports events.",
  alternates: {
    canonical: "https://trendingstori.com/sports",
  },
  openGraph: {
    title: "trendingstori Sports – Cricket, Football & Global Sports News",
    description:
      "Stay updated with live scores, match highlights, sports news, and expert analysis across Cricket, Football, and international sports events.",
    url: "https://trendingstori.com/sports",
    siteName: "trendingstori",
    images: [
      {
        url: "https://trendingstori.com/logo.png", // ✅ Replace with your OG banner (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "trendingstori Sports",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "trendingstori Sports – Cricket, Football & Global Sports News",
    description:
      "Stay updated with live scores, match highlights, sports news, and expert analysis across Cricket, Football, and international sports events.",
    images: ["https://trendingstori.com/logo.png"], // ✅ Replace with actual banner if available
    site: "@trendingstori", // ✅ Add official Twitter handle if you create one
    creator: "@trendingstori",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="sports" />
    </div>
  );
};

export default Page;
