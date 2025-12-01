import Image from "next/image";
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-4 mt-2 text-gray-700">
          <span className="text-yellow-500 font-semibold">
            ⭐ {property.rating} stars
          </span>
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>
      </header>

      {/* Image Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Image
          src={property.image}
          alt={property.name}
          width={1200}
          height={600}
          className="col-span-1 md:col-span-2 w-full h-96 object-cover rounded-lg"
        />
        {/* Optional additional images can be added here */}
      </section>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-gray-800 leading-relaxed">{property.description}</p>
      </section>

      {/* Amenities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
        <ul className="flex flex-wrap gap-3">
          {property.category.map((amenity, index) => (
            <li
              key={index}
              className="bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              {amenity}
            </li>
          ))}
        </ul>
      </section>

      {/* Review Section */}
      <section className="mb-12">
        <ReviewSection reviews={property.reviews} />
      </section>

      {/* Booking Section */}
      <section>
        <BookingSection price={property.price} />
      </section>
    </div>
  );
};

export default PropertyDetail;
