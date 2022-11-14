/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"]
}

module.exports = nextConfig
