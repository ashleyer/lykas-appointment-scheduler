import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CalendarProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <h2>Select a Date:</h2>
      <DatePicker selected={selectedDate} onChange={(date: Date | null) => setSelectedDate(date)} inline />
    </div>
  );
};

export default Calendar;