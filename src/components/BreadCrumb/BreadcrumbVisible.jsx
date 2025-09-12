"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted || pathname === "/") return null; // ⬅️ Hide on homepage

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav
      className="w-full px-3 sm:px-4 mt-2 mb-3 text-sm text-gray-600 overflow-x-auto whitespace-nowrap"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1 sm:space-x-2">
        {/* Home link */}
        <li>
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary font-medium text-[15px] tracking-wide transition-colors"
          >
            Home
          </Link>
        </li>

        {/* Dynamic segments */}
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;
          const label = decodeURIComponent(segment.replace(/-/g, " "));

          return (
            <li key={index} className="flex items-center text-sm">
              <ChevronRight className="w-3.5 h-3.5 mx-1 text-gray-500" />
              {isLast ? (
                <span
                  className="text-foreground font-semibold capitalize tracking-wide"
                  aria-current="page"
                >
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="capitalize text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
