/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  "images": {
    loader: "akamai",
    path: ""
  },
  basePath: "/react-portfolio",
  assetPrefix: "/react-portfolio"
}

module.exports = nextConfig
