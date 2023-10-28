import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/constants";

const page = () => {
  return (
    <section>
      <div className="w-full py-32 px-12 md:px-36">
        <div className="text-center">
          <h1 className="text-[30px] md:text-[60px] font-semibold">
            Testimonials
          </h1>
          <p className=" text-slate-400 text-lg font-semibold">
            Here's what our clients have to say about us
          </p>
        </div>

        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            id={testimonial.id}
            name={testimonial.name}
            image={testimonial.image}
            testimonial={testimonial.testimonial}
            profession={testimonial.profession}
            video={testimonial.video}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
