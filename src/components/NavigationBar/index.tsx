import React, { useState, useRef, useEffect } from 'react';
import avatar from '~/assets/img/user4.jpg';
import avatar2 from '~/assets/img/user5.jpg';
import Code from '~/assets/svg/Code.svg';
import {
  NavigationStyled,
  LeftSection,
  CenterSection,
  RightSection,
  NavButton,
  NotificationButton,
  NotificationBadge,
  NotificationIcon,
  ProfileButton,
  ProfileAvatar,
  ProfileStatusDot,
  NotificationPopup,
  NotificationPopupHeader,
  NotificationPopupTitle,
  NotificationPopupContent,
  NotificationItem,
  NotificationItemIcon,
  NotificationItemText,
  NotificationItemTitle,
  NotificationItemTime,
  NotificationItemAvatar,
  NotificationItemServerIcon,
  NotificationItemServerImg,
  NotificationNewIndicator,
  NotificationEmpty,
} from './styles';

interface NavigationProps {
  activeNav: string;
  onChange: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeNav, onChange }) => {
  const [hasNotifications, setHasNotifications] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'servers', label: 'Servers' },
    { id: 'private', label: 'Private Messages' },
    { id: 'groups', label: 'Group Chats' },
  ];

  // Sample notifications data
  const notifications = [
    { id: 1, type: 'message', title: 'New private message from: thrishadugg', time: '2 min ago', avatar, isNew: true },
    { id: 2, type: 'mention', title: 'Lilith mentioned you in: Code', time: '15 min ago', serverName: 'Ronne Dev Server', isNew: true },
    { id: 3, type: 'friend', title: 'New Friend Request: logbasem', time: '1 hour ago', icon: '👤', avatar: avatar2, isNew: true },
    { id: 4, type: 'message', title: 'New private message from: logbasem', time: '3 hours ago', avatar: avatar2, isNew: false },
    { id: 5, type: 'mention', title: 'GoldDragon mentioned you in: General Chat', time: '5 hours ago', serverName: 'Ronne Dev Server', isNew: false },
    { id: 6, type: 'friend', title: 'New Friend Request: thrishadugg', time: '1 day ago', icon: '👤', avatar, isNew: false },
    { id: 7, type: 'message', title: 'New private message from: Lilith', time: '2 days ago', avatar, isNew: false }
  ];

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  const handleNotificationClick = () => {
    setShowPopup(!showPopup);
    if (!showPopup) {
      setHasNotifications(false);
    }
  };

  return (
    <NavigationStyled>
      {/* Left: Notification Button */}
      <LeftSection>
        <div style={{ position: 'relative' }} ref={popupRef}>
          <NotificationButton onClick={handleNotificationClick} title="Notifications">
            <NotificationIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
            </NotificationIcon>
            {hasNotifications && <NotificationBadge>3</NotificationBadge>}
          </NotificationButton>
          
          {showPopup && (
            <NotificationPopup>
              <NotificationPopupHeader>
                <NotificationPopupTitle>Notifications</NotificationPopupTitle>
              </NotificationPopupHeader>
              <NotificationPopupContent>
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <NotificationItem key={notification.id}>
                      {notification.isNew && <NotificationNewIndicator />}
                      {notification.type === 'friend' ? (
                        <NotificationItemIcon>{notification.icon}</NotificationItemIcon>
                      ) : (
                        <NotificationItemIcon>
                          {notification.type === 'message' ? '💬' : '@'}
                        </NotificationItemIcon>
                      )}
                      <NotificationItemText>
                        <NotificationItemTitle>{notification.title}</NotificationItemTitle>
                        <NotificationItemTime>{notification.time}</NotificationItemTime>
                      </NotificationItemText>
                      {notification.type === 'message' && notification.avatar && (
                        <NotificationItemAvatar src={notification.avatar} alt={notification.title} />
                      )}
                      {notification.type === 'friend' && notification.avatar && (
                        <NotificationItemAvatar src={notification.avatar} alt={notification.title} />
                      )}
                      {notification.type === 'mention' && (
                        <NotificationItemServerImg src={Code} alt={notification.serverName} />
                      )}
                    </NotificationItem>
                  ))
                ) : (
                  <NotificationEmpty>No new notifications</NotificationEmpty>
                )}
              </NotificationPopupContent>
            </NotificationPopup>
          )}
        </div>
      </LeftSection>

      {/* Center: 3 Nav Buttons */}
      <CenterSection>
        {navItems.map((item) => (
          <NavButton
            key={item.id}
            $active={activeNav === item.id}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </NavButton>
        ))}
      </CenterSection>

      {/* Right: Profile Button */}
      <RightSection>
        <ProfileButton title="Profile">
          <ProfileAvatar src={avatar} alt="Profile" />
          <ProfileStatusDot />
        </ProfileButton>
      </RightSection>
    </NavigationStyled>
  );
};

export default Navigation;
