import React from "react";

export default function ToastMessage({ toastMessage }) {
  return (
    <div
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-60 animate-pulse"
      role="alert"
    >
      {toastMessage}
    </div>
  );
}
