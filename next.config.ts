import { NextConfig } from 'next'
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        
      },
    ],
  },
}

module.exports = nextConfig;
