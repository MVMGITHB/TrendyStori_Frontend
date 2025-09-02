// app/food/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "trendingstorie Food – Recipes, Food Trends & Culinary News",
  description:
    "Explore delicious recipes, the latest food trends, cooking tips, and culinary stories to satisfy every palate on trendingstorie.",
  alternates: {
    canonical: "https://trendingstori.com/food",
  },
  openGraph: {
    title: "trendingstorie Food – Recipes, Food Trends & Culinary News",
    description:
      "Explore delicious recipes, the latest food trends, cooking tips, and culinary stories to satisfy every palate on trendingstorie.",
    url: "https://trendingstori.com/food",
    siteName: "trendingstorie",
    images: [
      {
        url: "https://trendingstori.com/logo.png", // ✅ Replace with food-specific OG image if available
        width: 1200,
        height: 630,
        alt: "trendingstorie Food",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "trendingstorie Food – Recipes, Food Trends & Culinary News",
    description:
      "Explore delicious recipes, the latest food trends, cooking tips, and culinary stories to satisfy every palate on trendingstorie.",
    images: ["https://trendingstori.com/logo.png"], // ✅ Replace with food-specific image if available
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
