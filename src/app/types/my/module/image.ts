import { UserModuleBase } from '.';

export interface UserModuleImageProps {
  /**
   * 图片链接
   */
  src: string;

  /**
   * 图片描述，暂时不用
   */
  alt?: string;

  /**
   * 图片点击的跳转链接
   */
  href: string;

  /**
   * 图片标题，外显展示
   */
  title: string;

  /**
   * 自定义图片描述文案，外显展示
   */
  description: string;

  /**
   * 自定义图片标签，外显展示
   */
  label: string;
}

export interface UserModuleImage extends UserModuleBase, UserModuleImageProps {}