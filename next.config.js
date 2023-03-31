/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // 308 permanent redirect
      {
        source: "/profile",
        destination: "/profile",
        permanent: true // permanent redirect
      },
      // With parameter and custom status code
      {
        source: "/profile/:id",
        destination: "/profile/:id",
        statusCode: 303 // see other
      }
    ];
  }
}

module.exports = nextConfig
