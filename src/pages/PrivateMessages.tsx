import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Send } from 'styled-icons/material';
import { privateUsers, UserProfileData } from '../data/userProfiles';
import ChannelMessage from '../components/ChannelMessage';
import { ChatMessage } from '../components/ChannelData';

const PageContainer = styled.div`
  min-height: 100%;
  padding: 20px 24px 0;
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
  margin: 0;
`;

const Messages = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  max-height: calc(100vh - 48px - 68px - 61px);
  overflow-y: auto;
`;

export interface PrivateMessage {
  userId: string;
  content: React.ReactNode;
  date: string;
}

interface PrivateMessagesPageProps {
  selectedUser: UserProfileData | null;
  onUserSelect: (user: UserProfileData | null) => void;
  messages: PrivateMessage[];
}

const PrivateMessagesPage: React.FC<PrivateMessagesPageProps> = ({ selectedUser, onUserSelect, messages }) => {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messages]);

  // Convert PrivateMessage[] to ChatMessage[]
  const chatMessages: ChatMessage[] = messages.map((msg) => {
    const user = privateUsers.find((u) => u.id === msg.userId);
    return {
      author: user?.username || msg.userId,
      date: msg.date,
      content: msg.content,
      avatar: user?.avatar,
    };
  });

  return (
    <>
      <Container>
        <Send size={14} color="var(--white)" />
        <Title>
          Chat with 
          {selectedUser?.username || 'User'}
        </Title>
      </Container>
      <PageContainer>
        <Messages ref={messagesRef}>
          {chatMessages.map((message) => (
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
      </PageContainer>
    </>
  );
};

export default PrivateMessagesPage;
