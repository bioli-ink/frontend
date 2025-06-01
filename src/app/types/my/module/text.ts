import { UserModuleBase } from '.';

export interface UserModuleTextProps {
  content: string;
  align: 'left' | 'center' | 'right';
}

export interface UserModuleText extends UserModuleBase, UserModuleTextProps {}
