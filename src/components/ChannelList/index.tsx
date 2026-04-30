import React from 'react';
import { Tooltip } from '@material-ui/core';

import ChannelButton from '../ChannelButton';
import VoiceChannelButton from '../VoiceChannelButton';

import { useStyles } from '../../styles/MaterialUI';
import { Container, Category, AddCategoryIcon, VoiceParticipants, ParticipantAvatar, ParticipantName } from './styles';

export interface Props {
  selectedChannel?: string;
  onChannelSelect?: (channelName: string) => void;
  onVoiceChannelSelect?: (channelName: string) => void;
  voiceChannels?: string[];
  activeVoiceChannels?: string[];
  currentUser?: {
    name: string;
    avatar?: string;
  };
}

const ChannelList: React.FC<Props> = ({ 
  selectedChannel = 'open-chat', 
  onChannelSelect,
  onVoiceChannelSelect,
  voiceChannels = [],
  activeVoiceChannels = [],
  currentUser = { name: 'You' }
}) => {
  const classes = useStyles();
  
  const channels = ['open-chat', 'dev', 'series', 'finance', 'interviews'];
  
  const handleChannelClick = (channelName: string) => {
    if (onChannelSelect) {
      onChannelSelect(channelName);
    }
  };
  
  const handleVoiceChannelClick = (channelName: string) => {
    if (onVoiceChannelSelect) {
      onVoiceChannelSelect(channelName);
    }
  };
  
  return (
    <Container>
      <Category>
        <span>Text channels</span>
        <Tooltip
          title="Add Channel"
          placement="bottom"
          arrow
          classes={{ tooltip: classes.tooltip, arrow: classes.arrow, popper: classes.popper }}
        >
          <AddCategoryIcon />
        </Tooltip>
      </Category>

      {channels.map((channel) => (
        <ChannelButton 
          key={channel} 
          channelName={channel} 
          selected={channel === selectedChannel}
          onClick={() => handleChannelClick(channel)}
        />
      ))}

      {voiceChannels.length > 0 && (
        <>
          <Category style={{ marginTop: '16px' }}>
            <span>Voice channels</span>
            <Tooltip
              title="Add Voice Channel"
              placement="bottom"
              arrow
              classes={{ tooltip: classes.tooltip, arrow: classes.arrow, popper: classes.popper }}
            >
              <AddCategoryIcon />
            </Tooltip>
          </Category>

          {voiceChannels.map((channel) => (
            <div key={channel}>
              <VoiceChannelButton 
                channelName={channel} 
                selected={channel === selectedChannel}
                isActive={activeVoiceChannels.includes(channel)}
                onClick={() => handleVoiceChannelClick(channel)}
              />
              {activeVoiceChannels.includes(channel) && (
                <VoiceParticipants>
                  <ParticipantAvatar>
                    {currentUser.avatar ? (
                      <img src={currentUser.avatar} alt={currentUser.name} />
                    ) : (
                      <span>{currentUser.name.charAt(0).toUpperCase()}</span>
                    )}
                  </ParticipantAvatar>
                  <ParticipantName>{currentUser.name}</ParticipantName>
                </VoiceParticipants>
              )}
            </div>
          ))}
        </>
      )}
    </Container>
  );
};

export default ChannelList;
