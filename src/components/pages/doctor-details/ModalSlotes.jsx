import React, { useState } from "react";

export default function ModalSlotes({
  doctor,
  selectedSlot,
  setSelectedSlot,
  handleConfirmAppointment,
}) {
  // State to control toast visibility and message
  const [toastMessage, setToastMessage] = useState(null);

  // Function to handle confirmation and show toast
  const handleConfirmation = () => {
    setToastMessage("Appointment confirmed!"); // Set the toast message
    handleConfirmAppointment(); // Handle the appointment confirmation

    // Hide the toast after 3 seconds
    setTimeout(() => {
      setToastMessage(null); // Reset toast message to hide it
    }, 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-2xl animate-fadeIn">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Confirm Appointment
        </h2>
        <p className="text-gray-700">
          Are you sure you want to book an appointment with
          <strong>{doctor?.name}</strong> for
          <strong>{selectedSlot}</strong>?
        </p>
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={handleConfirmation}
            className="cursor-pointer px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition"
          >
            Confirm
          </button>
          <button
            onClick={() => setSelectedSlot(null)}
            className="cursor-pointer px-5 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Toast Message */}
      {toastMessage && (
        <div
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-60"
          role="alert"
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
