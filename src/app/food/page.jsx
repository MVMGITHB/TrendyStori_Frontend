// app/food/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "Trendingstorie Food – Recipes, Food Trends & Culinary News",
  description:
    "Explore delicious recipes, the latest food trends, cooking tips, and culinary stories to satisfy every palate on Trendingstorie.",
  alternates: {
    canonical: "https://Trendingstori.com/food",
  },
  openGraph: {
    title: "Trendingstorie Food – Recipes, Food Trends & Culinary News",
    description:
      "Explore delicious recipes, the latest food trends, cooking tips, and culinary stories to satisfy every palate on Trendingstorie.",
    url: "https://Trendingstori.com/food",
    siteName: "Trendingstorie",
    images: [
      {
        url: "https://Trendingstori.com/logo.png", // ✅ Replace with food-specific OG image if available
        width: 1200,
        height: 630,
        alt: "Trendingstorie Food",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trendingstorie Food – Recipes, Food Trends & Culinary News",
    description:
      "Explore delicious recipes, the latest food trends, cooking tips, and culinary stories to satisfy every palate on Trendingstorie.",
    images: ["https://Trendingstori.com/logo.png"], // ✅ Replace with food-specific image if available
    site: "@trendingstorie", // ✅ Update with your real Twitter/X handle
    creator: "@trendingstorie",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="food" />
    </div>
  );
};

export default Page;
