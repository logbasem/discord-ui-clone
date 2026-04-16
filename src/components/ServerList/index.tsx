import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator, ServerButtonWrapper } from './styles';

import RocketSeat from '~/assets/svg/RocketSeat.svg';
import Pokemon from '~/assets/svg/Pokémon.svg';
import Code from '~/assets/svg/Code.svg';
import TypeScript from '~/assets/svg/TypeScript.svg';
import ReactJS from '~/assets/svg/ReactJS.svg';
import NodeJS from '~/assets/svg/NodeJS.svg';
import Mario from '~/assets/svg/Mario.svg';
import Pride from '~/assets/svg/Pride.svg';
import DC from '~/assets/svg/DC.svg';
import CSS from '~/assets/svg/CSS.svg';
import Ronne from '~/assets/svg/Ronne.svg';

interface ServerData {
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
  mostRecentServer: string;
}

const ServerList: React.FC<Props> = ({ onServerClick, selectedServer, mostRecentServer }) => {
  const allServersData: ServerData[] = [
    { name: 'Ronne Dev Server', logo: Ronne, color: '#cc78a3', hasNotifications: true, mentions: 40, isHome: true },
    { name: 'LGBTQIA+ Pride', logo: Pride, color: '#fff', hasNotifications: true, mentions: 11 },
    { name: 'RocketSeat', logo: RocketSeat, color: '#6633cc', hasNotifications: true, mentions: 40 },
    { name: 'Code', logo: Code, color: '#A598BE', hasNotifications: true, mentions: 7 },
    { name: 'Node.js', logo: NodeJS, color: '#83cd29', mentions: 32 },
    { name: 'CSS', logo: CSS, color: '#2062af', hasNotifications: true, mentions: 12 },
    { name: 'TypeScript', logo: TypeScript, color: '#007bcd', mentions: 42 },
    { name: 'ReactJS', logo: ReactJS, color: '#00d8ff', mentions: 52 },
    { name: 'DC Comics', logo: DC, color: '#0078f0', hasNotifications: true },
    { name: 'Pokémon', logo: Pokemon, color: '#ed1b24', mentions: 12 },
    { name: 'Super Mario', logo: Mario, color: '#db5454', hasNotifications: true },
  ];

  const mostRecentServerData = allServersData.find((s) => s.name === mostRecentServer);
  const otherServers = allServersData.filter((s) => s.name !== mostRecentServer);

  return (
    <Container>
      {mostRecentServerData && (
        <>
          <ServerButtonWrapper>
            <ServerButton
              isHome={mostRecentServerData.isHome}
              hasNotifications={mostRecentServerData.hasNotifications}
              mentions={mostRecentServerData.mentions}
              color={mostRecentServerData.color}
              logo={mostRecentServerData.logo}
              name={mostRecentServerData.name}
              onClick={() => onServerClick(mostRecentServerData.name)}
              selected={selectedServer === mostRecentServerData.name}
            />
          </ServerButtonWrapper>

          <Separator />
        </>
      )}

      {otherServers.map((server) => (
        <ServerButtonWrapper key={server.name}>
          <ServerButton
            hasNotifications={server.hasNotifications}
            mentions={server.mentions}
            color={server.color}
            logo={server.logo}
            name={server.name}
            onClick={() => onServerClick(server.name)}
            selected={selectedServer === server.name}
          />
        </ServerButtonWrapper>
      ))}
    </Container>
  );
};

export default ServerList;
