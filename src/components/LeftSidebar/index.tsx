import React from 'react';
import { LeftSidebarStyled } from './styles';
import ServerName from '../ServerName';
import ChannelList from '../ChannelList';

export interface Props {
  selectedChannel?: string;
  onChannelSelect?: (channelName: string) => void;
}

const LeftSidebar: React.FC<Props> = ({ selectedChannel, onChannelSelect }) => {
  return (
    <LeftSidebarStyled>
      <ServerName />
      <ChannelList selectedChannel={selectedChannel} onChannelSelect={onChannelSelect} />
    </LeftSidebarStyled>
  );
};

export default LeftSidebar;
