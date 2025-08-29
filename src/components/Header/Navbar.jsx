"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useAuth } from "../context/auth";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const pathname = usePathname();
  const [time, setTime] = useState(new Date());

  // ⏰ Update time every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
  };

  const categories = [
    "Health",
    "Technology",
    "Education",
    "Travel",
    "Sports",
    "Fashion",
    "Food",
  ];

  const isActive = (path) => pathname === `/${path.toLowerCase()}`;

  // 📅 Format date
  const currentDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // ⏱ Format time
  const currentTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <header className="w-full border-b border-gray-300 font-sans bg-white shadow-sm">
      {/* 🔝 Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Date - Hidden on mobile (shown below navbar instead) */}
        <div className="hidden sm:block text-[11px] sm:text-xs md:text-sm text-gray-600 font-light">
          <div>{currentDate}</div>
          <div>{currentTime}</div>
        </div>

        <h1
          className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 flex justify-center items-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-serif text-gray-900 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <Link href="/" className="flex justify-center items-center">
            <img
              src="/logo.png"
              alt="Trendingstori.com Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto max-w-full"
            />
          </Link>
        </h1>

        {/* Auth / Menu */}
        <div className="flex items-center gap-3 text-xs sm:text-sm md:text-base font-medium">
          <div className="hidden sm:flex gap-4 text-gray-700 items-center">
            {auth?.user ? (
              <>
                <span className="uppercase font-semibold">
                  {auth.user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:underline transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hover:underline hover:text-red-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="text-red-600 font-semibold hover:underline transition-colors"
                >
                  Subscribe
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="sm:hidden text-3xl text-gray-800"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>
      </div>

      {/* 🔻 Desktop Nav */}
      <nav className="hidden sm:block border-t border-gray-200 border-b bg-white">
        <ul className="flex justify-center space-x-4 md:space-x-8 text-[13px] md:text-sm lg:text-xl font-semibold tracking-wide uppercase py-2">
          {categories.map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className={`transition-colors ${
                  isActive(item)
                    ? "text-indigo-600 underline"
                    : "hover:text-indigo-600 hover:underline text-gray-800"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 📅 Date & Time - Mobile only */}
      <div className="sm:hidden text-center text-[12px] xs:text-md font-medium text-black  py-2 border-t bg-gray-50">
        {currentDate} • {currentTime}
      </div>

      {/* 📱 Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gray-200 px-4 py-4 space-y-5 bg-white shadow-md">
          <div className="flex flex-col gap-3 text-sm font-medium">
            {auth?.user ? (
              <>
                <span className="uppercase font-semibold text-gray-800">
                  {auth.user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:underline transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hover:underline hover:text-red-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="text-red-600 font-semibold hover:underline transition-colors"
                >
                  Subscribe
                </Link>
              </>
            )}
          </div>

          <ul className="flex flex-col gap-3 border-t pt-4 text-sm sm:text-base font-semibold tracking-wide uppercase">
            {categories.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className={`block transition-colors ${
                    isActive(item)
                      ? "text-indigo-600 underline"
                      : "hover:text-indigo-600 hover:underline text-gray-800"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
