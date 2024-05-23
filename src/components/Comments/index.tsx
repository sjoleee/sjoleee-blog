"use client";

import useTheme from "@/hooks/useTheme";
import Giscus from "@giscus/react";

const Comments = () => {
  const { theme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo="sjoleee/sjoleee-blog-comment"
      repoId="R_kgDOLeLoLg"
      category="Comment"
      categoryId="DIC_kwDOLeLoLs4Cd3HF"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      lang="ko"
      loading="eager"
      theme={theme}
    />
  );
};

export default Comments;
