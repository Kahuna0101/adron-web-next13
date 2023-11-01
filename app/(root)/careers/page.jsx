import CareerForm from "@/components/forms/CareerForm";
import { works } from "@/constants";
import Image from "next/image";

export const metadata = {
  title: 'Careers',
}

const page = () => {
  const rewards = [
    { id: 1, src: "/reward1.jpeg"},
    { id: 2, src: "/reward2.jpeg"},
    { id: 3, src: "/reward3.jpeg"},
    { id: 4, src: "/reward4.jpeg"},
  ]
  return (
    <section>
      <div className="w-full py-32 px-12 md:px-36">
        <div className="text-center">
          <h1 className="text-5xl font-semibold">
            Careers
          </h1>
          <p className="text-slate-400 text-lg font-semibold">
          Are you passionate about real estate and ready to embark on a fulfilling career journey? Look no further!
          </p>
        </div>
        
        <h2 className="text-center my-7 text-5xl font-semibold">Why work with us?</h2>
        <div className="flex flex-col md:flex-row gap-9">
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
              <p className="text-lg text-gray-500">{work.description}</p>
            </div>
          </div>
        ))}
      </div>

        <div className="flex w-full relative mt-10 flex-col lg:flex-row gap-7">
            
            <div className="flex-1">
              <div className="sticky top-28">
                <div className="flex flex-col gap-2">
                  <h2 className="text-5xl font-semibold">Life At <span className="uppercase text-green-500">Adron Homes</span></h2>
                   <p className=" text-base font-medium text-slate-400">Working at Adron Homes offers a unique and dynamic experience that revolves around the
                     pulse of the property market. Life in Adron Homes is a blend of challenges, opportunities,
                     and the fulfillment of helping individuals find their dream homes or lucrative investment properties. 
                     We also Reward Hard-working staffs on vacations.
                    </p>
                </div>
               
               <div className="flex flex-wrap ">
                {rewards.map((reward) => (
                  <div key={reward.id} className="w-full h-[25rem] my-4 relative">
                  <Image 
                    src={reward.src} 
                    alt="Reward" 
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded object-cover" />
                  </div>
                ))}
               </div>

              </div>
            </div>

            <div className="flex-1">
              <CareerForm />
              <p className="font-medium text-gray-500 text-center mt-2 dark:text-slate-50">
                Our HR Team will get back to you in 1-2 business days.
              </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default page;
