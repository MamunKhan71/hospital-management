/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
            {
                protocol: 'https',
                hostname: 'www.asgaralihospital.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
        ]
    }
};

export default nextConfig;
