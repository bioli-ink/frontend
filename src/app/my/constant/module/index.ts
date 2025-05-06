import { ModuleType } from '@/app/types/my/module';

export const MODULE_TITLE_MAP: Record<ModuleType, string> = {
  [ModuleType.URL]: 'URL',
  [ModuleType.DIVIDER]: '分割线',
  [ModuleType.IMAGE]: '图片',
  // [ModuleType.QR_CODE]: '二维码',
  [ModuleType.TEXT]: '文字',
  [ModuleType.TEXT_COPY]: '文字复制',
};
