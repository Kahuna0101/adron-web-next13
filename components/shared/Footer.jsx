import { contactUs, socialLink, workWithUs } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="w-full">
      <Newsletter />

      <div className="bg-green-600 py-8 px-8 flex flex-col lg:flex-row">
        <div className="flex flex-1 flex-col lg:items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Adron Homes" width={90} height={90} className="w-auto h-auto"/>
          </Link>
          <div className="flex mt-5 gap-1">
            {socialLink.map((social) => {
              const index = social.id;
              return (
                <Link
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  className={`p-2 rounded-full shadow-md border-slate-300 transition duration-300 ease-in-out 
                    ${ index === 1 ? "hover:bg-blue-500" : "" }
                    ${ index === 2 ? "hover:bg-slate-200" : ""}
                    ${ index === 3 ? "hover:bg-red-500" : ""}
                    ${ index === 4 ? "hover:bg-gradient-to-r from-purple-400 to-pink-400" : "" }`}
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
        </div>

        <div className="flex flex-1 flex-col mt-6 lg:ml-12">
          <h2 className="font-semibold text-2xl mb-2">
            About Adron <br /> Our Mission
          </h2>
          <p className="font-semibold text-medium text-white mb-6">
            We are daily driven to keep our promise of affordable housing
            products with a singular mission to exceed expectations.
          </p>
        </div>

        <div className="flex flex-1 flex-col mt-6 lg:ml-12">
          <h2 className="font-semibold text-2xl mb-2">Contact Us</h2>
          <p className="font-semibold text-medium text-white mb-6">
            For Complaints and enquiries you can reach us on any of the numbers
            or visit our head office at:
          </p>
          {contactUs.map((item) => (
            <Link href={item.link} key={item.id}>
              <div className="flex items-center gap-2 text-medium font-semibold mb-4 text-gray-700 hover:text-gray-900">
                {item.icon} {item.name}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-1 flex-col mt-6 lg:ml-12">
          <h2 className="font-semibold text-2xl mb-2">Quick Links</h2>
          {workWithUs.map((item) => (
            <Link href={item.link} key={item.id}>
              <p className="flex items-center space-x-1 text-medium font-semibold mb-4 text-gray-700 hover:text-gray-900">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-green-700 flex flex-col items-center justify-center py-8 text-white">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-black">ADRON HOMES</span>
        </div>
        <p className="mt-4 text-xs text-center">
          © Adron Homes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
