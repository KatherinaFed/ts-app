import React, { useState } from 'react';
import CalendarDay from '../CalendarDay/CalendarDay';
import { MonthContainer } from './styles';

type TypeMonth = {
  month: object[][];
};

const CalendarMonth = ({ month }: TypeMonth) => {
  // console.log(month)
  return (
    <MonthContainer>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day: object, index: number) => {
            return <CalendarDay key={index} day={day} rowIndex={index} />;
          })}
        </React.Fragment>
      ))}
    </MonthContainer>
  );
};

export default CalendarMonth;
