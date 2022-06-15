import styled from 'styled-components';
import { palette } from '../../../models/palette';

export const EventItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 300px auto 200px;
  grid-template-rows: 300px;
  flex-direction: column;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 3px rgb(209 213 219);

  .img-wrapper {
    grid-column: 1;
    margin: auto;
  }

  .img {
    object-fit: cover;
    height: 250px;
  }

  .info-wrapper-one {
    display: grid;
    grid-template-rows: 5rem 4rem 4rem 4rem;
    grid-column: 2;
    margin: 10px;
    position: relative;
  }

  .info-wrapper-two {
    display: grid;
    grid-template-rows: 5rem 4rem 4rem 4rem;
    grid-column: 3;
    margin: 10px;
    position: relative;
  }

  .info-item {
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    padding: 10px;
  }

  .info-data {
    font-size: 18px;
    font-weight: 300;
    padding-top: 5px;
  }

  .button-icon {
    margin: 20px;
    text-align: end;
  }

  .button-wrapper {
    grid-column: 4;
    display: flex;
    margin: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  color: white;
  background-color: ${palette.orange};
  font-size: 20px;
  font-weight: 400;
  border: 1px solid grey;
  border-radius: 50px;
  box-shadow: 0px 0px 10px 3px rgb(209 213 219);
`;
