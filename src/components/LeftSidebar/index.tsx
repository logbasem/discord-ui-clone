import React from 'react';
import { LeftSidebarStyled } from './styles';
import ServerName from '../ServerName';
import ChannelList from '../ChannelList';
import PrivateChatList from '../PrivateChatList';
import Friends from '../FriendsButtons';

interface LeftSidebarProps {
  activeNav: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({activeNav}) => {
  const renderLeftSidebar = () => {
    switch (activeNav) {
      case 'servers':
        return (
          <>
            <ServerName name="HCI Test Server" />
            <ChannelList />
          </>
        );
      case 'private':
        return (
          <>
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
      <Friends />
      {renderLeftSidebar()}
    </LeftSidebarStyled>
  );
};

export default LeftSidebar;
