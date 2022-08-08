import React from "react";
import { format } from "date-fns";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formatDate = format(date, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          toast(`Appointment is set ${formatDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an appointment is on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        //to close the modal
        refetch();
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-semibold text-xl text-secondary">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-5"
          >
            <input
              className="input w-full max-w-md input-bordered"
              type="text"
              disabled
              name=""
              value={format(date, "PP")}
              id="email"
              placeholder="Email Address"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-md"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              className="input w-full max-w-md input-bordered"
              type="text"
              name="name"
              id="name"
              disabled
              value={user?.displayName}
            />
            <input
              className="input w-full max-w-md input-bordered"
              type="email"
              name="email"
              id="email"
              disabled
              value={user?.email}
            />

            <input
              className="input w-full max-w-md input-bordered"
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
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
