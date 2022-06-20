import styled from 'styled-components';

export const FriendItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  flex-direction: column;
  margin: 1rem;
  gap: 1rem;
`;
