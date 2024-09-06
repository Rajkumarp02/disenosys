/** @type {import('next').NextConfig} */
import path from "path"
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
      },
      sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      webpack: (config, { isServer }) => {
        // Modify the webpack config as needed
        return config;
      },
};

export default nextConfig;
