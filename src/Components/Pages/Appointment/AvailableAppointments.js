import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date }) => {

    const [services , setServices] = useState([]);
    const [treatment , setTreatment] = useState(null);

    useEffect( () => {
        fetch('http://localhost:5000/service')
        .then( res => res.json())
        .then( data => setServices(data))

    }, [])


  return (
    <div className="my-40">
      <div className="text-center text-2xl">
        <p className=" text-secondary pb-5">
        Available Services on {format(date, "PP")}.
        </p>
        <p className="text-accent">Please select a service.</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            services.map ( service => <AppointmentService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
            ></AppointmentService>)
        }
        {treatment && <BookingModal
        treatment = {treatment}
        date={date}
        setTreatment={setTreatment}
        ></BookingModal>}
      </div>
    </div>
  );
};

export default AvailableAppointments;
