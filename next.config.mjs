// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.dailynewzmail.com", "tse1.mm.bing.net"], // 👈 whitelist your API domain
  },
};

export default nextConfig;
