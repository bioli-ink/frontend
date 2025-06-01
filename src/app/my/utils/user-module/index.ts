import { nanoid } from 'nanoid';

import { ModuleFactoryProps, ModuleStatus, ModuleType, UserModuleBase } from '@/app/types/my/module';
import { DividerLength, DividerStyle, DividerTextPosition, UserModuleDivider } from '@/app/types/my/module/divider';
import { UserModuleImage } from '@/app/types/my/module/image';
import { UserModuleText } from '@/app/types/my/module/text';
import { UserModuleTextCopy } from '@/app/types/my/module/text-copy';
import { UserModuleUrl } from '@/app/types/my/module/url';

const getBaseConfig = (type: ModuleType): UserModuleBase => ({
  id: nanoid(8),
  status: ModuleStatus.PUBLISHED,
  type,
});

const getDefaultUrl = (): UserModuleUrl => ({
  ...getBaseConfig(ModuleType.URL),
  title: '我的链接',
  url: 'https://www.example.com',
});

const getDefaultDivider = (): UserModuleDivider => ({
  ...getBaseConfig(ModuleType.DIVIDER),
  dividerStyle: DividerStyle.Solid,
  dividerLength: DividerLength.Full,
  dividerTextPosition: DividerTextPosition.None,
  dividerText: '',
});

const getDefaultImage = (): UserModuleImage => ({
  ...getBaseConfig(ModuleType.IMAGE),
  src: '',
  alt: '',
  href: '',
  title: '',
  description: '',
  label: '',
});

// const getDefaultQRCode = () => ({
//   ...getBaseConfig(ModuleType.QR_CODE),
// });

const getDefaultText = (): UserModuleText => ({
  ...getBaseConfig(ModuleType.TEXT),
  content: '',
  align: 'center',
});

const getDefaultTextCopy = (): UserModuleTextCopy => ({
  ...getBaseConfig(ModuleType.TEXT_COPY),
  title: '复制内容的标题',
  content: '这里是待复制的内容',
});


export const moduleFactory: Record<ModuleType, ModuleFactoryProps> = {
  [ModuleType.URL]: getDefaultUrl,
  [ModuleType.DIVIDER]: getDefaultDivider,
  [ModuleType.IMAGE]: getDefaultImage,
  // [ModuleType.QR_CODE]: getDefaultQRCode,
  [ModuleType.TEXT]: getDefaultText,
  [ModuleType.TEXT_COPY]: getDefaultTextCopy,
}
