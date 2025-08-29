"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { base_url } from "../Helper/helper";
import TopPicks from "../Hero/TopPicks";
import Missed from "../HeroSection/Missed";
import LatestNews from "../Hero/LatestNews";
import AdBanner from "../AdBanner/AdBanner";

export default function IntegratedNewsLayout({ data }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [news, setNews] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await axios.get(`${base_url}/api/blog/getAllBlog`);
      setNews(res.data || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getReadTime = (content = "") => {
    const wordsPerMinute = 200;
    const wordCount = content?.split(" ").length || 0;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  };

  // ----------------- ✅ SCHEMA LOGIC -----------------
  const date = new Date(data?.createdAt);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  const formattedDate = `${day}/${month}/${year}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.Trendingstori.com/news/${data?.slug || data?._id}`,
    },
    headline: data?.title,
    description:
      data?.subtitle || data?.metaDesc || data?.content?.slice(0, 160),
    image: [`${base_url}${data?.image}`, `${base_url}${data?.image}?w=1200`],
    author: {
      "@type": "Person",
      name: data?.author?.name || "Trending Storie Team",
      url: "https://www.Trendingstori.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Trending Storie",
      logo: {
        "@type": "ImageObject",
        url: "https://www.Trendingstori.com/logo.png",
        width: 200,
        height: 60,
      },
    },
    datePublished: date.toISOString(),
    dateModified: new Date(data?.updatedAt || data?.createdAt).toISOString(),
    keywords: data?.tags?.join(", "),
  };

  const faqSchema =
    data?.faqs?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.ques,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.ans,
            },
          })),
        }
      : null;

  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${data?.author?.name || "Trending Storie Writer"}`,
    url: "https://www.Trendingstori.com/about",
    image: `${base_url}${data?.author?.image || "/images/default-author.png"}`,
    sameAs: [
      "https://twitter.com/trendingstorie",
      "https://linkedin.com/company/trendingstorie",
    ],
    jobTitle: "News Writer",
    worksFor: {
      "@type": "Organization",
      name: "Trending Storie",
    },
  };
  // --------------------------------------------------

  return (
    <div className="min-h-screen bg-white w-full px-4 md:px-6 lg:px-10 py-6">
      {/* ✅ Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      {data?.faqs?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* 🔲 3-column responsive grid */}
      <div className="grid grid-cols-1 lg:grid-cols-14 gap-6 w-full">
        {/* 📰 Main Article - MOBILE FIRST */}
        <main className="order-1 lg:order-2 lg:col-span-8 space-y-12">
          {/* Title + Meta */}
          <header className="space-y-4 border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold leading-snug text-gray-900">
              {data?.title}
            </h1>
            {data?.subtitle && (
              <p className="text-lg text-gray-600 italic">{data.subtitle}</p>
            )}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{data?.author?.name || "TrendyStori Team"}</span>
              <span>•</span>
              <span>{getReadTime(data?.content)} min read</span>
              <span>•</span>
              <time dateTime={data?.createdAt}>
                {new Intl.DateTimeFormat("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).format(new Date(data?.createdAt))}
              </time>
            </div>
          </header>

          {/* Hero Image */}
          <figure className="rounded-xl overflow-hidden shadow">
            <Image
              src={`${base_url}${data?.image}`}
              alt={data?.title}
              width={900}
              height={500}
              className="w-full h-[26rem] object-cover"
            />
            {data?.category?.name && (
              <figcaption className="mt-2 text-xs text-gray-500">
                {data.category.name}
              </figcaption>
            )}
          </figure>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            {typeof data?.content === "string" && (
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            )}
          </article>

          {/* FAQs */}
          {data?.faqs?.length > 0 && (
            <section className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              {data.faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold">{faq.ques}</h3>
                  <p className="text-gray-700">{faq.ans}</p>
                </div>
              ))}
            </section>
          )}

          {/* Conclusion */}
          {data?.conclusion && (
            <section className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Conclusion
              </h3>
              <p className="text-gray-700 leading-relaxed">{data.conclusion}</p>
            </section>
          )}
        </main>

        {/* ⬅️ Left Sidebar */}
        <aside className="order-2 lg:order-1 lg:col-span-3 space-y-6">
          <AdBanner />
          <LatestNews news={news} />
          <AdBanner />
        </aside>

        {/* ➡️ Right Sidebar */}
        <aside className="order-3 lg:order-3 lg:col-span-3 space-y-6">
          <AdBanner />
          <TopPicks news={news} />
          <AdBanner />
        </aside>
      </div>

      {/* Missed Section at bottom */}
      <div className="max-w-8xl mx-auto mt-12 order-4">
        <Missed />
      </div>
    </div>
  );
}
