import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function ModalSuccess({ isOpen, onClose, children }: Props) {
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
              {children}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}