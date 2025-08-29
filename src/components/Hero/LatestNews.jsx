import Link from "next/link";
import React from "react";

function LatestNews({ news }) {
  return (
    <div className="p-2">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-indigo-700 tracking-wide mb-6">
        Latest News
      </h2>

      {/* News List */}
      <div className="grid gap-4">
        {news
          ?.slice(0)
          ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // newest first
          ?.slice(0, 7) // show 7 latest items
          ?.map((item, index) => (
            <Link
              href={`/${item?.category?.slug}/${item?.slug}`}
              key={index}
              className="group block rounded-xl border border-gray-200 bg-white hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 shadow-sm hover:shadow-md transition-all duration-300 p-4"
            >
              {/* Title */}
              <p className="text-[15px] font-medium text-gray-900 group-hover:text-indigo-700 leading-snug">
                {item?.title}
              </p>

              {/* Meta info */}
              <div className="flex justify-between items-center mt-2">
                <h5 className="text-xs uppercase font-semibold text-gray-500">
                  {item.source}
                </h5>
                <span className="text-[11px] text-gray-400">
                  {new Date(item.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default LatestNews;
