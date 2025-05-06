import { FileType } from '@/app/types/my';

export interface DragAndDropProps {
  type?: FileType;
  multiple?: boolean;
  accept?: string;
  className?: string;
  onFileUpdate?: (files: File[]) => void;
}