// pages/DoctorDetail.jsx
import React, { useState } from "react";
import { Link, useParams } from "react-router";
import { doctors } from "../network/mockData";
import useStore from "../store";
import DoctorProfile from "../components/pages/doctor-details/DoctorProfile";
import ModalSlotes from "../components/pages/doctor-details/ModalSlotes";

export default function DoctorDetail() {
  const { id } = useParams();
  const doctor = doctors.find((doctor) => doctor?.id === parseInt(id));
  const { bookAppointment, bookedAppointments } = useStore();
  const [selectedSlot, setSelectedSlot] = useState(null);

  if (!doctor) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-medium text-gray-600" role="alert">
          Doctor not found.
        </p>
      </div>
    );
  }

  const handleSelectSlot = (slot) => setSelectedSlot(slot);
  const handleConfirmAppointment = () => {
    if (selectedSlot) {
      bookAppointment(
        doctor?.id,
        doctor?.name,
        doctor?.specialty,
        doctor?.location,
        selectedSlot
      );
      setSelectedSlot(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:flex gap-10 items-center">
        <DoctorProfile doctor={doctor} handleSelectSlot={handleSelectSlot} />
      </div>

      {/* Confirmation Modal */}
      {selectedSlot && (
        <ModalSlotes
          {...{
            doctor,
            selectedSlot,
            setSelectedSlot,
            handleConfirmAppointment,
          }}
        />
      )}

      {/* Appointments Button */}
      <div className="mt-12 text-center">
        <Link to="/my-appointments">
          <button
            disabled={bookedAppointments.length === 0}
            className={`px-6 py-3 rounded-full font-semibold shadow transform transition ${
              bookedAppointments.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:scale-105 cursor-pointer"
            }`}
          >
            View My Appointments
          </button>
        </Link>
      </div>
    </div>
  );
}
