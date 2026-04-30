import React from 'react';
import styled from 'styled-components';
import { VolumeUp } from 'styled-icons/heroicons-outline';

export interface Props {
  channelName: string;
  selected?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

const Container = styled.div<{ selected?: boolean; isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;
  font-family: 'DM Sans', var(--font-family);

  margin-top: 2px;
  > div {
    display: flex;
    align-items: center;
  }
  > div span {
    margin-left: 5px;
    color: var(--senary);
    font-family: 'DM Sans', var(--font-family);
  }
  &:hover,
  &.active {
    background-color: var(--quinary);
    > div span {
      color: var(--white);
    }
  }

  &:hover > .channel-config {
    transition: 0.7ms;
    visibility: visible !important;
  }

  .channel-config {
    transition: 0.7ms;
    visibility: hidden;
  }

  .channel-active {
    transition: 0.7ms;
    visibility: visible !important;
  }
`;

const VoiceIcon = styled(VolumeUp)<{ isActive?: boolean }>`
  width: 20px;
  height: 20px;
  color: ${props => props.isActive ? '#3ba55c' : 'var(--symbol)'};
`;

const VoiceChannelButton: React.FC<Props> = ({ channelName, selected, isActive, onClick }) => {
  return (
    <Container className={selected ? 'active' : ''} onClick={onClick}>
      <div>
        <VoiceIcon isActive={isActive} />
        <span>{channelName}</span>
      </div>
    </Container>
  );
};

export default VoiceChannelButton;