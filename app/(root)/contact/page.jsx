import ContactForm from "@/components/forms/ContactForm";
import ContactLocation from "@/components/shared/ContactLocation";
import { locations } from "@/constants";
import Link from "next/link";

const Page = () => {
  return (
    <section className="w-full p-12 md:p-36">
      <div className="w-full flex flex-col xl:flex-row mt-24 md:mt-5 gap-5">
        <div className="flex flex-1 flex-col w-full">
          <h2 className="font-bold text-gray-800 text-4xl mb-4">
            Get In Touch
          </h2>
          <p className="font-medium text-gray-600 text-lg mb-4">
            We'd love to talk about how we can help you.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d679.392745725764!2d3.363629843431027!3d6.632153803660149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9395bf1b04b3%3A0xed6caf2f76974982!2sAdron%20Homes%20%26%20Properties%20Limited!5e0!3m2!1sen!2sng!4v1681743005362!5m2!1sen!2sng"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="mb-6"
          ></iframe>

          <div className="flex flex-wrap gap-4 justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Call us:</h3>
              <Link
                href="tel:+234 9018604383"
                className="text-base font-medium text-gray-600"
              >
                +234 9018604383
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Address:</h3>
              <p className="text-base font-medium text-gray-600">
                75, Adron Court, Adeyemo Akapo, Omole Phase 1, Lagos.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Email us:</h3>
              <Link
                href="mailto:clientservice@adronhomesproperties.com"
                target="_blank"
                className="text-base font-medium text-gray-600"
              >
                clientservice@adronhomesproperties.com
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col w-full justify-center items-center">
          <ContactForm />
          <p className="font-medium text-gray-500 text-center mt-2">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </div>

      <div className="m-auto mt-10">
        <h2 className="font-medium text-gray-600 text-xl text-center">
          VISIT US AT OUR
        </h2>
        <p className="font-bold text-gray-800 text-4xl text-center">
          Office Locations
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md: mx-auto w-full mt-5">
          {locations.map((location) => (
            <ContactLocation key={location.id} {...location} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
