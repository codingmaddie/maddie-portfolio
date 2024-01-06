/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()

// webpack.config.js
module.exports = {
  // ... other webpack configurations
  module: {
    rules: [
      // ... other rules
      {
        test: /\.(mp4|webm|ogg)$/,
        use: 'file-loader',
      },
    ],
  },
};
