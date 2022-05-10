import styled from 'styled-components';

export const HeaderContainer = styled.header`
  grid-column: 1 / 8;
  background: white;
  margin: 1rem 3.2rem 0 3.2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px #bae6fd;
  

  .date-container {
    display: flex;
    height: 10vh;

    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .btn-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background: rgb(125 211 252);
    border-radius: 0.6rem;
  }

  .date {
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
  }

  .week-container {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    border-top: 1px solid rgb(209 213 219);
    height: 3rem
  }

  .week-day {
    margin: auto;
    padding: 0.25rem;
  }
`;
