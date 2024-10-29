import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true, // Set to `false` if you might want to change this redirect in the future
            },
        ];
    },
};

export default nextConfig;
