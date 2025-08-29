"use client";

import Link from "next/link";
import Image from "next/image";
import { base_url } from "../Helper/helper";

const getReadTime = (content = "") => {
  const wordsPerMinute = 200;
  const wordCount = (content || "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};

const TopPicks = ({ news = [] }) => {
  const featured = news?.[0];
  const list = news?.slice(1, 7) || [];

  return (
    <aside className="p-4 bg-white rounded-lg shadow-md">
      {/* Title */}
      <div className="flex items-center justify-between mb-4">
        <h2
          className="text-2xl font-[var(--font-prata)]  text-indigo-600"
          aria-hidden
        >
          Top Picks
        </h2>
        <span className="text-md uppercase tracking-wide text-black font-semibold mt-3">
          Trending
        </span>
      </div>

      {/* Featured Card */}
      {featured && (
        <Link
          href={`/${featured?.category?.slug}/${featured?.slug}`}
          className="group block mb-6 overflow-hidden rounded-lg"
        >
          <div className="relative w-full h-56 md:h-64 lg:h-52 rounded-lg overflow-hidden">
            <Image
              src={
                featured?.image?.startsWith("http")
                  ? featured.image
                  : `${base_url}${featured?.image}`
              }
              alt={featured?.title || "Featured image"}
              fill
              sizes="(max-width: 768px) 100vw, 640px"
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          </div>

          <div className="mt-3">
            <div className="flex items-center gap-2">
              {featured?.category?.name && (
                <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full font-semibold">
                  {featured.category.name}
                </span>
              )}
              <span className="text-xs text-gray-400">
                {new Date(featured?.createdAt).toLocaleDateString()}
              </span>
              <span className="text-xs text-gray-400">
                • {getReadTime(featured?.content)} min read
              </span>
            </div>

            <h3 className="mt-2 text-lg md:text-xl font-[var(--font-prata)]  text-gray-900 group-hover:text-indigo-700 transition-colors">
              {featured?.title}
            </h3>

            {featured?.subtitle && (
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {featured.subtitle}
              </p>
            )}
          </div>
        </Link>
      )}

      {/* Compact list */}
      <div className="grid gap-3">
        {list.map((item, i) => (
          <Link
            key={item?._id || i}
            href={`/${item?.category?.slug}/${item?.slug}`}
            className="group block rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center gap-3 p-3">
              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {item?.category?.name && (
                    <span className="text-[11px] uppercase font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      {item.category.name}
                    </span>
                  )}
                  {/* small trending badge for the top two in the list */}
                  {i < 2 && (
                    <span className="text-[11px] bg-gradient-to-r from-yellow-300 to-amber-400 text-amber-900 px-2 py-0.5 rounded font-semibold">
                      Hot
                    </span>
                  )}
                </div>

                <p className="text-sm md:text-base font-medium text-gray-900 group-hover:text-indigo-600 line-clamp-2">
                  {item.subtitle || item.title}
                </p>

                <div className="mt-1 text-xs text-gray-400 flex items-center gap-2">
                  <span>{new Date(item?.createdAt).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{getReadTime(item?.content)} min read</span>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="w-24 h-16 relative rounded overflow-hidden flex-shrink-0">
                {item.image ? (
                  <Image
                    src={
                      item.image.startsWith("http")
                        ? item.image
                        : `${base_url}${item.image}`
                    }
                    alt={item.title || "thumb"}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                    No image
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-4 text-center">
        <Link
          href="/"
          className="inline-block px-4 py-2 text-sm font-semibold text-indigo-700 border border-indigo-100 rounded hover:bg-indigo-50 transition"
        >
          See all stories
        </Link>
      </div>
    </aside>
  );
};

export default TopPicks;
