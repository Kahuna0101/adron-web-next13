"use client";

import { useState } from "react";
import PropertyCard from "../cards/PropertyCard";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const AllProperties = ({ properties }) => {
  const [sortDirection, setSortDirection] = useState("asc");
  const [filters, setFilters] = useState("");
  const [selected, setSelected] = useState("all");

  const filteredProperties = properties
    .filter((property) => {
      if (selected === "all") {
        return true;
      } else {
        return property.propertyType === selected;
      }
    })
    .filter((property) =>
      property.title.toLowerCase().includes(filters.toLowerCase())
    );

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortDirection === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const toggleSortDirection = () => {
    if (sortDirection === "asc") {
      setSortDirection("desc");
    } else {
      setSortDirection("asc");
    }
  };

  return (
    <section>
      <div className="flex flex-col flex-wrap justify-center mt-3 mb-3 gap-4">
        <div className="flex flex-col md:flex-row w-full gap-6 justify-center items-center">
        <Button className="flex flex-1 bg-green-600 hover:bg-green-500 text-base font-medium" onClick={toggleSortDirection}>
          {`Sort by Price ${sortDirection === "asc" ? "↑" : "↓"}`}
        </Button>
        <Input
          className="flex flex-1 account-form_input no-focus border-green-400"
          type="text"
          placeholder="Search by Property Name"
          value={filters}
          onChange={(e) => setFilters(e.target.value)}
        />
        <select
          className="flex flex-1 hover:opacity-90 border border-green-400 p-2 rounded-md text-base font-medium"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {["All", "Land", "House"].map((type) => (
            <option key={type} value={type.toLowerCase()}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {sortedProperties.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            location={property.location}
            title={property.title}
            propertyType={property.propertyType}
            propertyStatus={property.propertyStatus}
            price={property.price}
            area={property.area}
            rooms={property.rooms}
            baths={property.baths}
            image={property.images[0]}
          />
        ))}
      </div>
      </div>
      
    </section>
  );
};

export default AllProperties;
