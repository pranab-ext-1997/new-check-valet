// next.config.mjs
const nextConfig = {
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
  
  export default nextConfig; // Use 'export default' instead of 'module.exports'
  