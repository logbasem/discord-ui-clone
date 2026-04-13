import React, { useState } from 'react';
import avatar from '~/assets/img/avatar.jpg';
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
} from './styles';

const Navigation: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('channels');
  const [hasNotifications, setHasNotifications] = useState(true);

  const navItems = [
    { id: 'channels', label: 'Channels' },
    { id: 'discover', label: 'Discover' },
    { id: 'friends', label: 'Friends' },
  ];

  return (
    <NavigationStyled>
      {/* Left: Notification Button */}
      <LeftSection>
        <NotificationButton onClick={() => setHasNotifications(false)} title="Notifications">
          <NotificationIcon>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
          </NotificationIcon>
          {hasNotifications && <NotificationBadge>3</NotificationBadge>}
        </NotificationButton>
      </LeftSection>

      {/* Center: 3 Nav Buttons */}
      <CenterSection>
        {navItems.map((item) => (
          <NavButton
            key={item.id}
            $active={activeNav === item.id}
            onClick={() => setActiveNav(item.id)}
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
