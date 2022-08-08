import React from "react";

const AppointmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body ">
        <h2 className="card-title text-secondary text-xl font-semibold">
          {name}
        </h2>
        <p className="text-sm">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Not Slot Available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white text-sm font-bold"
          >
            book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
