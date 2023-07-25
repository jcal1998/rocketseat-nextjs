/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'files.stripe.com',
        ],
    },

    compiler: {
        styledComponents: {
            ssr: true,
            displayName: true,
        }
    }
}

module.exports = nextConfig
