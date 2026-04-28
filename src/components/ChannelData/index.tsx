import React, { useRef, useEffect } from 'react';
import leoronne from '~/assets/img/avatar.jpg';
import cyhi from '~/assets/img/cyhi.jpg';
import user2 from '~/assets/img/user2.jpg';
import user4 from '~/assets/img/user4.jpg';
import user5 from '~/assets/img/user5.jpg';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, EmptyChannel, EmptyChannelIcon, EmptyChannelText } from './styles';

export interface Props {
  channelName?: string;
}

interface ChatMessage {
  author: string;
  date: string;
  content: React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  avatar?: string;
}

const chatFeed: ChatMessage[] = [
  { author: 'Leonardo Ronne', date: '06/21/2026', content: 'hi guys, how r u?', avatar: leoronne },
  {
    author: 'Luiky',
    date: '06/21/2026',
    content: (
      <>
        <Mention>@leoronne</Mention>
        heyyyy
      </>
    ),
    hasMention: true,
    avatar: user2,
  },
  { author: 'Prynce', date: '06/21/2026', content: 'fine, tnx n u?' },
  { author: 'Nyarth', date: '06/21/2026', content: 'heyy, whats up?' },
  { author: 'John Doe', date: '06/21/2026', content: 'hey, what r u up 2?' },
  { author: 'Maria Ciclano', date: '06/21/2026', content: 'whats gooooooood?!' },
  { author: 'H. Montanha', date: '06/21/2026', content: "good, just coding some rocketseat's challenges" },
  { author: 'Ronne12', date: '06/21/2026', content: 'good morning guys', avatar: user4 },
  {
    author: 'James',
    date: '06/21/2026',
    hasMention: true,
    content: (
      <>
        <Mention>@leoronne</Mention>
        heyy
      </>
    ),
  },
  { author: 'Enzo João', date: '06/21/2026', content: 'fine, tnx n u?' },
  { author: 'Valentina de Jesus', date: '06/21/2026', content: 'whats gooooooood?!' },
  { author: 'Enzo José', date: '06/21/2026', content: 'hey, what r u up 2?' },
  { author: 'Valentina Maria', date: '06/21/2026', content: 'heyy, whats up?' },
  {
    author: 'Brunno Enzo',
    date: '06/21/2026',
    hasMention: true,
    content: (
      <>
        <Mention>@leoronne</Mention>
        {' '}
        good, just coding some rocketseat&#39;s challenges
      </>
    ),
  },
  { author: 'Lara', date: '06/21/2026', content: 'fine, tnx n u?' },
  { author: 'Lohaine', date: '06/21/2026', content: 'heyy, whats up?' },
  { author: 'Lika', date: '06/21/2026', content: 'whats gooooooood?!' },
  { author: 'Rocket', date: '06/21/2026', content: <>There are currently 4 online users and 17 offline!</>, isBot: true, avatar: user5 },
];

const ChannelData: React.FC<Props> = ({ channelName }) => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  // Show empty state for channels other than open-chat
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
        {chatFeed.map((message) => (
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