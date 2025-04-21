// pages/Home.jsx
import React, { useState } from "react";
import { doctors } from "../network/mockData";
import { Link } from "react-router"; // ✅ FIXED: 'react-router-dom' not 'react-router'
import DoctorCardHome from "../components/pages/home/DoctorCardHome";
import DoctorsNotFound from "../components/pages/home/DoctorsNotFound";

export default function Home() {
  const [filters, setFilters] = useState({
    specialty: "",
    availability: "",
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e?.target?.value,
    });
  };

  const filteredDoctors = doctors?.filter((doctor) => {
    const specialtyMatch = filters?.specialty
      ? doctor?.specialty
          .toLowerCase()
          .includes(filters?.specialty?.toLowerCase())
      : true;
    const availabilityMatch = filters?.availability
      ? doctor?.availability.some((day) =>
          day.toLowerCase().includes(filters?.availability?.toLowerCase())
        )
      : true;
    return specialtyMatch && availabilityMatch;
  });

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-4" role="main">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">
          Doctor Directory
        </h1>

        {/* Filters */}
        <section
          className="flex flex-wrap gap-6 justify-center items-end mb-10"
          aria-labelledby="filter-heading"
        >
          <h2 id="filter-heading" className="sr-only">
            Filter doctors by specialty and availability
          </h2>

          <div className="flex flex-col">
            <label
              htmlFor="specialty"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Specialty
            </label>
            <select
              id="specialty"
              name="specialty"
              aria-label="Filter by Specialty"
              value={filters?.specialty}
              onChange={handleFilterChange}
              className="cursor-pointer border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="">All</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Dermatology">Dermatology</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="availability"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              aria-label="Filter by Availability Day"
              value={filters?.availability}
              onChange={handleFilterChange}
              className="cursor-pointer border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="">All</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </select>
          </div>
        </section>

        {/* Doctors */}
        <section
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Doctor Cards List"
        >
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => {
              return (
                <DoctorCardHome key={doctor?.id} doctor={doctor} />
              );
            })
          ) : (
            <DoctorsNotFound />
          )}
        </section>
      </div>
    </main>
  );
}
