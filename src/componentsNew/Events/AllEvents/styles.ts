import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 120px 120px auto 100px repeat(3, 150px);
  margin: 1rem;

  .day-filter {
    grid-column: 1;
    margin: 10px;
  }

  .week-filter {
    grid-column: 2;
    margin: 10px;
  }
  .month-filter {
    grid-column: 3;
    margin: 10px;
  }

  .text-filter {
    grid-column: 5;
    margin: 10px;
  }

  .location-filter {
    grid-column: 6;
    margin: 10px;
  }

  .date-filter {
    grid-column: 7;
    margin: 10px;
  }

  .type-filter {
    grid-column: 8;
    margin: 10px;
  }

  .text {
    font-size: 18px;
    font-weight: 400;
  }
`;
