import React, { useState } from "react";
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const tabs = ["What we offer", "Reviews", "About host"];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("What we offer");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">

      {/* LEFT SECTION */}
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold">{property.name}</h1>

        <div className="flex items-center gap-2 text-gray-600 mt-2">
          <span className="text-yellow-500">{property.rating} ⭐</span>
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 gap-3 mt-4">

          <img
            src={property.image}
            alt={property.name}
            title={property.name}
            className="col-span-2 w-full h-96 object-cover rounded-lg"
          />

          {property.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Photo ${index + 1} of ${property.name}`}
              title={`Photo ${index + 1} of ${property.name}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}

        </div> {/* ← FIXED: missing closing div */}

        {/* TABS */}
        <div className="mt-6 border-b">
          <div className="flex gap-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab ? "border-b-2 border-black" : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENT */}
        <div className="mt-6">
          {activeTab === "What we offer" && (
            <>
              <h2 className="text-xl font-semibold mb-3">Amenities</h2>
              <div className="flex flex-wrap gap-3">
                {property.category.map((a, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-3 py-1 rounded-md"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </>
          )}

          {activeTab === "Reviews" && (
            <ReviewSection reviews={property.reviews} />
          )}

          {activeTab === "About host" && (
            <p className="text-gray-700 leading-relaxed">
              {property.description}
            </p>
          )}
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="lg:col-span-1 sticky top-10 h-fit">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
