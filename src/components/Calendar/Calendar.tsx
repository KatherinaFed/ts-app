import { useContext, useEffect, useState } from 'react';
import { getMonth } from '../../utils/getMonth';
import GlobalContext from '../../context/GlobalContext';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarMonth from './CalendarMonth/CalendarMonth';
import { Container, MainContainer } from './styles';
import EventModal from '../Modal/EventModal';

const Calendar = () => {
  const [currenMonth, setCurrentMonth] = useState<Array<Array<object>>>(
    getMonth()
  );
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
      <CalendarHeader />
      <MainContainer>
        <Container>
          <CalendarMonth month={currenMonth} />
        </Container>
      </MainContainer>
    </>
  );
};

export default Calendar;

{
  /* <MainContainer>
      <Container>
        <CalendarHeader date={date} setDate={setDate} />
        <CalendarContainer>
          {dayOfMonth.map((day: string, i) => (
            <DayContainer>
              <p key={i} className='day'>{day}</p>
            </DayContainer>
          ))}
        </CalendarContainer>
      </Container>
    </MainContainer> */
}
