# 🏪 Doctor Booking App

A responsive and accessible doctor appointment booking app built with **React**, **Zustand**, **Tailwind CSS**, and **Vite**. The app allows users to filter doctors, view profiles, select time slots, and manage their appointments in a seamless user experience.

---

## 🚀 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/seifehab1m/yalent
   cd yalent
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 📆 Tech Stack

- **React 19**
- **React Router 7**
- **Zustand (state management)**
- **Tailwind CSS 4**
- **Vite (build tool)**

---

## 🤖 How I Used AI Tools

AI tools like **ChatGPT** were used to:

- Generate accessible and semantic UI markup.
- Refactor components and improve state management logic.
- Write this README file clearly and professionally.

---

## 🔍 App Features

- **Doctor Directory with Filters**:

  - Filter by **specialty** and **availability**.
  - If no doctor matches the filter, a friendly message is displayed.

- **Doctor Profile Page**:

  - Dynamically loads data from URL params.
  - Handles invalid doctor IDs with proper error messages.
  - Fully reloadable via URL.

- **Appointment Booking**:

  - Each doctor has available slots.
  - Selecting a slot opens a **confirmation modal**.
  - Once booked, the slot becomes **disabled**.
  - "View My Appointments" button is **disabled** until a slot is selected and confirmed.

- **Appointments View**:

  - Displays all booked appointments with corresponding doctors.

- **UX & Accessibility**:
  - Fully responsive and mobile-friendly.
  - Focus states, semantic roles, and keyboard navigation are handled.
  - Smooth toast animation from bottom.

---

## 🧪 Basic Test Cases

- ✅ Filters display correct doctors based on selected specialty and availability.
- ✅ Invalid doctor ID in URL shows “Doctor not found” message.
- ✅ Clicking a doctor's “Book Appointment” navigates to profile and loads doctor data.
- ✅ Slots are clickable, and confirmation modal appears.
- ✅ Booked slots become disabled and cannot be selected again.
- ✅ “View My Appointments” button is disabled until an appointment is booked.
- ✅ All booked appointments are listed correctly.
- ✅ App is fully responsive on all screen sizes.
- ✅ Refreshing doctor profile URL works without breaking (data loads from route).

---

## ⚠️ Known Limitations / Next Steps

- **Appointments are not persisted** on refresh.  
  📌 _Next step is to store appointment data in `localStorage` or a backend for persistence._

---

## ✅ Final Notes

Everything in the app is built with clean and maintainable code, ensuring accessibility and responsiveness. The app is easy to extend, test, and integrate with real APIs in future.

---
