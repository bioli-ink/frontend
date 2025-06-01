export interface DialogConfirmProps {
  title: string;
  content: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}
