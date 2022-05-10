import { useContext, useEffect, useState } from 'react';
import { getMonth } from '../../utils/getMonth';
import GlobalContext from '../context/GlobalContext';
import GlobalProvider from '../context/GlobalProvider';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarMonth from './CalendarMonth/CalendarMonth';
import { Container, MainContainer } from './styles';

const Calendar = () => {
  const [currenMonth, setCurrentMonth] = useState<Array<Array<object>>>(
    getMonth()
  );

  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
      <>
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
