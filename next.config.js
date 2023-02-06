const withTwin = require("./withTwin.js");

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  images: {
    domains: ["avatarapi.com"],
  },
  webpack: (config) => {
    config.resolve.preferRelative = true;
    return config;
  },
});

module.exports = nextConfig;
