/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  "images": {
    loader: "akamai",
    path: ""
  },
  basePath: "/nexjs-pages",
  assetPrefix: "/nexjs-pages"
}

module.exports = nextConfig
