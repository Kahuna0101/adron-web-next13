import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { agents, objectives } from "@/constants";
import AgentCard from "@/components/cards/AgentCard";
import Counter from "@/components/shared/Counter";

export const metadata = {
  title: 'About',
}


const Page = () => {
  return (
    <section className="w-full py-32 px-12 md:px-36">
      <h1 className="text-[30px] md:text-[90px] font-semibold text-center">
        About Us
      </h1>

      <div className="flex flex-col md:flex-row mt-20 md:mt-40 gap-9">
        {objectives.map((objective) => (
          <div
            key={objective.id}
            className="flex flex-col justify-start items-start gap-3"
          >
            <Image
              src={objective.image}
              width={60}
              height={60}
              alt={objective.title}
              className="w-auto h-auto"
            />
          <div>
              <h3 className="text-2xl font-semibold">{objective.title}</h3>
              <p className="text-lg text-gray-500">{objective.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center my-[90px] gap-20">
        <div className="flex flex-col items-center">
          <Counter end={11}/>
          <p className="text-3xl font-semibold text-slate-500 text-center">
            Years in the <br /> Real-Estate Business
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center gap-2">
            <Counter start={9500} end={10000} duration={4} />
            <span className="text-4xl font-semibold">+</span>
          </div>
          <p className="text-3xl font-semibold text-slate-500 text-center">
            Sold Products
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold">90%</h2>
          <p className="text-3xl font-semibold text-slate-500 text-center">
            Happy Clients
          </p>
        </div>
      </div>

      <div className="border w-full" />

      <div className="w-full mt-[90px]">
        <div className="flex flex-col justify-center items-center mb-[50px]">
          <h2 className="text-lg text-center text-gray-500">OUR TEAM</h2>
          <p className="text-[40px] font-semibold">
            The best in the industry, at your service 24/7
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent) => (
            <AgentCard 
              key={agent.id}
              name={agent.name}
              image={agent.image}
              description={agent.description}
              title={agent.title}
              social={agent.social} 
            />
          ))}
        </div>
      </div>

{/*      <div className="flex justify-center items-center mt-14">
        <div className="flex flex-row gap-1 border rounded-full justify-center items-center w-fit p-4">
          <p className="text-base md:text-xl font-semibold text-gray-500">
            Want to work with us?
          </p>
          <Link href="/contact">
            <Button className="text-lg font-medium text-green-500 hover:text-black dark:hover:text-green-500 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent">
              We are hiring 👔
            </Button>
          </Link>
        </div>
          </div> */}
    </section>
  );
};

export default Page;