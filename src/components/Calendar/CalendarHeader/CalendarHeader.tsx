import dayjs from 'dayjs';
import { useContext } from 'react';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';
import { HeaderContainer, WeekDayContainer } from './styles';
import GlobalContext from '../../../context/GlobalContext';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => setMonthIndex(monthIndex - 1);

  const hanldeNextMonth = () => setMonthIndex(monthIndex + 1);

  return (
    <HeaderContainer>
      <div className="activity-container">ACTIVITIES</div>
      <div className="date-container">
        <button className="btn-container" onClick={handlePrevMonth}>
          <TiArrowLeftThick />
        </button>
        <p className="date">
          {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
        </p>
        <button className="btn-container" onClick={hanldeNextMonth}>
          <TiArrowRightThick />
        </button>
      </div>
      <div className="week-container">
        {weekDays.map((day: string, i) => {
          const isSunday = day === 'Sun';

          return (
            <WeekDayContainer key={i} isSunday={isSunday}>
              {day.toUpperCase()}
            </WeekDayContainer>
          );
        })}
      </div>
    </HeaderContainer>
  );
};

export default CalendarHeader;
