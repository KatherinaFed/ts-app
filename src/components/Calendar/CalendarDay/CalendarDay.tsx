import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DayContainer } from './styles';
import GlobalContext from '../../../context/GlobalContext';
import { useAppSelector } from '../../../store/store';

const CalendarDay = ({ day, rowIndex }: any) => {
  const { setDaySelected, setShowEventModal } = useContext(GlobalContext);
  const { events } = useAppSelector((state) => state.event);

  const eventOfDay = events.filter(
    (evt) => dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
  );

  const countOfEvents = () => {
    const word = eventOfDay.length <= 1 ? 'event' : 'events';
    let result = null;

    if (eventOfDay.length === 0) {
      result = '';
    } else {
      result = <p className="events">{`${eventOfDay.length} ${word}`}</p>;
    }

    return result;
  };

  const isCurrentDay = day.format('DD-MM-YY') === dayjs().format('DD-MM-YY');
  const isWeekend = rowIndex === 0;

  return (
    <DayContainer isCurrentDay={isCurrentDay} index={isWeekend}>
      <header className="header">
        <p className="day">{day.format('DD')}</p>
      </header>
      <div
        className="eventWrapper"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {countOfEvents()}
      </div>
    </DayContainer>
  );
};

export default CalendarDay;
