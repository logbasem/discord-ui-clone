import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  top: 46px; /* Height of the TopBar */
  left: 0;
  background-color: var(--secondary);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  overflow: visible; /* Ensure dropdown content is not clipped */
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  color: var(--white);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--quinary);
  }
`;

export const SeeAllButton = styled.button`
  width: 100%;
  padding: 8px 12px;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 0 0 8px 8px;
  cursor: pointer;

  &:hover {
    background-color: var(--quinary);
  }
`;
