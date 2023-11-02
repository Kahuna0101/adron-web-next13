import ApplyFooter from "@/components/shared/ApplyFooter";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { works } from "@/constants";
import { Clock4, MapPin } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Careers",
};

const page = () => {
  const rewards = [
    { id: 1, src: "/reward1.jpeg" },
    { id: 2, src: "/reward2.jpeg" },
    { id: 3, src: "/reward3.jpeg" },
    { id: 4, src: "/reward4.jpeg" },
  ];

  const jobs = [
    {
      id: 1,
      title: "marketer",
      role: "full-time or independent",
      location: "lagos",
    },
    { id: 2, title: "accountant", role: "full-time", location: "lagos" },
    { id: 3, title: "hr officer", role: "full-time", location: "lagos" },
  ];

  return (
    <section>
      <div className="w-full py-32 px-12 md:px-36">
        <div className="text-center">
          <h1 className="text-5xl font-semibold">Careers</h1>
          <p className="text-slate-500 text-lg font-semibold">
            Are you passionate about real estate and ready to embark on a
            fulfilling career journey? Look no further!
          </p>
        </div>

        <h2 className="text-center my-7 text-5xl font-semibold">
          Why work with us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          {works.map((work) => (
            <div
              key={work.id}
              className="flex flex-row justify-start items-start gap-3"
            >
              <Image
                src={work.image}
                width={50}
                height={50}
                alt={work.title}
                className="rounded-full object-cover w-auto h-auto"
              />
              <div>
                <h3 className="text-2xl font-semibold">{work.title}</h3>
                <p className="text-lg font-medium text-slate-500">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full mt-10 flex-col lg:flex-row gap-7">
          <div className="">
            <div className="">
              <div className="flex lg:text-center lg:px-40 flex-col gap-2">
                <h2 className="text-5xl font-semibold">
                  Life At{" "}
                  <span className="uppercase text-green-500">Adron Homes</span>
                </h2>
                <p className="text-xl font-medium text-slate-500">
                  Working at Adron Homes offers a unique and dynamic experience
                  that revolves around the pulse of the property market. Life in
                  Adron Homes is a blend of challenges, opportunities, and the
                  fulfillment of helping individuals find their dream homes or
                  lucrative investment properties. We also Reward Hard-working
                  staffs on vacations.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-3">
                {rewards && rewards.map((reward) => (
                  <div
                    key={reward.id}
                    className="w-full h-[25rem] m-3 relative"
                  >
                    <Image
                      src={reward.src}
                      alt="Reward"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-4xl text-center font-semibold">
            Are You Ready To{" "}
            <span className="uppercase font-bold text-green-500">
              Join Our Team?
            </span>
          </h2>
          <p className="text-slate-500 text-center text-xl font-semibold">
            Available Roles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-3 gap-6">
            {jobs && jobs.map((job) => (
              <Card key={job.id} className="capitalize shadow-md">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-green-600">
                    {job.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 text-base font-semibold text-slate-500">
                  <p className="flex items-center gap-3">
                    <Clock4 className="text-green-500" /> {job.role}
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin className="text-green-500" />
                    {job.location}
                  </p>
                </CardContent>
                <CardFooter>
                  <ApplyFooter />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;