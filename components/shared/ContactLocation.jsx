"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";

const ContactLocation = ({ title, address, phone, email, link }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`transform transition-transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-0"
      } flex flex-col gap-1.5 text-lg overflow-hidden`}
    >
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-gray-500">{address}</p>
      <p className="text-gray-500">{phone}</p>
        <Link href={link} className="hover:text-green-600 dark:hover:text-green-600 flex flex-wrap">
        {email}
      </Link>   
    </div>
  );
};

export default ContactLocation;
