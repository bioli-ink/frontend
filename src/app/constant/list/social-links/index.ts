import { getDefaultPlatform } from '@/app/my/utils/platform';
import { SocialLink } from '@/app/types/my';
import { SocialPlatform } from '@/app/types/my/social-links/platform';

import { PLATFORM_RULES } from './rules';

export const LIST_SOCIAL_LINKS: SocialLink[] = [
  getDefaultPlatform(SocialPlatform.ALI_PAY),
  getDefaultPlatform(SocialPlatform.ALI_WANG_WANG),
  getDefaultPlatform(SocialPlatform.AMAZON),
  getDefaultPlatform(SocialPlatform.APPLE_APP_STORE),
  getDefaultPlatform(SocialPlatform.APPLE_MUSIC),
  getDefaultPlatform(SocialPlatform.APPLE_PODCASTS),
  getDefaultPlatform(SocialPlatform.ART_STATION),
  getDefaultPlatform(SocialPlatform.BAI_HE),
  getDefaultPlatform(SocialPlatform.BANDCAMP),
  getDefaultPlatform(SocialPlatform.BAO_BAO_SHU),
  getDefaultPlatform(SocialPlatform.BEHANCE),
  getDefaultPlatform(SocialPlatform.BILI_BILI),
  getDefaultPlatform(SocialPlatform.BLUE_SKY),
  getDefaultPlatform(SocialPlatform.BOSS),
  getDefaultPlatform(SocialPlatform.CAMEO),
  getDefaultPlatform(SocialPlatform.CLUB_HOUSE),
  getDefaultPlatform(SocialPlatform.DING_TALK),
  getDefaultPlatform(SocialPlatform.DISCORD),
  getDefaultPlatform(SocialPlatform.DOU_BAN),
  getDefaultPlatform(SocialPlatform.TIKTOK),
  getDefaultPlatform(SocialPlatform.DRIBBLE),
  getDefaultPlatform(SocialPlatform.DROPBOX),
  getDefaultPlatform(SocialPlatform.DUO_LIN_GUO),
  getDefaultPlatform(SocialPlatform.EMAIL),
  getDefaultPlatform(SocialPlatform.ESTY),
  getDefaultPlatform(SocialPlatform.FACEBOOK),
  getDefaultPlatform(SocialPlatform.FEI_SHU),
  getDefaultPlatform(SocialPlatform.GITHUB),
  getDefaultPlatform(SocialPlatform.GITLAB),
  getDefaultPlatform(SocialPlatform.GOOD_READS),
  getDefaultPlatform(SocialPlatform.GOOGLE_PLAY_STORE),
  getDefaultPlatform(SocialPlatform.GOOGLE_PODCAST),
  getDefaultPlatform(SocialPlatform.HU_PU),
  getDefaultPlatform(SocialPlatform.INSTAGRAM),
  getDefaultPlatform(SocialPlatform.JD),
  getDefaultPlatform(SocialPlatform.SHI_JI_JIA_YUAN),
  getDefaultPlatform(SocialPlatform.JUE_JIN),
  getDefaultPlatform(SocialPlatform.KICK),
  getDefaultPlatform(SocialPlatform.KUAI_SHOU),
  getDefaultPlatform(SocialPlatform.LA_GOU),
  getDefaultPlatform(SocialPlatform.LAST_FM),
  getDefaultPlatform(SocialPlatform.LINKED_IN),
  getDefaultPlatform(SocialPlatform.LOFTER),
  getDefaultPlatform(SocialPlatform.MA_FENG_WO),
  getDefaultPlatform(SocialPlatform.MAI_MAI),
  getDefaultPlatform(SocialPlatform.MASTONDON),
  getDefaultPlatform(SocialPlatform.MEDIUM),
  getDefaultPlatform(SocialPlatform.MEET_UP),
  getDefaultPlatform(SocialPlatform.MO_MO),
  getDefaultPlatform(SocialPlatform.ONLY_FANS),
  getDefaultPlatform(SocialPlatform.PATREON),
  getDefaultPlatform(SocialPlatform.PDD),
  getDefaultPlatform(SocialPlatform.PHONE),
  getDefaultPlatform(SocialPlatform.PINTREST),
  getDefaultPlatform(SocialPlatform.POSH_MARK),
  getDefaultPlatform(SocialPlatform.QIN_BAO_BAO),
  getDefaultPlatform(SocialPlatform.QQ),
  getDefaultPlatform(SocialPlatform.REDDIT),
  getDefaultPlatform(SocialPlatform.SIGNAL),
  getDefaultPlatform(SocialPlatform.SKYPE),
  getDefaultPlatform(SocialPlatform.SLACK),
  getDefaultPlatform(SocialPlatform.SNAPCHAT),
  getDefaultPlatform(SocialPlatform.SOUL),
  getDefaultPlatform(SocialPlatform.SOUND_CLOUD),
  getDefaultPlatform(SocialPlatform.SPOTIFY),
  getDefaultPlatform(SocialPlatform.SUBSTACK),
  getDefaultPlatform(SocialPlatform.TANG_DOU),
  getDefaultPlatform(SocialPlatform.TAN_TAN),
  getDefaultPlatform(SocialPlatform.TAO_BAO),
  getDefaultPlatform(SocialPlatform.TELEGRAM),
  getDefaultPlatform(SocialPlatform.THREADS),
  getDefaultPlatform(SocialPlatform.TIKTOK),
  getDefaultPlatform(SocialPlatform.TUMBLR),
  getDefaultPlatform(SocialPlatform.TWITCH),
  getDefaultPlatform(SocialPlatform.UNSPLASH),
  getDefaultPlatform(SocialPlatform.VENMO),
  getDefaultPlatform(SocialPlatform.VIMEO),
  getDefaultPlatform(SocialPlatform.WE_COM),
  getDefaultPlatform(SocialPlatform.WEBSITE),
  getDefaultPlatform(SocialPlatform.WECHAT),
  getDefaultPlatform(SocialPlatform.WEI_BO),
  getDefaultPlatform(SocialPlatform.WHATSAPP),
  getDefaultPlatform(SocialPlatform.X),
  getDefaultPlatform(SocialPlatform.XIAN_YU),
  getDefaultPlatform(SocialPlatform.XIAO_HONG_SHU),
  getDefaultPlatform(SocialPlatform.XUE_QIU),
  getDefaultPlatform(SocialPlatform.YOUTUBE),
  getDefaultPlatform(SocialPlatform.ZHI_HU),
].filter(item => PLATFORM_RULES[item.id]);

// 列表处理了置顶项
export const PLATFORM_LIST_WITH_PRIORITY = LIST_SOCIAL_LINKS.sort((prev, next) => {
  const prevIsTop = PLATFORM_RULES[prev.id]?.isTop;
  const nextIsTop = PLATFORM_RULES[next.id]?.isTop;

  if (prevIsTop && !nextIsTop) {
    return -1;
  }

  if (!prevIsTop && nextIsTop) {
    return 1;
  }

  return 0;
});
