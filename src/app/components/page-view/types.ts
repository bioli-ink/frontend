import { UserInfo } from '@/app/types/my';
import { UserModuleDividerProps } from '@/app/types/my/module/divider';
import { UserModuleImageProps } from '@/app/types/my/module/image';
import { UserModuleTextProps } from '@/app/types/my/module/text';
import { UserModuleTextCopyProps } from '@/app/types/my/module/text-copy';
import { UserModuleUrlProps } from '@/app/types/my/module/url';

export interface PageViewProps extends UserInfo {
  className?: string;

  /**
   * 组件当前所在的场景
   * simulator - 模拟器
   * page - 页面
   */
  scene?: 'simulator' | 'page';
}

// 定义组件对象中value的联合类型
export type ModuleComponents =
  React.FC<UserModuleUrlProps> |
  React.FC<UserModuleDividerProps> |
  React.FC<UserModuleTextCopyProps> |
  React.FC<UserModuleImageProps> |
  React.FC<UserModuleTextProps>;
