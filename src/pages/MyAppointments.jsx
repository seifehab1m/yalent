import React from "react";
import { Link } from "react-router"; // Import Link for routing
import useStore from "../store";

export default function MyAppointments() {
  const { bookedAppointments } = useStore();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        My Appointments
      </h2>

      {bookedAppointments?.length === 0 ? (
        <div
          className="text-center text-gray-500 text-lg bg-gray-100 p-8 rounded-xl shadow-inner"
          role="status"
        >
          No appointments booked yet.
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookedAppointments.map((appointment, index) => (
            <Link
              to={`/doctor/${appointment?.id}`} // Navigate to the doctor's profile page
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-gray-200"
              role="listitem"
            >
              <div className="flex flex-col space-y-2">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700">
                    {appointment?.doctorName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {appointment?.specialty}
                  </p>
                  <p className="text-sm text-gray-500">
                    {appointment?.location}
                  </p>
                </div>
                <div className="mt-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
                    {appointment?.slot}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      )}
      <div className="mt-12 text-center">
        <Link to="/">
          <button className="cursor-pointer px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
