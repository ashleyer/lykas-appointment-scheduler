import React from 'react';
import moment from 'moment-timezone';

interface TimeSlotsProps {
  selectedDate: Date;
  selectedTimeSlot: string | null;
  setSelectedTimeSlot: (timeSlot: string | null) => void; // Ensure setSelectedTimeSlot accepts string or null
  setSelectedDate: (date: Date | null) => void; // Ensure setSelectedDate accepts a Date or null
}

const TimeSlots: React.FC<TimeSlotsProps> = ({
  selectedDate,
  selectedTimeSlot,
  setSelectedTimeSlot,
  setSelectedDate,
}) => {
  const timeSlots = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];

  const timeZones = moment.tz.names();

  const handleTimeZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const timeZone = e.target.value;
    const updatedDate = moment.tz(selectedDate, timeZone).toDate();
    setSelectedTimeSlot(null); // Reset the selected time slot
    setSelectedDate(updatedDate); // Update the selected date with the new time zone
  };

  return (
    <div>
      <h2>Select a Time Slot</h2>
      <select onChange={handleTimeZoneChange}>
        {timeZones.map((tz) => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </select>
      <ul>
        {timeSlots.map((slot) => (
          <li key={slot}>
            <button
              onClick={() => setSelectedTimeSlot(slot)}
              style={{
                backgroundColor: selectedTimeSlot === slot ? 'lightblue' : 'white',
              }}
            >
              {slot}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSlots;