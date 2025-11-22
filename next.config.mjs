/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  output: "export",           // ← this line kills the 404
};

export default nextConfig;
