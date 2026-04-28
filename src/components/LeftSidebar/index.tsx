import React from 'react';
import { LeftSidebarStyled } from './styles';
import ChannelList from '../ChannelList';
import PrivateChatList from '../PrivateChatList';
import Friends from '../FriendsButtons';
import LeftBarTitle from '../LeftBarTitle';

interface LeftSidebarProps {
  activeNav: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({activeNav}) => {
  const renderLeftSidebar = () => {
    switch (activeNav) {
      case 'servers':
        return (
          <>
            <LeftBarTitle name="HCI Test Server" />
            <ChannelList />
          </>
        );
      case 'private':
        return (
          <>
            <LeftBarTitle name="Direct Messages" hasAddNew />
            <PrivateChatList />
          </>
        );
      case 'groups':
        return (
          <>
            <LeftBarTitle name="Group Chats" hasAddNew />
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
