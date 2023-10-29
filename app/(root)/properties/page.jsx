import AllProperties from "@/components/shared/AllProperties";
import { getProperties } from "@/lib/actions/property.actions";

export const metadata = {
  title: 'Properties',
}

export default async function Page() {
  const properties = await getProperties();

  return (
    <section>
      <div className="p-12 md:p-36">
        <div className="w-full mt-16 md:mt-3">
        <h1 className="text-3xl md:text-6xl font-semibold text-center">
          {!properties.length ? "There are no Properties" : "All Properties"}
        </h1>
        <AllProperties properties={properties}/>
      </div>
      </div>
    </section>
  );
}