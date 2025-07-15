/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  server: {
    port: 52270,
    host: '0.0.0.0',
  },
}

module.exports = nextConfig