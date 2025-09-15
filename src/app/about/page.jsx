import React from "react";

function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 leading-relaxed text-gray-800">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        About Us | <span className="text-blue-600">Trendingstorie</span> – Your
        Trusted Daily Updates & Financial Insights Platform
      </h1>

      {/* Intro */}
      <p className="mb-6">
        Discover{" "}
        <span className="font-semibold text-blue-600">Trendingstorie</span>—your
        go-to platform for daily news, stock market insights, PF updates, and
        tax tips. Stay informed and ahead with verified, expert-driven content
        every day.
      </p>

      {/* Welcome Section */}
      <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
        Welcome to Trendingstorie — Your Trusted Source for Timely News &
        Financial Guidance
      </h2>
      <p className="mb-4">
        In today’s fast-paced world, staying informed is more than a choice—it’s
        a necessity. At Trendingstorie, we deliver the latest daily news, stock
        market trends, PF (Provident Fund) updates, and tax insights all in one
        place, so you never miss an important update.
      </p>
      <p className="mb-6">
        Whether you’re an investor, a working professional, or simply someone
        who wants to stay ahead of the latest trends, our platform is designed
        to bring you verified, easy-to-understand, and actionable information.
      </p>

      {/* Mission */}
      <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
        Our Mission
      </h2>
      <p className="mb-6">
        Our mission is simple — to empower every reader with accurate, timely,
        and relevant updates that help in making smarter financial and lifestyle
        decisions. We believe in cutting through the noise to deliver what truly
        matters.
      </p>

      {/* Why Trust */}
      <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
        Why Trust Trendingstorie?
      </h2>
      <p className="mb-4">
        Unlike scattered or unverified sources, our team works round-the-clock
        to scan official portals, trusted news agencies, and financial data
        providers to bring you:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>Latest national and global news</li>
        <li>Real-time stock market updates</li>
        <li>PF rules, benefits, and withdrawal guidelines</li>
        <li>Tax-saving tips, deadlines, and compliance alerts</li>
      </ul>

      {/* What Makes Us Different */}
      <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
        What Makes Us Different?
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>
          <span className="font-semibold">Verified & Reliable:</span> All
          information is sourced from trusted agencies, market experts, and
          official channels.
        </li>
        <li>
          <span className="font-semibold">Comprehensive Coverage:</span>{" "}
          One-stop platform for news, finance, and tax updates.
        </li>
        <li>
          <span className="font-semibold">Reader-Centric Design:</span>{" "}
          Easy-to-read content, mobile-friendly, and regularly updated.
        </li>
      </ul>

      {/* Closing */}
      <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
        Start Your Day with Trendingstorie
      </h2>
      <p className="mb-4">
        From your morning coffee news to your evening stock analysis,
        Trendingstorie ensures you’re always ahead—whether it’s in understanding
        the market, managing your PF, or filing your taxes.
      </p>
      <p className="font-semibold text-gray-800">
        Bookmark{" "}
        <a
          href="https://trendingstorie.com"
          className="text-blue-600 underline"
        >
          trendingstorie.com
        </a>{" "}
        and make being informed your daily habit.
      </p>
    </div>
  );
}

export default AboutPage;
