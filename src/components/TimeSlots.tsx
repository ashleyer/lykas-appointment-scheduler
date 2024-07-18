import React, { useState } from 'react';
import moment from 'moment-timezone';
import './TimeSlots.css'; 

interface TimeSlotsProps {
  selectedDate: Date;
  selectedTimeSlot: string | null;
  setSelectedTimeSlot: (timeSlot: string | null) => void;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({ selectedDate, selectedTimeSlot, setSelectedTimeSlot }) => {
  const [timezone, setTimezone] = useState<string>(moment.tz.guess());
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleTimezoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimezone(event.target.value);
  };

  const handleTimeSlotClick = (timeSlot: string) => {
    const selectedMoment = moment.tz(`${selectedDate.toDateString()} ${timeSlot}`, 'ddd MMM DD YYYY hh:mm A', timezone);
    setSelectedTimeSlot(selectedMoment.format('hh:mm A'));
  };

  return (
    <div className="time-slots-container">
      <h3>Select your timezone, then pick an available time slot for an appointment on {selectedDate.toDateString()}:</h3>
      <select value={timezone} onChange={handleTimezoneChange} className="timezone-select">
        {moment.tz.names().map((tz) => (
          <option key={tz} value={tz}>{tz}</option>
        ))}
      </select>
      <ul className="time-slots-list">
        {timeSlots.map((timeSlot) => (
          <li
            key={timeSlot}
            className={`time-slot ${selectedTimeSlot === timeSlot ? 'selected' : ''}`}
            onClick={() => handleTimeSlotClick(timeSlot)}
          >
            {timeSlot}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSlots;