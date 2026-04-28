import React from 'react';

import { Container, Title, AddNewButton } from './styles';

interface LeftBarTitleProps {
  name: string;
  hasAddNew?: boolean;
}

const LeftBarTitle: React.FC<LeftBarTitleProps> = ({ name, hasAddNew }) => {
  return (
    <Container>
      <Title>{name}</Title>
      {hasAddNew && <AddNewButton>+ Add New</AddNewButton>}
    </Container>
  );
};

export default LeftBarTitle;