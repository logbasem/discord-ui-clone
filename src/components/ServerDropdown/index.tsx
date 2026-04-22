import React from 'react';
import { DropdownContainer, SeeAllButton } from './styles';
import { ServerData } from '../ServerList';
import ServerButton from '../ServerButton/index';
import { ServerButtonWrapper } from '../ServerList/styles';

interface ServerDropdownProps {
  onServerClick: (serverName: string) => void;
  mostRecentServers: ServerData[] | null;
}

const ServerDropdown: React.FC<ServerDropdownProps> = ({ onServerClick, mostRecentServers }) => {
  return (
    <DropdownContainer>
      {mostRecentServers?.map((server) => (
        <ServerButtonWrapper>
          <ServerButton
            isHome={server.isHome}
            hasNotifications={server.hasNotifications}
            mentions={server.mentions}
            color={server.color}
            logo={server.logo}
            name={server.name}
            onClick={() => onServerClick(server.name)}
            selected={false}
          />
        </ServerButtonWrapper>
      ))}
      <SeeAllButton onClick={() => onServerClick('See All')}>See All</SeeAllButton>
    </DropdownContainer>
  );
};

export default ServerDropdown;
