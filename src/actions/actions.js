import { SELECT_APPOINTMENT, UPDATE_APPOINTMENT } from "./types";

export const selectAppointment = (apptData) => ({
  type: SELECT_APPOINTMENT,
  payload: {
    time: apptData.time,
    userName: apptData.userName,
    phoneNumber: apptData.phoneNumber,
    avail: apptData.avail,
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
