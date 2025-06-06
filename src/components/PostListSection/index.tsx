import Card from "../Card";
import Sidebar from "../Sidebar";

import sortDatesDescending from "@/utils/sortDatesDescending";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

const PostListSection = ({ category }: { category?: string }) => {
  return (
    <section className="flex w-full max-w-[1024px] relative justify-center mx-auto gap-10 p-4 py-16">
      <div className="w-60 h-fit sticky top-16 hidden desktop:flex shrink-0">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col gap-8 desktop:max-w-[712px]">
        <h2 className=" font-black text-textColor text-6xl">
          {category ?? "All"}
          <span className="text-primary text-center items-center justify-center text-[5rem] leading-[0]">
            .
          </span>
        </h2>
        <div className="flex flex-col gap-8 w-full h-fit">
          {sortDatesDescending(allPosts)
            .filter((post) => post.category === category || !category)
            .map((post, index) => (
              <Link key={post._id} href={post.slug}>
                <Card
                  title={post.title}
                  description={post.description}
                  thumbnail={post.thumbnail}
                  category={post.category}
                  date={post.date}
                  priority={index < 3}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PostListSection;
