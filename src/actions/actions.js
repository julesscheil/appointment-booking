import { SELECT_APPOINTMENT, UPDATE_APPOINTMENT } from "./types";

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

// export default { updateAppointment, selectAppointment };
