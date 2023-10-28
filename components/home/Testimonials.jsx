import Link from "next/link"
import { Button } from "../ui/button"
import { testimonials } from "@/constants"
import TestimonialCard from "../cards/TestimonialCard"

const Testimonials = () => {
  return (
    <section className="w-full py-12 px-12 md:px-36">
      <h2 className="text-5xl md:text-6xl font-medium text-center">
       Our <span className=" font-bold text-green-500 italic">clients</span> says it all
      </h2>

     {testimonials.slice(0, 3).map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial}/>
     ))}

      <div className="flex justify-center mt-7">
        <Link href="/testimonials">
          <Button className="text-white bg-green-500 hover:bg-green-600 py-4 px-6 text-lg font-semibold transition-transform transform hover:scale-105">
            View More
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Testimonials