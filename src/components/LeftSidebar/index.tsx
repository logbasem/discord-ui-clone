import React from 'react';
import { LeftSidebarStyled } from './styles';
import ServerName from '../ServerName';
import ChannelList from '../ChannelList';
import PrivateChatList from '../PrivateChatList';

interface LeftSidebarProps {
  activeNav: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({activeNav}) => {
  const renderLeftSidebar = () => {
    switch (activeNav) {
      case 'servers':
        return (
          <>
            <ServerName />
            <ChannelList />
          </>
        );
      case 'private':
        return (
          <>
            <div>Friends Component</div>
            <PrivateChatList />
          </>
        );
      case 'groups':
        return (
          <>
            <div>Group Chats stuff goes here</div>
          </>
        );
      default:
        return null;
    }
  }

  return (
    <LeftSidebarStyled>
      {renderLeftSidebar()}
    </LeftSidebarStyled>
  );
};

export default LeftSidebar;
