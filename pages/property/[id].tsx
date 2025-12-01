import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const PropertyPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null; // Wait until id is ready

  const property: PropertyProps | undefined = PROPERTYLISTINGSAMPLE.find((p) => p.id.toString() === id);
 

  if (!property) return <p>Property not found</p>;

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Property Detail */}
      <section className="mb-12">
        <PropertyDetail property={property} />
      </section>

      {/* Booking Section */}
      <section className="mb-12">
        <BookingSection price={property.price} />
      </section>

      {/* Review Section */}
      <section className="mb-12">
        <ReviewSection reviews={property.reviews} />
      </section>
    </main>
  );
};

export default PropertyPage;
