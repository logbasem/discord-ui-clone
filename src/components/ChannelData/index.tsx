// src/components/ChannelData/index.tsx
import React, { useRef, useEffect } from 'react';
import leoronne from '~/assets/img/avatar.jpg';
import cyhi from '~/assets/img/cyhi.jpg';
import user2 from '~/assets/img/user2.jpg';
import user4 from '~/assets/img/user4.jpg';
import user5 from '~/assets/img/user5.jpg';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, EmptyChannel, EmptyChannelIcon, EmptyChannelText } from './styles';

export interface ChatMessage {
  author: string;
  date: string;
  content: React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  avatar?: string;
}

export interface Props {
  channelName: string;
  messages: ChatMessage[];
}

const ChannelData: React.FC<Props> = ({ channelName, messages }) => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messages]);

  if (channelName !== 'open-chat') {
    return (
      <Container>
        <EmptyChannel>
          <EmptyChannelIcon>
            {`#${channelName}`}
          </EmptyChannelIcon>
          <EmptyChannelText>
            {`Welcome to #${channelName}, be the first to start a conversation!`}
          </EmptyChannelText>
        </EmptyChannel>
      </Container>
    );
  }

  return (
    <Container>
      <ChannelMessage author="Cyhi" date="06/21/2026" content={<>Welcome to the Open Chat channel!</>} hasMention isBot avatar={cyhi} />
      <Messages ref={messagesRef}>
        {messages.map((message) => (
          <ChannelMessage
            key={`${message.author}-${message.date}-${typeof message.content === 'string' ? message.content : 'mention'}`}
            author={message.author}
            date={message.date}
            content={message.content}
            hasMention={message.hasMention}
            isBot={message.isBot}
            avatar={message.avatar}
          />
        ))}
      </Messages>
    </Container>
  );
};

export default ChannelData;