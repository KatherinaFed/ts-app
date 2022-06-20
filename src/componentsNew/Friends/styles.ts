import styled from 'styled-components';

export const FriendsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  flex-direction: column;
  margin: 1rem;
  gap: 1rem;

  .friend-item {
    padding: 10px;
    background-color: beige;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px 3px rgb(209 213 219);
  }
`