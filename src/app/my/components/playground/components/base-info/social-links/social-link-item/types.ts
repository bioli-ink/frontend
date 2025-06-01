import { SocialLink } from '@/app/types/my';

export interface SocialLinkItemProps extends Omit<SocialLink, 'key'> {
  index: number;
  allowSort: boolean;
  // onDraftChange?: (value: boolean) => void;
}
