// app/fashion/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "trendingstorie Fashion – Style Trends, Tips & Industry News",
  description:
    "Discover the latest fashion news, style advice, trend reports, and wardrobe inspiration for every season on trendingstorie.",
  alternates: {
    canonical: "https://trendingstori.com/fashion",
  },
  openGraph: {
    title: "trendingstorie Fashion – Style Trends, Tips & Industry News",
    description:
      "Discover the latest fashion news, style advice, trend reports, and wardrobe inspiration for every season on trendingstorie.",
    url: "https://trendingstori.com/fashion",
    siteName: "trendingstorie",
    images: [
      {
        url: "https://trendingstori.com/logo.png", // ✅ Replace with your actual OG image for fashion
        width: 1200,
        height: 630,
        alt: "trendingstorie Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "trendingstorie Fashion – Style Trends, Tips & Industry News",
    description:
      "Discover the latest fashion news, style advice, trend reports, and wardrobe inspiration for every season on trendingstorie.",
    images: ["https://trendingstori.com/logo.png"], // ✅ Replace with actual category image if available
    site: "@trendingstorie", // ✅ update with your real Twitter handle
    creator: "@trendingstorie",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="fashion" />
    </div>
  );
};

export default Page;
