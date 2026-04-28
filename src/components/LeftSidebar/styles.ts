import styled from 'styled-components';

export const LeftSidebarStyled = styled.div`
  grid-column: 1;
  grid-row: 2;
  width: 240px;
  background: #fafafa;
  overflow-y: auto;
  position: relative;
  border-right: 1px solid #e0e0e0;
  z-index: 5;

  /* Stack on mobile */
  @media (max-width: 597px) {
    grid-column: 1 / -1;
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
  }

  /* Hide on small tablets */
  @media (max-width: 867px) {
    width: 200px;
  }
`;