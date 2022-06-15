import styled from 'styled-components';

interface DayContainerProps {
  isCurrentDay: boolean;
  index: boolean;
}

export const DayContainer = styled.div<DayContainerProps>`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border-width: ${({ isCurrentDay }) => (isCurrentDay ? '3px' : '1px')};
  border-style: solid;
  border-color: ${({ isCurrentDay }) =>
    isCurrentDay ? 'rgb(234 88 12)' : 'rgb(209 213 219)'};
  box-shadow: 0px 0px 10px 0px rgb(209 213 219);
  margin: 2px;
  background-color: ${({ index }) => index && 'rgb(254 242 242)'};

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .day {
    padding: 0.25rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    text-align: center;
    font-weight: ${({ isCurrentDay }) => (isCurrentDay ? '500' : '300')};
  }

  .eventWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    cursor: pointer;
  }

  .events {
    font-weight: 300;
    font-size: 18px;
    margin-top: 50px;
  }
`;
