/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.dummyjson.com', // Replace with your image host
            port: '', // Optional: add if the host uses a non-standard port
            pathname: '**', // Optional: specify the path or use '**' to allow all paths
          },
        ],
      },
};

export default nextConfig;
