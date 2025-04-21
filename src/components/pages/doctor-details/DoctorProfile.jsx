import React from "react";
import useStore from "../../../store";
import DoctorSlots from "./DoctorSlots";

export default function DoctorProfile({ doctor, handleSelectSlot }) {
  const { bookedAppointments } = useStore();
  console.log(bookedAppointments?.[1]?.slot.includes("10:00 AM"));

  return (
    <>
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <img
          src={doctor?.photo}
          alt={`Dr. ${doctor?.name}`}
          className="w-52 h-52 object-cover rounded-full border-4 border-blue-600 shadow-lg"
        />
      </div>
      {/* Doctor Details */}
      <div className="text-center md:text-left mt-6 md:mt-0 flex-1">
        <h1 className="text-4xl font-bold text-gray-900">{doctor?.name}</h1>
        <p className="text-xl text-blue-700 mt-2 font-semibold">
          {doctor?.specialty}
        </p>
        <p className="text-sm text-gray-500 mt-1">{doctor?.location}</p>
        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Availability:</span>
            {doctor?.availability.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Rating:</span>
            <span className="text-yellow-500">⭐ {doctor?.rating}</span>
          </p>
        </div>

        {/* Slots */}
        <DoctorSlots
          {...{
            doctor,
            bookedAppointments,
            handleSelectSlot,
          }}
        />
      </div>
    </>
  );
}
