import React from 'react';
import styled from 'styled-components';
import { PhoneOff } from 'styled-icons/feather';

export interface Props {
  channelName: string;
  onDisconnect: () => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: var(--quaternary);
  border-radius: 4px;
  margin: 8px 8px 0 8px;
  font-family: 'DM Sans', var(--font-family);
`;

const VoiceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StatusDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #3ba55c;
`;

const ChannelName = styled.span`
  color: var(--white);
  font-size: 14px;
  font-weight: 500;
`;

const ConnectedText = styled.span`
  color: #3ba55c;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const DisconnectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const PhoneOffIcon = styled(PhoneOff)`
  width: 16px;
  height: 16px;
  color: var(--white);
`;

const VoiceConnectedDisplay: React.FC<Props> = ({ channelName, onDisconnect }) => {
  return (
    <Container>
      <VoiceInfo>
        <StatusDot />
        <div>
          <ConnectedText>Voice Connected</ConnectedText>
          <ChannelName>
            {' — '}
            {channelName}
          </ChannelName>
        </div>
      </VoiceInfo>
      <DisconnectButton onClick={onDisconnect} title="Disconnect">
        <PhoneOffIcon />
      </DisconnectButton>
    </Container>
  );
};

export default VoiceConnectedDisplay;