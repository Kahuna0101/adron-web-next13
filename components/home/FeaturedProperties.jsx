import Link from "next/link";
import PropertySlider from "../shared/PropertySlider";
import { Button } from "../ui/button";
import { getFeaturedProperties } from "@/lib/actions/property.actions";

export default async function FeaturedProperties() {
  const result = await getFeaturedProperties();

  return (
    <section id="featured">
      <div className="w-full text-gray-600 p-12 md:p-36">
        <h2 className="text-4xl sm:text-5xl font-light px-8 text-center">
          Discover Our Featured Properties
        </h2>
        <p className="text-2xl font-light mt-4 mb-8 px-8 text-center">
          A selection of our best properties
        </p>
        <PropertySlider featuredProperties={result} />
        <div className="flex justify-center">
          <Link href="/properties">
            <Button className="mt-6 px-8 py-6 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold flex items-center gap-2 transition-transform duration-300 ease-in-out hover:transform hover:scale-105">
              View All Properties for Sale
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
