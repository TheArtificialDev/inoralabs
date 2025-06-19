/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  webpack(config) {
    // Add loader for font files
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  },
  // Disable edge runtime for certain routes
  experimental: {
    disableOptimizedLoading: true,
  },
};

module.exports = nextConfig;
