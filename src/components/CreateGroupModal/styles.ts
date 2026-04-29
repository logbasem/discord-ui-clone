import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 70;
`;

export const ModalCard = styled.div`
  width: 480px;
  max-width: calc(100vw - 32px);
  border-radius: 8px;
  background: var(--secondary);
  color: var(--white);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  padding: 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: transparent;
  color: var(--gray);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: var(--white);
    background: var(--quinary);
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--white);
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: var(--chat-input);
  color: var(--white);
  padding: 0 12px;
  font-size: 14px;
  margin-bottom: 6px;

  &::placeholder {
    color: var(--gray);
  }
`;

export const Muted = styled.div`
  color: var(--gray);
  font-size: 12px;
`;

export const Section = styled.div`
  margin-top: 14px;
`;

export const SearchWrap = styled.div`
  position: relative;
`;

export const SearchDropdown = styled.div`
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background: var(--secondary);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  z-index: 2;
  padding: 6px;
`;

export const ResultRow = styled.button`
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  background: transparent;
  color: var(--white);

  &:hover {
    background: var(--quinary);
  }
`;

export const Avatar = styled.span<{ $bg: string }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--white);
  background: ${({ $bg }) => $bg};
`;

export const ResultMeta = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const Name = styled.span`
  color: var(--white);
  font-size: 14px;
  font-weight: 500;
`;

export const Pronouns = styled.span`
  color: var(--gray);
  font-size: 12px;
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

export const Chip = styled.div<{ $bg: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  background: var(--quinary);
  padding: 5px 8px 5px 5px;
  color: var(--white);
`;

export const ChipRemove = styled.button`
  color: var(--gray);
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;

  &:hover {
    color: var(--white);
    background: var(--tertiary);
  }
`;

export const Footer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;

export const CancelButton = styled.button`
  height: 34px;
  padding: 0 12px;
  border-radius: 6px;
  color: var(--white);
  background: var(--quinary);
  cursor: pointer;
`;

export const CreateButton = styled.button<{ $disabled: boolean }>`
  height: 34px;
  padding: 0 12px;
  border-radius: 6px;
  color: var(--white);
  background: ${({ $disabled }) => ($disabled ? 'var(--quinary)' : 'var(--discord)')};
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;
