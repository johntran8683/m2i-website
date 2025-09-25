/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // adds / at the end of URLs, avoids mismatch
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'images.pexels.com', 'logo.clearbit.com'],
  },

}

output: 'standalone', 

module.exports = nextConfig
