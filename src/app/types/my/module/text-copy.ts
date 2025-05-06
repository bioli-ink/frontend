import { UserModuleBase } from '.';

export interface UserModuleTextCopyProps {
  title: string;
  content: string;
}

export interface UserModuleTextCopy extends UserModuleBase, UserModuleTextCopyProps {}

