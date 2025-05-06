// 组件的状态
export enum UploadImageStatus {
  SELECT = 'select',
  CROP = 'crop',
  UPLOAD = 'upload',
}

export interface UploadImageProps {
  loading?: boolean;
  onUpload: (data: { name: string; base64: string; }) => void;
}
