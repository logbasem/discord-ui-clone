import React, { useState } from 'react';

import { Grid, Main, Sidebar, TopBar, Footer, MessageInputContainer } from './styles';

import { ChannelData, ChannelInfo, UserInfo, RightSidebar, LeftSidebar, MessageInput, Navigation, ServerList } from '../components';
import PrivateMessagesPage from '../pages/PrivateMessages';
import GroupChatsPage from '../pages/GroupChats';

const Layout: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('servers');
  const [selectedServer, setSelectedServer] = useState<string | null>(null);
  const [mostRecentServer, setMostRecentServer] = useState<string>('Ronne Dev Server');
  const handleServerClick = (serverName: string) => {
    setSelectedServer(serverName || null);
    if (serverName) {
      setMostRecentServer(serverName);
    }
  };
  const handleNavChange = (id: string) => {
    if (id === 'servers' && selectedServer) {
      setSelectedServer(null);
    } else {
      setActiveNav(id);
      if (id !== 'servers') {
        setSelectedServer(null);
      }
    }
  };
  const rightSidebarCollapsed = true;

  const renderPage = () => {
    switch (activeNav) {
      case 'private':
        return <PrivateMessagesPage />;
      case 'groups':
        return <GroupChatsPage />;
      case 'servers':
        if (selectedServer) {
          if (selectedServer === 'Ronne Dev Server') {
            return (
              <>
                <ChannelInfo />
                <ChannelData />
              </>
            );
          }
          return (
            <div style={{ padding: '20px' }}>
              {'Channels for '}
              {selectedServer}
            </div>
          );
        }
        return <ServerList onServerClick={handleServerClick} selectedServer={selectedServer} mostRecentServer={mostRecentServer} />;
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
        <Navigation activeNav={activeNav} onChange={handleNavChange} />
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
