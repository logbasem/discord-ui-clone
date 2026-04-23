import React, { useState } from 'react';

import { Grid, Main, Sidebar, RightSidebarWrapper, TopBar, Footer, MessageInputContainer, CollapseButtonLeft,
  CollapseButtonRight } from './styles';

import { ChannelData, ChannelInfo, UserInfo, RightSidebar, LeftSidebar, MessageInput, Navigation, ServerList } from '../components';
import PrivateMessagesPage from '../pages/PrivateMessages';
import GroupChatsPage from '../pages/GroupChats';

// Chevron icon pointing left (for "collapse left sidebar")
const ChevronLeft = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

// Chevron icon pointing right (for "collapse right sidebar")
const ChevronRight = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

const Layout: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('servers');
  const [selectedServer, setSelectedServer] = useState<string | null>(null);
  const [mostRecentServer, setMostRecentServer] = useState<string>('Ronne Dev Server');
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  
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
    <Grid $leftCollapsed={leftCollapsed} $rightCollapsed={rightCollapsed}>
      <TopBar>
        <Navigation activeNav={activeNav} onChange={handleNavChange} />
      </TopBar>

      {/* Left sidebar */}
      <Sidebar $collapsed={leftCollapsed}>
        <LeftSidebar />
      </Sidebar>

      {/* Collapse toggle: left sidebar */}
      <CollapseButtonLeft
        $collapsed={leftCollapsed}
        onClick={() => setLeftCollapsed((c) => !c)}
        title={leftCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        aria-label={leftCollapsed ? 'Expand left sidebar' : 'Collapse left sidebar'}
      >
        <ChevronLeft />
      </CollapseButtonLeft>

      <Main>{renderPage()}</Main>

      {/* Collapse toggle: right sidebar */}
      <CollapseButtonRight
        $collapsed={rightCollapsed}
        onClick={() => setRightCollapsed((c) => !c)}
        title={rightCollapsed ? 'Expand members list' : 'Collapse members list'}
        aria-label={rightCollapsed ? 'Expand right sidebar' : 'Collapse right sidebar'}
      >
        <ChevronRight />
      </CollapseButtonRight>

      {/* Right sidebar */}
      <RightSidebarWrapper $collapsed={rightCollapsed}>
        <RightSidebar />
      </RightSidebarWrapper>

      <MessageInputContainer>
        <MessageInput />
      </MessageInputContainer>

      <Footer $leftCollapsed={leftCollapsed}>
        <UserInfo />
      </Footer>
    </Grid>
  );
};

export default Layout;
