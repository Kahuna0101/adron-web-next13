import { getPromoPosts } from "@/lib/actions/blog.action";
import PromoSlider from "../shared/PromoSlider";

export default async function Promos () {
    const result = await getPromoPosts();

  return (
    <PromoSlider promos={result}/>
  )
}