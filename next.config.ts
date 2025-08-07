
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/@develop/m2nxt/next',
  // basePath: '',
 assetPrefix: '/@develop/m2nxt/next', // Required for assets
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

