"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { base_url } from "../Helper/helper";
import TopPicks from "../Hero/TopPicks";
import Missed from "../HeroSection/Missed";
import LatestNews from "../Hero/LatestNews";

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
        <main className="order-1 lg:order-2 lg:col-span-8 space-y-8">
          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-14 gap-8 items-start">
            <div className="lg:col-span-5 space-y-5">
              <article>
                <h1 className="text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight text-gray-900 hover:text-blue-600 transition-colors">
                  {data?.title}
                </h1>
                {data?.subtitle && (
                  <h2 className="mt-2 text-lg lg:text-xl text-gray-600 font-medium italic">
                    “{data?.subtitle}”
                  </h2>
                )}
                <div className="flex items-center mt-4">
                  <div className="ml-3 space-y-1">
                    <span className="block text-sm font-semibold text-gray-800">
                      {data?.author?.name || "Trending Storie Team"}
                    </span>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{getReadTime(data?.content)} min read</span>
                      <span>•</span>
                      <time dateTime={data?.createdAt}>
                        {new Intl.DateTimeFormat("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                          timeZone: "Asia/Kolkata",
                        }).format(new Date(data?.createdAt))}
                      </time>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="lg:col-span-9">
              <figure className="group relative rounded-xl overflow-hidden shadow-md">
                <Image
                  src={`${base_url}${data?.image}`}
                  alt={data?.title}
                  width={900}
                  height={500}
                  priority
                  className="w-full h-72 lg:h-[28rem] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <figcaption className="absolute bottom-3 left-3 text-xs text-gray-100 bg-black/40 px-2 py-1 rounded">
                  {data?.category?.name || "Editorial"}
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Article Content */}
          <section className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed">
            {typeof data?.content === "string" && (
              <div
                dangerouslySetInnerHTML={{ __html: data.content }}
                className="prose blog-content"
              />
            )}
          </section>

          {/* FAQs */}
          {data?.faqs?.length > 0 && (
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Frequently Asked Questions
              </h2>
              {data.faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Q{index + 1}: {faq.ques}
                  </h3>
                  <p className="text-base">
                    <strong>Ans:</strong> {faq.ans}
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* Conclusion */}
          {data?.conclusion && (
            <section>
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 text-center">
                Conclusion
              </h3>
              <p className="text-gray-800 text-base md:text-xl leading-relaxed">
                {data.conclusion}
              </p>
            </section>
          )}
        </main>

        {/* ⬅️ Left Sidebar */}
        <aside className="order-2 lg:order-1 lg:col-span-3 space-y-6">
          <Image
            src="/images/ajionew.jpeg"
            alt="Advertisement Left"
            width={300}
            height={250}
            className="rounded w-full object-contain"
          />
          <LatestNews news={news} />
          <Image
            src="/images/ajionew.jpeg"
            alt="Advertisement Left 2"
            width={300}
            height={250}
            className="rounded w-full object-contain"
          />
        </aside>

        {/* ➡️ Right Sidebar */}
        <aside className="order-3 lg:order-3 lg:col-span-3 space-y-6">
          <Image
            src="/images/ajionew.jpeg"
            alt="Advertisement Right"
            width={300}
            height={250}
            className="rounded w-full object-contain"
          />
          <TopPicks news={news} />
          <Image
            src="/images/ajionew.jpeg"
            alt="Advertisement Right 2"
            width={300}
            height={250}
            className="rounded w-full object-contain"
          />
        </aside>
      </div>

      {/* Missed Section at bottom */}
      <div className="max-w-8xl mx-auto mt-12 order-4">
        <Missed />
      </div>
    </div>
  );
}
