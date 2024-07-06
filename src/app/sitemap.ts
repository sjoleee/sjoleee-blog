import { USER_INFORMATIONS } from "@/constants/data";
import { allPosts } from "contentlayer/generated";
import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const posts: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${USER_INFORMATIONS.domain}/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  }));

  return [
    {
      url: USER_INFORMATIONS.domain,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 1,
    },
    ...posts,
  ];
};

export default sitemap;
