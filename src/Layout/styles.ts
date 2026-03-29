import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: 46px 1fr 52px;
  grid-auto-flow: column;
  grid-auto-columns: 240px 1fr 240px;
  gap: 0;
  background-color: var(--primary);
`;

export const TopBar = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  display: flex;
  align-items: center;
  background-color: var(--primary);
`;

export const Sidebar = styled.div`
  grid-row: 2;
  overflow-y: auto;
  background-color: var(--secondary);

  /* Left sidebar - row 2 only */
  &:nth-of-type(2) {
    grid-row: 2;
  }
  
  /* Right sidebar - spans rows 2-3 */
  &:nth-of-type(4) {
    grid-row: 2 / 4;
  }

  /* Hide the second sidebar (right sidebar) on smaller screens */
  &:last-child {
    @media (max-width: 867px) {
      display: none;
    }
  }
`;

export const Main = styled.div`
  grid-row: 2;
  min-width: 0;
  overflow: auto;
`;

export const MessageInputContainer = styled.div`
  grid-column: 2;
  grid-row: 3;
  background-color: var(--secondary);
  border-top: 1px solid var(--border-color);
  justify-content: left;
`;

export const Footer = styled.div`
  grid-column: 1;
  grid-row: 3;
  background-color: var(--quaternary);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;