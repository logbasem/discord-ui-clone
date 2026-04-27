import styled from 'styled-components';

export const RightSidebarStyled = styled.div`
  grid-column: 3;
  grid-row: 2;
  width: 240px;
  background: #fafafa;
  overflow-y: auto;
  position: relative;
  z-index: 10;
  border-left: 1px solid #e0e0e0;

  /* Hide on tablet and below */
  @media (max-width: 867px) {
    display: none;
  }

  /* Stack on mobile */
  @media (max-width: 597px) {
    grid-column: 1 / -1;
    width: 100%;
    border-left: none;
    border-bottom: 1px solid #e0e0e0;
    display: block;
  }
`;