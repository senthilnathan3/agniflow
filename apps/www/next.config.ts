import { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@agniflow-ui/react"],
    externalDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/get-started/installation",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
