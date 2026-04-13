import React, { useState } from 'react';

import { Grid, Main, Sidebar, TopBar, Footer, MessageInputContainer } from './styles';

import { ChannelData, ChannelInfo, UserInfo, RightSidebar, LeftSidebar, MessageInput, Navigation } from '../components';
import PrivateMessagesPage from '../pages/PrivateMessages';
import GroupChatsPage from '../pages/GroupChats';

const Layout: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('channels');
  const rightSidebarCollapsed = true;

  const renderPage = () => {
    switch (activeNav) {
      case 'private':
        return <PrivateMessagesPage />;
      case 'groups':
        return <GroupChatsPage />;
      default:
        return (
          <>
            <ChannelInfo />
            <ChannelData />
          </>
        );
    }
  };

  return (
    <Grid>
      <TopBar>
        <Navigation activeNav={activeNav} onChange={setActiveNav} />
      </TopBar>
      <Sidebar>
        <LeftSidebar />
      </Sidebar>
      <Main>{renderPage()}</Main>
      {!rightSidebarCollapsed && <Sidebar><RightSidebar /></Sidebar>}
      <MessageInputContainer>
        <MessageInput />
      </MessageInputContainer>
      <Footer>
        <UserInfo />
      </Footer>
    </Grid>
  );
};

export default Layout;
