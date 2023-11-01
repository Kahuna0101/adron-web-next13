import PhotoSlider from "@/components/shared/PhotoSlider";
import PropertyStats from "@/components/shared/PropertyStats";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProperty } from "@/lib/actions/property.actions";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../../loading";

// Metadata
export async function generateMetadata({ params }) {
  const property = await getProperty(params.id);

  return {
    title: property.title,
    other: {
      "og:url": "adronhomesproperties.com",
      "og:image":
        "https://res.cloudinary.com/daamcwt3y/image/upload/v1693341349/logo_n24gyg.jpg",
      "og:type": "website",
    },
  };
}

export default async function Page({ params }) {
  const property = await getProperty(params.id);

  // Youtube Link Trimming
  const youTubeVideo = property.video.slice(-11);

  return (
    <section>
      <div className="p-4 md:p-36 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mt-28 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-medium text-green-800">
            {property.title}
          </h2>
          <p className="px-2 py-1 rounded text-white uppercase bg-gray-500 font-semibold text-sm relative top-10 md:top-0">
            {property.propertyType}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center text-xl text-green-600 text-center md:text-left my-3">
          <p className="flex gap-2 font-medium uppercase">
            <MapPin /> {property.location}
          </p>
          <span
            className={`px-2 py-1 rounded text-sm font-semibold ${
              property.propertyStatus === "for-sale"
                ? "bg-green-600"
                : "bg-red-600"
            } text-white uppercase`}
          >
            {property.propertyStatus}
          </span>
        </div>

        <div className="flex w-full gap-6 flex-col lg:flex-row">
          <div className="w-full lg:w-[50%]">
            <PhotoSlider images={property.images} />
          </div>

          <div className="w-full lg:w-[50%] flex flex-col">
            <PropertyStats
              rooms={property.rooms}
              baths={property.baths}
              price={property.price}
              sqSize={property.area}
              gateHouse={property.gateHouse}
              propertyType={property.propertyType}
            />

            <Card>
              <CardHeader>
                <CardTitle>
                  Description
                  <div className="border w-full mt-3" />
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-start items-start capitalize text-lg font-medium text-slate-500 dark:text-slate-200">
                {property.description}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 shadow-xl">
          {property.propertyType === "land" ? (
            <Card>
              <CardHeader>
                <CardTitle>
                  Additional Fees
                  <div className="border w-full mt-3" />
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 lg:grid-cols-2 capitalize text-lg font-bold text-gray-500 gap-2 dark:text-slate-300">
                <p>
                  Legal Documentation: ₦ {property.legalDoc.toLocaleString()}
                </p>
                <p>
                  Structural drawing: ₦{" "}
                  {property.structuralDrawing.toLocaleString()}
                </p>
                <p>Survey Plan: ₦ {property.surveyPrice.toLocaleString()}</p>
                <p>
                  Stage Certification Fee: ₦{" "}
                  {property.certificationFee.toLocaleString()}
                </p>
                <p>
                  Infrastructure/Development Fee: ₦{" "}
                  {property.devFee.toLocaleString()}
                </p>
                <p>
                  M & E Drawing-Duplex: ₦{" "}
                  {property.meFeeDuplex.toLocaleString()}
                </p>
                <p>
                  M & E Drawing-Bungalow: ₦{" "}
                  {property.meFeeBungalow.toLocaleString()}
                </p>
                <p>
                  Architectural Drawing-Duplex: ₦{" "}
                  {property.archFeeDuplex.toLocaleString()}
                </p>
                <p>
                  Architectural Drawing-Bungalow: ₦{" "}
                  {property.archFeeBungalow.toLocaleString()}
                </p>
                <p>
                  Building Approval-Duplex: ₦{" "}
                  {property.approvalDuplex.toLocaleString()}
                </p>
                <p>
                  Building Approval-Bungalow: ₦{" "}
                  {property.approvalBungalow.toLocaleString()}
                </p>
              </CardContent>
              <CardFooter>
                <p className="font-semibold text-lg text-gray-500 dark:text-slate-400">
                  Note: ₦ 0 means "To be Determined after physical allcation,
                  subject to prevailing Govt. Assessment
                </p>
              </CardFooter>
            </Card>
          ) : (
            ""
          )}
        </div>

        <div className="mt-8 flex flex-col 2xl:flex-row gap-6 md:gap-4 justify-between w-full">
          <div className="flex-1">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>
                  Video Walkthrough
                  <div className="border w-full mt-3" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96">
                  <Suspense fallback={<Loading />}>
                    <iframe
                      className=" w-full h-full"
                      src={`https://www.youtube.com/embed/${youTubeVideo}`}
                      title={`${property.title} YouTube Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </Suspense>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex-1">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>
                  3D Virtual Walkthrough
                  <div className="border w-full mt-3" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96">
                  <Suspense fallback={<Loading />}>
                    <iframe
                      style={{ top: 0, bottom: 0 }}
                      src={property.panorama}
                      title={`${property.title} 3D Virtual Video`}
                      className="w-full h-full"
                    />
                  </Suspense>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Link href="/subscribe">
          <Button className="mt-4 w-full px-6 py-3 bg-green-500 hover:bg-green-700 text-white text-lg font-semibold">
            SUBSCRIBE TODAY
          </Button>
        </Link>
      </div>
    </section>
  );
}
