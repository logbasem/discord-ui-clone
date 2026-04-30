import React from 'react';
import { DropdownContainer, SeeAllButton, ServerDropdownItems, ButtonContainer, AddNewButton } from './styles';
import { ServerData } from '../ServerList';
import ServerButton from '../ServerButton/index';
import { ServerButtonWrapper } from '../ServerList/styles';

interface ServerDropdownProps {
  onServerClick: (serverName: string) => void;
  favoriteServers: ServerData[];
}

const ServerDropdown: React.FC<ServerDropdownProps> = ({ onServerClick, favoriteServers }) => {
  return (
    <DropdownContainer>
      <ServerDropdownItems>
        {favoriteServers?.map((server) => (
          <ServerButtonWrapper key={server.name}>
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
      </ServerDropdownItems>
      <ButtonContainer>
        <AddNewButton onClick={() => onServerClick('Add New')}>+ Add New</AddNewButton>
        <SeeAllButton onClick={() => onServerClick('See All')}>See All</SeeAllButton>
      </ButtonContainer>
    </DropdownContainer>
  );
};

export default ServerDropdown;
