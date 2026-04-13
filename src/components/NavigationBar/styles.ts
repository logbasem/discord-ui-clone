import styled from 'styled-components';

export const NavigationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  background-color: var(--primary);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
`;

export const CenterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex: 0 0 auto;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

/* ── Center Nav Buttons ── */
export const NavButton = styled.button<{ $active?: boolean }>`
  position: relative;
  padding: 5px 16px;
  border-radius: 20px;
  background-color: ${({ $active }) =>
    $active ? 'var(--quinary)' : 'transparent'};
  color: ${({ $active }) => ($active ? 'var(--white)' : 'var(--gray)')};
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? '600' : '500')};
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${({ $active }) =>
      $active ? 'var(--quinary)' : 'rgba(255,255,255,0.06)'};
    color: var(--white);
  }
`;

/* ── Notification Button ── */
export const NotificationButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 20px;
  background-color: transparent;
  color: var(--gray);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    color: var(--white);
  }
`;

export const NotificationIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  min-width: 14px;
  height: 14px;
  padding: 0 3px;
  border-radius: 7px;
  background-color: var(--notification);
  color: var(--white);
  font-size: 9px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  pointer-events: none;
`;

/* ── Profile Button ── */
export const ProfileButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const ProfileAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
`;

export const ProfileStatusDot = styled.span`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #3ba55c;
  border: 2px solid var(--primary);
`;

/* Legacy export kept for safety */
export const NavText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
  letter-spacing: 0.5px;
`;
