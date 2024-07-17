import React, { useState } from 'react';
import Calendar from './components/Calendar';
import TimeSlots from './components/TimeSlots';

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  return (
    <div className="App">
      <h1>Calendly Clone</h1>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {selectedDate && (
        <TimeSlots
          selectedDate={selectedDate}
          selectedTimeSlot={selectedTimeSlot}
          setSelectedTimeSlot={setSelectedTimeSlot}
          setSelectedDate={setSelectedDate} // Pass setSelectedDate to TimeSlots component
        />
      )}
    </div>
  );
};

export default App;