import { getRecentProperties } from "@/lib/actions/property.actions"
import RecentPropertyCard from "../cards/RecentPropertyCard";

export default async function RecentProperties() {
    const results = await getRecentProperties();
    
  return (
    <section className="sticky top-28">
      <h2 className="font-semibold text-xl">Recent Properties</h2>

      {results.map((result) => (
        <RecentPropertyCard
          key={result._id}
          id={result._id}
          image={result.images[0]}
          title={result.title}
          location={result.location}
          price={result.price.toLocaleString()}
        />
      ))}
    </section>
  )
}