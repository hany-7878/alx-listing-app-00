import Image from "next/image";
import Link from "next/link";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import { useState } from "react";
import Button from "@/components/common/Button";

const filters = ["Top Villa", "Self Checkin", "Luxury", "Beachfront", "City View"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filtered listings
  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(activeFilter)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section className="h-96 bg-cover bg-center flex flex-col justify-center items-center text-white bg-[url('/assets/Hero/HeroSection.jpg')]">
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="mt-2 text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Pills */}
      <section className="p-6 flex gap-3 flex-wrap justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() =>
              setActiveFilter(activeFilter === filter ? null : filter)
            }
            aria-pressed={activeFilter === filter}
            className={`px-4 py-2 rounded-full transition ${
              activeFilter === filter
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </section>

      {/* Listings */}
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property: PropertyProps) => (
          <Link href={`/property/${property.id}`} key={property.id}>
            <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
              <div className="relative w-full h-48">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                />
                {property.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    {property.discount}% OFF
                  </span>
                )}
              </div>
              <div className="p-4">
                <h2 className="font-bold text-lg">{property.name}</h2>
                <p className="text-gray-600">
                  {property.address.city}, {property.address.country}
                </p>
                <p className="text-gray-800 font-semibold">${property.price}</p>
                <p className="text-yellow-500">⭐ {property.rating}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {property.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
