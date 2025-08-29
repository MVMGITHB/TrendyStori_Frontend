// app/fashion/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "Trendingstorie Fashion – Style Trends, Tips & Industry News",
  description:
    "Discover the latest fashion news, style advice, trend reports, and wardrobe inspiration for every season on Trendingstorie.",
  alternates: {
    canonical: "https://Trendingstori.com/fashion",
  },
  openGraph: {
    title: "Trendingstorie Fashion – Style Trends, Tips & Industry News",
    description:
      "Discover the latest fashion news, style advice, trend reports, and wardrobe inspiration for every season on Trendingstorie.",
    url: "https://Trendingstori.com/fashion",
    siteName: "Trendingstorie",
    images: [
      {
        url: "https://Trendingstori.com/logo.png", // ✅ Replace with your actual OG image for fashion
        width: 1200,
        height: 630,
        alt: "Trendingstorie Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trendingstorie Fashion – Style Trends, Tips & Industry News",
    description:
      "Discover the latest fashion news, style advice, trend reports, and wardrobe inspiration for every season on Trendingstorie.",
    images: ["https://Trendingstori.com/logo.png"], // ✅ Replace with actual category image if available
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
