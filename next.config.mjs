/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avataaars.io',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
