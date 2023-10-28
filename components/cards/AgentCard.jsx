import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const AgentCard = ({ name, image, description, title, social }) => {
  return (
    <Card className="shadow-md dark:shadow-slate-800 transition-transform duration-200 hover:scale-105">
      <CardHeader>
        <div className="h-20 w-20 relative mb-3">
          <Image
            src={image}
            alt="Icon"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-full object-cover"
          />
        </div>

        <CardTitle className="text-green-700">{name}</CardTitle>
        <CardDescription className="text-md text-green-500 dark:text-slate-50">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500">{description}</p>
      </CardContent>
      <CardFooter className="gap-3">
        {social.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            target="_blank"
            className="first:hover:bg-blue-500 even:hover:bg-slate-300 last:hover:bg-gradient-to-r from-purple-400 to-pink-400 rounded-md p-2 shadow-md border-slate-300 dark:bg-current"
          >
            <Image
              src={item.icon}
              height={20}
              width={20}
              alt="social"
              className="object-contain"
            />
          </Link>
        ))}
      </CardFooter>
    </Card>
  );
};

export default AgentCard;
