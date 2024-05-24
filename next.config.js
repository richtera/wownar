/** @type {import('next').NextConfig} */
const webpack = require("webpack");
console.log("Node.js version:", process.version);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          "process.version": "20.5.1", // or any default version
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
