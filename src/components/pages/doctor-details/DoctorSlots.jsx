import React from "react";

export default function DoctorSlots({
  doctor,
  bookedAppointments,
  handleSelectSlot,
}) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Available Time Slots
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {doctor?.slots.map((slot, index) => {
          const isDisabled = bookedAppointments?.some(
            (appointment) => appointment.slot === slot
          );

          return (
            <button
              key={index}
              disabled={isDisabled}
              onClick={() => handleSelectSlot(slot)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition focus:outline-none ${
                isDisabled
                  ? "bg-gray-200 text-gray-500 border border-gray-300 cursor-not-allowed"
                  : "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 cursor-pointer focus:ring-2 focus:ring-blue-500"
              }`}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
}
