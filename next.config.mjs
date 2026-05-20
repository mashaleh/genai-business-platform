/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'academy.techtelligence.ae',
      },
    ],
  },
}

export default nextConfig
