const withTwin = require("./withTwin.js");

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  images: {
    domains: ["avatarapi.com"],
  },
});

module.exports = nextConfig;
