const nextConfig = {
  experimental: {
    // appDir: true, // REMOVE this as it's now enabled by default
  },
  serverExternalPackages: ["mongoose"], // Renamed key
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
