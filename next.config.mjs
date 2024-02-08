/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr';

const nextConfig = Object.assign(
  withSvgr({
    webpack(config) {
      return config;
    },
  }),
  {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
    },
  }
);

export default nextConfig;
