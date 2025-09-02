import Missed from "@/components/HeroSection/Missed";
import Trending from "@/components/HeroSection/Trending";
import Home from "@/components/Home/Home";

// ✅ Static SEO Metadata for trendingstori.com
export const metadata = {
  title: "trendingstori - Top News, Stories & Highlights",
  description:
    "Stay updated with the latest trending stories, news highlights, and curated picks. Discover what's making headlines on trendingstori.",
  keywords: [
    "trending stories",
    "top news",
    "latest updates",
    "trendingstori",
    "breaking news",
    "viral news",
  ],
  alternates: {
    canonical: "https://trendingstori.com",
  },
  openGraph: {
    title: "trendingstori - Top News, Stories & Highlights",
    description:
      "Catch the latest trending stories, news updates, and highlights from across the world. Stay ahead with trendingstori.",
    url: "https://trendingstori.com",
    siteName: "trendingstori",
    images: [
      {
        url: "https://trendingstori.com/images/og-banner.png", // 🔁 Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "trendingstori Hero Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "trendingstori - Top News, Stories & Highlights",
    description:
      "Explore the latest trending stories, breaking news & highlights worldwide on trendingstori.",
    images: ["https://trendingstori.com/images/og-banner.png"], // 🔁 Replace with actual image
    site: "@trendingstori", // ✅ update if you have a real handle
    creator: "@trendingstori",
  },
};

export default function Page({ news }) {
  return (
    <>
      <Home />
      <main className="lg:col-span-8 space-y-8">
        {/* Divider (NYT triple-line style) */}
        <div className="space-y-2">
          <hr className="h-px bg-black border-0" />
          <hr className="h-px bg-gray-500 border-0" />
          <hr className="h-px bg-gray-500 border-0" />
        </div>

        <Trending news={news} />
        <Missed />
      </main>
    </>
  );
}
