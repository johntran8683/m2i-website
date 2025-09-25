/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'images.pexels.com', 'logo.clearbit.com'],
  },

}

output: 'standalone', 

module.exports = nextConfig
