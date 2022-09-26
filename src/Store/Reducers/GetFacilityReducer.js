import {
  GET_FACILITY_DATA,
  GET_SCHEDULES_DATA,
  LOGOUT,
  RESET_FACILITY_DATA,
  RESET_SCHEDULES_DATA,
} from '../Types/actions_type';

let initialSate = {
  getFacilityData: null,
  getFacilityData_list: [],
  getShedulesData: null,
  getShedulesData_list: [],
};

const GetFacilityReducer = (state = initialSate, action) => {
  switch (action.type) {
    case GET_FACILITY_DATA:
      let getFacilityData_list_copy = [];
      getFacilityData_list_copy = [
        ...state.getFacilityData_list,
        ...action.payload.data,
      ];
      state = {
        ...state,
        getFacilityData: action.payload,
        getFacilityData_list: getFacilityData_list_copy,
      };
      break;
    case RESET_FACILITY_DATA:
      state = {
        ...state,
        getFacilityData: null,
        getFacilityData_list: [],
      };
      break;

    case GET_SCHEDULES_DATA:
      console.log('ACTION', action.payload);
      // let getShedulesData_list_copy = [];
      // getShedulesData_list_copy = [
      //   // ...state.getShedulesData_list,
      //   ...action.payload.data,
      // ];
      state = {
        ...state,
        getShedulesData: action.payload,
        getShedulesData_list: action.payload,
      };
      break;
    case RESET_SCHEDULES_DATA:
      state = {
        ...state,
        getShedulesData: null,
        getShedulesData_list: [],
      };
      break;

    case LOGOUT:
      state = {
        getFacilityData: null,
        getFacilityData_list: [],
        getShedulesData: null,
        getShedulesData_list: [],
      };
      break;

    default:
      break;
  }
  return state;
};

export default GetFacilityReducer;
