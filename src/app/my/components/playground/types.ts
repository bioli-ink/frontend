import { DividerProps } from './components/modules-factory/divider/types';
import { ImageProps } from './components/modules-factory/image/types';
import { TextProps } from './components/modules-factory/text/types';
import { TextCopyProps } from './components/modules-factory/text-copy/types';
import { URLProps } from './components/modules-factory/url/types';

// 定义组件对象中value的联合类型
export type ModuleComponents =
  React.ComponentType<URLProps> |
  React.ComponentType<DividerProps> |
  React.ComponentType<TextCopyProps> |
  React.ComponentType<ImageProps> |
  React.ComponentType<TextProps>;
