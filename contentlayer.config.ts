import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from "rehype-external-links";
import { ComputedFields, defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

const computedFields: ComputedFields = {
  category: {
    type: "string",
    resolve: (doc) => {
      return doc._raw.flattenedPath.split("/")[1];
    },
  },
  slug: {
    type: "string",
    resolve: (doc) => {
      const pathArr = doc._raw.flattenedPath.split("/");
      const lastIndex = pathArr.length - 1;

      return `${pathArr[0]}/${pathArr[lastIndex]}`;
    },
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => {
      const pathArr = doc._raw.flattenedPath.split("/");
      const lastIndex = pathArr.length - 1;

      return pathArr[lastIndex];
    },
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    keywords: { type: "list", of: { type: "string" } },
    thumbnail: { type: "string" },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],

    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark-dimmed",
            light: "light-plus",
          },
        },
      ],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor-post-heading"],
          },
        },
      ],
    ],
  },
});
