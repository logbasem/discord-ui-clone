import React, { useMemo, useState } from 'react';
import { Close } from 'styled-icons/material';
import { mockUsers, MockUser } from '../../data/mockUsers';
import { addGroupChat, getGroupColor, getGroupInitials } from '../../data/groupChats';
import {
  Overlay,
  ModalCard,
  Header,
  Title,
  CloseButton,
  Label,
  Input,
  Muted,
  Section,
  SearchWrap,
  SearchDropdown,
  ResultRow,
  Avatar,
  ResultMeta,
  Name,
  Pronouns,
  Chips,
  Chip,
  ChipRemove,
  Footer,
  Buttons,
  CancelButton,
  CreateButton,
} from './styles';

interface CreateGroupModalProps {
  onClose: () => void;
  onCreated: (groupId: string) => void;
}

const CreateGroupModal: React.FC<CreateGroupModalProps> = ({ onClose, onCreated }) => {
  const [groupName, setGroupName] = useState('');
  const [memberSearch, setMemberSearch] = useState('');
  const [selectedMembers, setSelectedMembers] = useState<MockUser[]>([]);

  const filteredUsers = useMemo(() => {
    const term = memberSearch.trim().toLowerCase();
    if (!term) return [];
    return mockUsers.filter(
      (user) =>
        !selectedMembers.some((selected) => selected.id === user.id) &&
        user.name.toLowerCase().includes(term)
    );
  }, [memberSearch, selectedMembers]);

  const canCreate = groupName.trim().length > 0 && selectedMembers.length >= 2;

  const handleCreate = () => {
    if (!canCreate) return;
    const created = addGroupChat(
      groupName.trim(),
      selectedMembers.map((user) => user.name)
    );
    onCreated(created.id);
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <ModalCard onClick={(event) => event.stopPropagation()}>
        <Header>
          <Title>Create a Group Chat</Title>
          <CloseButton type="button" aria-label="Close create group modal" onClick={onClose}>
            <Close size={18} />
          </CloseButton>
        </Header>

        <Section>
          <Label htmlFor="group-chat-name">Group Chat Name</Label>
          <Input
            id="group-chat-name"
            placeholder="Enter a group chat name..."
            maxLength={50}
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
          />
          <Muted>
            {groupName.length}
            /50
          </Muted>
        </Section>

        <Section>
          <Label htmlFor="group-member-search">Add Members</Label>
          <SearchWrap>
            <Input
              id="group-member-search"
              placeholder="Search for people..."
              value={memberSearch}
              onChange={(event) => setMemberSearch(event.target.value)}
            />
            {filteredUsers.length > 0 ? (
              <SearchDropdown>
                {filteredUsers.map((user) => (
                  <ResultRow
                    key={user.id}
                    type="button"
                    onClick={() => {
                      setSelectedMembers((prev) => [...prev, user]);
                      setMemberSearch('');
                    }}
                  >
                    <Avatar $bg={getGroupColor(user.name)}>{getGroupInitials(user.name)}</Avatar>
                    <ResultMeta>
                      <Name>{user.name}</Name>
                      <Pronouns>{user.pronouns}</Pronouns>
                    </ResultMeta>
                  </ResultRow>
                ))}
              </SearchDropdown>
            ) : null}
          </SearchWrap>

          <Chips>
            {selectedMembers.map((member) => (
              <Chip key={member.id} $bg={getGroupColor(member.name)}>
                <Avatar $bg={getGroupColor(member.name)}>{getGroupInitials(member.name)}</Avatar>
                <Name>{member.name}</Name>
                <ChipRemove
                  type="button"
                  aria-label={`Remove ${member.name}`}
                  onClick={() => setSelectedMembers((prev) => prev.filter((entry) => entry.id !== member.id))}
                >
                  ×
                </ChipRemove>
              </Chip>
            ))}
          </Chips>
        </Section>

        <Footer>
          <Muted>
            {selectedMembers.length}
            {' members selected'}
          </Muted>
          <Buttons>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
            <CreateButton type="button" $disabled={!canCreate} onClick={handleCreate}>
              Create Group
            </CreateButton>
          </Buttons>
        </Footer>
      </ModalCard>
    </Overlay>
  );
};

export default CreateGroupModal;
