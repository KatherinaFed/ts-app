import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import GlobalContext from './GlobalContext';

const GlobalProvider = ({ children }: any) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModal, setShowEventModal] = useState(false);
  const [daySelected, setDaySelected] = useState<any>(dayjs());
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        showEventModal,
        setShowEventModal,
        daySelected,
        setDaySelected,
        selectedEvent,
        setSelectedEvent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
