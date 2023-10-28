import { Bath, Bed, LandPlot } from "lucide-react";
import { GiGate } from "react-icons/gi";

const PropertyStats = ({
  rooms,
  baths,
  price,
  sqSize,
  gateHouse,
  propertyType,
}) => {
  return (
    <section className="p-6 mb-6">
      {propertyType === "land" ? (
        <div className="flex flex-col sm:flex-row items-center justify-around text-lg lg:text-xl font-bold text-gray-500 gap-6 dark:text-slate-50">
          <div className="flex flex-col items-center gap-3">
            <span>SIZE</span>
            <div className="flex items-center gap-2">
              <LandPlot />
              {sqSize}
              <sup>Sq M</sup>
            </div>
          </div>
          <div className="border-r h-10 md:h-20"></div>
          <div className="flex flex-col items-center gap-3">
            <span>GATE HOUSE</span>
            <div className="flex items-center gap-2">
              <GiGate />
              <span className="uppercase">{gateHouse}</span>
            </div>
          </div>
          <div className="border-r h-10 md:h-20"></div>
          <div className="flex flex-col items-center gap-3">
            <span>PRICE</span>
            <div className="flex items-center gap-2">
              ₦ {price.toLocaleString()}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center justify-around text-lg lg:text-xl font-bold text-gray-500 gap-4 dark:text-slate-50">
          <div className="flex flex-col items-center gap-3">
            <span>BEDS</span>
            <div className="flex items-center gap-2">
              <Bed />
              <span>{rooms}</span>
            </div>
          </div>
          <div className="border-r h-10 md:h-20"></div>
          <div className="flex flex-col items-center gap-3">
            <span>BATHS</span>
            <div className="flex items-center gap-2">
              <Bath />
              <span>{baths}</span>
            </div>
          </div>
          <div className="border-r h-10 md:h-20"></div>
          <div className="flex flex-col items-center gap-3">
            <span>SIZE</span>
            <div className="flex items-center gap-2">
              <LandPlot />
              {sqSize}
              <sup>Sq M</sup>
            </div>
          </div>
          <div className="border-r h-10 md:h-20"></div>
          <div className="flex flex-col items-center gap-3">
            <span>PRICE</span>
            <div className="flex items-center gap-2">
              ₦ {price.toLocaleString()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PropertyStats;
