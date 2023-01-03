import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const Calander = ({appointmentDate, setAppoinmentDate}) => {
  
    


    return (
        <div>
             <DayPicker
      mode="single"
      selected={appointmentDate}
      onSelect={setAppoinmentDate}
     
      
 
    />
    <p> your appointment Date: {format(appointmentDate, 'PPP')}</p>
        </div>
    );
};

export default Calander;