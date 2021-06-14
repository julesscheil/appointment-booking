import React from 'react';
import { useSelector } from 'react-redux';
import AppointmentTimes from './AppointmentTimes';
// import * as Action from '../actions/actions';

function Appointments() {
    const appointmentData = useSelector(state => state.appointmentData);

    let appointmentsArr=appointmentData.map(appointment =>{
        return (
            <div>
                <AppointmentTimes time={appointment.time}
                userName={appointment.userName}
                phoneNumber ={appointment.phoneNumber}
                avail={appointment.avail}
                />
            </div>
        )
    })
return (
    <div>
        {appointmentsArr}
    </div>
)
};

export default Appointments;