import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Send } from 'styled-icons/material';
import leoronne from '~/assets/img/avatar.jpg';
import cyhi from '~/assets/img/cyhi.jpg';
import ChannelMessage, { Mention } from '../components/ChannelMessage/index';

const PageContainer = styled.div`
  min-height: 100%;
  padding-top: 20px;
  background-color: var(--primary);
  color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 18px;
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
  max-height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

const PrivateMessagesPage: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

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
