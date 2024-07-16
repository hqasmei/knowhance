/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["app.localhost:3000"],
    },
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "admin.knowhance.com",
          },
        ],
        destination: "/admin/:path*",
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "app.knowhance.com",
          },
        ],
        destination: "/app/:path*",
      },
    ];
  },
};

export default nextConfig;
