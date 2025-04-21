import React from "react";
import { Link } from "react-router";

export default function DoctorCardHome({ doctor }) {
  const cardId = `doctor-${doctor?.id}`;

  return (
    <Link
      key={doctor?.id}
      to={`/doctor/${doctor?.id}`}
      className="group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
      role="link"
      aria-labelledby={`${cardId}-name`}
      aria-describedby={`${cardId}-specialty ${cardId}-location ${cardId}-availability ${cardId}-rating`}
    >
      <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 p-5 flex flex-col h-full">
        <img
          src={doctor?.photo}
          alt={`Dr. ${doctor?.name}`}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h2
          id={`${cardId}-name`}
          className="text-xl font-semibold text-gray-900 group-hover:text-blue-700"
        >
          {doctor?.name}
        </h2>
        <p id={`${cardId}-specialty`} className="text-sm text-gray-500">
          {doctor?.specialty}
        </p>
        <p id={`${cardId}-location`} className="text-sm text-gray-500">
          {doctor?.location}
        </p>
        <p id={`${cardId}-availability`} className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">Availability:</span>{" "}
          {doctor?.availability.join(", ")}
        </p>
        <p id={`${cardId}-rating`} className="text-sm text-yellow-600 mt-1">
          ⭐ {doctor?.rating}
        </p>
        <button
          className="cursor-pointer bg-blue-600 mt-6 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          aria-label={`Book appointment with Dr. ${doctor?.name}`}
        >
          Book Appointment
        </button>
      </article>
    </Link>
  );
}
