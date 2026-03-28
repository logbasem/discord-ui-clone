import styled from 'styled-components';

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UI - User Info

export const Grid = styled.div`
  display: grid;
  height: 100vh;

  grid-template-columns: auto;
  grid-template-rows: 46px auto;
  grid-template-areas:
    'CI'
    'CD';

  @media (min-width: 598px) {
    grid-template-columns: 240px auto 240px;
    grid-template-rows: 46px auto 52px;
    grid-template-areas:
      'SN CI CI'
      'CL CD CD'
      'UI CD CD';
  }

  @media (min-width: 868px) {
    grid-template-areas:
      'SN CI CI'
      'CL CD UL'
      'UI CD UL';
  }
`;
