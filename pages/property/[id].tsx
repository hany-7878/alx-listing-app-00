import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const PropertyPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null; // Wait until id is ready

  const property: PropertyProps | undefined = PROPERTYLISTINGSAMPLE.find(
    (p) => p.id.toString() === id
  );

  if (!property) return <p>Property not found</p>;

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PropertyDetail property={property} />
    </main>
  );
};

export default PropertyPage;
