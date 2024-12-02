/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'phim.nguonc.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**'
      },
    ],
  },
};

export default nextConfig;
