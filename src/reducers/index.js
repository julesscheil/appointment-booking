// reducers - 1 reducer

import { SELECT_APPOINTMENT, UPDATE_APPOINTMENT } from "../actions/types";

function rootReducer(state = getInitState(), action) {
switch (action.type) {
  case SELECT_APPOINTMENT:
    return {
      ...state,
      selectedAppt: action.payload
    }
    case UPDATE_APPOINTMENT:
      return {
        ...state,
        apptData: action.payload.apptData
      }
      default:
        return state;
}

}

const getInitState = () => {
  var local = JSON.parse(localStorage.getItem('data'));
  if(local) {
    return local
  } else {
    return initState
  }
}

const initState = {
  apptData: [
    {
      time: "9:00am-10:00am",
      userName: "",
      phoneNumber: "",
      avail: false,
    },
    {
      time: "10:00am-11:00am",
      userName: "",
      phoneNumber: "",
      avail: false,
    },
    {
      time: "11:00am-12:00am",
      userName: "",
      phoneNumber: "",
      avail: false,
    },
    {
      time: "12:00pm-1:00pm",
      userName: "",
      phoneNumber: "",
      avail: false,
    },
    {
      time: "1:00pm-2:00pm",
      userName: "",
      phoneNumber: "",
      avail: false,
    },
    {
      time: "2:00pm-3:00pm",
      userName: "",
      phoneNumber: "",
      avail: false,
    },
    {
      time: "3:00pm-4:00pm",
      userName: "",
      phoneNumber: "",
      avail: false,
    },
    {
      time: "4:00pm-5:00pm",
      userName: "",
      phoneNumber: "",
      avail: false,
    },
  ],
  open:false,
  selectedAppt: {
    time: "",
    userName: "",
    phoneNumber: "",
    avail: false,
  },
};


export default rootReducer;