// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '3.133.110.173',
        port: '', // Leave empty if not using a specific port
        pathname: '/checkvalet/wp-content/uploads/**', // Adjust path as needed
      },
    ],
  },
  webpack(config) {
    // Add a rule to handle video files
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]', // Customize the output file name if needed
            outputPath: 'static/videos/', // Specify output path
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
