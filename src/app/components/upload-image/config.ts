import { PixelCrop } from 'react-image-crop';

import { UploadImageStatus } from './types';

export const DEFAULT_COMPLETED_CROP: PixelCrop = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  unit: 'px',
};

export const BTN_CONFIRM_TEXT: Record<UploadImageStatus, string> = {
  [UploadImageStatus.SELECT]: '',
  [UploadImageStatus.CROP]: '裁剪',
  [UploadImageStatus.UPLOAD]: '上传',
};

// 图片可展示的最大宽高
export const IMG_MAX_SIZE = 500;
