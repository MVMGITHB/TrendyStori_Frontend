import Link from "next/link";
import React from "react";

function LatestNews({ news }) {
  return (
    <aside className="p-2" aria-label="Latest News">
      {/* Section Label */}
      <p className="text-2xl font-semibold text-indigo-700 tracking-wide mb-4">
        Latest News
      </p>

      {/* News List */}
      <ul className="grid gap-3">
        {news
          ?.slice(0)
          ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // newest first
          ?.slice(0, 7) // show 7 latest items
          ?.map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item?.category?.slug}/${item?.slug}`}
                className="group block rounded-lg border border-gray-200 bg-white hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 shadow-sm hover:shadow-md transition-all duration-300 p-3"
              >
                {/* Title */}
                <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-700 leading-snug line-clamp-2">
                  {item?.title}
                </p>

                {/* Meta info */}
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {item.source}
                  </span>
                  <time
                    dateTime={item.createdAt}
                    className="text-[11px] text-gray-400"
                  >
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
}

export default LatestNews;
