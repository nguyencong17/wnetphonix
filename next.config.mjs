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
  async rewrites() {
    return [
      {
        // Khi bạn gọi đến đầu /api-nguonc/...
        source: '/api-nguonc/:path*',
        // Next.js sẽ bí mật chuyển hướng đến server này
        destination: 'https://phim.nguonc.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
