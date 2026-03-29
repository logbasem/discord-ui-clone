import React from 'react';
import { LeftSidebarStyled } from './styles';
import ServerName from '../ServerName';
import ChannelList from '../ChannelList';

const LeftSidebar: React.FC = () => {
  return (
    <LeftSidebarStyled>
      <ServerName />
      <ChannelList />
    </LeftSidebarStyled>
  );
};

export default LeftSidebar;
