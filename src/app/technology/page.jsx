// app/technology/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "TrendingStori Technology – Latest Tech, AI & Innovation News",
  description:
    "Explore the latest in technology: AI breakthroughs, gadgets, apps, software, startups, and innovations shaping the future.",
  alternates: {
    canonical: "https://Trendingstori.com/technology",
  },
  openGraph: {
    title: "TrendingStori Technology – Latest Tech, AI & Innovation News",
    description:
      "Explore the latest in technology: AI breakthroughs, gadgets, apps, software, startups, and innovations shaping the future.",
    url: "https://Trendingstori.com/technology",
    siteName: "TrendingStori",
    images: [
      {
        url: "https://Trendingstori.com/logo.png", // ✅ Replace with actual OG banner (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "TrendingStori Technology News",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrendingStori Technology – Latest Tech, AI & Innovation News",
    description:
      "Explore the latest in technology: AI breakthroughs, gadgets, apps, software, startups, and innovations shaping the future.",
    images: ["https://Trendingstori.com/logo.png"], // ✅ Replace with actual image
    site: "@trendingstori", // ✅ Use real Twitter handle once available
    creator: "@trendingstori",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="technology" />
    </div>
  );
};

export default Page;
