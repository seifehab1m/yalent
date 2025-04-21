# 🏪 Yalent Doctor Booking App

A responsive and accessible doctor appointment booking app built with **React**, **Zustand**, **Tailwind CSS**, and **Vite**. The app allows users to filter doctors, view profiles, select time slots, and manage their appointments in a seamless user experience.

---

## 🚀 Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone <your-repo-link>
   cd doctor-booking
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
- Debug UI issues related to reactivity and Zustand state.
- Enhance user interactions with animations (like toast notifications).
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
  📌 *Next step is to store appointment data in `localStorage` or a backend for persistence.*

---

## 📂 Project Structure

```
doctor-booking/
├── components/
│   └── pages/
│       └── doctor-details/
│           ├── DoctorProfile.jsx
│           └── ModalSlotes.jsx
├── network/
│   └── mockData.js
├── pages/
│   └── DoctorDetail.jsx
├── store/
│   └── index.js
├── App.jsx
├── main.jsx
├── index.css
└── tailwind.config.js
```

---

## 📦 Package.json

```json
{
  "name": "doctor-booking",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router": "^7.5.1",
    "tailwindcss": "^4.1.4",
    "zustand": "^5.0.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.22.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react-swc": "^3.8.0",
    "eslint": "^9.22.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.1"
  }
}
```

---

## ✅ Final Notes

Everything in the app is built with clean and maintainable code, ensuring accessibility and responsiveness. The app is easy to extend, test, and integrate with real APIs in future.

---