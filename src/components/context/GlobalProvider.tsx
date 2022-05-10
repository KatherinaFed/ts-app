import dayjs from 'dayjs';
import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

const GlobalProvider = ({ children }: any) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
