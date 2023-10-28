import {
  FeaturedProperties,
  FindEstates,
  Hero,
  Testimonials,
  TheTeam,
} from "@/components/home";

const Page = () => {
  return (
    <>
      <Hero />
      {/*<PromoSlider />*/}
      <FeaturedProperties />
      <FindEstates />
      <TheTeam />
      <Testimonials />
    </>
  );
};

export default Page;
