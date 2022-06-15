import styled from 'styled-components';

interface Timeline {
  timelineLength: number;
  countOfEvents: number;
}

interface IGrid {
  size?: number;
  width?: number;
}

export const GridModal = styled.div`
  display: grid;
`;

export const RowModal = styled.div`
  display: flex;
`;

export const ColModal = styled.div<IGrid>`
  flex: ${(props) => props.size};
  width: ${(props) => props.width}px;
  padding: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(209 213 219);
  padding: 10px;
  text-align: center;
`;

export const HeaderModal = styled.div`
  height: auto;
  padding: 20px;
  background-color: rgb(255 255 255);
  width: 1200px;
  height: 600px;

  .header-event-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    height: 5vh;
  }

  .data-modal {
    font-weight: 500;
    font-size: 1.4rem;
    margin: auto;
  }
`;

export const ModalContainer = styled.div<Timeline>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 600px;
  background-color: rgb(255 255 255);
  overflow-x: scroll;
  overflow-y: scroll;

  .wrapper-time-modal {
    display: grid;
    grid-template-columns: ${({ timelineLength }) =>
      `150px repeat(${timelineLength}, 1fr)`};
    padding: 20px;
  }

  .time-modal {
    // border-radius: 1rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(209 213 219);
    padding: 10px;
    text-align: center;
  }

  .wrapper-name-modal {
    display: grid;
    grid-template-rows: ${({ countOfEvents }) =>
      `repeat(${countOfEvents}, 1fr)`};

    // grid-gap: 10px;
    padding: 0 20px;
    width: 150px;
  }

  .name-modal {
    // border-radius: 1rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(209 213 219);
    padding: 10px;
    text-align: center;
  }
`;
