import React from 'react';

import { Container, Title, ExpandIcon } from './styles';

interface ServerNameProps {
  name: string;
}

const ServerName: React.FC<ServerNameProps> = ({ name }) => {
  return (
    <Container>
      <Title>{name}</Title>
    </Container>
  );
};

export default ServerName;