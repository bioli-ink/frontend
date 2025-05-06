import { ModuleType } from '@/app/types/my/module';

export const MODULE_LIST = [
  {
    key: 'url',
    type: ModuleType.URL,
    title: '链接',
    description: '打开指定的网页，如官网、公众号、博客等',
    icon: 'url',
  },
  {
    key: 'divider',
    type: ModuleType.DIVIDER,
    title: '分割线',
    description: '用线段对内容分组',
    icon: 'divider',
  },
  {
    key: 'text-copy',
    type: ModuleType.TEXT_COPY,
    title: '文本复制',
    description: '给复杂的文本信息提供复制功能',
    icon: 'copy',
  },
  // {
  //   key: 'qr-code',
  //   type: ModuleType.QR_CODE,
  //   title: '二维码',
  //   description: '弹窗展示二维码，更方便地打开小程序、微信群等',
  //   icon: 'qrcode',
  // },
  {
    key: 'image',
    type: ModuleType.IMAGE,
    title: '图片',
    description: '展示一张上传的图片，可设置跳转链接',
    icon: 'image'
  },
  {
    key: 'text',
    type: ModuleType.TEXT,
    title: '文字',
    description: '使用纯文本讲述你的故事',
    icon: 'text'
  }
];
