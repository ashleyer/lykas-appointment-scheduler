import React from 'react';
import './TimeSlots.css'; 

interface TimeSlotsProps {
  selectedDate: Date;
  selectedTimeSlot: string | null;
  setSelectedTimeSlot: (timeSlot: string | null) => void;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({ selectedDate, selectedTimeSlot, setSelectedTimeSlot }) => {
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  return (
    <div className="time-slots-container">
      <h3>Choose an Available Time for  {selectedDate.toDateString()}:</h3>
      <ul className="time-slots-list">
        {timeSlots.map((timeSlot) => (
          <li
            key={timeSlot}
            className={`time-slot ${selectedTimeSlot === timeSlot ? 'selected' : ''}`}
            onClick={() => setSelectedTimeSlot(timeSlot)}
          >
            {timeSlot}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSlots;