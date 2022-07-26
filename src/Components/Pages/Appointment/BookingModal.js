import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date , setTreatment}) => {
  const {_id,  name, slots } = treatment;


  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name , slot);
    setTreatment(null);
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-semibold text-xl text-secondary">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-5">
            <input
              className="input w-full max-w-md input-bordered"
              type="text"
              disabled
              name=""
              value={format(date, "PP")}
              id="email"
              placeholder="Email Address"
            />
            <select name="slot" class="select select-bordered w-full max-w-md">
                {
                  slots.map( slot => <option value={slot}>{slot}</option>)
                }
            </select>
            <input
              className="input w-full max-w-md input-bordered"
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
            />
            <input
              className="input w-full max-w-md input-bordered"
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
            />
            <input
              className="input w-full max-w-md input-bordered"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="input w-full max-w-md input-bordered bg-secondary text-white font-semibold text-xl"
              type="submit"
              value="SUBMIT"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
