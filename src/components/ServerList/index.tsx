import React from 'react';
import { Add } from 'styled-icons/material';

import NodeJS from '~/assets/svg/NodeJS.svg';
import Pride from '~/assets/svg/Pride.svg';
import RocketSeat from '~/assets/svg/RocketSeat.svg';
import Code from '~/assets/svg/Code.svg';
import Ronne from '~/assets/svg/Ronne.svg';
import DiscordLogo from '~/assets/img/discord_logo_clone.jpeg';

import {
  Container,
  HomeButton,
  Separator,
  ServerButton,
  ActivePill,
  MentionsBadge,
  NotificationsDot,
  PlusButton,
  ServerIcon,
} from './styles';

export interface ServerData {
  name: string;
  logo: string;
  color: string;
  mentions?: number;
  hasNotifications?: boolean;
  isHome?: boolean;
}

interface Props {
  onServerClick: (serverName: string) => void;
  selectedServer?: string | null;
  mostRecentServers: string[];
}

const ServerList: React.FC<Props> = ({ onServerClick, selectedServer, mostRecentServers }) => {
  const allServersData: ServerData[] = [
    { name: 'Ronne Dev Server', logo: Ronne, color: '#cc78a3', hasNotifications: true, mentions: 40, isHome: true },
    { name: 'LGBTQIA+ Pride', logo: Pride, color: '#fff', hasNotifications: true, mentions: 11 },
    { name: 'RocketSeat', logo: RocketSeat, color: '#6633cc', hasNotifications: true, mentions: 40 },
    { name: 'Code', logo: Code, color: '#A598BE', hasNotifications: true, mentions: 7 },
    { name: 'Node.js', logo: NodeJS, color: '#83cd29', mentions: 32 },
  ];

  return (
    <Container>
      <HomeButton
        data-tooltip="Home"
        aria-label="Home"
        onClick={() => onServerClick('Ronne Dev Server')}
        $active={selectedServer === 'Ronne Dev Server'}
      >
        {selectedServer === 'Ronne Dev Server' ? <ActivePill /> : null}
        <ServerIcon src={DiscordLogo} alt="Home" />
      </HomeButton>
      <Separator />
      {allServersData
        .filter((server) => mostRecentServers.includes(server.name))
        .map((server) => (
          <ServerButton
            key={server.name}
            data-tooltip={server.name}
            aria-label={server.name}
            onClick={() => onServerClick(server.name)}
            $active={selectedServer === server.name}
            $color={server.color}
          >
            {selectedServer === server.name ? <ActivePill /> : null}
            <ServerIcon src={server.logo} alt={server.name} />
            {server.hasNotifications ? <NotificationsDot /> : null}
            {server.mentions ? <MentionsBadge>{server.mentions}</MentionsBadge> : null}
          </ServerButton>
        ))}
      <PlusButton type="button" data-tooltip="Add a Server" aria-label="Add a Server">
        <Add size={22} />
      </PlusButton>
      {allServersData
        .filter((server) => !mostRecentServers.includes(server.name))
        .map((server) => (
          <ServerButton
            key={server.name}
            data-tooltip={server.name}
            aria-label={server.name}
            onClick={() => onServerClick(server.name)}
            $active={selectedServer === server.name}
            $color={server.color}
          >
            {selectedServer === server.name ? <ActivePill /> : null}
            <ServerIcon src={server.logo} alt={server.name} />
            {server.hasNotifications ? <NotificationsDot /> : null}
            {server.mentions ? <MentionsBadge>{server.mentions}</MentionsBadge> : null}
          </ServerButton>
      ))}
    </Container>
  );
};

export default ServerList;
