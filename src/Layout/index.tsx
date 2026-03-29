import React from 'react';

import { Grid, Main, Sidebar, TopBar, Footer, MessageInputContainer } from './styles';

import { ChannelData, ChannelInfo, UserInfo, RightSidebar, LeftSidebar, MessageInput, Navigation } from '../components';

const Layout: React.FC = () => {
  const rightSidebarCollapsed = true;
  return (
    <Grid>
      <TopBar>
        <Navigation />
      </TopBar>
      <Sidebar>
        <LeftSidebar />
      </Sidebar>
      <Main>
        <ChannelInfo />
        <ChannelData />
      </Main>
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
