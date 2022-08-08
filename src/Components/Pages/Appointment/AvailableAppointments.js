import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from 'react-query'
import Loading from "../Shared/Loading";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const {data: services, isLoading, refetch} = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then((res =>
      res.json())
    )
  );

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="my-40">
      <div className="text-center text-2xl">
        <p className=" text-secondary pb-5">
          Available Services on {format(date, "PP")}.
        </p>
        <p className="text-accent">Please select a service.</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <AppointmentService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointmentService>
        ))}
        {treatment && (
          <BookingModal
            treatment={treatment}
            date={date}
            setTreatment={setTreatment}
            refetch={refetch}
          ></BookingModal>
        )}
      </div>
    </div>
  );
};

export default AvailableAppointments;
