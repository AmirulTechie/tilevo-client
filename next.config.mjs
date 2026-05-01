/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Replace with your domain
        pathname: '/**', // Allows all paths under this domain
      },
    ],
  },

};

export default nextConfig;
