export const metadata = {
  title: "Advertise with Us | TrendyStori",
  description:
    "Promote your brand on TrendyStori and reach a wide audience interested in lifestyle, stories, insights, and more.",
  alternates: {
    canonical: "https://trendystori.com/advertise",
  },
};

export default function AdvertisePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 font-serif text-gray-900">
        Advertise with Us
      </h1>
      <p className="mb-4 text-gray-700 font-serif leading-relaxed">
        Want to showcase your brand to a wide and engaged audience? Get in touch
        with us for tailored advertising opportunities on{" "}
        <span className="font-semibold text-indigo-800">TrendyStori</span>.
      </p>
      <p className="text-gray-700 font-serif">
        Email us at{" "}
        <a
          className="text-indigo-800 underline font-medium hover:text-indigo-900"
          href="mailto:ads@trendystori.com"
        >
          replyto@trendingstori.com
        </a>
      </p>
    </main>
  );
}
