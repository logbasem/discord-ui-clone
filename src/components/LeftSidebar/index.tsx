import React, { useCallback, useEffect, useRef } from 'react';
import { LeftSidebarStyled, ResizeHandle } from './styles';
import ChannelList from '../ChannelList';
import PrivateChatList from '../PrivateChatList';
import Friends from '../FriendsButtons';
import LeftBarTitle from '../LeftBarTitle';

interface LeftSidebarProps {
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  activeNav: string;
  selectedChannel?: string;
  onChannelSelect?: (channelName: string) => void;
}

const MIN_WIDTH = 150;
const MAX_WIDTH = 400;
const DEFAULT_WIDTH = 240;

const LeftSidebar: React.FC<LeftSidebarProps> = ({ width, setWidth, activeNav, selectedChannel, onChannelSelect}) => {
  const cleanupRef = useRef<(() => void) | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const previousWidthRef = useRef<number>(DEFAULT_WIDTH);
  const widthRef = useRef<number>(width);

  useEffect(() => {
    widthRef.current = width;
  }, [width]);

  const stopResize = useCallback(() => {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
  }, []);

  useEffect(() => () => stopResize(), [stopResize]);

  const handleResizeStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    let collapsedDuringDrag = false;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const sidebarBounds = sidebarRef.current?.getBoundingClientRect();
      if (!sidebarBounds) return;

      let nextWidth = moveEvent.clientX - sidebarBounds.left;

      if (nextWidth < MIN_WIDTH) {
        if (widthRef.current >= MIN_WIDTH) {
          previousWidthRef.current = Math.min(MAX_WIDTH, widthRef.current);
        }
        collapsedDuringDrag = true;
        setWidth(0);
        return;
      }

      if ((widthRef.current === 0 || collapsedDuringDrag) && nextWidth >= MIN_WIDTH) {
        nextWidth = previousWidthRef.current || DEFAULT_WIDTH;
        collapsedDuringDrag = false;
      }

      const clampedWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, nextWidth));
      previousWidthRef.current = clampedWidth;
      setWidth(clampedWidth);
    };

    const onMouseUp = () => {
      stopResize();
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    cleanupRef.current = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  };

  const renderLeftSidebar = () => {
    switch (activeNav) {
      case 'servers':
        return (
          <>
            <LeftBarTitle name="HCI Test Server" />
            <ChannelList selectedChannel={selectedChannel} onChannelSelect={onChannelSelect} />
          </>
        );
      case 'private':
        return (
          <>
            <LeftBarTitle name="Direct Messages" hasAddNew />
            <PrivateChatList />
          </>
        );
      case 'groups':
        return (
          <>
            <LeftBarTitle name="Group Chats" hasAddNew />
            <div>Group Chats stuff goes here</div>
          </>
        );
      default:
        return null;
    }
  }

  return (
    <LeftSidebarStyled ref={sidebarRef} $width={width}>
      <Friends />
      {renderLeftSidebar()}
      <ResizeHandle onMouseDown={handleResizeStart} role="separator" aria-label="Resize left sidebar" />
    </LeftSidebarStyled>
  );
};

export default LeftSidebar;
