import {
    SELECT_APPOINTMENT,
    UPDATE_APPOINTMENT
} from './types';

const selectAppointment = appointment => ({
    type: SELECT_APPOINTMENT,
    payload: {
        time: appointment.time,
        userName: appointment.userName,
        phoneNumber: appointment.phoneNumber,
        avail: appointment.avail,
    }
});

const updateAppointment = (appointment) => ({
    type: UPDATE_APPOINTMENT,
    payload: {
        appointment
    },
    appointment
});

export default {updateAppointment, selectAppointment};