/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['www.pexels.com'],
  },
  distDir: 'dist',
  eslint: {
    dirs: ['app', 'components', 'hooks', 'lib'],
  },
}

module.exports = nextConfig
