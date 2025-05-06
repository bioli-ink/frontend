import { ButtonProps } from "@heroui/button";

export interface FooterConfig {
  show: boolean;
  confirmText?: string;
  cancelText?: string;
  confirmConfig?: ButtonProps;
  cancelConfig?: ButtonProps;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface UpdateModalProps {
  show: boolean;
  body: React.ReactNode;
  header?: React.ReactNode;
  footerConfig?: FooterConfig;
  classNames?: object;
  backdrop?: 'opaque' | 'blur' | 'transparent';

  /**
   * 组件挂载后，提供给调用方的钩子函数
   */
  onMounted?: () => void;
}
