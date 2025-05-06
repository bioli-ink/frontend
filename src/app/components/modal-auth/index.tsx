'use client';

import { Modal, ModalBody, ModalContent, useDisclosure } from '@heroui/modal';

import { EVENTS } from '@/app/constant/events';
import { useEventListener } from '@/app/hooks/use-event-listener';

import AuthForm from '../auth-form';

export default function ModalAuth() {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  const onUpdateModalAuth = ({
    show
  }: { show: boolean }) => {
    if (show) {
      onOpen();
    } else {
      onClose();
    }
  }

  useEventListener(EVENTS.UPDATE_MODAL_AUTH, onUpdateModalAuth);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop='blur'
      classNames={{
        backdrop: 'z-[100]',
        wrapper: 'z-[101]',
        body: 'py-[40px]'
      }}
    >
      <ModalContent>
        <ModalBody>
          <AuthForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
