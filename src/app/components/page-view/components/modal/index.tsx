'use client';

import { Button } from '@heroui/button';
import { Modal as ModalComponent, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@heroui/modal';
import { SlotsToClasses } from '@heroui/theme';
import { useRef, useState } from 'react';

import { EVENTS } from '@/app/constant/events';
import { useEventListener } from '@/app/hooks/use-event-listener';

import { FooterConfig, UpdateModalProps } from './types';

export default function Modal(props?: { rounded?: boolean }) {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  const [localHeader, setLocalHeader] = useState<React.ReactNode>(null);
  const [localBody, setLocalBody] = useState<React.ReactNode>(null);
  const [localFooterConfig, setLocalFooterConfig] = useState<FooterConfig>({
    show: false,
  });
  const [customCls,  setCustomCls] = useState<SlotsToClasses<'body' | 'header' | 'footer' | 'backdrop' | 'base' | 'closeButton' | 'wrapper'> | undefined>({});
  const [localBackdrop, setLocalBackdrop] = useState<'opaque' | 'blur' | 'transparent'>('blur');

  const ref = useRef<Element>(null);
  const styleRounded = props?.rounded ? 'rounded-[2.5em]' : '';

  const updateModal = ({
    show,
    body,
    header,
    footerConfig = { show: false },
    classNames = {},
    backdrop = 'blur',
  }: UpdateModalProps) => {
    if (show) {
      // @ts-expect-error 取 DOM 节点
      ref.current = document.querySelector('#preview') || document.body;

      setLocalBody(body);
      setLocalHeader(header);
      setLocalFooterConfig(footerConfig);
      setCustomCls(classNames);
      setLocalBackdrop(backdrop);
      onOpen();
    } else {
      onClose();
    }
  }

  useEventListener(EVENTS.UPDATE_PAGE_PREVIEW_MODAL, updateModal);

  const onConfirmHandler = () => {
    localFooterConfig.onConfirm?.();
  };

  const onCancelHandler = () => {
    localFooterConfig.onCancel?.();
  };

  if (!isOpen || !ref.current) return null;

  return (
    <ModalComponent
      hideCloseButton
      isOpen={isOpen}
      backdrop={localBackdrop}
      placement='center'
      portalContainer={ref.current}
      classNames={{
        ...customCls,
        backdrop: `${styleRounded} ${customCls?.backdrop || ''}`,
        wrapper: `${styleRounded} ${customCls?.wrapper || ''}`,
        base: `${customCls?.base || ''}`
      }}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {
          localHeader ? (
            <ModalHeader>{localHeader}</ModalHeader>
          ) : null
        }

        {localBody}

        {
          localFooterConfig.show ? (
            <ModalFooter>
              <Button color='default' variant='ghost' size='sm' onClick={onCancelHandler}>
                {localFooterConfig.cancelText || '取消'}
              </Button>
              <Button color='primary' size='sm' onClick={onConfirmHandler} className='btn-main-color'>
                 {localFooterConfig.confirmText || '确定'}
              </Button>
            </ModalFooter>
          ) : null
        }
      </ModalContent>
    </ModalComponent>
  )
}
