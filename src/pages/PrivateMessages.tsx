import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Send } from 'styled-icons/material';
import { Section } from 'styled-icons/icomoon';
import { privateUsers, UserProfileData } from '../data/userProfiles';
import ChannelMessage from '../components/ChannelMessage';
import UserProfile from '../components/UserProfile';
import leoronne from '~/assets/img/avatar.jpg';
import cyhi from '~/assets/img/cyhi.jpg';

const PageContainer = styled.div`
  min-height: 100%;
  padding: 20px 24px;
  background-color: var(--primary);
  color: var(--white);
  position: relative;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  padding: 5px;
  background-color: var(--secondary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
  left: 0;
  right: 0;
  width: auto;
  z-index: 2;
  gap: 5px;
`;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: var(--white);
`;

const Messages = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`;

const ClickHint = styled.p`
  margin-top: 18px;
  color: var(--gray);
  font-size: 13px;
`;

const ClickableAuthor = styled.button`
  background: none;
  border: 0;
  padding: 0;
  color: var(--white);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
`;

interface PrivateMessagesPageProps {
  selectedUser: UserProfileData | null;
  onUserSelect: (user: UserProfileData | null) => void;
}

const chatFeed = [
  { userId: 'bazingasdead', text: 'Hey, can we sync on the profile card update?' },
  { userId: 'golddragon', text: 'Sure. I already wired the right sidebar variant.' },
  { userId: 'lilith', text: 'Perfect, click my name to preview the popup profile.' },
  { userId: 'thrishadugg', text: 'I pushed hover state polish for the resize handles.' },
];

const PrivateMessagesPage: React.FC<PrivateMessagesPageProps> = ({ selectedUser, onUserSelect }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);
  
  useEffect(() => {
    if (!selectedUser) {
      return undefined;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onUserSelect(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedUser, onUserSelect]);
  
  const clearSelectedUser = () => onUserSelect(null);

  return (
    <>
      <Container>
        <Send size={14} color="var(--white)" />
        <Title>Chat with @cyhi</Title>
      </Container>
      <PageContainer>
        <Messages ref={messagesRef}>
          <ChannelMessage author="Cyhi" date="06/21/2026" content={<>Hiiiiiii!</>} avatar={cyhi} />
          <ChannelMessage author="Leonardo Ronne" date="06/21/2026" content="hi, how r u?" avatar={leoronne} />
          <ChannelMessage author="Cyhi" date="06/21/2026" content="I'm pretty good! I love private messages on Discord 2.0" avatar={cyhi} />
          <ChannelMessage author="Leonardo Ronne" date="06/21/2026" content="what a coincidence I also love private messages on Discord 2.0" avatar={leoronne} />
          <ChannelMessage author="Leonardo Ronne" date="06/21/2026" content="my favorite part is that the UI follows so many HCI principles" avatar={leoronne} />
          <ChannelMessage author="Cyhi" date="06/21/2026" content="Omg YES I'm always saying this" avatar={cyhi} />
          <ChannelMessage author="Cyhi" date="06/21/2026" content="I can't believe how intuitive and user-friendly the interface is" avatar={cyhi} />
          <ChannelMessage author="Leonardo Ronne" date="06/21/2026" content="same here, it's like they really understand how users interact with messaging apps" avatar={leoronne} />
          <ChannelMessage author="Cyhi" date="06/22/2026" content="Oh hey btw" avatar={cyhi} />
          <ChannelMessage author="Cyhi" date="06/22/2026" content="What's your favorite color" avatar={cyhi} />
          <ChannelMessage author="Leonardo Ronne" date="06/22/2026" content="blue" avatar={leoronne} />
          <ChannelMessage author="Leonardo Ronne" date="06/22/2026" content="hbu" avatar={leoronne} />
          <ChannelMessage author="Cyhi" date="06/22/2026" content="Probably green" avatar={cyhi} />
        </Messages>
      </PageContainer>
    </>
  );
};

export default PrivateMessagesPage;
