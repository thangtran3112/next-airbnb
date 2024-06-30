/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "a0.muscache.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "zkcvlzshthdeudzfissu.supabase.co",
        protocol: "https",
        port: "",
      },
    ],
  },
  output: "standalone",
  reactStrictMode: true,
};

export default nextConfig;
