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
      } flex flex-col gap-1.5 text-lg text-gray-500 overflow-hidden`}
    >
      <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
      <p>{address}</p>
      <p>{phone}</p>
        <Link href={link} className="hover:text-gray-800 flex flex-wrap">
        {email}
      </Link>   
    </div>
  );
};

export default ContactLocation;
