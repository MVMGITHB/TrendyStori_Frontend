"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="w-full mx-auto px-6 md:px-20 py-10">
        {/* 🔹 Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo & About */}
          <div className="md:w-1/3 space-y-4">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Trendingstori.com Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Trendingstori.com brings you the latest news, stories, and
              insights from around the world. Stay informed with trustworthy
              reporting and in-depth coverage.
            </p>
          </div>

          {/* Links */}
          <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Sections</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link href="/news" className="hover:underline">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/business" className="hover:underline">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/sports" className="hover:underline">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="hover:underline">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link href="/travel" className="hover:underline">
                    Travel
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/advertise" className="hover:underline">
                    Advertise
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <p className="text-sm text-gray-600">Follow us on social media</p>
              <div className="flex gap-4 mt-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="hover:text-sky-500"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:text-pink-500"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  className="hover:text-red-600"
                >
                  <FaYoutube size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="hover:text-blue-700"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Bottom Section */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center md:text-left text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Trendingstori.com. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
