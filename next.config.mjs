// next.config.mjs
const nextConfig = {
  images: {
    domains: ['3.133.110.173'], // Add the IP address here to allow Next.js to load images from this domain
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
