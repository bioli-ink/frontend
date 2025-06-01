import { PLATFORM_RULES } from '@/app/constant/list/social-links/rules';
import { SocialLink, SocialLinkType } from '@/app/types/my';
import { SocialPlatform } from '@/app/types/my/social-links/platform'

export const getDefaultPlatform = (key: SocialPlatform): SocialLink => {
  return {
    key: '',
    id: key,
    icon: key,
    isDraft: false,
    link: '',
    type: PLATFORM_RULES[key]?.type || SocialLinkType.URL,
  }
};
