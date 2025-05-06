import { PLATFORM_TEXT } from '@/app/constant/list/social-links/platform';

import { SocialPlatform } from './platform';

export type SocialLinkValues = typeof PLATFORM_TEXT[keyof typeof PLATFORM_TEXT];

export enum SocialLinkType {
  IMAGE = 'IMAGE',
  URL = 'URL',
  QR_CODE = 'QR_CODE',
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  COPY_TEXT = 'COPY_TEXT',
}

export interface SocialLink {
  key: string;
  id: SocialPlatform;
  icon: string;

  /**
   * 描述
   */
  description?: string;

  /**
   * 用户输入的链接/内容
   */
  link: string;

  isDraft?: boolean;

  /**
   * 类型，上传图片、链接
   */
  type: SocialLinkType;
}

/**
 * 各平台的静态参数
 */
export interface PlatformRules {
  /**
   * 是否置顶
   */
  isTop?: boolean;

  /**
   * 占位符内容
   */
  placeholder?: string;

  /**
   * 示例
   */
  example?: string;

  /**
   * 原站链接
   */
  source?: string;

  type?: SocialLinkType;

  /**
   * 自定义校验链接格式
   */
  validator?: (url: string) => boolean;
}
