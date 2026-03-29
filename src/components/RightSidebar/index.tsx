import React from 'react';
import { RightSidebarStyled } from './styles';
import UserList from '../UserList';

const RightSidebar: React.FC = () => {
  return (
    <RightSidebarStyled>
      <UserList />
    </RightSidebarStyled>
  );
};

export default RightSidebar;