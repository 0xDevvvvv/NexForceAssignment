/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com', // Replace with your image host's domain
          port: '', // Leave empty unless the host uses a specific port
        },
      ],
    },
  };
  

export default nextConfig;
