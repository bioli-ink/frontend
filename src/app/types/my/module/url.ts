import { UserModuleBase } from '.';

export interface UserModuleUrlProps {
  title: string;
  url: string;
}

export interface UserModuleUrl extends UserModuleBase, UserModuleUrlProps {}
