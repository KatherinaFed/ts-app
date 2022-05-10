import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DayContainer } from './styles';

type TypeProps = {
  day: object;
  rowIndex: number;
}

const CalendarDay = ({ day, rowIndex }: any) => {

  const isCurrentDay = day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");

  return (
    <DayContainer isCurrentDay={isCurrentDay}>
      <header className="header">
        {/* {rowIndex === 0 && (
          <p className="nameOfWeek">{day.format('ddd').toUpperCase()}</p>
        )} */}
        <p className='day'>{day.format('DD')}</p>
      </header>
    </DayContainer>
  );
};

export default CalendarDay;
