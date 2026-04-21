import React from 'react';
import { DropdownContainer, DropdownItem, SeeAllButton } from './styles';

interface ServerDropdownProps {
  onServerClick: (serverName: string) => void;
  mostRecentServers: { name: string; color: string }[] | null;
}

const ServerDropdown: React.FC<ServerDropdownProps> = ({ onServerClick, mostRecentServers }) => {
  return (
    <DropdownContainer>
      {mostRecentServers?.map((server) => (
        <DropdownItem key={server.name} style={{ backgroundColor: server.color }} onClick={() => onServerClick(server.name)}>
          {server.name}
        </DropdownItem>
      ))}
      <SeeAllButton onClick={() => onServerClick('See All')}>See All</SeeAllButton>
    </DropdownContainer>
  );
};

export default ServerDropdown;
