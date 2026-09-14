import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/neuroeducacion",
        destination: "/servicios",
        permanent: true,
      },
      {
        source: "/psicoterapia",
        destination: "/servicios",
        permanent: true,
      },
      {
        source: "/sobre-nosotros",
        destination: "/equipo",
        permanent: true,
      },
      {
        source: "/aprende-online-",
        destination: "/servicios",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
