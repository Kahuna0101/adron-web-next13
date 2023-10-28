import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import CommentForm from "../forms/CommentForm";

const BlogPost = ({ image, description, title }) => {
  return (
    <section>
      <Card>
        <CardHeader className="w-full h-[70vh] relative overflow-hidden">
          <Image
            src={image}
            fill
            alt={title}
            priority={true}
            className="rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </CardHeader>
        <CardContent>
          <p className="mt-9 text-slate-500 text-2xl dark:text-slate-50">{description}</p>
        </CardContent>
      </Card>

      <div className="mt-9">
        <CommentForm />
      </div>
    </section>
  );
};

export default BlogPost;