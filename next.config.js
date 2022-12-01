/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing/splash',
        permanent: false,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"]
}

module.exports = nextConfig
