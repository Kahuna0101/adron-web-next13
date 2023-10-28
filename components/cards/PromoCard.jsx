import Link from "next/link";

import { usePostFormat } from "../../Hooks/usePostFormat";
import Image from "next/image";

const PromoCard = (post) => {
  const { id, photo } = usePostFormat(post);

  return (
    <div className="relative bg-cover min-h-screen bg-center">
      <Image
        src={photo}
        alt="Promos"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex flex-col sm:flex-row items-center justify-between absolute text-white font-light left-0 right-0 bottom-0 top-0 m-20 p-8">
        <div className="w-full sm:w-auto mt-20 sm:mt-32">
          <Link href={`/blogs/${id}`}>
            <button className="px-6 py-4 bg-whatsapp-500 text-white text-lg font-semibold gap-2 transition-all duration-200 hover:bg-whatsapp-400">
              Read Article <IoIosArrowForward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
