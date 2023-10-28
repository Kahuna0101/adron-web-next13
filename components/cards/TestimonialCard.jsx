import Image from "next/image";

const TestimonialCard = ({
  name,
  image,
  testimonial,
  profession,
  video,
  id,
}) => {
  const youTubeVideo = video.slice(video.length - 11);
  const isEvenIndex = id % 2 === 0;

  return (
    <div
      className={`flex flex-col lg:flex-row mt-8 justify-${
        isEvenIndex ? "start" : "end"
      } items-center gap-5`}
    >
      <article
        className={`flex flex-1 flex-col gap-6 ${
          isEvenIndex ? "lg:order-1" : ""
        }`}
      >
        <div className="flex justify-start items-center gap-3">
          <div className="h-16 w-16 relative">
            <Image
              src={image ? image : `/profile.svg`}
              fill
              alt={name}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-teal-800">{name}</h2>
            <p className="text-gray-500 font-medium">
              {profession ? profession : "Undisclosed"}
            </p>
          </div>
        </div>

        <p className="font-normal text-xl text-zinc-500">"{testimonial}"</p>
      </article>

      <div className={`flex flex-1 ${isEvenIndex ? "" : "lg:order-2"}`}>
        {youTubeVideo.length > 0 ? (
          <iframe
            src={`https://www.youtube.com/embed/${youTubeVideo}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="md:w-[660px] md:h-[315px] min-[540px]:w-[400px]"
          ></iframe>
        ) : (
          <div className="flex justify-center items-center w-[300px] min-[540px]:w-[400px] md:w-[660px] h-40 md:h-[315px] bg-black">
            <p className="text-slate-100 font-medium text-lg">
              No Testimonial Video
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
