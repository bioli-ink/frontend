import { UserModule } from './module';
import { SocialLink } from './social-links';

export * from './social-links';

export enum FileType {
  FILE = 'file',
  IMAGE = 'image',
}

// 每个用户的全量类型
export interface UserInfo {
  avatar: string;
  username: string;
  bio: string;
  socialLinks: SocialLink[];
  userModules: UserModule[];
}
