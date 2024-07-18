import React, { useState } from 'react';
import Calendar from './components/Calendar';
import TimeSlots from './components/TimeSlots';
import './App.css'; 

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const handleSubmit = () => {
    alert("Appointment Scheduled! Please check your email for a confirmation");
  };

  return (
    <div className="app-container">
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
      <h1>Welcome to the LYKAS Appointment Scheduler!</h1>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {selectedDate && (
        <TimeSlots
          selectedDate={selectedDate}
          selectedTimeSlot={selectedTimeSlot}
          setSelectedTimeSlot={setSelectedTimeSlot}
        />
      )}
      {selectedTimeSlot && (
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default App;