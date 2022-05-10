import styled from 'styled-components';

interface DayContainerProps {
  isCurrentDay: boolean;
}

export const DayContainer = styled.div<DayContainerProps>`
  display: flex;
  flex-direction: column;
  border-width: ${({ isCurrentDay }) => (isCurrentDay ? '3px' : '1px')};
  border-style: solid;
  border-color: ${({ isCurrentDay }) =>
    isCurrentDay ? 'rgb(125 211 252)' : 'rgb(209 213 219)'};

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nameOfWeek {
    margin-top: 0.25rem;
    font-weight: 400;
  }

  .day {
    padding: 0.25rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    align-text: center;
    font-weight: ${({isCurrentDay}) => isCurrentDay ? '500' : '300'};
  }
`;
