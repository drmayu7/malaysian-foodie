/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'mfoodie-images.s3.ap-southeast-5.amazonaws.com',
                port: '',
                pathname: "/**"
            }
        ]
    }
}

module.exports = nextConfig
