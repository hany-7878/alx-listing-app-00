import React from "react";
import { Review } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>

      {reviews.map((review, i) => (
        <div key={i} className="border-b pb-4 mb-4">
          <div className="flex items-center gap-3">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold">{review.name}</p>
              <p className="text-yellow-500">{review.rating} ⭐</p>
            </div>
          </div>
          <p className="mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
