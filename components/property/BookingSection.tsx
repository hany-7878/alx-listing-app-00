const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
  <label htmlFor="checkin">Check-in</label>
  <input
    id="checkin"
    type="date"
    placeholder="Select check-in date"
    className="border p-2 w-full mt-2"
  />
</div>

<div className="mt-4">
  <label htmlFor="checkout">Check-out</label>
  <input
    id="checkout"
    type="date"
    placeholder="Select check-out date"
    className="border p-2 w-full mt-2"
  />
</div>


      {/* Total payment */}
      <div className="mt-4">
        <p>Total payment: <strong>${price * 7}</strong></p>
      </div>

      {/* Reserve button */}
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md">Reserve now</button>
    </div>
  );
};

export default BookingSection;