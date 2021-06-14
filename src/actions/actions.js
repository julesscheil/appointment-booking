import { SELECT_APPOINTMENT, UPDATE_APPOINTMENT, OPEN_CLOSE_MODAL } from "./types";

export const selectAppointment = appointmentTime => ({
  type: SELECT_APPOINTMENT,
  payload: {
    time: appointmentTime.time,
    userName: appointmentTime.userName,
    phoneNumber: appointmentTime.phoneNumber,
    avail: appointmentTime.avail,
  },
});

export const updateAppointment = (apptData) => ({
  type: UPDATE_APPOINTMENT,
  payload: {
    apptData,
  },
  apptData,
});

export const setModal = () => ({
  type: OPEN_CLOSE_MODAL,
})

// export default { updateAppointment, selectAppointment };
