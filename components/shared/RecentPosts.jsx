import { socialLink } from "@/constants";
import { getRecentPosts } from "@/lib/actions/blog.action";
import Image from "next/image";
import Link from "next/link";

export default async function RecentPosts() {
  const results = await getRecentPosts();

  return (
    <section className="sticky top-28">
      <h2 className="font-semibold text-xl">Recent Posts</h2>

      {results.map((result) => (
        <div
          key={result.title}
          className="flex mt-4 gap-5 justify-start items-center"
        >
          <Image
            src={result.photo}
            alt={result.title}
            width={100}
            height={100}
            className="rounded-md w-auto h-auto"
          />

          <div className="flex flex-col">
            <Link href={`/blogs/${result._id}`}>
              <h2 className="md:text-xl font-semibold">{result.title}</h2>
            </Link>

            <p className="font-semibold text-gray-500">
              {result.date.substring(0, 10)}
            </p>
          </div>
        </div>
      ))}

      <h2 className="font-semibold text-xl my-4">Social Sites</h2>

      <div className="flex mt-5 gap-1">
        {socialLink.map((social) => {
          const index = social.id;
          return (
            <Link
              key={social.id}
              href={social.link}
              target="_blank"
              className={`p-2 rounded-full shadow-md border-slate-300 transition duration-300 ease-in-out
                    ${index === 1 ? "hover:bg-blue-500 dark:hover:bg-blue-500" : ""}
                    ${index === 2 ? "hover:bg-slate-300 dark:hover:bg-slate-300" : ""}
                    ${index === 3 ? "hover:bg-red-500 dark:hover:bg-red-500" : ""}
                    ${
                      index === 4
                        ? "hover:bg-gradient-to-r from-purple-400 to-pink-400"
                        : ""
                    } dark:bg-current`}
            >
              <Image
                src={social.icon}
                height={20}
                width={20}
                alt="social"
                className="object-contain"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
