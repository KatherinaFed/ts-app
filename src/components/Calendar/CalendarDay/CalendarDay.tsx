import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DayContainer } from './styles';
import GlobalContext from '../../../context/GlobalContext';
import { useAppSelector } from '../../../store/store';

const CalendarDay = ({ day }: any) => {
  const { setDaySelected, setShowEventModal } = useContext(GlobalContext);
  const { events } = useAppSelector((state) => state.event);

  const eventOfDay = events.filter(
    (evt) => dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
  );

  const countOfEvents = () => {
    let result = null;

    if (eventOfDay.length > 3) {
      result = events
        .slice(0, 3)
        .map((evt, i) => <div key={i}>{evt.title}</div>);
        
    } else {
      result = eventOfDay.map((evt, i) => <div key={i}>{evt.title}</div>);
    }

    return result;
  };

  const isCurrentDay = day.format('DD-MM-YY') === dayjs().format('DD-MM-YY');

  return (
    <DayContainer isCurrentDay={isCurrentDay}>
      <header className="header">
        <p className="day">{day.format('DD')}</p>
      </header>
      <div
        style={{ flex: 1, cursor: 'pointer' }}
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {<p>{`${eventOfDay.length} events`}</p>}
        {countOfEvents()}
      </div>
    </DayContainer>
  );
};

export default CalendarDay;
