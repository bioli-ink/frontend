import { SocialLinkType } from '@/app/types/my';
import { SocialPlatform } from '@/app/types/my/social-links/platform';

type onActionType = ({ link, description }: { link: string; description: string }) => void;

export interface SocialLinkInputProps {
  id: SocialPlatform;
  defaultLink?: string;
  defaultDescription?: string;
  status?: 'create' | 'edit';
  type?: SocialLinkType;
  userId?: string;
  onAdd: onActionType;
  onEdit: onActionType;
}
