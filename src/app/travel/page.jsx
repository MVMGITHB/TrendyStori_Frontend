// app/travel/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "TrendingStori Travel – Destinations, Tips & Guides",
  description:
    "Discover trending travel destinations, expert tips, itineraries and guides to inspire your next adventure.",
  alternates: {
    canonical: "https://Trendingstori.com/travel",
  },
  openGraph: {
    title: "TrendingStori Travel – Destinations, Tips & Guides",
    description:
      "Explore travel guides, trending destinations, and expert tips for unforgettable adventures.",
    url: "https://Trendingstori.com/travel",
    siteName: "TrendingStori",
    images: [
      {
        url: "https://Trendingstori.com/logo.png", // ✅ Replace with actual OG banner image
        width: 1200,
        height: 630,
        alt: "TrendingStori Travel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrendingStori Travel – Destinations, Tips & Guides",
    description:
      "Discover trending travel destinations, tips, and guides to fuel your next trip.",
    images: ["https://Trendingstori.com/logo.png"], // ✅ Replace with actual Twitter preview image
    site: "@trendingstori", // ✅ Update with real handle if available
    creator: "@trendingstori",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="travel" />
    </div>
  );
};

export default Page;
