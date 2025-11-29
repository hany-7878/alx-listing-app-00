import React, { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calcTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const nights =
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
      (1000 * 60 * 60 * 24);

    return nights > 0 ? nights * price : 0;
  };

  return (
    <div className="bg-white p-5 shadow-lg rounded-lg border">
      <h3 className="text-xl font-semibold">${price}/night</h3>
    <div className="mt-4">
      <label htmlFor="checkin">Check-in</label>
       <input
         id="checkin"
         type="date"
         className="border p-2 w-full mt-2"
         title="Select check-in date"/>
    </div>

  <div className="mt-4">
  <label htmlFor="checkout">Check-out</label>
  <input
    id="checkout"
    type="date"
    className="border p-2 w-full mt-2"
    title="Select check-out date"
  />
</div>


      <div className="mt-4 text-lg">
        Total: <strong>${calcTotal()}</strong>
      </div>

      <button className="mt-5 bg-green-600 text-white py-2 w-full rounded-md">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
