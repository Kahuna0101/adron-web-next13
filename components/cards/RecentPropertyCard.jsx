import { MapPinned } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const RecentPropertyCard = ({ id, image, title, location, price }) => {
  return (
    <article>
        <div
          className="flex mt-4 gap-5 justify-start items-center"
        >
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="rounded-md w-auto h-auto"
          />

          <div className="flex flex-col">
            <Link href={`/properties/${id}`}>
              <h2 className="md:text-xl font-semibold">{title}</h2>
            </Link>

            <div className="font-semibold text-gray-500 flex gap-5 ">
              <p className="flex capitalize items-center justify-center gap-1">
              <MapPinned className="stroke-gray-500" />
              {location}
              </p>
              <p className="p-1 bg-transparent rounded capitalize font-medium">₦{price}</p>
            </div>
          </div>
        </div>
    </article>
  )
}

export default RecentPropertyCard