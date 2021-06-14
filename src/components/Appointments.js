import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppointmentTimes from './AppointmentTimes';
import CreateModal from './CreateModal';

function Appointments(props) {

    const dispatch = useDispatch();
    const openModal=() => {
       dispatch({type: 'setModal'});
    }
    const closeModal=()=> {
        dispatch({type:'setModal'});
    }


    const appointmentData = useSelector(state => state.appointmentData);
    let appointmentsArr=appointmentData.map(appointment =>{
        return (
            <div onClick={() => openModal()} key={appointment.time}>
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
         <CreateModal
         show={props.open}
         onHide={closeModal}
         />
    </div>
   
)
};

export default Appointments;