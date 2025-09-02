"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import TopPicks from "../Hero/TopPicks";
import LatestNews from "../Hero/LatestNews";
import Trending from "../HeroSection/Trending";
import Missed from "../HeroSection/Missed";
import FirstHero from "../Hero/FirstHero";
import { base_url } from "../Helper/helper";
import AdBanner from "../AdBanner/AdBanner";

export default function Home() {
  const [news, setNews] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(`${base_url}/api/blog/getAllBlog`);
        setNews(res.data || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchdata();

    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* 🔴 Breaking News Ticker */}
      <div className="bg-black text-white py-2 border-b w-full overflow-hidden">
        <div className="flex items-center px-4 md:px-6">
          <span className="bg-red-600 px-3 py-1 text-xs font-bold mr-4 animate-pulse uppercase tracking-wide">
            Breaking
          </span>
          <div className="animate-marquee whitespace-nowrap min-w-full">
            <span className="text-sm font-medium">
              {news[0]?.title ||
                "Stay updated with the latest news and trending topics from around the world"}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: inline-block;
        }
      `}</style>

      {/* 🔲 Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 md:px-6 py-6 w-full max-w-[1800px] mx-auto">
        {/* ⬅️ Left Sidebar */}
        <aside className="lg:col-span-3 space-y-6 order-2 lg:order-1">
          <TopPicks news={news} />
          <AdBanner />
        </aside>

        {/* 📰 Main Content */}
        <main className="lg:col-span-6 space-y-8 order-1 lg:order-2">
          {/* Hero Section */}
          <section>
            <div className="text-2xl font-semibold text-gray-800 mb-3">
              Featured News
            </div>
            <FirstHero news={news} />
          </section>

          {/* Divider */}
          <div className="space-y-2">
            <hr className="h-px bg-gray-500 border-0" />
            <hr className="h-px bg-gray-500 border-0" />
            <hr className="h-px bg-gray-500 border-0" />
          </div>

          {/* Trending Section */}
          <section>
            <Trending news={news} />
          </section>
        </main>

        {/* ➡️ Right Sidebar */}
        <aside className="lg:col-span-3 space-y-6 order-3">
          <LatestNews news={news} />
          <AdBanner />
        </aside>
      </div>
    </div>
  );
}
