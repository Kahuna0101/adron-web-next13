
import NewsletterForm from "@/components/forms/NewsletterForm";
import BlogPost from "@/components/shared/BlogPost";
import RecentPosts from "@/components/shared/RecentPosts";
import { getPost } from "@/lib/actions/blog.action";

export default async function Page({ params }) {
  const blog = await getPost(params.id);

  return (
    <section>
      <div className="p-4 md:p-36">
        <div className="text-center mt-28 md:mt-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-3 uppercase">
            {blog.title}
          </h1>
        </div>

        <div className="flex flex-col mt-6 items-center text-center">
          <div className="flex text-sm md:text-lg font-semibold">
            <div className="mx-0 md:mx-5">
              <p>Author :</p>
              <p className="text-gray-600">Adron Homes</p>
            </div>
            <div className="mx-5">
              <p>Category :</p>
              <p className="text-gray-600 capitalize">{blog.tags}</p>
            </div>
            <div className="mx-5">
              <p>Date :</p>
              <p className="text-gray-600">{blog.date.substring(0, 10)}</p>
            </div>
          </div>
        </div>

        <div className="flex relative mt-10">
          <div className="flex flex-col xl:flex-row gap-7">
            <div className="max-[50%] lg:max-w-5xl">
              <BlogPost
                image={blog.photo}
                description={blog.body}
                title={blog.title}
              />
            </div>

            <div className="">
              <RecentPosts />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
