'use client';

import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalSuccess({ isOpen, onClose }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        body: 'p-8',
      }
      }
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader>
              Success!
            </ModalHeader>
            <ModalBody>
              You successfully logged in to our system.
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}