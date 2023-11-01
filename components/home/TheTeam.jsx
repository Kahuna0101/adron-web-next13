import Link from "next/link";
import AgentCard from "../cards/AgentCard";
import { agents } from "@/constants";
import { Button } from "../ui/button";

const TheTeam = () => {
  return (
    <section>
      <div className="w-full py-12 px-12 md:px-36">
        <h2 className="text-5xl md:text-6xl font-medium text-center">
        Meet Our Team of Experts
      </h2>
      <p className="text-2xl font-normal mt-4 mb-8 text-center">
        The best in the industry, at your service 24/7
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.slice(0, 6).map((agent) => (
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
      <div className="flex justify-center mt-7">
        <Link href="/about">
          <Button className="text-white bg-green-500 hover:bg-green-600 py-4 px-6 text-lg font-semibold transition-transform transform hover:scale-105">
            Meet all Team Members
          </Button>
        </Link>
      </div>
      </div>
      
    </section>
  );
};

export default TheTeam;
