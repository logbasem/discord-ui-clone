import React from 'react';
import styled from 'styled-components';
import { VolumeUp } from 'styled-icons/heroicons-outline';

export interface Props {
  isOpen: boolean;
  channelName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: var(--quaternary);
  border-radius: 8px;
  padding: 24px;
  min-width: 320px;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const VoiceIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--quinary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VoiceIconStyled = styled(VolumeUp)`
  width: 24px;
  height: 24px;
  color: var(--white);
`;

const Title = styled.h2`
  color: var(--white);
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  font-family: 'DM Sans', var(--font-family);
`;

const Message = styled.p`
  color: var(--senary);
  font-size: 14px;
  margin-bottom: 24px;
  font-family: 'DM Sans', var(--font-family);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'DM Sans', var(--font-family);
  
  ${props => props.primary ? `
    background-color: var(--discord);
    color: var(--white);
    border: none;
    &:hover {
      background-color: #5865f2;
    }
  ` : `
    background-color: transparent;
    color: var(--white);
    border: none;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `}
`;

const VoiceJoinModal: React.FC<Props> = ({ isOpen, channelName, onConfirm, onCancel }) => {
  return (
    <Overlay isOpen={isOpen} onClick={onCancel}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <VoiceIconWrapper>
            <VoiceIconStyled />
          </VoiceIconWrapper>
          <Title>Join Voice Channel</Title>
        </ModalHeader>
        <Message>
          Are you ready to join 
          {' '}
          <strong>{channelName}</strong>
          ?
        </Message>
        <ButtonContainer>
          <Button primary onClick={onConfirm}>I&apos;m Ready</Button>
          <Button onClick={onCancel}>Not yet</Button>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default VoiceJoinModal;