import { create } from 'zustand';

const useStore = create((set) => ({
  bookedAppointments: [],

  // Book the appointment with all details
  bookAppointment: (doctorName, specialty, location, slot) => {
    set((state) => ({
      bookedAppointments: [
        ...state.bookedAppointments,
        { doctorName, specialty, location, slot, },
      ],
    }));
  },

  // Reset the appointments state
  resetAppointments: () => set({ bookedAppointments: [] }),
}));

export default useStore;
