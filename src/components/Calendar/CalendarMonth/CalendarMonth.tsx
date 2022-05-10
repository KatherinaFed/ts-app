import React, { useState } from 'react';
import CalendarDay from '../CalendarDay/CalendarDay';
import { MonthContainer } from './styles';

type TypeMonth = {
  month: object[][];
};

const CalendarMonth = ({ month }: TypeMonth) => {

  return (
    <MonthContainer>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day: object, index: number) => {
            return <CalendarDay day={day} key={index} rowIndex={i} />;
          })}
        </React.Fragment>
      ))}
    </MonthContainer>
  );
};

export default CalendarMonth;
