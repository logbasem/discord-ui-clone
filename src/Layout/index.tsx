import React from 'react';

import { Grid } from './styles';

import { ServerList, ChannelData, ChannelInfo, ChannelList, ServerName, UserInfo, UserList } from '../components';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
};

export default Layout;
