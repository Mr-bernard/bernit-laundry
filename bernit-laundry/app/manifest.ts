import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bernit Laundry",
    short_name: "Bernit",
    description: "Professional laundry & dry cleaning services delivered to your doorstep.",
    start_url: "/",
    display: "standalone",
    background_color: "#050b18",
    theme_color: "#1b3fd6",
    icons: [
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  };
}
