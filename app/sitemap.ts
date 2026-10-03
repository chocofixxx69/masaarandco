import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://masaar.co";
  const now = new Date();

  const routes = ["", "/about", "/services", "/work", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/services" || route === "/work" ? 0.9 : 0.8,
  }));
}
