import React from 'react';

import { Grid, Main, Sidebar, TopBar, Footer } from './styles';

import { ServerList, ChannelData, ChannelInfo, ChannelList, ServerName, UserInfo, UserList } from '../components';

const Layout: React.FC = () => {
  const rightSidebarCollapsed = false;
  return (
    <Grid>
      <TopBar />
      <Sidebar />
      <Main />
      {!rightSidebarCollapsed && <Sidebar />}
      <Footer />
    </Grid>
  );
};

export default Layout;
