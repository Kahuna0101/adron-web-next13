import SubscriptionForm from "@/components/forms/SubscriptionForm";
import RecentProperties from "@/components/shared/RecentProperties";

const page = () => {
  return (
    <section>
      <div className="w-full py-32 px-12 md:px-36">
        <div className="text-center">
          <h1 className="text-[30px] md:text-[60px] font-semibold">
            Subscribe
          </h1>
          <p className=" text-slate-400 text-lg font-semibold">
            Do you wish to get more Information about an Estate? Fill the form
            below and Let's get statred.
          </p>
        </div>

        <div className="flex relative mt-10">
          <div className="flex flex-col lg:flex-row gap-7">
            <div className="w-full">
              <SubscriptionForm />
              <p className="font-medium text-gray-500 text-center mt-2">
                Our Sales Agent will get back to you in 1-2 business days.
              </p>
            </div>

            <div className="">
              <RecentProperties />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
