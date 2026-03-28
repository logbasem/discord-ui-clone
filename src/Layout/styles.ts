import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 46px 1fr 52px;
  grid-auto-flow: column;
  grid-auto-columns: 240px 1fr 240px;
  gap: 2px;
`;

export const TopBar = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  align-items: center;
  background: #202020;
`;

export const Sidebar = styled.div`
  grid-row: 2;
  overflow-y: auto;
  background: pink;

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
  background: blue;
`;

export const Footer = styled.div`
  grid-column: 1 / -1;
  grid-row: 3;
  background: goldenrod;
`;