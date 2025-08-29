// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.dailynewzmail.com",
      "tse1.mm.bing.net",
      "trendingstori.dailynewzmail.com",
    ], // 👈 whitelist your API domain
  },
};

export default nextConfig;
