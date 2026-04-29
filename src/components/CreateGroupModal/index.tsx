import React from 'react';

import { Overlay, ModalCard, Header, Title, CloseButton } from './styles';

export interface CreateGroupModalProps {
  onClose: () => void;
  onCreated: (groupId: string) => void;
}

const CreateGroupModal: React.FC<CreateGroupModalProps> = ({ onClose }) => (
  <Overlay
    role="presentation"
    onClick={(event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    }}
  >
    <ModalCard role="dialog" aria-labelledby="create-group-modal-title">
      <Header>
        <Title id="create-group-modal-title">Create group chat</Title>
        <CloseButton type="button" onClick={onClose}>
          Close
        </CloseButton>
      </Header>
    </ModalCard>
  </Overlay>
);

export default CreateGroupModal;
