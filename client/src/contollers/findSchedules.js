import axios from 'axios'
import { useScheduleContext } from '../contexts/ScheduleContext';
import toast from 'react-hot-toast';

export const findSchedules = async (source, destination, date) => {
  if(!source || !destination || !date){
    console.log("Invalid Details");
    return {
      success : false,
      message : "Invalid Details",
    };
  }
  try{
    const response = await axios.get(`/api/schedules?source=${source}&destination=${destination}&date=${date}`);
    const availableSchedules = response.data;
    
    return {
      success : true,
      message : "Schedules Found",
      data : availableSchedules
    };

  } catch(error){
    console.log("Error occurred in searching available schedules ", error.message)
    return {
      success : false,
      message : "Schedules Not Found",
    };

  }
}