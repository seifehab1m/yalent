import React from 'react'

export default function DoctorsNotFound() {
  return (
    <div className="text-center mt-10" role="alert" aria-live="polite">
    <h2 className="text-2xl font-bold text-gray-800">
      No doctors found
    </h2>
    <p className="text-sm text-gray-500 mt-2">
      Try adjusting your filters or search for a different specialty or
      day.
    </p>
  </div>
  )
}
