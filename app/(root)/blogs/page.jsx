import AllPosts from "@/components/shared/AllPosts";
import { getPosts } from "@/lib/actions/blog.action";

export const metadata = {
  title: 'Blogs',
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <section>
      <div className="p-12 md:p-36">
        <div className="w-full mt-16 md:mt-3">
        <h1 className="text-3xl md:text-6xl font-semibold text-center">
          {!posts.length ? "There are no Posts" : "All Blogs & News"}
        </h1>
        <AllPosts
          posts={posts}
        />
      </div>
      </div>
    </section>
  );
}