import React from 'react';

import { FriendsContainer, FriendsButton } from './styles';

const Friends: React.FC = () => {
  return (
    <FriendsContainer>
      <FriendsButton active>Friends</FriendsButton>
      <FriendsButton>Add New Friend</FriendsButton>
    </FriendsContainer>
  );
};

export default Friends;
