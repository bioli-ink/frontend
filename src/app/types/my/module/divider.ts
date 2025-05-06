import { UserModuleBase } from '.';

// 分割线的样式，同 border-style
export enum DividerStyle {
  Solid = 'solid', // 实线
  Dashed = 'dashed', // 虚线
  Dotted = 'dotted' // 点线
}

// 分割线的长度
export enum DividerLength {
  Full = '100%',
  Middle = '75%',
  Short = '20%',
}

// 分割线文字的位置
export enum DividerTextPosition {
  None = 'none',
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export interface UserModuleDividerProps {
  dividerStyle: DividerStyle;
  dividerLength: DividerLength;
  dividerTextPosition: DividerTextPosition;
  dividerText: string;
}

export interface UserModuleDivider extends UserModuleBase, UserModuleDividerProps {}

