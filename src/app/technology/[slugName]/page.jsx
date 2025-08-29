import Article from "@/components/Article/Article";
import { base_url } from "@/components/Helper/helper";
import axios from "axios";
import Script from "next/script";

const Base_url = "https://Trendingstori.com/";

export async function generateMetadata({ params }) {
  const { slugName } = await params;

  try {
    const response = await axios.get(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`
    );
    const data = response.data;

    return {
      title: data?.title || "TrendingStori",
      description: data?.subtitle || "Latest article from TrendingStori",
      alternates: {
        canonical: `https://Trendingstori.com/blog/${slugName}`,
      },
      openGraph: {
        title: data?.title,
        description: data?.subtitle,
        url: `https://Trendingstori.com/blog/${slugName}`,
        type: "article",
        siteName: "TrendingStori",
        images: [
          {
            url: `${base_url}${data?.image}`,
            width: 1200,
            height: 630,
            alt: data?.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: data?.title,
        description: data?.subtitle,
        images: [`${base_url}${data?.image}`],
      },
    };
  } catch (error) {
    console.error("SEO metadata error:", error);
    return {
      title: "TrendingStori",
      description: "Latest news, blogs and stories from TrendingStori.",
    };
  }
}

export default async function Page({ params }) {
  const { slugName } = await params;

  try {
    const response = await axios.get(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`
    );
    const data1 = response.data;

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://Trendingstori.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: data1?.title,
          item: `https://Trendingstori.com/blog/${slugName}`,
        },
      ],
    };

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://Trendingstori.com/blog/${slugName}`,
      },
      headline: data1?.title,
      description: data1?.subtitle,
      image: [`${base_url}${data1?.image}`],
      author: {
        "@type": "Organization",
        name: "TrendingStori",
        url: "https://Trendingstori.com",
      },
      publisher: {
        "@type": "Organization",
        name: "TrendingStori",
        logo: {
          "@type": "ImageObject",
          url: "https://Trendingstori.com/images/logo.png", // ✅ Update to actual logo path
        },
      },
      datePublished: data1?.createdAt,
      dateModified: data1?.updatedAt || data1?.createdAt,
    };

    return (
      <>
        {/* JSON-LD Schema */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <Article data={data1} />
      </>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return <div>Failed to load article.</div>;
  }
}
