import { ModalProps } from "@heroui/modal";

import { EVENTS } from '@/app/constant/events';

export interface ModalOperateProps {
  title?: string;
  body?: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
  confirmText?: string;
  cancelText?: string;
  backTo?: EVENTS;
  showCloseBtn?: boolean;
  modalContentClassName?: string;
  modalBodyClassName?: string;
  modalProps?: Partial<ModalProps>;
}
