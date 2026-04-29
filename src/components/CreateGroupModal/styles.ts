import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalCard = styled.div`
  width: 100%;
  max-width: 440px;
  padding: 16px;
  border-radius: 8px;
  background-color: var(--secondary);
  color: var(--white);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

export const CloseButton = styled.button`
  padding: 4px 8px;
  background-color: var(--tertiary);
  color: var(--white);
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background-color: var(--quinary);
  }
`;
