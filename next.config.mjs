/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // GitHub Pages only serves static files — there's no Node.js server to run
  // Next's image optimizer or SSR, so we export fully static HTML/CSS/JS.
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
