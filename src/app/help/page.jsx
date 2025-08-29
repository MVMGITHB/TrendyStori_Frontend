export const metadata = {
  title: "Help & Support | Trendingstorie",
  description:
    "Need assistance? Get help with technical issues, account queries, or content-related questions on Trendingstorie.",
  alternates: {
    canonical: "https://Trendingstori.com/help",
  },
};

export default function HelpPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Help & Support</h1>
      <p className="mb-4">
        Need help using <strong>Trendingstorie</strong>? Reach out to us anytime
        and we’ll be happy to assist you.
      </p>
      <p>
        Email:{" "}
        <a
          className="text-blue-600 underline"
          href="mailto:support@Trendingstori.com"
        >
          support@Trendingstori.com
        </a>
      </p>
    </main>
  );
}
