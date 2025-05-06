import { UserModuleDivider } from './divider';
import { UserModuleImage } from './image';
import { UserModuleText } from './text';
import { UserModuleTextCopy } from './text-copy';
import { UserModuleUrl } from './url';

export enum ModuleType {
  URL = 'url',
  IMAGE = 'image',
  DIVIDER = 'divider',
  TEXT_COPY = 'text-copy',
  // QR_CODE = 'qr-code',
  TEXT = 'text'
}

export enum ModuleStatus {
  PUBLISHED = 1, // 正常展示
  DRAFT, // 添加了但不展示
  DELETED, // 已删除，支持后续可以恢复
}

export interface UserModuleBase {
  id: string;
  type: ModuleType;
  status: ModuleStatus;
}

export type UserModule =
  UserModuleUrl &
  UserModuleDivider &
  UserModuleTextCopy;

type GetUserModule<T> = () => T;

export type ModuleFactoryProps = 
  GetUserModule<UserModuleUrl> |
  GetUserModule<UserModuleDivider> |
  GetUserModule<UserModuleImage> |
  GetUserModule<UserModuleTextCopy> |
  GetUserModule<UserModuleText>;
