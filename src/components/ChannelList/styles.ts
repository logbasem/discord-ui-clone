import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;
  display: flex;
  flex-direction: column;
  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
  overflow: visible;
  font-family: 'DM Sans', var(--font-family);

  @media (max-width: 598px) {
    display: none;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
    font-family: 'DM Sans', var(--font-family);
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;
  color: var(--symbol);
  cursor: pointer;
`;

export const VoiceParticipants = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px 4px 32px;
  gap: 8px;
  margin-bottom: 4px;
`;

export const ParticipantAvatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--quinary);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  span {
    font-size: 12px;
    color: var(--white);
    font-weight: 500;
  }
`;

export const ParticipantName = styled.span`
  font-size: 13px;
  color: var(--senary);
  font-family: 'DM Sans', var(--font-family);
`;
