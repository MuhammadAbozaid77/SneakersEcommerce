/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'https://firebasestorage.googleapis.com',
  //       port: '',
  //       pathname: '/account123/**',
  //     },
  //   ],
  // },
};

export default nextConfig;
